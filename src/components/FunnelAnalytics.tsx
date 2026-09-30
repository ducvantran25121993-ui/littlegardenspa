import React, { useState } from 'react';
import { 
  StaffPerformance, 
  ServiceMeta, 
  SERVICES_CONFIG, 
  INITIAL_STAFF_DATA, 
  TOTAL_REPORT 
} from '../data/teamData';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  Users, 
  Target, 
  Flame, 
  Award, 
  Filter,
  BarChart3,
  Calendar,
  DollarSign,
  ArrowRight,
  ShieldAlert,
  Zap,
  Check,
  ChevronDown
} from 'lucide-react';

export const FunnelAnalytics: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStaffId, setSelectedStaffId] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rate' | 'ci' | 'rdt'>('rate');

  // Calculate totals
  const totalRDT = Object.values(TOTAL_REPORT).reduce((sum, item) => sum + item.rdt, 0);
  const totalCI = Object.values(TOTAL_REPORT).reduce((sum, item) => sum + item.ci, 0);
  const totalDropOff = totalRDT - totalCI;
  const overallRate = totalRDT > 0 ? (totalCI / totalRDT) * 100 : 0;

  // Filter services
  const filteredServices = SERVICES_CONFIG.filter(svc => {
    if (selectedCategory === 'all') return true;
    return svc.category === selectedCategory;
  });

  // Calculate Staff Performance Rankings
  const staffRankings = INITIAL_STAFF_DATA.map(staff => {
    let sRdt = 0;
    let sCi = 0;
    Object.values(staff.services).forEach(m => {
      sRdt += m.rdt;
      sCi += m.ci;
    });
    const avgRate = sRdt > 0 ? (sCi / sRdt) * 100 : 0;
    return {
      ...staff,
      totalRdt: sRdt,
      totalCi: sCi,
      avgRate: avgRate
    };
  }).sort((a, b) => {
    if (sortBy === 'rate') return b.avgRate - a.avgRate;
    if (sortBy === 'ci') return b.totalCi - a.totalCi;
    return b.totalRdt - a.totalRdt;
  });

  return (
    <div className="space-y-8">
      {/* 1. Executive Summary & Verdict Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700/60 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="px-3 py-1 bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  ĐÁNH GIÁ CHUYÊN GIA: CHƯA ĐẠT (MỨC TRUNG BÌNH)
                </span>
                <span className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded-full flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Tuần 4 Tháng 9/2026 (22 - 28/09)
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                Báo Cáo Phễu Dịch Vụ & Tỷ Lệ Check-in — Team Ngân
              </h2>
              <p className="text-slate-300 text-sm mt-1 max-w-3xl">
                Phân tích chuyên sâu 1,078 Data hẹn (RDT) và 447 Khách đến thẩm mỹ viện (CI) của 11 nhân viên Sale Little Garden Spa.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700">
              <div className="text-right">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Tỷ lệ Chuyển Đổi Tổng</div>
                <div className="text-2xl font-black text-rose-400">41.47%</div>
              </div>
              <div className="h-10 w-px bg-slate-700 mx-2"></div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Tiêu Chuẩn Đạt</div>
                <div className="text-2xl font-black text-emerald-400">≥ 48.0%</div>
              </div>
            </div>
          </div>

          {/* Quick Metrics KPI cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 backdrop-blur-xs border border-slate-700/80 rounded-2xl p-4">
              <span className="text-xs font-semibold text-slate-400 block mb-1">Tổng Khách Hẹn (RDT)</span>
              <div className="text-2xl font-bold text-white flex items-baseline gap-2">
                {totalRDT.toLocaleString()} <span className="text-xs font-normal text-slate-400">khách</span>
              </div>
              <span className="text-[11px] text-blue-400 mt-1 inline-block">Nguồn data đổ về dồi dào</span>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xs border border-slate-700/80 rounded-2xl p-4">
              <span className="text-xs font-semibold text-slate-400 block mb-1">Tổng Khách Đến (CI)</span>
              <div className="text-2xl font-bold text-emerald-400 flex items-baseline gap-2">
                {totalCI.toLocaleString()} <span className="text-xs font-normal text-slate-400">khách</span>
              </div>
              <span className="text-[11px] text-emerald-300 mt-1 inline-block">41.5% tỷ lệ đến thực tế</span>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xs border border-rose-900/50 bg-rose-950/20 rounded-2xl p-4">
              <span className="text-xs font-semibold text-rose-300 block mb-1">Khách Rớt / Hủy Hẹn (Drop)</span>
              <div className="text-2xl font-bold text-rose-400 flex items-baseline gap-2">
                {totalDropOff.toLocaleString()} <span className="text-xs font-normal text-rose-300/70">khách</span>
              </div>
              <span className="text-[11px] text-rose-300 mt-1 inline-block">58.5% khách không đến</span>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xs border border-slate-700/80 rounded-2xl p-4">
              <span className="text-xs font-semibold text-slate-400 block mb-1">Ước Tính Ads Thất Thoát</span>
              <div className="text-2xl font-bold text-amber-300 flex items-baseline gap-2">
                ~44.1 <span className="text-xs font-normal text-slate-400">triệu VNĐ</span>
              </div>
              <span className="text-[11px] text-amber-400/90 mt-1 inline-block">Tính tb 70k/lead bị rớt</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Verdict Breakdown: ĐẠT HAY KHÔNG ĐẠT & YẾU KÉM CHỖ NÀO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kết luận chung */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-xl bg-rose-100 text-rose-700">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">1. ĐẠT HAY KHÔNG ĐẠT?</h3>
            </div>
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl mb-4">
              <div className="font-bold text-rose-800 text-sm flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                KẾT LUẬN: CHƯA ĐẠT CHUẨN HIỆU QUẢ PHỄU
              </div>
              <p className="text-xs text-rose-700 mt-1.5 leading-relaxed">
                Tỷ lệ CI toàn team đạt <strong>41.47%</strong>, dưới ngưỡng an toàn ngành thẩm mỹ (48-55%). Cứ 10 khách hẹn có tới <strong>gần 6 khách không đến</strong>.
              </p>
            </div>
            <ul className="text-xs text-slate-600 space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                <span><strong>Mảng Đạt:</strong> Tắm trắng (51.5%), Trị thâm nữ (54.1%), Mụn mặt (69.2%) chuyển đổi rất tốt.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span><strong>Mảng Rất Kém:</strong> Triệt Bikini nữ (34.2%) và Triệt Bikini nam (22.2%) bị rớt thê thảm, làm bốc hơi doanh thu upsell liệu trình.</span>
              </li>
            </ul>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500">
            💡 Tỷ lệ đến của phễu càng thấp, chi phí sở hữu 1 khách hàng (CAC) tại spa càng tăng gấp bội.
          </div>
        </div>

        {/* 2. Điểm Yếu Cốt Lõi */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">2. YẾU KÉM CHỖ NÀO?</h3>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-amber-50/70 border border-amber-200/70 rounded-xl">
                <div className="font-semibold text-amber-900 mb-1">
                  1. "Hố đen" phễu Bikini (Nữ 34.2% - Nam 22.2%)
                </div>
                <p className="text-amber-800 leading-relaxed">
                  234 data Bikini nữ chỉ có 80 khách đến (mất 154 khách). Khách nam có 36 data chỉ đến 8 khách. Khâu telesale chưa xóa bỏ được tâm lý e ngại, sợ đau, sợ lộ của khách.
                </p>
              </div>

              <div className="p-3 bg-red-50/70 border border-red-200/70 rounded-xl">
                <div className="font-semibold text-red-900 mb-1">
                  2. Lệch pha năng lực nhân viên nghiêm trọng
                </div>
                <p className="text-red-800 leading-relaxed">
                  Top 1 (Khánh Vân, Thanh Hiền) đạt trên 50-60%. Nhưng <strong>Lê Minh Huy (30.6% nách, 16.7% bikini)</strong> và <strong>Nguyễn Quỳnh Như (10% tắm trắng)</strong> đang "đốt" data trầm trọng.
                </p>
              </div>

              <div className="p-3 bg-slate-100/70 border border-slate-200 rounded-xl">
                <div className="font-semibold text-slate-800 mb-1">
                  3. Lãng phí data Nách nữ (500 data - mất 285 khách)
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Nách nữ là phễu rẻ nhất, nhưng chỉ đạt 43%. Mất 285 khách nữ tiềm năng để nhân viên kỹ thuật upsell gói toàn thân/trị thâm.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
            ⚠️ Cần rà soát quy trình kịch bản tư vấn qua điện thoại/Zalo ngay.
          </div>
        </div>

        {/* 3. Hành động cứu vãn */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">3. KẾ HOẠCH HÀNH ĐỘNG NGAY</h3>
            </div>
            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                <div>
                  <strong>Chiến dịch "Cứu 631 Khách Bùng":</strong> Gửi Zalo ZNS / SMS chăm sóc với thông điệp: "Gia hạn voucher trải nghiệm Little Garden thêm 48h + Tặng gói CSD miễn phí".
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                <div>
                  <strong>Sửa kịch bản Bikini:</strong> Gửi ảnh phòng triệt riêng 1:1, video cam kết công nghệ lạnh không đau rát trước khi khách tới.
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                <div>
                  <strong>Kèm cặp 1:1 cho Lê Minh Huy & Quỳnh Như:</strong> Nghe lại băng ghi âm của Khánh Vân & Thanh Hiền để chuẩn hóa lại kỹ năng chốt hẹn.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> Mục tiêu tuần tới: Đẩy CI toàn team lên ≥ 50%
          </div>
        </div>
      </div>

      {/* 3. Phân Tích Chi Tiết Từng Phễu Dịch Vụ */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-bold text-slate-900 text-xl flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              Chi Tiết Hiệu Suất Từng Phễu Dịch Vụ (Little Garden Spa)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              So sánh chỉ số thực tế với Benchmark chuẩn ngành thẩm mỹ viện
            </p>
          </div>

          {/* Filter category */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${selectedCategory === 'all' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Tất cả (9 phễu)
            </button>
            <button
              onClick={() => setSelectedCategory('triet_long')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${selectedCategory === 'triet_long' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Triệt Lông (4)
            </button>
            <button
              onClick={() => setSelectedCategory('body')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${selectedCategory === 'body' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Tắm Trắng
            </button>
            <button
              onClick={() => setSelectedCategory('facial_treatment')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${selectedCategory === 'facial_treatment' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Điều trị Da / Mụn
            </button>
          </div>
        </div>

        {/* Table of Services */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px] bg-slate-50/70">
                <th className="py-3 px-4 rounded-l-xl">Dịch vụ Phễu</th>
                <th className="py-3 px-3 text-right">Data hẹn (RDT)</th>
                <th className="py-3 px-3 text-right">Khách đến (CI)</th>
                <th className="py-3 px-3 text-right">Khách rớt (Drop)</th>
                <th className="py-3 px-4 text-center">Tỷ lệ Check-in</th>
                <th className="py-3 px-3 text-center">Chuẩn Ngành</th>
                <th className="py-3 px-4 rounded-r-xl text-center">Đánh giá Chuyên Gia</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredServices.map(svc => {
                const totalItem = TOTAL_REPORT[svc.key];
                const rdt = totalItem?.rdt || 0;
                const ci = totalItem?.ci || 0;
                const drop = rdt - ci;
                const rate = rdt > 0 ? (ci / rdt) * 100 : (ci > 0 ? 100 : 0);
                const diff = rate - svc.benchmark;
                const isPassed = rate >= svc.benchmark;
                const isSevere = rate < svc.benchmark - 10;

                return (
                  <tr key={svc.key} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-900 text-sm">{svc.name}</div>
                      <div className="text-[11px] text-slate-500 max-w-xs truncate">{svc.description}</div>
                    </td>
                    <td className="py-3.5 px-3 text-right font-medium text-slate-700">
                      {rdt}
                    </td>
                    <td className="py-3.5 px-3 text-right font-bold text-emerald-600">
                      {ci}
                    </td>
                    <td className="py-3.5 px-3 text-right font-medium text-rose-500">
                      {drop > 0 ? drop : 0}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <div className="inline-flex items-center gap-1.5">
                        <span className={`font-extrabold text-sm ${isPassed ? 'text-emerald-600' : isSevere ? 'text-rose-600' : 'text-amber-600'}`}>
                          {rate.toFixed(1)}%
                        </span>
                        <div className="w-16 bg-slate-100 rounded-full h-2 overflow-hidden hidden sm:block">
                          <div 
                            className={`h-full rounded-full ${isPassed ? 'bg-emerald-500' : isSevere ? 'bg-rose-500' : 'bg-amber-500'}`}
                            style={{ width: `${Math.min(rate, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-center text-slate-500 font-medium">
                      ≥ {svc.benchmark}%
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {isPassed ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <Check className="w-3 h-3 text-emerald-700" /> ĐẠT ({diff >= 0 ? `+${diff.toFixed(1)}%` : ''})
                        </span>
                      ) : isSevere ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-800 border border-rose-200">
                          <XCircle className="w-3 h-3 text-rose-700" /> BÁO ĐỘNG ({diff.toFixed(1)}%)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                          <AlertCircle className="w-3 h-3 text-amber-700" /> CẢNH BÁO ({diff.toFixed(1)}%)
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Đánh Giá Chi Tiết 11 Nhân Viên Sale (Team Ngân) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-bold text-slate-900 text-xl flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Bảng Xếp Hạng & Đánh Giá Năng Lực 11 Nhân Viên Sale
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Phát hiện nhân sự xuất sắc để nhân bản và nhân sự yếu kém để đào tạo lại
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium">Sắp xếp theo:</span>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-medium">
              <button
                onClick={() => setSortBy('rate')}
                className={`px-2.5 py-1 rounded-lg cursor-pointer transition-all ${sortBy === 'rate' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-600'}`}
              >
                % Chuyển đổi
              </button>
              <button
                onClick={() => setSortBy('ci')}
                className={`px-2.5 py-1 rounded-lg cursor-pointer transition-all ${sortBy === 'ci' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-600'}`}
              >
                Số lượng CI
              </button>
              <button
                onClick={() => setSortBy('rdt')}
                className={`px-2.5 py-1 rounded-lg cursor-pointer transition-all ${sortBy === 'rdt' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-600'}`}
              >
                Số Lead (RDT)
              </button>
            </div>
          </div>
        </div>

        {/* Staff Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px] bg-slate-50/70">
                <th className="py-3 px-3 text-center">Hạng</th>
                <th className="py-3 px-4">Nhân viên Sale</th>
                <th className="py-3 px-3 text-right">Tổng RDT</th>
                <th className="py-3 px-3 text-right">Tổng CI</th>
                <th className="py-3 px-4 text-center">Tỷ lệ Chuyển đổi</th>
                <th className="py-3 px-4">Phễu Nách Nữ</th>
                <th className="py-3 px-4">Phễu Bikini Nữ</th>
                <th className="py-3 px-4 rounded-r-xl">Nhận xét Chuyên Gia & Khắc phục</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {staffRankings.map((staff, idx) => {
                const nachNu = staff.services.trietNachNu;
                const bkNu = staff.services.trietBikiniNu;
                const isTop = idx < 3;
                const isBottom = staff.avgRate < 35 && staff.totalRdt > 20;

                // Specific comments for staff
                let comment = '';
                let badgeClass = 'bg-slate-100 text-slate-700';
                let badgeText = 'Trung bình';

                if (staff.name.includes('Khánh Vân')) {
                  badgeText = 'Top 1 Toàn Diện';
                  badgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-200';
                  comment = 'Chốt rất chắc tay cả Nách (53.2%) và Bikini (45.2%). Tắm trắng đạt 63.6%. Cần đóng gói kịch bản chia sẻ cho team.';
                } else if (staff.name.includes('Thanh Hiền')) {
                  badgeText = 'Top 2 Hiệu Suất';
                  badgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-200';
                  comment = 'Tỷ lệ đến vượt trội (Nách 53.3%, Tắm trắng 125% do kéo khách quay lại). Kỹ năng giữ chân khách rất tốt.';
                } else if (staff.name.includes('Lê Minh Huy')) {
                  badgeText = 'Báo động Đỏ';
                  badgeClass = 'bg-rose-100 text-rose-800 border-rose-300';
                  comment = 'Yếu nhất team ở phễu lớn: Nách chỉ 30.6% (11/36), Bikini chỉ 16.7% (3/18). Đang làm lãng phí nghiêm trọng ngân sách Marketing!';
                } else if (staff.name.includes('Quỳnh Như')) {
                  badgeText = 'Đốt Data Tắm Trắng';
                  badgeClass = 'bg-rose-100 text-rose-800 border-rose-300';
                  comment = 'Tắm trắng nhận 20 lead nhưng chỉ đến 2 (10%!). Nách chỉ 35.7%. Cần đình chỉ chia data Tắm trắng để đào tạo lại.';
                } else if (staff.name.includes('Hồng Ngọc')) {
                  badgeText = 'Khâu Bikini Yếu';
                  badgeClass = 'bg-amber-100 text-amber-800 border-amber-200';
                  comment = 'Volume RDT cao nhất (66 nách, 33 bikini) nhưng Bikini chỉ 24.2% (rớt 25 khách). Tắm trắng và Trị thâm lại rất tốt.';
                } else if (staff.name.includes('Hải Yến')) {
                  badgeText = 'Volume Lớn, Tỷ Lệ Vừa';
                  badgeClass = 'bg-slate-100 text-slate-700';
                  comment = 'RDT 60 nách -> 45% (đạt ngưỡng). Bikini 30/9 (30%) cần cải thiện khâu theo sát lịch.';
                } else if (staff.name.includes('Diệu Linh')) {
                  badgeText = 'Chốt Nam Rất Giỏi';
                  badgeClass = 'bg-blue-100 text-blue-800 border-blue-200';
                  comment = 'Nách nam đạt 100% (4/4), Bikini nam đạt 80% (4/5)! Rất có khiếu với tệp khách nam. Nên ưu tiên dồn data Nam cho Diệu Linh.';
                } else if (staff.name.includes('Thanh Thanh')) {
                  badgeText = 'Chuyên Da Liễu / LCL';
                  badgeClass = 'bg-violet-100 text-violet-800 border-violet-200';
                  comment = 'Không có data phễu triệt lông; phụ trách LCL (34.5%) và Trị thâm (28.6%). Tỷ lệ chốt còn thấp, cần trang bị thêm kiến thức da liễu.';
                } else {
                  badgeText = 'Khá - Ổn Định';
                  badgeClass = 'bg-slate-100 text-slate-700';
                  comment = 'Các chỉ số duy trì ở mức trung bình của team. Cần đẩy mạnh tỷ lệ phễu Bikini lên trên 40%.';
                }

                return (
                  <tr key={staff.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-3 text-center">
                      <span className={`w-6 h-6 rounded-full inline-flex items-center justify-center font-bold text-xs ${idx === 0 ? 'bg-amber-400 text-amber-950 shadow-xs' : idx === 1 ? 'bg-slate-300 text-slate-800' : idx === 2 ? 'bg-amber-700/30 text-amber-900' : 'text-slate-400'}`}>
                        {idx + 1}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900 text-sm">{staff.name}</div>
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border mt-0.5 ${badgeClass}`}>
                        {badgeText}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right font-medium text-slate-700">
                      {staff.totalRdt}
                    </td>
                    <td className="py-3 px-3 text-right font-bold text-emerald-600">
                      {staff.totalCi}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`font-black text-sm ${staff.avgRate >= 45 ? 'text-emerald-600' : staff.avgRate < 35 ? 'text-rose-600' : 'text-amber-600'}`}>
                        {staff.avgRate.toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-slate-800 font-semibold">{nachNu.ci} / {nachNu.rdt} CI</div>
                      <span className={`text-[11px] font-medium ${nachNu.rate && nachNu.rate >= 45 ? 'text-emerald-600' : 'text-rose-500'}`}>
                        {nachNu.rate ? `${nachNu.rate}%` : 'N/A'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-slate-800 font-semibold">{bkNu.ci} / {bkNu.rdt} CI</div>
                      <span className={`text-[11px] font-medium ${bkNu.rate && bkNu.rate >= 40 ? 'text-emerald-600' : 'text-rose-500'}`}>
                        {bkNu.rate ? `${bkNu.rate}%` : 'N/A'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-slate-600 leading-relaxed max-w-sm">
                      {comment}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Khuyến Nghị Chiến Lược Dành Cho Quản Lý Spa */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-6 h-6 text-amber-300" />
          <h3 className="font-extrabold text-xl text-white">
            Bộ Giải Pháp Tăng Tỷ Lệ Check-in Từ 41% Lên 55% Cho Little Garden Spa
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
            <h4 className="font-bold text-amber-300 text-sm mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> 1. Tối Ưu Hóa Phân Bổ Data Theo Năng Lực (Smart Routing)
            </h4>
            <p className="text-xs text-emerald-100 leading-relaxed">
              - <strong>Dồn Data Nam cho Lê Thị Diệu Linh</strong>: Diệu Linh có tỷ lệ chuyển đổi khách nam 80-100% (cực hiếm trong ngành spa). Giao toàn bộ data nam cho bạn này xử lý.<br />
              - <strong>Giảm hoặc ngưng cấp data Bikini cho Lê Minh Huy & Quỳnh Như</strong>: Chuyển sang cho Khánh Vân và Thanh Hiền xử lý cho đến khi 2 bạn này vượt qua bài kiểm tra nghe lại call ghi âm chuẩn.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
            <h4 className="font-bold text-amber-300 text-sm mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> 2. Quy Chuẩn 3 Điểm Chạm Nhắc Lịch (Touchpoint Reminder)
            </h4>
            <p className="text-xs text-emerald-100 leading-relaxed">
              - <strong>Điểm chạm 1 (Ngay sau chốt)</strong>: Gửi thiệp hẹn có logo Little Garden, hình ảnh KTV, định vị Google Maps qua Zalo.<br />
              - <strong>Điểm chạm 2 (20h tối hôm trước)</strong>: Gọi nhẹ hoặc nhắn tin xác nhận chuẩn bị trước (lưu ý tránh kỳ dâu, lưu ý trang phục thoải mái).<br />
              - <strong>Điểm chạm 3 (Trước 2 tiếng)</strong>: Nhắn hotline hỗ trợ gửi xe miễn phí và giữ phòng 1:1.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
