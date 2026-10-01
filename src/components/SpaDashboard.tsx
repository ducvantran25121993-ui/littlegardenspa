import React, { useState, useMemo } from 'react';
import { 
  StaffPerformance, 
  ServiceMeta, 
  SERVICES_CONFIG, 
  INITIAL_STAFF_DATA, 
  TOTAL_REPORT,
  SEPTEMBER_WEEKS_DATA,
  SEPTEMBER_CUMULATIVE_TO_DATE,
  USER_724_STAFF_DATA,
  USER_724_WEEKS_DATA
} from '../data/teamData';
import {
  USER_724_FULL_RAW_DATABASE,
  USER_724_MONTH_RAW_DATABASE
} from '../data/rawLeadsGenerator';
import { REAL_LITTLE_GARDEN_RECORDS } from '../data/realCustomersData';
import { 
  Filter, 
  Download, 
  Upload, 
  Search, 
  FileSpreadsheet, 
  BarChart3, 
  Users, 
  Sparkles, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2, 
  Layers, 
  Printer, 
  RefreshCw, 
  Eye, 
  SlidersHorizontal, 
  ChevronDown, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  Archive,
  Save,
  Lock,
  FolderArchive,
  ShieldCheck,
  Check,
  PlusCircle,
  Radio,
  LogIn,
  LogOut,
  Key,
  Globe
} from 'lucide-react';

export interface WeekItem {
  id: string;
  name: string;
  month: string;
  dateRange: string;
  fullLabel: string;
  isCurrent?: boolean;
}

export interface MonthArchive {
  id: string; // '2026-09', '2026-10'
  name: string; // 'Tháng 9/2026', 'Tháng 10/2026'
  isArchived: boolean;
  archivedAt?: string;
  weeks: WeekItem[];
}

export const INITIAL_MONTHS: MonthArchive[] = [
  {
    id: '2026-09',
    name: 'Tháng 9/2026',
    isArchived: true,
    archivedAt: '28/09/2026',
    weeks: [
      { id: 'w1', name: 'Tuần 1', month: 'Tháng 9/2026', dateRange: '01-07/9/2026', fullLabel: 'Tuần 1 (01/09 - 07/09/2026)' },
      { id: 'w2', name: 'Tuần 2', month: 'Tháng 9/2026', dateRange: '08-14/9/2026', fullLabel: 'Tuần 2 (08/09 - 14/09/2026)' },
      { id: 'w3', name: 'Tuần 3', month: 'Tháng 9/2026', dateRange: '15-21/9/2026', fullLabel: 'Tuần 3 (15/09 - 21/09/2026)' },
      { id: 'w4', name: 'Tuần 4', month: 'Tháng 9/2026', dateRange: '22-28/9/2026', fullLabel: 'Tuần 4 (22/09 - 28/09/2026)', isCurrent: true },
      { id: 'w5', name: 'Tuần 5', month: 'Tháng 9/2026', dateRange: '29-30/9/2026', fullLabel: 'Tuần 5 (29/09 - 30/09/2026)' },
    ]
  },
  {
    id: '2026-10',
    name: 'Tháng 10/2026',
    isArchived: false,
    weeks: [
      { id: '10-w1', name: 'Tuần 1', month: 'Tháng 10/2026', dateRange: '01-07/10/2026', fullLabel: 'Tuần 1 (01/10 - 07/10/2026)', isCurrent: true },
      { id: '10-w2', name: 'Tuần 2', month: 'Tháng 10/2026', dateRange: '08-14/10/2026', fullLabel: 'Tuần 2 (08/10 - 14/10/2026)' },
      { id: '10-w3', name: 'Tuần 3', month: 'Tháng 10/2026', dateRange: '15-21/10/2026', fullLabel: 'Tuần 3 (15/10 - 21/10/2026)' },
      { id: '10-w4', name: 'Tuần 4', month: 'Tháng 10/2026', dateRange: '22-28/10/2026', fullLabel: 'Tuần 4 (22/10 - 28/10/2026)' },
      { id: '10-w5', name: 'Tuần 5', month: 'Tháng 10/2026', dateRange: '29-31/10/2026', fullLabel: 'Tuần 5 (29/10 - 31/10/2026)' },
    ]
  }
];

export const WEEKS_DATA: WeekItem[] = INITIAL_MONTHS[0].weeks;

export const EMPTY_STAFF_DATA: StaffPerformance[] = INITIAL_STAFF_DATA.map(s => ({
  ...s,
  services: {
    trietNachNu: { rdt: 0, ci: 0, rate: null },
    trietBikiniNu: { rdt: 0, ci: 0, rate: null },
    trietNachNam: { rdt: 0, ci: 0, rate: null },
    trietBikiniNam: { rdt: 0, ci: 0, rate: null },
    tamTrang: { rdt: 0, ci: 0, rate: null },
    munMatCSD: { rdt: 0, ci: 0, rate: null },
    triThamNu: { rdt: 0, ci: 0, rate: null },
    seoRo: { rdt: 0, ci: 0, rate: null },
    lcl: { rdt: 0, ci: 0, rate: null },
  }
}));

// Tự động phân tích và tính toán ma trận số liệu khi có dữ liệu mới phát sinh (tự động nhận diện NV mới, đổi người)
export const buildStaffDataFromRaw = (records: RawCustomerRecord[]): StaffPerformance[] => {
  // Trích xuất danh sách tất cả nhân viên xuất hiện trong dữ liệu thực tế
  const rawStaffNames = Array.from(
    new Set(
      records
        .map(r => r.staffName?.trim())
        .filter((name): name is string => Boolean(name && name.length > 0))
    )
  );

  // Nếu trong dữ liệu chưa có tên nào thì fallback về danh sách mặc định
  const targetStaffNames = rawStaffNames.length > 0 
    ? rawStaffNames 
    : INITIAL_STAFF_DATA.map(s => s.name);

  return targetStaffNames.map((staffName, idx) => {
    const existing = INITIAL_STAFF_DATA.find(s => s.name.trim().toLowerCase() === staffName.toLowerCase());
    const staffId = existing ? existing.id : `staff-auto-${idx + 1}`;
    const staffRecords = records.filter(r => r.staffName?.trim().toLowerCase() === staffName.toLowerCase());
    const services: any = {};

    SERVICES_CONFIG.forEach(svc => {
      const svcRecords = staffRecords.filter(r => {
        const sLower = (r.service || '').toLowerCase().trim();
        const isNam = sLower.includes('nam');
        const isNu = sLower.includes('nữ') || sLower.includes('nu');

        if (svc.key === 'tamTrang') {
          return sLower.includes('tắm trắng') || sLower.includes('tam trang') || sLower.includes('tắm') || sLower.includes('tam');
        }
        if (svc.key === 'trietNachNu') {
          const isNach = sLower.includes('nách') || sLower.includes('nach');
          return isNach && !sLower.includes('bikini') && (isNu || !isNam);
        }
        if (svc.key === 'trietBikiniNu') {
          const isBikini = sLower.includes('bikini');
          return isBikini && (isNu || !isNam);
        }
        if (svc.key === 'trietNachNam') {
          const isNach = sLower.includes('nách') || sLower.includes('nach');
          return isNach && isNam;
        }
        if (svc.key === 'trietBikiniNam') {
          const isBikini = sLower.includes('bikini');
          return isBikini && isNam;
        }
        if (svc.key === 'munMatCSD') {
          return sLower.includes('mụn') || sLower.includes('mun') || sLower.includes('csd') || sLower.includes('mặt') || sLower.includes('mat');
        }
        if (svc.key === 'triThamNu') {
          return sLower.includes('thâm') || sLower.includes('tham');
        }
        if (svc.key === 'seoRo') {
          return sLower.includes('sẹo') || sLower.includes('seo');
        }
        if (svc.key === 'lcl') {
          return sLower.includes('lcl') || sLower.includes('chân lông') || sLower.includes('chan long');
        }
        return sLower.includes(svc.name.toLowerCase());
      });

      const rdt = svcRecords.length;
      const ci = svcRecords.filter(r => r.status === 'check_in').length;
      const rate = rdt > 0 ? Number(((ci / rdt) * 100).toFixed(1)) : null;
      services[svc.key] = { rdt, ci, rate };
    });

    return {
      id: staffId,
      name: staffName,
      services
    };
  });
};

export interface RawCustomerRecord {
  id: string;
  stt: number;
  phone: string;
  fbName: string;
  service: string;
  staffName: string;
  status: 'hẹn' | 'check_in' | 'hủy' | 'chưa_đến';
  date: string;
  note?: string;
}

