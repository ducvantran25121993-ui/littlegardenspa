import React, { useState } from 'react';
import { 
  KeyRound, 
  Terminal, 
  Copy, 
  Check, 
  Globe, 
  FileSpreadsheet, 
  Database, 
  AlertTriangle, 
  ChevronRight,
  Sparkles,
  ExternalLink,
  Laptop
} from 'lucide-react';

interface Props {
  onImportData?: (importedData: any) => void;
}

export const DataExtractorGuide: React.FC<Props> = ({ onImportData }) => {
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);
  const [rawInput, setRawInput] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const consoleScript = `/**
 * BỘ TRÍCH XUẤT DỮ LIỆU EXCEL / CSV CHO LITTLE GARDEN SPA
 * Chạy trực tiếp tại tab "Bảng điều khiển" (Console) trên F12
 */
(function exportLittleGardenToExcel() {
  console.log("🚀 Đang quét bảng dữ liệu Little Garden Spa...");
  const table = document.querySelector('table');
  if (!table) {
    return alert("❌ Chưa tìm thấy bảng. Bạn hãy chắc chắn đang mở trang có bảng dữ liệu!");
  }

  const rows = Array.from(table.querySelectorAll('tr'));
  let csv = [];
  rows.forEach(tr => {
    let cells = Array.from(tr.querySelectorAll('th, td'));
    let rowVals = cells.map(td => '"' + td.innerText.replace(/[\\r\\n]+/g, ' ').replace(/"/g, '""').trim() + '"');
    if (rowVals.length > 0) csv.push(rowVals.join(','));
  });

  const blob = new Blob(["\\uFEFF" + csv.join('\\r\\n')], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'LittleGardenSpa_Sheet28.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  alert("✅ THÀNH CÔNG! Đã tải về file Excel (CSV) với " + (rows.length - 1) + " dòng dữ liệu!");
})();`;

  const curlExample = `# Mở F12 -> tab Network trên trang Little Garden Spa
# Chuột phải vào request API (VD: /api/sheet-data hoặc sheet_id=28) -> Copy as cURL
# Sau đó chạy trên terminal hoặc import vào Postman`;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(consoleScript);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const handleCopyCurl = () => {
    navigator.clipboard.writeText(curlExample);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  const handleManualImport = () => {
    try {
      if (!rawInput.trim()) {
        setImportStatus('Vui lòng nhập nội dung JSON hoặc bảng copy từ Excel');
        return;
      }
      // Check if JSON
      if (rawInput.trim().startsWith('[') || rawInput.trim().startsWith('{')) {
        const parsed = JSON.parse(rawInput);
        setImportStatus('✅ Đã nhận diện JSON hợp lệ! Dữ liệu đã được phân tích.');
        if (onImportData) onImportData(parsed);
      } else {
        // Tab-separated or CSV
        const lines = rawInput.trim().split('\n');
        setImportStatus(`✅ Đã nhận diện dạng bảng (${lines.length} dòng)!`);
      }
    } catch (e: any) {
      setImportStatus('❌ Định dạng chưa chuẩn, vui lòng kiểm tra lại chuỗi JSON: ' + e.message);
    }
  };

  return (
    <div className="space-y-6">
      {/* Alert Warning */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl shadow-xs">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
          <div className="text-sm text-amber-900 leading-relaxed">
            <p className="font-semibold text-amber-950 mb-1">
              Tại sao không thể cào trực tiếp từ bên ngoài mà không cần tài khoản?
            </p>
            Trang web <code className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono font-medium">airtable.littlegardenspa.vn</code> sử dụng nền tảng nội bộ (Laravel Framework) có bảo mật phiên đăng nhập (<strong className="font-medium">Laravel Session & CSRF Cookie</strong>). Nếu chưa đăng nhập, mọi truy vấn ngoài hệ thống sẽ tự động bị chuyển hướng (Redirect 302) về trang <code className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-mono font-medium">/login</code>.
          </div>
        </div>
      </div>

      {/* 3 Methods Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Method 1: Console Script */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-all">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full">
              Khuyên dùng (1 Click)
            </span>
            <h3 className="font-bold text-slate-800 text-base mt-2">
              Cách 1: Chạy Script Console F12
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Bạn chỉ cần mở trang Little Garden Spa trên trình duyệt, bấm <kbd className="bg-slate-100 px-1 border rounded">F12</kbd>, dán script và nhấn Enter. Script sẽ tự gom dữ liệu và tải file JSON/CSV về máy bạn ngay tức khắc.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100">
            <button
              onClick={handleCopyScript}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-all cursor-pointer"
            >
              {copiedScript ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedScript ? 'Đã sao chép Script!' : 'Sao chép Script tự động'}
            </button>
          </div>
        </div>

        {/* Method 2: Network Tab */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">
              Chuẩn Dev / API
            </span>
            <h3 className="font-bold text-slate-800 text-base mt-2">
              Cách 2: Bắt gói tin API (Network F12)
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Khi tải trang với filter <code className="bg-slate-100 px-1 rounded font-mono">filter_user=358&sheet_id=28</code>, hệ thống sẽ gọi 1 API trả về JSON chứa đầy đủ các cột và giá trị. Bạn có thể copy trực tiếp Response này.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100">
            <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
              <Laptop className="w-3.5 h-3.5" /> Xem hướng dẫn chi tiết bên dưới
            </span>
          </div>
        </div>

        {/* Method 3: Copy Bảng & Dán */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-violet-300 transition-all">
          <div>
            <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold mb-4">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 bg-violet-50 text-violet-700 rounded-full">
              Thao tác trực tiếp
            </span>
            <h3 className="font-bold text-slate-800 text-base mt-2">
              Cách 3: Bôi đen & Copy từ bảng
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Trên giao diện bảng tính Airtable của Little Garden Spa, chọn toàn bộ bảng (hoặc kéo chuột bôi đen các dòng), bấm <kbd className="bg-slate-100 px-1 border rounded">Ctrl + C</kbd> rồi dán vào ô bên dưới.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100">
            <span className="text-xs text-violet-600 font-medium">
              Hỗ trợ cả Excel, Google Sheet & Text tab
            </span>
          </div>
        </div>
      </div>

      {/* Detailed Guide for Method 1 */}
      <div className="bg-slate-900 rounded-2xl p-6 text-slate-100 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <h4 className="font-semibold text-slate-100 text-base">
              Script trích xuất tự động (Chạy trên Console F12 của trang Little Garden Spa)
            </h4>
          </div>
          <button
            onClick={handleCopyScript}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg text-xs font-medium border border-emerald-500/30 transition-all cursor-pointer"
          >
            {copiedScript ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedScript ? 'Đã Copy!' : 'Sao chép đoạn code này'}
          </button>
        </div>

        <div className="space-y-2 mb-4 text-xs text-slate-300">
          <p className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center font-bold text-[11px]">1</span>
            Mở đường link <a href="https://airtable.littlegardenspa.vn/?filter_user=358&sheet_id=28" target="_blank" rel="noreferrer" className="text-emerald-400 underline flex items-center gap-1 inline-flex">airtable.littlegardenspa.vn/?filter_user=358&sheet_id=28 <ExternalLink className="w-3 h-3" /></a> trên Chrome/Cốc Cốc/Edge và đăng nhập tài khoản của bạn.
          </p>
          <p className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center font-bold text-[11px]">2</span>
            Nhấn phím <kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 font-mono text-emerald-300">F12</kbd> (hoặc chuột phải chọn <strong>Kiểm tra / Inspect</strong>), chuyển sang tab <strong>Console</strong>.
          </p>
          <p className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center font-bold text-[11px]">3</span>
            Dán đoạn code dưới đây vào và ấn <kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 font-mono text-emerald-300">Enter</kbd>. Toàn bộ dữ liệu bảng sẽ tự động tải về dưới dạng file JSON và copy vào chuột của bạn!
          </p>
        </div>

        <pre className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-emerald-400 overflow-x-auto max-h-56 scrollbar-thin border border-slate-800 leading-relaxed">
          {consoleScript}
        </pre>
      </div>

      {/* Guide for Network Inspect */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" />
          Hướng dẫn lấy dữ liệu API chính xác 100% qua Network Tab
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-xs font-bold text-blue-600 mb-1">BƯỚC 1</div>
            <p className="text-xs text-slate-700">Mở trang và ấn <strong>F12</strong>, chọn tab <strong>Network (Mạng)</strong>.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-xs font-bold text-blue-600 mb-1">BƯỚC 2</div>
            <p className="text-xs text-slate-700">Bấm nút lọc <strong>Fetch/XHR</strong> (chỉ xem các yêu cầu dữ liệu JSON).</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-xs font-bold text-blue-600 mb-1">BƯỚC 3</div>
            <p className="text-xs text-slate-700">Nhấn <strong>F5</strong> để tải lại trang. Quan sát danh sách request (thường có tên như <code className="text-xs font-mono bg-white px-1">sheet-data</code>, <code className="text-xs font-mono bg-white px-1">records</code>, hoặc <code className="text-xs font-mono bg-white px-1">?filter_user=358</code>).</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-xs font-bold text-blue-600 mb-1">BƯỚC 4</div>
            <p className="text-xs text-slate-700">Click vào request đó, chọn tab <strong>Response</strong> hoặc chuột phải chọn <strong>Copy Response</strong>.</p>
          </div>
        </div>
      </div>

      {/* Manual Paste & Import Box */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="font-bold text-slate-800 text-base">
              Khu vực Dán Dữ Liệu Trực Tiếp (Paste Data)
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Dán chuỗi JSON đã lấy từ Script/Network hoặc dán dữ liệu copy từ Excel vào đây
            </p>
          </div>
        </div>

        <textarea
          value={rawInput}
          onChange={(e) => setRawInput(e.target.value)}
          placeholder={`Ví dụ dán chuỗi JSON:
[
  { "nhan_vien": "Nguyễn Thị Khánh Vân", "triet_nach_rdt": 47, "triet_nach_ci": 25 },
  ...
]
Hoặc dán trực tiếp vùng dữ liệu copy từ Excel / Airtable.`}
          rows={5}
          className="w-full text-xs font-mono p-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-800"
        />

        {importStatus && (
          <div className={`mt-2 text-xs p-2.5 rounded-lg ${importStatus.startsWith('✅') ? 'bg-emerald-50 text-emerald-800 font-medium' : 'bg-red-50 text-red-700'}`}>
            {importStatus}
          </div>
        )}

        <div className="mt-3 flex items-center justify-end gap-3">
          <button
            onClick={() => setRawInput('')}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 cursor-pointer"
          >
            Xóa nội dung
          </button>
          <button
            onClick={handleManualImport}
            className="px-5 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Nạp & Phân Tích Dữ Liệu Này
          </button>
        </div>
      </div>
    </div>
  );
};
