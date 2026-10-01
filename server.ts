import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

const SESSION_FILE = path.join(__dirname, '.littlegarden_session.json');

interface StoredSession {
  cookieString: string;
  userEmail: string;
  lastSyncedAt: string;
  lastRecordCount: number;
}

// In-memory session store backed by file
let activeSession: StoredSession | null = null;

try {
  if (fs.existsSync(SESSION_FILE)) {
    const raw = fs.readFileSync(SESSION_FILE, 'utf-8');
    activeSession = JSON.parse(raw);
  }
} catch (e) {
  console.error('Failed to load stored session:', e);
}

function saveSession(session: StoredSession | null) {
  activeSession = session;
  try {
    if (session) {
      fs.writeFileSync(SESSION_FILE, JSON.stringify(session, null, 2), 'utf-8');
    } else if (fs.existsSync(SESSION_FILE)) {
      fs.unlinkSync(SESSION_FILE);
    }
  } catch (e) {
    console.error('Failed to persist session:', e);
  }
}

// Helper to extract cookies from Set-Cookie headers
function parseSetCookies(headers: Headers): { [key: string]: string } {
  const cookies: { [key: string]: string } = {};
  
  // Node 18+ Headers getSetCookie
  const getSetCookie = (headers as any).getSetCookie;
  let rawCookies: string[] = [];
  if (typeof getSetCookie === 'function') {
    rawCookies = getSetCookie.call(headers);
  } else {
    const single = headers.get('set-cookie');
    if (single) rawCookies = [single];
  }

  for (const cookieStr of rawCookies) {
    const parts = cookieStr.split(';')[0].split('=');
    if (parts.length >= 2) {
      const name = parts[0].trim();
      const value = parts.slice(1).join('=').trim();
      cookies[name] = value;
    }
  }
  return cookies;
}

function buildCookieHeader(cookieMap: { [key: string]: string }): string {
  return Object.entries(cookieMap)
    .map(([k, v]) => `${k}=${v}`)
    .join('; ');
}

// HTML Data Parser for Little Garden Table
function parseLittleGardenHtml(html: string) {
  const records: any[] = [];

  // Check 1: Inertia.js data-page attribute
  const inertiaMatch = html.match(/data-page="([^"]+)"/);
  if (inertiaMatch) {
    try {
      const decoded = inertiaMatch[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&');
      const pageData = JSON.parse(decoded);
      const props = pageData.props || {};
      const list = props.records || props.customers || props.data || props.items || [];
      if (Array.isArray(list) && list.length > 0) {
        list.forEach((item: any, idx: number) => {
          records.push({
            id: `auto-${item.id || idx + 1}`,
            stt: idx + 1,
            phone: item.phone || item.sdt || item.so_dien_thoai || '0900000000',
            fbName: item.name || item.customer_name || item.ten_khach || `Khách hàng ${idx + 1}`,
            service: item.service || item.dich_vu || 'Triệt nách (nữ)',
            staffName: item.staff || item.nhan_vien || item.sale || 'Nhân viên',
            status: (item.status || item.trang_thai || 'hẹn').toLowerCase().includes('đến') ? 'check_in' : 'hẹn',
            date: item.date || item.ngay || new Date().toISOString().slice(0, 10)
          });
        });
        if (records.length > 0) return records;
      }
    } catch (e) {
      console.warn('Could not parse Inertia data-page:', e);
    }
  }

  // Check 2: HTML Table Parsing (Standard <table> markup from Little Garden Airtable)
  let phoneColIdx = 1;
  let nameColIdx = 2;
  let serviceColIdx = 6;
  let statusColIdx = 9;
  let dateColIdx = 12;
  let staffColIdx = 18;

  const thMatches = [...html.matchAll(/<th[^>]*>([\s\S]*?)<\/th>/gi)].map(m => 
    m[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim().toLowerCase()
  );

  if (thMatches.length > 0) {
    const sdtIdx = thMatches.findIndex(t => t.includes('sđt') || t.includes('phone') || t.includes('điện thoại'));
    if (sdtIdx !== -1) phoneColIdx = sdtIdx;

    const nameIdx = thMatches.findIndex(t => t.includes('tên facebook') || t.includes('facebook') || t.includes('họ tên'));
    if (nameIdx !== -1) nameColIdx = nameIdx;

    const svcIdx = thMatches.findIndex(t => t.includes('dịch vụ chính') || t.includes('dịch vụ'));
    if (svcIdx !== -1) serviceColIdx = svcIdx;

    const stIdx = thMatches.findIndex(t => t.includes('tình trạng check in') || t.includes('check in') || t.includes('trạng thái'));
    if (stIdx !== -1) statusColIdx = stIdx;

    const dtIdx = thMatches.findIndex(t => t.includes('ngày đến') || t.includes('ngày hẹn') || t.includes('ngày nhận'));
    if (dtIdx !== -1) dateColIdx = dtIdx;

    const stfIdx = thMatches.findIndex(t => t.includes('nhân viên sale') || t.includes('sale') || t.includes('nhân viên'));
    if (stfIdx !== -1) staffColIdx = stfIdx;
  }

  const tbodyMatch = html.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/i);
  const targetHtml = tbodyMatch ? tbodyMatch[1] : html;

  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let match;
  let rowIndex = 0;

  while ((match = rowRegex.exec(targetHtml)) !== null) {
    const rowContent = match[1];
    if (rowContent.includes('<th')) continue; // Skip header rows

    const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;
    const cells: string[] = [];
    let cellMatch;
    while ((cellMatch = cellRegex.exec(rowContent)) !== null) {
      const text = cellMatch[1]
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .trim();
      cells.push(text);
    }

    if (cells.length >= 10) {
      rowIndex++;
      const staffName = cells[staffColIdx] || 'Chưa gán';
      const service = cells[serviceColIdx] || 'Triệt nách (nữ)';
      const statusRaw = (cells[statusColIdx] || cells[8] || '').toLowerCase();
      
      let status: 'check_in' | 'hủy' | 'hẹn' = 'hẹn';
      if (statusRaw.includes('thành công') || statusRaw.includes('đến') || statusRaw.includes('check') || statusRaw.includes('ci')) {
        status = 'check_in';
      } else if (statusRaw.includes('rớt') || statusRaw.includes('hủy') || statusRaw.includes('bùng')) {
        status = 'hủy';
      }

      records.push({
        id: `lg-${Date.now()}-${rowIndex}`,
        stt: rowIndex,
        phone: cells[phoneColIdx] || '—',
        fbName: cells[nameColIdx] || cells[3] || `Khách ${rowIndex}`,
        service,
        staffName,
        status,
        date: cells[dateColIdx] || new Date().toISOString().slice(0, 10)
      });
    }
  }

  return records;
}