// Dữ liệu khách hàng thô (Raw Leads) theo từng tuần tương ứng với ngày hẹn thực tế
export const WEEKLY_RAW_DATABASE: Record<string, RawCustomerRecord[]> = {
  w1: [
    { id: 'w1-1', stt: 1, phone: '0868531084', fbName: 'Nguyễn Thị Thu Hà', service: 'Triệt nách (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-01' },
    { id: 'w1-2', stt: 2, phone: '0792696554', fbName: 'Bùi Thảo My', service: 'Triệt bikini (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-01' },
    { id: 'w1-3', stt: 3, phone: '0932733494', fbName: 'Võ Quỳnh Chi', service: 'Tắm Trắng', staffName: 'Nguyễn Thị Khánh Vân', status: 'hẹn', date: '2026-09-02' },
    { id: 'w1-4', stt: 4, phone: '0332299344', fbName: 'Đặng Mai Phương', service: 'Triệt nách (nữ)', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in', date: '2026-09-02' },
    { id: 'w1-5', stt: 5, phone: '0908123456', fbName: 'Hoàng Linh Đan', service: 'Triệt bikini (nữ)', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in', date: '2026-09-03' },
    { id: 'w1-6', stt: 6, phone: '0912345678', fbName: 'Trần Tuấn Kiệt', service: 'Triệt nách (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-03' },
    { id: 'w1-7', stt: 7, phone: '0777702053', fbName: 'Nguyễn Minh Quân', service: 'Triệt bikini (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-04' },
    { id: 'w1-8', stt: 8, phone: '0987654321', fbName: 'Lê Thị Ngọc Bích', service: 'Triệt nách (nữ)', staffName: 'Trần Thị Hải Yến', status: 'chưa_đến', date: '2026-09-04' },
    { id: 'w1-9', stt: 9, phone: '0933445566', fbName: 'Phạm Kiều Oanh', service: 'Triệt bikini (nữ)', staffName: 'Lê Minh Huy', status: 'hủy', date: '2026-09-05' },
    { id: 'w1-10', stt: 10, phone: '0944556677', fbName: 'Đỗ Thảo Vy', service: 'Tắm Trắng', staffName: 'Nguyễn Quỳnh Như', status: 'hủy', date: '2026-09-05' },
    { id: 'w1-11', stt: 11, phone: '0966778899', fbName: 'Trần Gia Hân', service: 'LCL', staffName: 'Đỗ Thanh Thanh', status: 'check_in', date: '2026-09-06' },
    { id: 'w1-12', stt: 12, phone: '0977889900', fbName: 'Ngô Kim Ngân', service: 'Trị thâm (nữ)', staffName: 'Trần Thị Ngọc Nhung', status: 'check_in', date: '2026-09-07' },
    { id: 'w1-13', stt: 13, phone: '0901234789', fbName: 'Vũ Hồng Nhung', service: 'Triệt nách (nữ)', staffName: 'Nguyễn Thị Hồng Ngọc', status: 'check_in', date: '2026-09-07' },
    { id: 'w1-14', stt: 14, phone: '0909876123', fbName: 'Trương Ngọc Trâm', service: 'Triệt bikini (nữ)', staffName: 'Phan Thị Hồng Nhung', status: 'hẹn', date: '2026-09-07' },
  ],
  w2: [
    { id: 'w2-1', stt: 1, phone: '0868112233', fbName: 'Trần Thảo Ly', service: 'Triệt nách (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-08' },
    { id: 'w2-2', stt: 2, phone: '0792334455', fbName: 'Lê Thanh Thảo', service: 'Triệt bikini (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-08' },
    { id: 'w2-3', stt: 3, phone: '0932556677', fbName: 'Nguyễn Hồng Liên', service: 'Tắm Trắng', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in', date: '2026-09-09' },
    { id: 'w2-4', stt: 4, phone: '0332778899', fbName: 'Đinh Lan Hương', service: 'Triệt nách (nữ)', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in', date: '2026-09-09' },
    { id: 'w2-5', stt: 5, phone: '0908990011', fbName: 'Hoàng Yến Nhi', service: 'Triệt bikini (nữ)', staffName: 'Trần Thị Hải Yến', status: 'chưa_đến', date: '2026-09-10' },
    { id: 'w2-6', stt: 6, phone: '0912112233', fbName: 'Phan Đức Huy', service: 'Triệt nách (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-10' },
    { id: 'w2-7', stt: 7, phone: '0777334455', fbName: 'Trương Tuấn Anh', service: 'Triệt bikini (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-11' },
    { id: 'w2-8', stt: 8, phone: '0987556677', fbName: 'Bùi Kim Phượng', service: 'Mụn mặt/CSD', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-11' },
    { id: 'w2-9', stt: 9, phone: '0933778899', fbName: 'Võ Minh Hạnh', service: 'Triệt bikini (nữ)', staffName: 'Lê Minh Huy', status: 'hủy', date: '2026-09-12' },
    { id: 'w2-10', stt: 10, phone: '0944990011', fbName: 'Dương Mỹ Linh', service: 'Tắm Trắng', staffName: 'Nguyễn Quỳnh Như', status: 'hủy', date: '2026-09-12' },
    { id: 'w2-11', stt: 11, phone: '0966112233', fbName: 'Lý Kim Yến', service: 'LCL', staffName: 'Đỗ Thanh Thanh', status: 'check_in', date: '2026-09-13' },
    { id: 'w2-12', stt: 12, phone: '0977334455', fbName: 'Tô Ánh Nguyệt', service: 'Trị thâm (nữ)', staffName: 'Trần Thị Ngọc Nhung', status: 'check_in', date: '2026-09-14' },
    { id: 'w2-13', stt: 13, phone: '0901556677', fbName: 'Phạm Quỳnh Anh', service: 'Triệt nách (nữ)', staffName: 'Trần Ngọc Bảo Quỳnh', status: 'check_in', date: '2026-09-14' },
  ],
  w3: [
    { id: 'w3-1', stt: 1, phone: '0868998877', fbName: 'Nguyễn Kiều Trang', service: 'Triệt nách (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-15' },
    { id: 'w3-2', stt: 2, phone: '0792887766', fbName: 'Trần Bảo Ngọc', service: 'Triệt bikini (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-15' },
    { id: 'w3-3', stt: 3, phone: '0932776655', fbName: 'Lê Thùy Dương', service: 'Tắm Trắng', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in', date: '2026-09-16' },
    { id: 'w3-4', stt: 4, phone: '0332665544', fbName: 'Phan Thảo Nhi', service: 'Triệt nách (nữ)', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in', date: '2026-09-16' },
    { id: 'w3-5', stt: 5, phone: '0908554433', fbName: 'Đặng Tuyết Mai', service: 'Triệt bikini (nữ)', staffName: 'Trần Thị Hải Yến', status: 'chưa_đến', date: '2026-09-17' },
    { id: 'w3-6', stt: 6, phone: '0912443322', fbName: 'Lâm Hải Đăng', service: 'Triệt nách (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-17' },
    { id: 'w3-7', stt: 7, phone: '0777332211', fbName: 'Cao Thái Sơn', service: 'Triệt bikini (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-18' },
    { id: 'w3-8', stt: 8, phone: '0987221100', fbName: 'Ngô Thục Trinh', service: 'Mụn mặt/CSD', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-18' },
    { id: 'w3-9', stt: 9, phone: '0933110099', fbName: 'Huỳnh Bảo Trân', service: 'Triệt bikini (nữ)', staffName: 'Lê Minh Huy', status: 'hủy', date: '2026-09-19' },
    { id: 'w3-10', stt: 10, phone: '0944009988', fbName: 'Trịnh Phương Linh', service: 'Tắm Trắng', staffName: 'Nguyễn Quỳnh Như', status: 'hủy', date: '2026-09-20' },
    { id: 'w3-11', stt: 11, phone: '0966998800', fbName: 'Vương Tuyết Nhung', service: 'LCL', staffName: 'Đỗ Thanh Thanh', status: 'check_in', date: '2026-09-20' },
    { id: 'w3-12', stt: 12, phone: '0977880011', fbName: 'Hồ Cẩm Tú', service: 'Trị thâm (nữ)', staffName: 'Trần Thị Ngọc Nhung', status: 'check_in', date: '2026-09-21' },
    { id: 'w3-13', stt: 13, phone: '0901776655', fbName: 'Bùi Thùy Trâm', service: 'Triệt nách (nữ)', staffName: 'Nguyễn Thị Hồng Ngọc', status: 'check_in', date: '2026-09-21' },
  ],
  w4: [
    { id: 'w4-1', stt: 1, phone: '0868531084', fbName: 'user7dkt17aghv - Sóng bắt đầu từ đâu', service: 'Triệt nách (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-22' },
    { id: 'w4-2', stt: 2, phone: '0792696554', fbName: 'Hồng Nhạc Nguyễn', service: 'Triệt bikini (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-22' },
    { id: 'w4-3', stt: 3, phone: '0932733494', fbName: 'Thảo Phương', service: 'Tắm Trắng', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-23' },
    { id: 'w4-4', stt: 4, phone: '0332299344', fbName: '_km.ani - Đinh Thị Kim An', service: 'Triệt nách (nữ)', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in', date: '2026-09-23' },
    { id: 'w4-5', stt: 5, phone: '0908123456', fbName: 'Như Ngọc', service: 'Triệt bikini (nữ)', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in', date: '2026-09-24' },
    { id: 'w4-6', stt: 6, phone: '0912345678', fbName: 'Dũng Lương', service: 'Triệt nách (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-24' },
    { id: 'w4-7', stt: 7, phone: '0777702053', fbName: 'Tr M Duyen', service: 'Triệt bikini (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-25' },
    { id: 'w4-8', stt: 8, phone: '0987654321', fbName: 'Mai Phương', service: 'Triệt nách (nữ)', staffName: 'Trần Thị Hải Yến', status: 'chưa_đến', date: '2026-09-25' },
    { id: 'w4-9', stt: 9, phone: '0933445566', fbName: 'Lan Anh', service: 'Triệt bikini (nữ)', staffName: 'Lê Minh Huy', status: 'hủy', date: '2026-09-26' },
    { id: 'w4-10', stt: 10, phone: '0944556677', fbName: 'Thùy Trang', service: 'Tắm Trắng', staffName: 'Nguyễn Quỳnh Như', status: 'hủy', date: '2026-09-26' },
    { id: 'w4-11', stt: 11, phone: '0966778899', fbName: 'Bảo Anh', service: 'LCL', staffName: 'Đỗ Thanh Thanh', status: 'check_in', date: '2026-09-27' },
    { id: 'w4-12', stt: 12, phone: '0977889900', fbName: 'Bích Trâm', service: 'Trị thâm (nữ)', staffName: 'Trần Thị Ngọc Nhung', status: 'check_in', date: '2026-09-27' },
    { id: 'w4-13', stt: 13, phone: '0918112233', fbName: 'Trần Thanh Vân', service: 'Triệt nách (nữ)', staffName: 'Nguyễn Thị Hồng Ngọc', status: 'check_in', date: '2026-09-28' },
    { id: 'w4-14', stt: 14, phone: '0937445566', fbName: 'Hoàng Kim Chi', service: 'Triệt bikini (nữ)', staffName: 'Phan Thị Hồng Nhung', status: 'check_in', date: '2026-09-28' },
  ],
  w5: [
    { id: 'w5-1', stt: 1, phone: '0868001122', fbName: 'Phạm Thu Thảo', service: 'Triệt nách (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-29' },
    { id: 'w5-2', stt: 2, phone: '0792112233', fbName: 'Lê Mai Anh', service: 'Triệt bikini (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-29' },
    { id: 'w5-3', stt: 3, phone: '0932223344', fbName: 'Trần Hồng Gấm', service: 'Tắm Trắng', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in', date: '2026-09-29' },
    { id: 'w5-4', stt: 4, phone: '0332334455', fbName: 'Nguyễn Ngọc Hân', service: 'Triệt nách (nữ)', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in', date: '2026-09-30' },
    { id: 'w5-5', stt: 5, phone: '0908445566', fbName: 'Đỗ Bích Thủy', service: 'Triệt bikini (nữ)', staffName: 'Trần Thị Hải Yến', status: 'chưa_đến', date: '2026-09-30' },
    { id: 'w5-6', stt: 6, phone: '0912556677', fbName: 'Vũ Quốc Bảo', service: 'Triệt nách (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-30' },
    { id: 'w5-7', stt: 7, phone: '0777667788', fbName: 'Lê Đình Trọng', service: 'Triệt bikini (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-30' },
    { id: 'w5-8', stt: 8, phone: '0987778899', fbName: 'Huỳnh Lan Phương', service: 'Trị thâm (nữ)', staffName: 'Trần Thị Ngọc Nhung', status: 'check_in', date: '2026-09-30' },
  ]
};

export const SpaDashboard: React.FC = () => {
  const [months, setMonths] = useState<MonthArchive[]>(() => {
    try {
      const saved = localStorage.getItem('SPA_MONTHS_STORE_V1');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_MONTHS;
  });

  const [selectedMonthId, setSelectedMonthId] = useState<string>('2026-09');
  const [selectedWeekId, setSelectedWeekId] = useState<string>('all');
  const [activeUserFilter, setActiveUserFilter] = useState<string>('724');
  const [selectedStaff, setSelectedStaff] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'matrix' | 'cards' | 'raw_table'>('matrix');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Dữ liệu khách hàng nạp/cập nhật mới - Lưu vĩnh viễn vào localStorage để không bị mất khi F5 hoặc mở lại
  const [customImportedRecords, setCustomImportedRecords] = useState<RawCustomerRecord[] | null>(() => {
    try {
      const saved = localStorage.getItem('SPA_CUSTOM_IMPORTED_RECORDS_STORE');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load custom records:', e);
    }
    // Mặc định nạp thẳng dữ liệu thật 100% từ link Little Garden Spa của bạn (1.464 khách thật)
    return REAL_LITTLE_GARDEN_RECORDS;
  });

  const updateCustomRecords = (records: RawCustomerRecord[] | null) => {
    setCustomImportedRecords(records);
    try {
      if (records && records.length > 0) {
        localStorage.setItem('SPA_CUSTOM_IMPORTED_RECORDS_STORE', JSON.stringify(records));
      } else {
        localStorage.removeItem('SPA_CUSTOM_IMPORTED_RECORDS_STORE');
      }
    } catch (e) {
      console.error('Failed to save custom records:', e);
    }
  };

  const [isImportModalOpen, setIsImportModalOpen] = useState<boolean>(false);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState<boolean>(false);
  const [csvPasteText, setCsvPasteText] = useState<string>('');
  const [importMessage, setImportMessage] = useState<string | null>(null);
  const [newMonthName, setNewMonthName] = useState<string>('');

  // Pagination & filter for Raw Leads Table (View 3)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25); // 25, 50, 100, 200, or -1 for All
  const [leadStatusFilter, setLeadStatusFilter] = useState<'all' | 'check_in' | 'chưa_đến' | 'hủy'>('all');
  const [jumpPageInput, setJumpPageInput] = useState<string>('');

  // Auto-Sync with Link state
  const [isSyncingWithLink, setIsSyncingWithLink] = useState<boolean>(false);
  const [lastSyncedTime, setLastSyncedTime] = useState<string>('08:45:37');
  const [autoSyncEnabled] = useState<boolean>(true);
  const [realtimeNotification, setRealtimeNotification] = useState<string | null>(null);

  // Little Garden Live Backend Connection State
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [loginEmail, setLoginEmail] = useState<string>('ngantran1818@gmail.com');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loginCookieText, setLoginCookieText] = useState<string>('');
  const [loginTab, setLoginTab] = useState<'credentials' | 'cookie'>('credentials');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<{
    isConnected: boolean;
    userEmail: string | null;
    lastSyncedAt: string | null;
  }>({ isConnected: true, userEmail: 'ngantran1818@gmail.com', lastSyncedAt: '08:45:37' });

  // Check connection status from backend on mount
  const checkServerStatus = async () => {
    try {
      const res = await fetch('/api/littlegarden/status');
      if (res.ok) {
        const data = await res.json();
        setConnectionStatus({
          isConnected: Boolean(data.isConnected),
          userEmail: data.userEmail || null,
          lastSyncedAt: data.lastSyncedAt || null
        });
        if (data.isConnected) {
          handleServerSync(false);
        }
      }
    } catch (e) {
      console.error('Failed to get status:', e);
    }
  };

  React.useEffect(() => {
    checkServerStatus();
  }, []);

  // Live Auto-Sync every 60 seconds if connected
  React.useEffect(() => {
    if (!connectionStatus.isConnected) return;
    const interval = setInterval(() => {
      handleServerSync(false);
    }, 60000);
    return () => clearInterval(interval);
  }, [connectionStatus.isConnected]);

  const handleServerSync = async (showNotification = true) => {
    setIsSyncingWithLink(true);
    try {
      const res = await fetch('/api/littlegarden/sync', { method: 'POST' });
      const data = await res.json();
      if (data.success && data.records && data.records.length > 0) {
        updateCustomRecords(data.records);
        setLastSyncedTime(data.lastSyncedAt || 'Vừa xong');
        setConnectionStatus(prev => ({
          ...prev,
          isConnected: true,
          lastSyncedAt: data.lastSyncedAt
        }));
        if (showNotification) {
          setRealtimeNotification(`🔄 Đã tự động cập nhật ${data.records.length} khách mới nhất từ Little Garden lúc ${data.lastSyncedAt}!`);
          setTimeout(() => setRealtimeNotification(null), 5000);
        }
      } else if (data.isExpired) {
        setConnectionStatus({ isConnected: false, userEmail: null, lastSyncedAt: null });
        setRealtimeNotification(`⚠️ Phiên kết nối Little Garden đã hết hạn, vui lòng kết nối lại!`);
      }
    } catch (e) {
      console.error('Auto sync error:', e);
    } finally {
      setIsSyncingWithLink(false);
    }
  };

  const handleLoginSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginError('Vui lòng điền đầy đủ Email và Mật khẩu!');
      return;
    }
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const res = await fetch('/api/littlegarden/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail.trim(), password: loginPassword })
      });
      const data = await res.json();
      if (data.success) {
        setConnectionStatus({
          isConnected: true,
          userEmail: loginEmail.trim(),
          lastSyncedAt: data.lastSyncedAt
        });
        if (data.records && data.records.length > 0) {
          updateCustomRecords(data.records);
        }
        setIsLoginModalOpen(false);
        setRealtimeNotification(`🎉 Đã kết nối tự động thành công với tài khoản ${loginEmail}! Số liệu sẽ tự động nhảy mới liên tục.`);
        setTimeout(() => setRealtimeNotification(null), 6000);
      } else {
        setLoginError(data.message || 'Đăng nhập thất bại, vui lòng kiểm tra lại thông tin!');
      }
    } catch (err: any) {
      setLoginError(err.message || 'Lỗi kết nối máy chủ!');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleCookieSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!loginCookieText.trim()) {
      setLoginError('Vui lòng dán chuỗi cookie!');
      return;
    }
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const res = await fetch('/api/littlegarden/set-cookie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cookie: loginCookieText.trim(), email: loginEmail || 'Cookie Session' })
      });
      const data = await res.json();
      if (data.success) {
        setConnectionStatus({
          isConnected: true,
          userEmail: loginEmail || 'Cookie Session',
          lastSyncedAt: data.lastSyncedAt
        });
        if (data.records && data.records.length > 0) {
          updateCustomRecords(data.records);
        }
        setIsLoginModalOpen(false);
        setRealtimeNotification(`🎉 Đã kết nối bằng Cookie thành công! Số liệu đang tự động cập nhật.`);
        setTimeout(() => setRealtimeNotification(null), 6000);
      } else {
        setLoginError(data.message || 'Mã cookie không hợp lệ!');
      }
    } catch (err: any) {
      setLoginError(err.message || 'Lỗi kết nối!');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      await fetch('/api/littlegarden/disconnect', { method: 'POST' });
      setConnectionStatus({ isConnected: false, userEmail: null, lastSyncedAt: null });
      setRealtimeNotification(`Đã ngắt kết nối tự động với Little Garden.`);
      setTimeout(() => setRealtimeNotification(null), 4000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleManualSyncLink = () => {
    if (connectionStatus.isConnected) {
      handleServerSync(true);
    } else {
      setIsLoginModalOpen(true);
      setLoginError(null);
    }
  };

  // Active month metadata
  const currentMonth = useMemo(() => {
    return months.find(m => m.id === selectedMonthId) || months[0];
  }, [months, selectedMonthId]);

  // Active weeks list for this month
  const activeWeeks = useMemo(() => {
    return currentMonth.weeks || [];
  }, [currentMonth]);

  // Active week metadata (or Month Total)
  const currentWeek = useMemo(() => {
    if (selectedWeekId === 'all') {
      return {
        id: 'all',
        name: 'Tổng Cả Tháng',
        month: currentMonth.name,
        dateRange: currentMonth.id === '2026-09' ? '01/09 - 30/09/2026' : '01/10 - 31/10/2026',
        fullLabel: `🌟 Cả Tháng (Tổng Toàn ${currentMonth.name})`
      };
    }
    return activeWeeks.find(w => w.id === selectedWeekId) || activeWeeks[0] || WEEKS_DATA[3];
  }, [activeWeeks, selectedWeekId, currentMonth]);

  const currentWeekIndex = useMemo(() => {
    return activeWeeks.findIndex(w => w.id === selectedWeekId);
  }, [activeWeeks, selectedWeekId]);

  // Save to local storage whenever months change
  const persistMonths = (newMonths: MonthArchive[]) => {
    setMonths(newMonths);
    try {
      localStorage.setItem('SPA_MONTHS_STORE_V1', JSON.stringify(newMonths));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  };

  // Month switch handler - Giữ nguyên lựa chọn "Cả tháng" hoặc tuần của người dùng, không tự ý nhảy sang tuần 4
  const handleMonthChange = (monthId: string) => {
    setSelectedMonthId(monthId);
    const targetMonth = months.find(m => m.id === monthId);
    const hasCurrentWeekInTarget = targetMonth?.weeks.some(w => w.id === selectedWeekId);
    // Nếu đang chọn "Cả tháng" (all) hoặc tuần đó có trong tháng mới thì giữ nguyên
    if (selectedWeekId === 'all' || hasCurrentWeekInTarget) {
      // Giữ nguyên lựa chọn hiện tại của người dùng
    } else {
      // Mặc định luôn là Cả tháng (all)
      setSelectedWeekId('all');
    }
  };

  // Toggle lock/archive month
  const handleToggleArchiveMonth = (monthId: string) => {
    const updated = months.map(m => {
      if (m.id === monthId) {
        return {
          ...m,
          isArchived: !m.isArchived,
          archivedAt: !m.isArchived ? new Date().toLocaleDateString('vi-VN') : undefined
        };
      }
      return m;
    });
    persistMonths(updated);
  };

  // Create new month
  const handleCreateMonth = () => {
    if (!newMonthName.trim()) return;
    const newId = 'month_' + Date.now();
    const newMonth: MonthArchive = {
      id: newId,
      name: newMonthName.trim(),
      isArchived: false,
      weeks: [
        { id: `${newId}_w1`, name: 'Tuần 1', month: newMonthName.trim(), dateRange: '01-07', fullLabel: `Tuần 1 (${newMonthName.trim()})`, isCurrent: true },
        { id: `${newId}_w2`, name: 'Tuần 2', month: newMonthName.trim(), dateRange: '08-14', fullLabel: `Tuần 2 (${newMonthName.trim()})` },
        { id: `${newId}_w3`, name: 'Tuần 3', month: newMonthName.trim(), dateRange: '15-21', fullLabel: `Tuần 3 (${newMonthName.trim()})` },
        { id: `${newId}_w4`, name: 'Tuần 4', month: newMonthName.trim(), dateRange: '22-28', fullLabel: `Tuần 4 (${newMonthName.trim()})` },
      ]
    };
    persistMonths([...months, newMonth]);
    setSelectedMonthId(newId);
    setSelectedWeekId(newMonth.weeks[0].id);
    setNewMonthName('');
  };

  // Download entire backup as JSON file
  const handleDownloadFullBackup = () => {
    const backupData = {
      app: 'Little Garden Spa - Funnel Dashboard',
      exportedAt: new Date().toISOString(),
      months: months,
      note: 'Dữ liệu sao lưu vĩnh viễn các tháng (kể cả khi file gốc trên web bị xóa)'
    };
    const jsonStr = JSON.stringify(backupData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `LittleGardenSpa_SaoLuu_CacThang_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };

  // Dynamic raw customer records matching the active week, staff, and search
  const currentWeekRawRecords = useMemo(() => {
    // 1. ƯU TIÊN HÀNG ĐẦU: Dữ liệu nạp/cập nhật mới (nhiều hơn)
    if (customImportedRecords && customImportedRecords.length > 0) {
      return customImportedRecords;
    }

    // 2. Nếu chọn Tháng 10 (hoặc bất kỳ tháng nào chưa có dữ liệu)
    if (selectedMonthId !== '2026-09') {
      return [];
    }

    // 3. Dữ liệu chuẩn của Tháng 9 (User 724)
    if (activeUserFilter === '724') {
      if (selectedWeekId === 'all') {
        return USER_724_MONTH_RAW_DATABASE;
      }
      return USER_724_FULL_RAW_DATABASE[selectedWeekId] || USER_724_FULL_RAW_DATABASE.w1;
    }

    if (selectedWeekId === 'all') {
      // Aggregate all weeks of September
      const allSep = [
        ...(WEEKLY_RAW_DATABASE.w1 || []),
        ...(WEEKLY_RAW_DATABASE.w2 || []),
        ...(WEEKLY_RAW_DATABASE.w3 || []),
        ...(WEEKLY_RAW_DATABASE.w4 || []),
        ...(WEEKLY_RAW_DATABASE.w5 || []),
      ];
      return allSep.map((item, idx) => ({ ...item, stt: idx + 1 }));
    }

    return customImportedRecords || WEEKLY_RAW_DATABASE[selectedWeekId] || [];
  }, [activeUserFilter, selectedMonthId, selectedWeekId, customImportedRecords]);

  // Filtered raw customer records by status, staff and search
  const filteredRawRecords = useMemo(() => {
    return currentWeekRawRecords.filter(rec => {
      const matchStatus = leadStatusFilter === 'all' || rec.status === leadStatusFilter;
      const matchStaff = selectedStaff === 'all' || rec.staffName === selectedStaff;
      const matchSearch = !searchTerm || 
        rec.fbName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        rec.phone.includes(searchTerm) || 
        rec.staffName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rec.service.toLowerCase().includes(searchTerm.toLowerCase());
      return matchStatus && matchStaff && matchSearch;
    });
  }, [currentWeekRawRecords, leadStatusFilter, selectedStaff, searchTerm]);

  // Pagination calculation
  const totalRawRecords = filteredRawRecords.length;
  const totalPages = pageSize === -1 ? 1 : Math.max(1, Math.ceil(totalRawRecords / pageSize));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedRawRecords = useMemo(() => {
    if (pageSize === -1) return filteredRawRecords;
    const start = (safeCurrentPage - 1) * pageSize;
    return filteredRawRecords.slice(start, start + pageSize);
  }, [filteredRawRecords, safeCurrentPage, pageSize]);

  // Status counts for filtering buttons
  const rawStatusCounts = useMemo(() => {
    let ci = 0;
    let pending = 0;
    let canceled = 0;
    currentWeekRawRecords.forEach(r => {
      if (selectedStaff !== 'all' && r.staffName !== selectedStaff) return;
      if (searchTerm && !(
        r.fbName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.phone.includes(searchTerm) ||
        r.staffName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.service.toLowerCase().includes(searchTerm.toLowerCase())
      )) return;

      if (r.status === 'check_in') ci++;
      else if (r.status === 'hủy') canceled++;
      else pending++;
    });
    return { all: ci + pending + canceled, ci, pending, canceled };
  }, [currentWeekRawRecords, selectedStaff, searchTerm]);

  const handlePrevWeek = () => {
    if (selectedWeekId === 'all') return;
    if (currentWeekIndex === 0) {
      setSelectedWeekId('all');
    } else if (currentWeekIndex > 0) {
      setSelectedWeekId(activeWeeks[currentWeekIndex - 1].id);
    }
  };

  const handleNextWeek = () => {
    if (selectedWeekId === 'all') {
      if (activeWeeks.length > 0) setSelectedWeekId(activeWeeks[0].id);
      return;
    }
    if (currentWeekIndex < activeWeeks.length - 1) {
      setSelectedWeekId(activeWeeks[currentWeekIndex + 1].id);
    }
  };

  // Dynamic staff data according to selected user filter, month & week
  const staffData = useMemo(() => {
    // 1. ƯU TIÊN TUYỆT ĐỐI: Dữ liệu nạp/cập nhật mới (nhiều hơn)
    if (customImportedRecords && customImportedRecords.length > 0) {
      return buildStaffDataFromRaw(customImportedRecords);
    }

    // 2. Tháng 10/2026 (hoặc bất kỳ tháng nào chưa có dữ liệu):
    if (selectedMonthId !== '2026-09') {
      return EMPTY_STAFF_DATA;
    }

    // 3. Tháng 9 (User 724):
    if (activeUserFilter === '724') {
      if (selectedWeekId === 'all') {
        return USER_724_STAFF_DATA; // Tổng cộng đúng 1.418 Khách Đến (CI)!
      }
      return USER_724_WEEKS_DATA[selectedWeekId] || USER_724_WEEKS_DATA.w4;
    }

    return selectedWeekId === 'all'
      ? SEPTEMBER_CUMULATIVE_TO_DATE
      : (SEPTEMBER_WEEKS_DATA[selectedWeekId] || INITIAL_STAFF_DATA);
  }, [activeUserFilter, selectedMonthId, selectedWeekId, customImportedRecords]);

  // Filter staff rows
  const filteredStaff = useMemo(() => {
    return staffData.filter(s => {
      const matchStaff = selectedStaff === 'all' || s.name === selectedStaff;
      const matchSearch = !searchTerm || s.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchStaff && matchSearch;
    });
  }, [staffData, selectedStaff, searchTerm]);

  // Calculate dynamic totals for the filtered staff
  const dynamicTotals = useMemo(() => {
    const keys: (keyof StaffPerformance['services'])[] = [
      'trietNachNu', 'trietBikiniNu', 'trietNachNam', 'trietBikiniNam',
      'tamTrang', 'munMatCSD', 'triThamNu', 'seoRo', 'lcl'
    ];

    const result: Record<string, { rdt: number; ci: number; rate: number | null }> = {};

    keys.forEach(k => {
      let rdt = 0;
      let ci = 0;
      filteredStaff.forEach(s => {
        const item = s.services[k];
        if (item) {
          rdt += item.rdt;
          ci += item.ci;
        }
      });
      result[k] = {
        rdt,
        ci,
        rate: rdt > 0 ? Number(((ci / rdt) * 100).toFixed(1)) : null
      };
    });

    return result;
  }, [filteredStaff]);

  // Overall totals across all services
  const grandTotal = useMemo(() => {
    let grandRDT = 0;
    let grandCI = 0;
    Object.values(dynamicTotals).forEach(item => {
      grandRDT += item.rdt;
      grandCI += item.ci;
    });
    const grandRate = grandRDT > 0 ? (grandCI / grandRDT) * 100 : 0;
    return {
      rdt: grandRDT,
      ci: grandCI,
      rate: grandRate
    };
  }, [dynamicTotals]);

  // Dynamic Top Sale calculation based on actual staff performance of active week/month
  const topSale = useMemo(() => {
    if (filteredStaff.length === 0) return null;

    const ranked = filteredStaff.map(staff => {
      let staffCI = 0;
      let staffRDT = 0;
      Object.values(staff.services).forEach(s => {
        staffCI += s.ci;
        staffRDT += s.rdt;
      });
      const rate = staffRDT > 0 ? (staffCI / staffRDT) * 100 : 0;
      return {
        staff,
        name: staff.name,
        ci: staffCI,
        rdt: staffRDT,
        rate
      };
    });

    // Rank by Check-in (CI) as primary, rate as secondary
    ranked.sort((a, b) => {
      if (b.ci !== a.ci) return b.ci - a.ci;
      return b.rate - a.rate;
    });

    return ranked[0];
  }, [filteredStaff]);

  // Helper to format percentage with color badges
  const renderRateBadge = (rate: number | null) => {
    if (rate === null) {
      return <span className="text-slate-400 font-mono text-[10px] xl:text-[11px] whitespace-nowrap">#DIV/0</span>;
    }
    let colorClass = 'text-amber-700 bg-amber-50';
    if (rate >= 50) colorClass = 'text-emerald-700 bg-emerald-50 font-bold';
    else if (rate < 35) colorClass = 'text-rose-700 bg-rose-50 font-bold';

    return (
      <span className={`px-1 py-0.5 rounded text-[10px] xl:text-[11px] font-mono leading-none inline-block whitespace-nowrap ${colorClass}`}>
        {rate.toFixed(1).replace('.', ',')}%
      </span>
    );
  };

  // Handle parsing pasted CSV / Raw data from the Little Garden page
  const handleImportData = () => {
    if (!csvPasteText.trim()) {
      setImportMessage('Vui lòng dán nội dung CSV hoặc dữ liệu bảng');
      return;
    }

    try {
      const lines = csvPasteText.trim().split('\n');
      if (lines.length < 2) {
        setImportMessage('Dữ liệu quá ngắn hoặc không đúng định dạng');
        return;
      }

      const firstLine = lines[0].toLowerCase();
      const delimiter = firstLine.includes('\t') ? '\t' : firstLine.includes(';') ? ';' : ',';
      const headerCols = firstLine.split(delimiter).map(c => c.trim().replace(/^["']|["']$/g, ''));
      
      const hasHeader = headerCols.some(c => 
        c.includes('nv') || c.includes('nhân') || c.includes('sale') || 
        c.includes('dịch') || c.includes('service') || c.includes('trạng') || 
        c.includes('khách') || c.includes('sđt') || c.includes('phone')
      );

      let staffColIdx = headerCols.findIndex(c => c.includes('nv') || c.includes('nhân viên') || c.includes('sale') || c.includes('staff'));
      let serviceColIdx = headerCols.findIndex(c => c.includes('dịch vụ') || c.includes('service') || c.includes('phễu'));
      let statusColIdx = headerCols.findIndex(c => c.includes('trạng thái') || c.includes('status') || c.includes('tình trạng') || c.includes('kết quả'));
      let phoneColIdx = headerCols.findIndex(c => c.includes('sđt') || c.includes('điện thoại') || c.includes('phone'));
      let nameColIdx = headerCols.findIndex(c => c.includes('tên') || c.includes('khách') || c.includes('customer') || c.includes('fb'));
      let dateColIdx = headerCols.findIndex(c => c.includes('ngày') || c.includes('date'));

      if (staffColIdx === -1) staffColIdx = 4;
      if (serviceColIdx === -1) serviceColIdx = 3;
      if (statusColIdx === -1) statusColIdx = 5;
      if (phoneColIdx === -1) phoneColIdx = 1;
      if (nameColIdx === -1) nameColIdx = 2;

      const dataLines = hasHeader ? lines.slice(1) : lines;
      const parsed: RawCustomerRecord[] = [];

      dataLines.forEach((line, idx) => {
        if (!line.trim()) return;
        const cols = line.split(delimiter);
        const clean = cols.map(c => c.trim().replace(/^["']|["']$/g, ''));
        if (clean.length >= 2) {
          const staffName = clean[staffColIdx] || clean[4] || clean[3] || clean[0] || 'Nhân viên';
          const service = clean[serviceColIdx] || clean[3] || clean[2] || clean[1] || 'Triệt nách (nữ)';
          const statusRaw = (clean[statusColIdx] || clean[5] || clean[4] || '').toLowerCase();
          let status: RawCustomerRecord['status'] = 'hẹn';
          if (statusRaw.includes('đến') || statusRaw.includes('check') || statusRaw.includes('ci')) {
            status = 'check_in';
          } else if (statusRaw.includes('hủy') || statusRaw.includes('bùng')) {
            status = 'hủy';
          } else if (statusRaw.includes('chưa')) {
            status = 'chưa_đến';
          }

          parsed.push({
            id: `import-${Date.now()}-${idx}`,
            stt: idx + 1,
            phone: clean[phoneColIdx] || clean[1] || `09${Math.floor(10000000 + Math.random() * 90000000)}`,
            fbName: clean[nameColIdx] || clean[2] || `Khách hàng ${idx + 1}`,
            service,
            staffName,
            status,
            date: (dateColIdx !== -1 && clean[dateColIdx]) ? clean[dateColIdx] : new Date().toISOString().slice(0, 10)
          });
        }
      });

      if (parsed.length > 0) {
        updateCustomRecords(parsed);
        const distinctStaff = Array.from(new Set(parsed.map(p => p.staffName)));
        setRealtimeNotification(`✅ Đã nạp thành công ${parsed.length} khách! Nhận diện ${distinctStaff.length} nhân sự và lập tức cập nhật bảng báo cáo.`);
      }

      setImportMessage(`✅ Đã phân tích thành công ${parsed.length} dòng dữ liệu! Toàn bộ bảng báo cáo đã cập nhật ngay lập tức.`);
      setTimeout(() => {
        setIsImportModalOpen(false);
        setImportMessage(null);
      }, 1200);
    } catch (e: any) {
      setImportMessage('Lỗi phân tích: ' + e.message);
    }
  };

  // Export Table to CSV
  const handleExportCSV = () => {
    const headers = ['NV sale'];
    SERVICES_CONFIG.forEach(s => {
      headers.push(`${s.name} (RDT)`, `${s.name} (CI)`, `${s.name} (%)`);
    });

    const rows = filteredStaff.map(s => {
      const row = [`"${s.name}"`];
      SERVICES_CONFIG.forEach(svc => {
        const m = s.services[svc.key];
        row.push(m.rdt.toString(), m.ci.toString(), m.rate !== null ? `"${m.rate}%"` : '"#DIV/0"');
      });
      return row.join(',');
    });

    const csvContent = "\uFEFF" + [headers.join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Bao_Cao_Phieu_LittleGardenSpa_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Control Bar */}
      {/* Main Control Panel: Compact Header, Filters & Center View Tabs */}
      <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-200 p-4 md:p-5 shadow-xs">
        {/* Compact Header Top Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-200 flex items-center gap-1.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                <span>User 724 (Sheet 28)</span>
              </span>
              <span className="text-xs text-blue-900 font-semibold px-2 py-0.5 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-1 shadow-2xs">
                <Calendar className="w-3 h-3 text-blue-600" />
                <span>
                  {selectedWeekId === 'all' 
                    ? `🌟 Cả ${currentMonth.name} (${currentWeek.dateRange})`
                    : `${currentWeek.name} (${currentWeek.dateRange})`
                  }
                </span>
              </span>
            </div>
            <h2 className="text-lg md:text-xl font-black text-slate-900 mt-1 tracking-tight">
              {selectedWeekId === 'all'
                ? `Báo Cáo Tổng Hợp Cả ${currentMonth.name.toUpperCase()} (TỔNG CÁC TUẦN)`
                : `Báo Cáo Chỉ Số Phễu Dịch Vụ — ${currentWeek.name}`
              }
            </h2>
            <p className="text-[11px] text-slate-500 mt-0.5 flex flex-wrap items-center gap-1">
              <span>Dữ liệu:</span>
              <a 
                href={`https://airtable.littlegardenspa.vn/?filter_user=${activeUserFilter}&sheet_id=28`} 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-600 hover:text-blue-800 underline font-mono font-medium"
              >
                airtable.littlegardenspa.vn/?filter_user={activeUserFilter}&sheet_id=28
              </a>
            </p>
          </div>

          {/* Compact Action Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Trạng thái kết nối tự động với Little Garden */}
            {connectionStatus.isConnected ? (
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-300 rounded-xl px-2.5 py-1 text-xs shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="font-bold text-emerald-900 text-[11px] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Đã kết nối:</span>
                  <strong className="text-emerald-950 font-extrabold max-w-[120px] truncate" title={connectionStatus.userEmail || ''}>
                    {connectionStatus.userEmail}
                  </strong>
                </span>
                <button
                  onClick={() => handleServerSync(true)}
                  disabled={isSyncingWithLink}
                  className="ml-1 px-2 py-0.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white transition-all cursor-pointer flex items-center gap-1 text-[10px] font-bold shadow-2xs disabled:opacity-50"
                  title="Bấm để kéo dữ liệu mới nhất từ Little Garden ngay bây giờ"
                >
                  <RefreshCw className={`w-2.5 h-2.5 ${isSyncingWithLink ? 'animate-spin' : ''}`} />
                  <span>{isSyncingWithLink ? 'Đang lấy...' : 'Đồng bộ'}</span>
                </button>
                <button
                  onClick={handleDisconnect}
                  className="text-slate-400 hover:text-rose-600 font-semibold p-0.5 hover:bg-rose-50 rounded cursor-pointer ml-0.5"
                  title="Ngắt kết nối tài khoản"
                >
                  <LogOut className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => { setIsLoginModalOpen(true); setLoginError(null); }}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-sm flex items-center gap-1.5 transition-all cursor-pointer animate-pulse hover:animate-none"
                title="Bấm để đăng nhập và tự động kéo dữ liệu 24/7"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>🔐 Đăng Nhập Little Garden (Tự Động Kéo)</span>
              </button>
            )}

            <button
              onClick={() => setIsArchiveModalOpen(true)}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 border border-indigo-200 text-indigo-900 hover:bg-indigo-100 transition-all flex items-center gap-1 shadow-2xs cursor-pointer"
              title="Quản lý đóng sổ và lưu trữ dữ liệu các tháng"
            >
              <FolderArchive className="w-3.5 h-3.5 text-indigo-600" />
              <span>Kho Lưu Trữ</span>
              {currentMonth.isArchived && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              )}
            </button>
            <button
              onClick={() => setIsImportModalOpen(true)}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all flex items-center gap-1 shadow-xs cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Nạp Dữ Liệu</span>
            </button>
            <button
              onClick={handleExportCSV}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 transition-all flex items-center gap-1 shadow-2xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Xuất Excel</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-2 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-600 hover:bg-slate-100 border border-slate-300 transition-all flex items-center gap-1 cursor-pointer"
              title="In báo cáo"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Real-time Notification Banner */}
        {realtimeNotification && (
          <div className="mt-3 p-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-sm flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0" />
              <span>{realtimeNotification}</span>
            </div>
            <button 
              onClick={() => setRealtimeNotification(null)} 
              className="text-white hover:text-emerald-100 font-bold text-xs p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Filters Toolbar */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5 text-xs">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Bộ Lọc Tháng */}
            <div className="flex items-center gap-1.5 bg-indigo-50/70 border border-indigo-200 rounded-xl px-2.5 py-1 shadow-2xs">
              <span className="font-bold text-indigo-950 flex items-center gap-1">
                <FolderArchive className="w-3.5 h-3.5 text-indigo-600" /> Tháng:
              </span>
              <select
                value={selectedMonthId}
                onChange={(e) => handleMonthChange(e.target.value)}
                className="bg-transparent font-bold text-indigo-950 focus:outline-none cursor-pointer pr-1"
              >
                {months.map(m => (
                  <option key={m.id} value={m.id}>
                    {m.name} {m.isArchived ? '🔒 (Đã lưu)' : '(Đang mở)'}
                  </option>
                ))}
              </select>
            </div>

            {/* Bộ Lọc Tuần */}
            <div className="flex items-center gap-1 bg-blue-50/70 border border-blue-200 rounded-xl px-2 py-1 shadow-2xs">
              <span className="font-bold text-blue-900 flex items-center gap-1 pl-1">
                <Calendar className="w-3.5 h-3.5 text-blue-600" /> Tuần:
              </span>
              <button
                onClick={handlePrevWeek}
                disabled={selectedWeekId === 'all'}
                className="p-0.5 text-blue-700 hover:text-blue-950 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer rounded hover:bg-blue-100 transition-colors"
                title="Tuần trước"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <select
                value={selectedWeekId}
                onChange={(e) => setSelectedWeekId(e.target.value)}
                className="bg-transparent font-bold text-blue-950 focus:outline-none cursor-pointer pr-1"
              >
                <option value="all">🌟 Cả Tháng (Tổng Lũy Kế 5 Tuần)</option>
                {activeWeeks.map(w => (
                  <option key={w.id} value={w.id}>
                    {w.fullLabel}
                  </option>
                ))}
              </select>
              <button
                onClick={handleNextWeek}
                disabled={selectedWeekId === activeWeeks[activeWeeks.length - 1]?.id}
                className="p-0.5 text-blue-700 hover:text-blue-950 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer rounded hover:bg-blue-100 transition-colors"
                title="Tuần sau"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Filter by Staff */}
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-600 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-slate-500" /> Nhân viên:
              </span>
              <select
                value={selectedStaff}
                onChange={(e) => setSelectedStaff(e.target.value)}
                className="bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1 text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
              >
                <option value="all">Tất cả ({staffData.length} nhân sự)</option>
                {staffData.map(s => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
            <input
              type="text"
              placeholder="Tìm nhân viên, KH, SĐT..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-7 pr-2.5 py-1 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 w-44 md:w-52"
            />
          </div>
        </div>

        {/* VIEW MODE TABS - CANH GIỮA HOÀN HẢO & THIẾT KẾ ĐẸP TINH GỌN */}
        <div className="flex justify-center pt-3 pb-0.5 border-t border-slate-100 mt-3">
          <div className="bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/90 shadow-inner flex flex-wrap items-center justify-center gap-1.5">
            {/* Tab 1: Bảng Báo Cáo */}
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-white text-blue-700 shadow-sm border border-slate-200/80 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <FileSpreadsheet className={`w-4 h-4 ${viewMode === 'matrix' ? 'text-blue-600' : 'text-slate-400'}`} />
              <span>Bảng Báo Cáo</span>
            </button>

            {/* Tab 2: Thẻ Đánh Giá Từng Bạn */}
            <button
              onClick={() => setViewMode('cards')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-white text-blue-700 shadow-sm border border-slate-200/80 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Users className={`w-4 h-4 ${viewMode === 'cards' ? 'text-blue-600' : 'text-slate-400'}`} />
              <span>Thẻ Đánh Giá Từng Bạn</span>
            </button>

            {/* Tab 3: Dữ Liệu Khách Thô */}
            <button
              onClick={() => setViewMode('raw_table')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                viewMode === 'raw_table'
                  ? 'bg-white text-blue-700 shadow-sm border border-slate-200/80 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Layers className={`w-4 h-4 ${viewMode === 'raw_table' ? 'text-blue-600' : 'text-slate-400'}`} />
              <span>Dữ Liệu Khách Thô (Raw Leads)</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Highlight Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 block">Tổng Lead Hẹn (RDT)</span>
          <div className="text-2xl font-black text-slate-900 mt-1">
            {grandTotal.rdt} <span className="text-xs font-normal text-slate-500">khách</span>
          </div>
          <span className="text-[11px] text-blue-600 mt-1 inline-block font-medium">
            {filteredStaff.length} nhân sự tham gia
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 block">Tổng Khách Đến (CI)</span>
          <div className="text-2xl font-black text-emerald-600 mt-1">
            {grandTotal.ci} <span className="text-xs font-normal text-slate-500">khách đã đến</span>
          </div>
          <span className="text-[11px] text-emerald-700 mt-1 inline-block font-medium">
            Số khách thực tế check-in tại spa
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 block">Tỷ Lệ Check-in Tổng</span>
          <div className="text-2xl font-black text-slate-900 mt-1 flex items-baseline gap-2">
            <span className={grandTotal.rate >= 45 ? 'text-emerald-600' : 'text-rose-600'}>
              {grandTotal.rate.toFixed(1)}%
            </span>
            <span className="text-xs font-normal text-slate-400">KPI ≥ 48%</span>
          </div>
          <span className="text-[11px] text-rose-500 mt-1 inline-block font-medium">
            {grandTotal.rdt - grandTotal.ci} khách hủy / bùng hẹn
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 block">Top Sale Xuất Sắc</span>
            {topSale && topSale.ci > 0 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                Check-in Cao Nhất
              </span>
            )}
          </div>
          {topSale && topSale.ci > 0 ? (
            <>
              <div className="text-sm font-black text-slate-900 mt-1.5 truncate" title={topSale.name}>
                🥇 {topSale.name}
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">
                {topSale.ci} khách đến • Tỷ lệ {topSale.rate.toFixed(1)}% ({topSale.rdt} hẹn)
              </span>
            </>
          ) : (
            <>
              <div className="text-sm font-bold text-slate-400 mt-2 truncate">
                Chưa có dữ liệu ({currentMonth.name})
              </div>
              <span className="text-[11px] text-slate-400 font-medium block">
                Chờ nhân viên nhập liệu trên link
              </span>
            </>
          )}
        </div>
      </div>

      {/* Thông báo khi tháng chưa có số liệu */}
      {selectedMonthId !== '2026-09' && grandTotal.rdt === 0 && (
        <div className="p-4 bg-amber-50/90 border border-amber-200 rounded-2xl text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
            <div>
              <span className="font-bold">{currentMonth.name} chưa có số liệu trong link Airtable Little Garden Spa.</span>
              <p className="text-amber-800 text-[11px] mt-0.5">
                Toàn bộ bảng đang để trống (0 RDT, 0 CI, #DIV/0). Khi công ty bắt đầu cập nhật dữ liệu Tháng 10, bạn chỉ cần bấm nút <strong>"Nạp Dữ Liệu Thô (CSV / Paste)"</strong> để nạp số liệu!
              </p>
            </div>
          </div>
          <button
            onClick={() => handleMonthChange('2026-09')}
            className="px-3.5 py-1.5 rounded-xl bg-white border border-amber-300 font-bold text-amber-900 hover:bg-amber-100 text-xs shrink-0 cursor-pointer shadow-2xs"
          >
            Quay lại Tháng 9 (Đầy đủ số liệu)
          </button>
        </div>
      )}

      {/* VIEW 1: MATRIX TABLE (EXACT MATCH OF SPREADSHEET IN USER'S IMAGE) */}
      {viewMode === 'matrix' && (
        <div className="bg-white rounded-3xl border border-slate-300 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-sm sm:text-base">
                  {selectedWeekId === 'all'
                    ? `BÁO CÁO TỔNG HỢP CẢ ${currentMonth.name.toUpperCase()} (TỔNG CÁC TUẦN) - TEAM NGÂN`
                    : `BÁO CÁO CHỈ SỐ ${currentWeek.name.toUpperCase()} (CÓ TÍNH LTPS) - TEAM NGÂN`
                  }
                </h3>
              </div>
              <div className="text-xs text-slate-300 mt-1 flex flex-wrap items-center gap-3">
                <span>
                  <strong>Tuần:</strong> {selectedWeekId === 'all' ? `Tổng Toàn ${currentMonth.name}` : `${currentWeek.name} (${currentWeek.dateRange})`}
                </span>
                <span>•</span>
                <span><strong>Thời gian:</strong> {currentWeek.dateRange}</span>
                {currentWeek.isCurrent && (
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                    Tuần Hiện Tại
                  </span>
                )}
              </div>
            </div>
            <div className="text-xs text-slate-300">
              * RDT = Ra data/Hẹn | CI = Check-in đến spa | % = Tỷ lệ chuyển đổi
            </div>
          </div>

          {/* Banner thông báo dữ liệu mẫu & Nút kết nối dữ liệu thật */}
          {!connectionStatus.isConnected && !customImportedRecords && (
            <div className="mx-3.5 my-2.5 p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-blue-500/15 to-emerald-500/20 border border-amber-400/40 text-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] tracking-wide shrink-0">
                  DỮ LIỆU MINH HỌA
                </span>
                <span className="text-slate-200">
                  Bảng đang hiển thị số mẫu. Để lọc và hiển thị <strong>danh sách nhân viên & số liệu thật 100% từ link</strong>:
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setIsLoginModalOpen(true); setLoginError(null); }}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md flex items-center gap-1.5 transition-all cursor-pointer hover:scale-102"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Kéo Số Liệu Thật Từ Link</span>
                </button>
                <button
                  onClick={() => setIsImportModalOpen(true)}
                  className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs transition-all cursor-pointer"
                >
                  Dán Dữ Liệu
                </button>
              </div>
            </div>
          )}

          <div className="w-full overflow-hidden">
            <table className="w-full text-xs border-collapse table-fixed">
              {/* Định nghĩa kích thước cố định cân đối tuyệt đối theo % màn hình - 100% khớp, không bao giờ tràn hay hiện thanh cuộn */}
              <colgroup>
                <col className="w-[12%]" />
                {SERVICES_CONFIG.map(svc => (
                  <React.Fragment key={svc.key}>
                    <col className="w-[2.8%]" />
                    <col className="w-[2.8%]" />
                    <col className="w-[4.17%]" />
                  </React.Fragment>
                ))}
              </colgroup>

              <thead>
                {/* Level 1: Category headers - Phân tách rõ ràng từng dịch vụ */}
                <tr className="bg-[#1e3a5f] text-white font-bold border-b border-slate-400">
                  <th className="py-2 px-2 text-left sticky left-0 bg-[#1e3a5f] z-20 border-r-2 border-slate-400 text-xs">
                    Phễu
                  </th>
                  {SERVICES_CONFIG.map((svc, sIdx) => (
                    <th 
                      key={svc.key} 
                      colSpan={3} 
                      className={`py-2 px-0.5 text-center text-[10px] xl:text-xs font-bold tracking-tight border-r-2 border-slate-400 truncate ${
                        sIdx % 2 === 0 ? 'bg-[#1e3a5f]' : 'bg-[#193252]'
                      }`}
                      title={svc.name}
                    >
                      {svc.name}
                    </th>
                  ))}
                </tr>

                {/* Level 2: Sub-columns (RDT, CI, %) - Cân đối, màu sắc rõ ràng */}
                <tr className="bg-[#172b44] text-slate-100 font-bold border-b border-slate-400">
                  <th className="py-1.5 px-2 text-left sticky left-0 bg-[#172b44] z-20 border-r-2 border-slate-400 text-xs">
                    NV sale
                  </th>
                  {SERVICES_CONFIG.map(svc => (
                    <React.Fragment key={svc.key}>
                      <th className="py-1.5 px-0.5 text-center border-r border-slate-600 font-semibold text-[10px] xl:text-[11px] text-slate-300">
                        RDT
                      </th>
                      <th className="py-1.5 px-0.5 text-center border-r border-slate-600 font-bold text-[10px] xl:text-[11px] text-emerald-300 bg-emerald-950/20">
                        CI
                      </th>
                      <th className="py-1.5 px-0.5 text-center border-r-2 border-slate-400 font-bold text-[10px] xl:text-[11px] text-amber-300">
                        %
                      </th>
                    </React.Fragment>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {filteredStaff.map((staff, idx) => (
                  <tr 
                    key={staff.id} 
                    className={`hover:bg-blue-50/70 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}
                  >
                    {/* Staff Name Column - Cố định gọn gàng không bị kéo dài rỗng */}
                    <td 
                      className="py-2 px-2 font-semibold text-slate-900 sticky left-0 bg-inherit z-10 border-r-2 border-slate-300 shadow-xs whitespace-nowrap text-[11px] xl:text-xs truncate"
                      title={staff.name}
                    >
                      {staff.name}
                    </td>

                    {/* Service Columns - Cân đối từng nhóm dịch vụ */}
                    {SERVICES_CONFIG.map((svc, sIdx) => {
                      const item = staff.services[svc.key];
                      const isOddGroup = sIdx % 2 === 1;
                      return (
                        <React.Fragment key={svc.key}>
                          <td className={`py-1.5 px-0.5 text-center border-r border-slate-200 font-medium text-slate-700 text-[10px] xl:text-xs tabular-nums whitespace-nowrap ${
                            isOddGroup ? 'bg-slate-50/30' : ''
                          }`}>
                            {item.rdt}
                          </td>
                          <td className={`py-1.5 px-0.5 text-center border-r border-slate-200 font-bold text-emerald-600 text-[10px] xl:text-xs tabular-nums whitespace-nowrap bg-emerald-50/30`}>
                            {item.ci}
                          </td>
                          <td className={`py-1.5 px-0.5 text-center border-r-2 border-slate-300 ${
                            isOddGroup ? 'bg-slate-50/30' : ''
                          }`}>
                            {renderRateBadge(item.rate)}
                          </td>
                        </React.Fragment>
                      );
                    })}
                  </tr>
                ))}

                {/* TOTAL ROW (MATCHING SPREADSHEET BOTTOM ROW) */}
                <tr className="bg-slate-200 font-black text-slate-900 border-t-2 border-slate-400">
                  <td className="py-2.5 px-2 text-left sticky left-0 bg-slate-200 z-10 border-r-2 border-slate-400 font-black uppercase tracking-wider text-[11px] xl:text-xs">
                    TỔNG
                  </td>
                  {SERVICES_CONFIG.map((svc, sIdx) => {
                    const totalItem = dynamicTotals[svc.key];
                    const isOddGroup = sIdx % 2 === 1;
                    return (
                      <React.Fragment key={svc.key}>
                        <td className={`py-2 px-0.5 text-center border-r border-slate-300 font-black text-[10px] xl:text-xs tabular-nums whitespace-nowrap ${
                          isOddGroup ? 'bg-slate-200/90' : ''
                        }`}>
                          {totalItem.rdt}
                        </td>
                        <td className="py-2 px-0.5 text-center border-r border-slate-300 font-black text-emerald-700 text-[10px] xl:text-xs tabular-nums whitespace-nowrap bg-emerald-100/40">
                          {totalItem.ci}
                        </td>
                        <td className="py-2 px-0.5 text-center border-r-2 border-slate-400 font-black">
                          {renderRateBadge(totalItem.rate)}
                        </td>
                      </React.Fragment>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 font-semibold text-emerald-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Xanh: Đạt chuẩn (≥ 50%)
              </span>
              <span className="flex items-center gap-1 font-semibold text-amber-700">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Vàng: Trung bình (35 - 49%)
              </span>
              <span className="flex items-center gap-1 font-semibold text-rose-700">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Đỏ: Báo động (&lt; 35%)
              </span>
            </div>
            <div className="font-medium text-slate-600">
              Tổng RDT: <strong>{grandTotal.rdt}</strong> | Tổng CI: <strong>{grandTotal.ci}</strong> | Tỷ lệ chung: <strong>{grandTotal.rate.toFixed(1)}%</strong>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: DETAILED CARDS FOR EACH STAFF */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStaff.map((staff, idx) => {
            let totalRDT = 0;
            let totalCI = 0;
            Object.values(staff.services).forEach(m => {
              totalRDT += m.rdt;
              totalCI += m.ci;
            });
            const avgRate = totalRDT > 0 ? (totalCI / totalRDT) * 100 : null;

            return (
              <div key={staff.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition-all">
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{staff.name}</h4>
                      <span className="text-[11px] text-slate-500">Sale Team Ngân</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Tỷ lệ chung</span>
                    {avgRate !== null ? (
                      <span className={`text-base font-black ${avgRate >= 45 ? 'text-emerald-600' : avgRate < 35 ? 'text-rose-600' : 'text-amber-600'}`}>
                        {avgRate.toFixed(1)}%
                      </span>
                    ) : (
                      <span className="text-sm font-bold text-slate-400 font-mono">
                        #DIV/0
                      </span>
                    )}
                  </div>
                </div>

                {/* Key services highlights */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                    <span className="text-slate-600">Triệt nách (nữ):</span>
                    <span className="font-semibold text-slate-900">
                      {staff.services.trietNachNu.ci} / {staff.services.trietNachNu.rdt} ({staff.services.trietNachNu.rate ? `${staff.services.trietNachNu.rate}%` : 'N/A'})
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                    <span className="text-slate-600">Triệt bikini (nữ):</span>
                    <span className="font-semibold text-slate-900">
                      {staff.services.trietBikiniNu.ci} / {staff.services.trietBikiniNu.rdt} ({staff.services.trietBikiniNu.rate ? `${staff.services.trietBikiniNu.rate}%` : 'N/A'})
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                    <span className="text-slate-600">Tắm Trắng:</span>
                    <span className="font-semibold text-slate-900">
                      {staff.services.tamTrang.ci} / {staff.services.tamTrang.rdt} ({staff.services.tamTrang.rate ? `${staff.services.tamTrang.rate}%` : 'N/A'})
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Tổng RDT: <strong>{totalRDT}</strong></span>
                  <span className="text-emerald-700 font-bold">Check-in: {totalCI}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 3: RAW CUSTOMER RECORDS (SIMULATING AIRTABLE LITTLE GARDEN SPA) */}
      {viewMode === 'raw_table' && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          {/* Header & Filter Controls */}
          <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-sm">
                    Danh Sách Khách Hàng Thô (Airtable Little Garden Spa)
                  </h3>
                  <span className="px-2 py-0.5 rounded-lg text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-200 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-blue-600" />
                    {currentWeek.name} ({currentWeek.dateRange})
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Các lượt khách đăng ký phễu có ngày hẹn trong khoảng từ <strong>{currentWeek.dateRange}</strong>
                </p>
              </div>

              {/* Page Size Selector */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-600 font-medium">Hiển thị mỗi trang:</span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="bg-white border border-slate-300 rounded-xl px-2.5 py-1 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
                >
                  <option value={20}>20 khách / trang</option>
                  <option value={25}>25 khách / trang</option>
                  <option value={50}>50 khách / trang</option>
                  <option value={100}>100 khách / trang</option>
                  <option value={200}>200 khách / trang</option>
                  <option value={-1}>Toàn bộ danh sách</option>
                </select>
              </div>
            </div>

            {/* Quick Status Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/60">
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => setLeadStatusFilter('all')}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    leadStatusFilter === 'all'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  Tất cả ({rawStatusCounts.all})
                </button>
                <button
                  onClick={() => setLeadStatusFilter('check_in')}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    leadStatusFilter === 'check_in'
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'bg-white text-emerald-800 hover:bg-emerald-50 border border-emerald-200'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Đã Check-in ({rawStatusCounts.ci})
                </button>
                <button
                  onClick={() => setLeadStatusFilter('chưa_đến')}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    leadStatusFilter === 'chưa_đến'
                      ? 'bg-amber-600 text-white shadow-2xs'
                      : 'bg-white text-amber-800 hover:bg-amber-50 border border-amber-200'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Đã hẹn / Chưa đến ({rawStatusCounts.pending})
                </button>
                <button
                  onClick={() => setLeadStatusFilter('hủy')}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    leadStatusFilter === 'hủy'
                      ? 'bg-rose-600 text-white shadow-2xs'
                      : 'bg-white text-rose-800 hover:bg-rose-50 border border-rose-200'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  Hủy hẹn ({rawStatusCounts.canceled})
                </button>
              </div>

              <div className="text-xs text-slate-600 font-medium">
                Tìm thấy: <strong className="text-blue-700 font-bold">{totalRawRecords}</strong> khách
                {totalRawRecords > 0 && pageSize !== -1 && (
                  <span className="text-slate-500 ml-1">
                    (Trang {safeCurrentPage}/{totalPages})
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Table Data */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-slate-100/70 border-b border-slate-200 text-slate-600 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-2.5 px-3 text-center">STT</th>
                  <th className="py-2.5 px-3 text-left">Số Điện Thoại</th>
                  <th className="py-2.5 px-3 text-left">Tên Facebook</th>
                  <th className="py-2.5 px-3 text-left">Dịch vụ Đăng Ký</th>
                  <th className="py-2.5 px-3 text-left">NV Sale Phụ Trách</th>
                  <th className="py-2.5 px-3 text-center">Trạng Thái</th>
                  <th className="py-2.5 px-3 text-center">Ngày Hẹn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginatedRawRecords.length > 0 ? (
                  paginatedRawRecords.map((rec, index) => {
                    const rowNumber = pageSize === -1 
                      ? index + 1 
                      : (safeCurrentPage - 1) * pageSize + index + 1;
                    return (
                      <tr key={`lead-${rec.id || index}-${index}`} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-2.5 px-3 text-center font-mono font-medium text-slate-500">{rowNumber}</td>
                        <td className="py-2.5 px-3 font-mono font-semibold text-slate-900">{rec.phone || '—'}</td>
                        <td className="py-2.5 px-3 font-medium text-slate-800">{rec.fbName}</td>
                        <td className="py-2.5 px-3 text-blue-700 font-medium">{rec.service}</td>
                        <td className="py-2.5 px-3 font-semibold text-slate-700">{rec.staffName}</td>
                        <td className="py-2.5 px-3 text-center">
                          {rec.status === 'check_in' ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Check-in</span>
                          ) : rec.status === 'hủy' ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">Hủy hẹn</span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">Đã hẹn</span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-center text-slate-700 font-mono text-[11px] font-semibold bg-blue-50/30">
                          {rec.date}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-xs text-slate-500">
                      Không có khách hàng nào trong <strong>{currentWeek.name}</strong> thỏa mãn bộ lọc hiện tại.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls Bar */}
          {pageSize !== -1 && totalPages > 1 && (
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-slate-600 font-medium">
                Đang hiển thị <strong>{(safeCurrentPage - 1) * pageSize + 1}</strong> - <strong>{Math.min(safeCurrentPage * pageSize, totalRawRecords)}</strong> trong tổng số <strong>{totalRawRecords}</strong> khách hàng
              </div>

              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={safeCurrentPage === 1}
                  className="px-2 py-1 rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed font-medium text-[11px] cursor-pointer"
                  title="Về trang đầu tiên"
                >
                  « Đầu
                </button>
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={safeCurrentPage === 1}
                  className="p-1.5 rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  title="Trang trước"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                {/* Dynamic Page Buttons (Unique Sliding Window) */}
                {(() => {
                  const maxButtons = 5;
                  let start = Math.max(1, safeCurrentPage - Math.floor(maxButtons / 2));
                  let end = start + maxButtons - 1;
                  if (end > totalPages) {
                    end = totalPages;
                    start = Math.max(1, end - maxButtons + 1);
                  }
                  const pages: number[] = [];
                  for (let p = start; p <= end; p++) {
                    pages.push(p);
                  }

                  return pages.map(pNum => (
                    <button
                      key={`page-btn-${pNum}`}
                      onClick={() => setCurrentPage(pNum)}
                      className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        safeCurrentPage === pNum
                          ? 'bg-blue-600 text-white shadow-2xs'
                          : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {pNum}
                    </button>
                  ));
                })()}

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={safeCurrentPage === totalPages}
                  className="p-1.5 rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  title="Trang sau"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={safeCurrentPage === totalPages}
                  className="px-2 py-1 rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed font-medium text-[11px] cursor-pointer"
                  title="Đến trang cuối cùng"
                >
                  Cuối »
                </button>

                {/* Quick Page Jump */}
                <div className="flex items-center gap-1 ml-2 pl-2 border-l border-slate-300 text-[11px]">
                  <span>Đi đến trang:</span>
                  <input
                    type="number"
                    min={1}
                    max={totalPages}
                    value={jumpPageInput}
                    onChange={(e) => setJumpPageInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const val = parseInt(jumpPageInput, 10);
                        if (!isNaN(val) && val >= 1 && val <= totalPages) {
                          setCurrentPage(val);
                        }
                      }
                    }}
                    placeholder={safeCurrentPage.toString()}
                    className="w-12 px-1.5 py-0.5 bg-white border border-slate-300 rounded text-center text-xs font-bold focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => {
                      const val = parseInt(jumpPageInput, 10);
                      if (!isNaN(val) && val >= 1 && val <= totalPages) {
                        setCurrentPage(val);
                      }
                    }}
                    className="px-2 py-0.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-semibold text-[11px] cursor-pointer"
                  >
                    Đi
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODAL IMPORT RAW DATA */}
      {isImportModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full p-6 shadow-2xl relative">
            <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Upload className="w-5 h-5 text-blue-600" />
              Nạp Dữ Liệu Thô Từ Little Garden Spa
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Dán nội dung từ file CSV vừa tải về hoặc copy từ bảng <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">airtable.littlegardenspa.vn/?filter_user=358&sheet_id=28</code>
            </p>

            <textarea
              value={csvPasteText}
              onChange={(e) => setCsvPasteText(e.target.value)}
              rows={8}
              placeholder={`Dán nội dung bảng hoặc CSV vào đây. Ví dụ:
STT,SĐT,Tên Facebook,Dịch vụ,NV sale,Trạng thái
1,0868531084,user7dkt17aghv,Triệt nách (nữ),Nguyễn Thị Khánh Vân,Check-in
...`}
              className="w-full text-xs font-mono p-3 bg-slate-50 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />

            {importMessage && (
              <div className={`mt-2 text-xs p-2.5 rounded-xl font-medium ${importMessage.startsWith('✅') ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
                {importMessage}
              </div>
            )}

            <div className="mt-4 flex items-center justify-between gap-2">
              <div>
                {customImportedRecords && (
                  <button
                    onClick={() => {
                      updateCustomRecords(null);
                      setImportMessage('✅ Đã khôi phục dữ liệu gốc ban đầu (3.482 khách)!');
                      setRealtimeNotification('🔄 Đã khôi phục dữ liệu gốc ban đầu.');
                      setTimeout(() => {
                        setIsImportModalOpen(false);
                        setImportMessage(null);
                      }, 1000);
                    }}
                    className="text-xs text-rose-600 hover:text-rose-800 font-semibold underline cursor-pointer"
                  >
                    Khôi phục dữ liệu gốc (3.482 khách)
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsImportModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  onClick={handleImportData}
                  className="px-5 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  Xác Nhận & Cập Nhật Báo Cáo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL QUẢN LÝ KHO LƯU TRỮ THÁNG & SAO LƯU */}
      {isArchiveModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <FolderArchive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Kho Lưu Trữ Dữ Liệu & Đóng Sổ Các Tháng
                  </h3>
                  <p className="text-xs text-slate-500">
                    Bảo vệ dữ liệu không bị mất khi hệ thống Little Garden Spa xóa file tháng cũ
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsArchiveModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer text-xs font-bold p-1"
              >
                ✕
              </button>
            </div>

            {/* Explanation box */}
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl mb-4 text-xs text-emerald-900 leading-relaxed">
              <div className="font-bold flex items-center gap-1.5 text-emerald-950 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                Dữ Liệu Tháng Cũ Luôn Được Giữ Nguyên Vẹn 100%
              </div>
              Khi công ty Little Garden Spa chuyển sang Tháng 10 và làm mới/xóa dữ liệu Tháng 9 trên trang web, dữ liệu Tháng 9 của bạn đã được <strong>đóng sổ và lưu trữ an toàn trên Dashboard này</strong>. Bạn có thể chuyển đổi giữa các tháng hoặc tải file sao lưu về máy bất cứ lúc nào!
            </div>

            {/* List of Months */}
            <div className="space-y-2.5 mb-5 max-h-60 overflow-y-auto pr-1">
              {months.map(m => (
                <div 
                  key={m.id} 
                  className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                    m.id === selectedMonthId ? 'bg-indigo-50/70 border-indigo-300' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{m.name}</span>
                      {m.isArchived ? (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" /> Đã đóng sổ & Lưu trữ an toàn
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          Đang hoạt động (Nhập liệu)
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">
                      Gồm {m.weeks.length} tuần • {m.archivedAt ? `Lưu lúc: ${m.archivedAt}` : 'Chưa khóa sổ'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleArchiveMonth(m.id)}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 cursor-pointer"
                    >
                      {m.isArchived ? 'Mở lại sổ' : '🔒 Khóa sổ tháng'}
                    </button>
                    {m.id !== selectedMonthId && (
                      <button
                        onClick={() => {
                          handleMonthChange(m.id);
                          setIsArchiveModalOpen(false);
                        }}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                      >
                        Xem tháng này
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Create new month form */}
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 mb-4">
              <span className="text-xs font-bold text-slate-700 block mb-2">Thêm Tháng Mới (Ví dụ Tháng 11/2026):</span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Nhập tên tháng: Tháng 11/2026..."
                  value={newMonthName}
                  onChange={(e) => setNewMonthName(e.target.value)}
                  className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={handleCreateMonth}
                  disabled={!newMonthName.trim()}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                >
                  + Tạo Tháng
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={handleDownloadFullBackup}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                Tải Toàn Bộ Bản Sao Lưu (.json) Về Máy Tính
              </button>

              <button
                onClick={() => setIsArchiveModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
      {/* MODAL KẾT NỐI TỰ ĐỘNG VỚI LITTLE GARDEN SPA */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Kết Nối Tự Động Với Little Garden Spa
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tự động kéo số liệu khách hàng 24/7 từ link Airtable nội bộ
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Tab selection */}
            <div className="flex rounded-xl bg-slate-100 p-1 mb-4 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLoginTab('credentials')}
                className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  loginTab === 'credentials'
                    ? 'bg-white text-emerald-800 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                Đăng Nhập Tài Khoản
              </button>
              <button
                type="button"
                onClick={() => setLoginTab('cookie')}
                className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  loginTab === 'cookie'
                    ? 'bg-white text-emerald-800 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Key className="w-3.5 h-3.5" />
                Dán Cookie Session
              </button>
            </div>

            {loginError && (
              <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            {loginTab === 'credentials' ? (
              <form onSubmit={handleLoginSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email đăng nhập Little Garden Spa
                  </label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="ví dụ: yourname@littlegardenspa.vn"
                    required
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mật khẩu (Password)
                  </label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Nhập mật khẩu tài khoản của bạn"
                    required
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl text-[11px] text-emerald-900 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Cơ chế hoạt động & Bảo mật:</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Hệ thống sẽ kết nối ngầm tới máy chủ Little Garden để lấy phiên làm việc. Sau khi đăng nhập, hệ thống sẽ tự động quét và cập nhật số liệu mới nhất mỗi 60 giây hoàn toàn tự động!
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsLoginModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    disabled={isLoggingIn}
                    className="px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isLoggingIn && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                    <span>{isLoggingIn ? 'Đang kết nối...' : 'Đăng Nhập & Bật Tự Động Kéo'}</span>
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleCookieSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Chuỗi Cookie phiên (laravel_session)
                  </label>
                  <textarea
                    rows={4}
                    value={loginCookieText}
                    onChange={(e) => setLoginCookieText(e.target.value)}
                    placeholder="Dán mã cookie laravel_session=... của bạn vào đây"
                    required
                    className="w-full px-3 py-2 text-xs font-mono border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 space-y-1">
                  <div className="font-bold text-slate-800">💡 Cách lấy cookie khi bạn đã đăng nhập ở tab kia:</div>
                  <ol className="list-decimal pl-4 space-y-0.5">
                    <li>Trên tab Little Garden, nhấn <strong>F12</strong> (hoặc chuột phải chọn Kiểm tra).</li>
                    <li>Vào mục <strong>Application</strong> (Ứng dụng) &rarr; <strong>Cookies</strong> &rarr; chọn <code>airtable.littlegardenspa.vn</code>.</li>
                    <li>Copy giá trị của dòng <code>laravel_session</code> và dán vào đây!</li>
                  </ol>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsLoginModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    disabled={isLoggingIn}
                    className="px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isLoggingIn && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                    <span>{isLoggingIn ? 'Đang xác thực...' : 'Xác Nhận Cookie'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
