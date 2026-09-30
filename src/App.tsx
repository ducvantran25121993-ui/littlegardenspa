/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Sparkles
} from 'lucide-react';
import { SpaDashboard } from './components/SpaDashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="w-full max-w-[99%] 2xl:max-w-[1920px] mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                    LITTLE GARDEN SPA
                  </h1>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Phễu Dịch Vụ
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Chuyên Gia Phân Tích Số Liệu & Công Cụ Trích Xuất Dữ Liệu Airtable
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area: Direct Dashboard */}
      <main className="flex-1 w-full max-w-[99%] 2xl:max-w-[1920px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
        <SpaDashboard />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="w-full max-w-[99%] 2xl:max-w-[1920px] mx-auto px-4">
          <p className="font-semibold text-slate-700">Hệ Thống Phân Tích Dữ Liệu Phễu Thẩm Mỹ Viện & Spa</p>
          <p className="mt-1 text-slate-400">
            Hỗ trợ kết nối & phân tích dữ liệu cho Little Garden Spa (Team Ngân - User 358 - Sheet 28)
          </p>
        </div>
      </footer>
    </div>
  );
}