// Function to fetch data from Little Garden with authentication
async function fetchWithSession(cookieString: string, filterUser = '724', sheetId = '28') {
  const targetUrl = `https://airtable.littlegardenspa.vn/?filter_user=${filterUser}&sheet_id=${sheetId}`;
  
  const res = await fetch(targetUrl, {
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
      'Accept-Language': 'vi,en-US;q=0.9,en;q=0.8',
      'Cookie': cookieString,
      'Referer': 'https://airtable.littlegardenspa.vn/login'
    },
    redirect: 'manual'
  });

  // If redirect to login, session has expired
  if (res.status === 302 || res.status === 301) {
    const loc = res.headers.get('location') || '';
    if (loc.includes('login')) {
      throw new Error('SESSION_EXPIRED');
    }
  }

  const html = await res.text();
  if (html.includes('action="https://airtable.littlegardenspa.vn/login"') && !html.includes('<table')) {
    throw new Error('SESSION_EXPIRED');
  }

  return parseLittleGardenHtml(html);
}

// === API ROUTES ===

// 1. Status of Little Garden connection
app.get('/api/littlegarden/status', (_req: Request, res: Response) => {
  if (!activeSession) {
    return res.json({
      isConnected: false,
      userEmail: null,
      lastSyncedAt: null,
      lastRecordCount: 0
    });
  }

  return res.json({
    isConnected: true,
    userEmail: activeSession.userEmail,
    lastSyncedAt: activeSession.lastSyncedAt,
    lastRecordCount: activeSession.lastRecordCount
  });
});

