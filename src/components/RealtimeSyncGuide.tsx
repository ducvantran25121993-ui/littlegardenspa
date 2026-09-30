import React, { useState } from 'react';
import { 
  Radio, 
  Send, 
  Sheet, 
  BellRing, 
  Terminal, 
  Copy, 
  Check, 
  Layers, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Clock,
  Zap,
  Globe,
  Sliders,
  ExternalLink
} from 'lucide-react';

export const RealtimeSyncGuide: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState<'tampermonkey' | 'google_sheet' | 'it_api'>('tampermonkey');
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedAppScript, setCopiedAppScript] = useState(false);
  const [syncInterval, setSyncInterval] = useState('30');
  const [googleSheetWebhookUrl, setGoogleSheetWebhookUrl] = useState('');
  const [telegramBotToken, setTelegramBotToken] = useState('');
  const [telegramChatId, setTelegramChatId] = useState('');

  // Tampermonkey Userscript Code
  const tampermonkeyScript = `// ==UserScript==
// @name         Little Garden Spa - Realtime Data Syncer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Tự động bắt và đồng bộ dữ liệu Realtime khi nhân viên cập nhật
// @author       Team Ngân - Little Garden Spa
// @match        https://airtable.littlegardenspa.vn/*
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';

    console.log("🟢 [Little Garden Spa] Bộ giám sát Realtime đã khởi động!");

    let lastDataHash = "";
    const GOOGLE_SHEET_WEBHOOK = "${googleSheetWebhookUrl || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'}";

    function extractTableData() {
        const table = document.querySelector('table');
        if (!table) return [];
        
        const rows = Array.from(table.querySelectorAll('tr'));
        let data = [];
        
        rows.forEach(tr => {
            const cells = Array.from(tr.querySelectorAll('th, td'));
            const rowText = cells.map(c => c.innerText.replace(/[\\r\\n]+/g, ' ').trim());
            if (rowText.length > 0) data.push(rowText);
        });
        return data;
    }

    function checkAndSync() {
        const currentData = extractTableData();
        if (currentData.length === 0) return;

        const currentHash = JSON.stringify(currentData);
        
        // Nếu phát hiện nhân viên vừa cập nhật dòng mới hoặc sửa đổi
        if (lastDataHash !== "" && currentHash !== lastDataHash) {
            console.log("🔔 Phát hiện dữ liệu vừa được nhân viên cập nhật!");
            
            // Thông báo trên trình duyệt
            if (window.Notification && Notification.permission === "granted") {
                new Notification("Little Garden Spa", {
                    body: "Bảng dữ liệu vừa có thay đổi từ nhân viên!",
                    icon: "https://airtable.littlegardenspa.vn/favicon.ico"
                });
            }

            // Đồng bộ sang Google Sheet / Webhook nếu có cấu hình
            if (GOOGLE_SHEET_WEBHOOK && !GOOGLE_SHEET_WEBHOOK.includes("YOUR_SCRIPT_ID")) {
                GM_xmlhttpRequest({
                    method: "POST",
                    url: GOOGLE_SHEET_WEBHOOK,
                    headers: { "Content-Type": "application/json" },
                    data: JSON.stringify({
                        updatedAt: new Date().toISOString(),
                        totalRows: currentData.length,
                        data: currentData
                    }),
                    onload: function(res) {
                        console.log("✅ Đã đồng bộ sang Google Sheet thành công!");
                    }
                });
            }
        }
        
        lastDataHash = currentHash;
    }

    // Yêu cầu quyền thông báo
    if (window.Notification && Notification.permission !== "granted") {
        Notification.requestPermission();
    }

    // Tự động kiểm tra thay đổi mỗi ${syncInterval} giây
    setInterval(checkAndSync, ${parseInt(syncInterval) * 1000});

    // Theo dõi trực tiếp DOM (MutationObserver) ngay khi có thao tác gõ/click
    const targetNode = document.querySelector('table') || document.body;
    const observer = new MutationObserver(() => {
        checkAndSync();
    });
    observer.observe(targetNode, { childList: true, subtree: true, characterData: true });
})();`;

  // Google Apps Script code
  const googleAppsScript = `/**
 * CODE GOOGLE APPS SCRIPT ĐÓN DỮ LIỆU TỪ TRÌNH DUYỆT VÀO GOOGLE SHEET
 * 1. Mở Google Sheet mới -> Vào Tiện ích mở rộng (Extensions) -> Apps Script
 * 2. Dán đoạn code này vào -> Bấm "Triển khai" (Deploy) -> "Tùy chọn triển khai mới" (New deployment)
 * 3. Chọn loại: "Ứng dụng web" (Web app), quyền truy cập: "Bất kỳ ai" (Anyone)
 * 4. Copy URL ứng dụng web dán vào Script trên trình duyệt!
 */
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    var body = JSON.parse(e.postData.contents);
    var rows = body.data;

    if (rows && rows.length > 0) {
      sheet.clearContents(); // Cập nhật lại toàn bộ bảng mới nhất
      var range = sheet.getRange(1, 1, rows.length, rows[0].length);
      range.setValues(rows);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success", count: rows.length }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

  return (
    <div className="space-y-6">
      {/* Intro Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="p-1.5 rounded-lg bg-indigo-500/30 text-indigo-300">
            <Radio className="w-4 h-4 animate-pulse text-indigo-400" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
            Cơ Chế Đồng Bộ Tự Động (Auto Real-time Sync)
          </span>
        </div>
        <h2 className="text-2xl font-black tracking-tight">
          Làm Sao Để Lấy Dữ Liệu Real-time Khi Nhân Viên Cập Nhật?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Vì hệ thống của <strong>Little Garden Spa</strong> có đăng nhập bảo mật nội bộ và không mở cổng API công khai ra ngoài Internet, bạn có <strong>3 giải pháp thực tế nhất</strong> dưới đây tùy theo vai trò của bạn:
        </p>
      </div>

      {/* Tabs for Solutions */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveSolution('tampermonkey')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeSolution === 'tampermonkey'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Giải Pháp 1: Cài Extension Giám Sát Tự Động (Dễ Nhất - Khuyên Dùng)</span>
        </button>

        <button
          onClick={() => setActiveSolution('google_sheet')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeSolution === 'google_sheet'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Sheet className="w-4 h-4" />
          <span>Giải Pháp 2: Tự Động Bắn Vào Google Sheet Bằng Webhook</span>
        </button>

        <button
          onClick={() => setActiveSolution('it_api')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeSolution === 'it_api'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Giải Pháp 3: Liên Hệ IT Cấp API Token / Webhook Trực Tiếp</span>
        </button>
      </div>

      {/* Content for Solution 1: Tampermonkey Userscript */}
      {activeSolution === 'tampermonkey' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Không cần quyền Admin / IT công ty
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-2">
                  Nguyên lý hoạt động của Extension Tampermonkey
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  Bạn chỉ cần cài tiện ích mở rộng <strong>Tampermonkey</strong> (rất phổ biến và an toàn trên Chrome/Cốc Cốc). Khi bạn mở tab <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-indigo-600">airtable.littlegardenspa.vn</code> làm việc:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">1</div>
                <h4 className="font-bold text-slate-900 text-sm">Theo dõi thay đổi DOM</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Mỗi khi nhân viên gõ chữ, lưu hàng mới, hoặc click đổi trạng thái, script nhận biết ngay tức thì (MutationObserver).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">2</div>
                <h4 className="font-bold text-slate-900 text-sm">Bật thông báo ngay</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Hiện Pop-up thông báo trên góc màn hình máy tính của bạn: <em>"Bảng dữ liệu vừa có thay đổi từ nhân viên!"</em>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-2">3</div>
                <h4 className="font-bold text-slate-900 text-sm">Tự động đồng bộ</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Tự động chuyển tiếp toàn bộ dữ liệu mới nhất sang Google Sheet của bạn mà bạn không cần phải bấm gì cả!
                </p>
              </div>
            </div>

            {/* Step-by-step setup */}
            <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-indigo-400" />
                  <span className="font-bold text-sm text-white">Mã Script Tự Động Giám Sát Realtime (Tampermonkey)</span>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(tampermonkeyScript);
                    setCopiedScript(true);
                    setTimeout(() => setCopiedScript(false), 2000);
                  }}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedScript ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copiedScript ? 'Đã chép mã!' : 'Sao chép mã này'}
                </button>
              </div>

              <ol className="text-xs text-slate-300 space-y-2 mb-4">
                <li>1. Cài tiện ích <a href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo" target="_blank" rel="noreferrer" className="text-indigo-400 underline inline-flex items-center gap-1 font-medium">Tampermonkey trên Chrome Web Store <ExternalLink className="w-3 h-3" /></a>.</li>
                <li>2. Bấm vào icon con cóc Tampermonkey trên trình duyệt ➜ Chọn <strong>"Tạo tập lệnh mới" (Create a new script)</strong>.</li>
                <li>3. Xóa hết code mẫu có sẵn, <strong>dán toàn bộ đoạn mã bên dưới vào</strong> ➜ Nhấn <strong>Ctrl + S</strong> để lưu lại.</li>
                <li>4. Giờ bạn chỉ cần mở tab Little Garden Spa, nó sẽ tự động chạy ngầm giám sát!</li>
              </ol>

              <pre className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-emerald-400 overflow-x-auto max-h-64 scrollbar-thin border border-slate-800 leading-relaxed">
                {tampermonkeyScript}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Content for Solution 2: Google Sheets Webhook */}
      {activeSolution === 'google_sheet' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Sheet className="w-5 h-5 text-emerald-600" />
              Đồng Bộ Realtime Thẳng Vào 1 Bảng Google Sheets Của Riêng Bạn
            </h3>
            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              Bạn có thể tạo 1 file Google Sheets và gắn đoạn code nhận webhook dưới đây. Khi nhân viên cập nhật ở trang Little Garden Spa, script ở Giải Pháp 1 sẽ tự động gửi số liệu mới nhất vào thẳng Google Sheet của bạn trong vòng 1 giây!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-emerald-600">BƯỚC 1</span>
                <p className="text-xs text-slate-700 mt-1">Mở 1 file Google Sheets mới tinh.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-emerald-600">BƯỚC 2</span>
                <p className="text-xs text-slate-700 mt-1">Vào menu: <strong>Tiện ích mở rộng ➜ Apps Script</strong>.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-emerald-600">BƯỚC 3</span>
                <p className="text-xs text-slate-700 mt-1">Dán đoạn code dưới đây vào và bấm nút <strong>Lưu (Save)</strong>.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-emerald-600">BƯỚC 4</span>
                <p className="text-xs text-slate-700 mt-1">Bấm <strong>Triển khai (Deploy) ➜ Tùy chọn mới ➜ Ứng dụng web (Web app)</strong> với quyền "Bất kỳ ai (Anyone)".</p>
              </div>
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-xs text-emerald-400">Mã Google Apps Script (Nhận Dữ Liệu):</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(googleAppsScript);
                    setCopiedAppScript(true);
                    setTimeout(() => setCopiedAppScript(false), 2000);
                  }}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedAppScript ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copiedAppScript ? 'Đã sao chép!' : 'Sao chép Apps Script'}
                </button>
              </div>

              <pre className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-emerald-300 overflow-x-auto max-h-56 scrollbar-thin border border-slate-800 leading-relaxed">
                {googleAppsScript}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Content for Solution 3: IT Webhook API */}
      {activeSolution === 'it_api' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Phương Án Chính Thức: Đề Xuất IT Little Garden Spa Cấp Webhook
              </h3>
              <p className="text-xs text-slate-500">
                Nếu bạn là Quản lý chi nhánh / Leader hoặc có liên hệ với bộ phận kỹ thuật (IT) của công ty
              </p>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl text-xs text-blue-900 leading-relaxed space-y-2 mb-4">
            <p className="font-bold">Mẫu tin nhắn bạn có thể gửi cho IT công ty:</p>
            <div className="p-3 bg-white rounded-xl border border-blue-100 font-sans italic text-slate-700">
              "Chào bạn IT, hiện tại Team Ngân đang quản lý và tối ưu phễu khách hàng trên bảng <strong>Sheet ID: 28 (User: 358)</strong>. Để phục vụ việc theo dõi tỷ lệ chuyển đổi và nhắc hẹn cho nhân viên theo thời gian thực (Real-time), bên IT có thể hỗ trợ cấu hình 1 <strong>Webhook (hoặc cấp 1 API Token có quyền Read)</strong> mỗi khi có bản ghi mới được tạo hoặc cập nhật trạng thái thì tự động bắn dữ liệu qua Webhook URL của Team không? Cảm ơn bạn!"
            </div>
          </div>

          <div className="text-xs text-slate-600 space-y-2">
            <p><strong>Lợi ích khi IT hỗ trợ:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Bạn không cần phải bật máy tính hay mở tab trình duyệt để đồng bộ.</li>
              <li>Bất kỳ nhân viên nào cập nhật trên điện thoại hay máy tính công ty, dữ liệu cũng lập tức gửi về cho bạn 24/7.</li>
              <li>An toàn, chuẩn phân quyền doanh nghiệp và không lo bị đăng xuất phiên làm việc.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