// 2. Direct Login to Little Garden
app.post('/api/littlegarden/login', async (req: Request, res: Response) => {
  const { email, password, remember = true } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Vui lòng nhập Email và Mật khẩu!' });
  }

  try {
    // Step 1: GET login page to obtain initial CSRF token and session cookies
    const loginPageRes = await fetch('https://airtable.littlegardenspa.vn/login', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
      }
    });

    const initialCookies = parseSetCookies(loginPageRes.headers);
    const loginHtml = await loginPageRes.text();

    const csrfMatch = loginHtml.match(/name="_token"\s+value="([^"]+)"/) || 
                      loginHtml.match(/meta\s+name="csrf-token"\s+content="([^"]+)"/);
    if (!csrfMatch) {
      return res.status(500).json({ success: false, message: 'Không thể trích xuất mã CSRF token từ trang đăng nhập Little Garden.' });
    }
    const csrfToken = csrfMatch[1];

    // Step 2: POST credentials to Little Garden
    const params = new URLSearchParams();
    params.append('_token', csrfToken);
    params.append('email', email);
    params.append('password', password);
    if (remember) {
      params.append('remember', 'on');
    }

    const postCookies = { ...initialCookies };

    const postRes = await fetch('https://airtable.littlegardenspa.vn/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'Cookie': buildCookieHeader(postCookies),
        'Referer': 'https://airtable.littlegardenspa.vn/login',
        'Origin': 'https://airtable.littlegardenspa.vn'
      },
      body: params.toString(),
      redirect: 'manual'
    });

    const authCookies = parseSetCookies(postRes.headers);
    const mergedCookies = { ...initialCookies, ...authCookies };
    const finalCookieString = buildCookieHeader(mergedCookies);

    // If login returned 302 or redirected to home, login succeeded!
    const location = postRes.headers.get('location') || '';
    const isSuccessRedirect = (postRes.status === 302 || postRes.status === 301) && !location.includes('/login');

    if (!isSuccessRedirect) {
      const responseBody = await postRes.text();
      if (responseBody.includes('These credentials do not match our records') || responseBody.includes('Thông tin đăng nhập không chính xác')) {
        return res.status(401).json({
          success: false,
          message: 'Email hoặc mật khẩu không chính xác trên hệ thống Little Garden Spa.'
        });
      }
    }

    // Step 3: Test fetching data immediately
    const records = await fetchWithSession(finalCookieString, '724', '28');

    const nowStr = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const sessionObj: StoredSession = {
      cookieString: finalCookieString,
      userEmail: email,
      lastSyncedAt: nowStr,
      lastRecordCount: records.length
    };
    saveSession(sessionObj);

    return res.json({
      success: true,
      message: `Đăng nhập thành công! Đã tự động kết nối và lấy ${records.length} khách hàng mới nhất.`,
      count: records.length,
      records,
      lastSyncedAt: nowStr
    });

  } catch (error: any) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Lỗi kết nối tới máy chủ Little Garden Spa.'
    });
  }
});

// 3. Set Cookie directly (For users who prefer pasting their session cookie)
app.post('/api/littlegarden/set-cookie', async (req: Request, res: Response) => {
  const { cookie, email = 'user@littlegardenspa.vn' } = req.body;

  if (!cookie || typeof cookie !== 'string' || !cookie.trim()) {
    return res.status(400).json({ success: false, message: 'Vui lòng cung cấp chuỗi Cookie!' });
  }

  const cleanCookie = cookie.trim();

  try {
    const records = await fetchWithSession(cleanCookie, '724', '28');
    const nowStr = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    const sessionObj: StoredSession = {
      cookieString: cleanCookie,
      userEmail: email,
      lastSyncedAt: nowStr,
      lastRecordCount: records.length
    };
    saveSession(sessionObj);

    return res.json({
      success: true,
      message: `Đã xác thực cookie thành công! Lấy được ${records.length} khách hàng.`,
      count: records.length,
      records,
      lastSyncedAt: nowStr
    });
  } catch (e: any) {
    if (e.message === 'SESSION_EXPIRED') {
      return res.status(401).json({ success: false, message: 'Mã cookie không hợp lệ hoặc đã hết hạn.' });
    }
    return res.status(500).json({ success: false, message: 'Lỗi khi kiểm tra cookie: ' + e.message });
  }
});

// 4. Manual or Periodic Sync
app.post('/api/littlegarden/sync', async (_req: Request, res: Response) => {
  if (!activeSession || !activeSession.cookieString) {
    return res.status(401).json({
      success: false,
      message: 'Chưa kết nối tài khoản Little Garden Spa. Vui lòng đăng nhập trước!'
    });
  }

  try {
    const records = await fetchWithSession(activeSession.cookieString, '724', '28');
    const nowStr = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    activeSession.lastSyncedAt = nowStr;
    activeSession.lastRecordCount = records.length;
    saveSession(activeSession);

    return res.json({
      success: true,
      count: records.length,
      records,
      lastSyncedAt: nowStr
    });
  } catch (e: any) {
    if (e.message === 'SESSION_EXPIRED') {
      saveSession(null);
      return res.status(401).json({
        success: false,
        isExpired: true,
        message: 'Phiên đăng nhập trên Little Garden đã hết hạn. Vui lòng đăng nhập lại!'
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Không thể đồng bộ: ' + e.message
    });
  }
});

// 5. Disconnect / Logout
app.post('/api/littlegarden/disconnect', (_req: Request, res: Response) => {
  saveSession(null);
  return res.json({ success: true, message: 'Đã ngắt kết nối tài khoản Little Garden.' });
});

// Start Server with Vite in Dev or Static in Production
async function startServer() {
  const PORT = Number(process.env.PORT) || 3000;

  if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    // In Dev Mode: Attach Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Spa Analytics & Little Garden Sync Server running on port ${PORT}`);
  });
}

startServer();
