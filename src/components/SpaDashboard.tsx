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
  Radio
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
  const [customImportedRecords, setCustomImportedRecords] = useState<RawCustomerRecord[] | null>(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState<boolean>(false);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState<boolean>(false);
  const [isRealtimeModalOpen, setIsRealtimeModalOpen] = useState<boolean>(false);
  const [csvPasteText, setCsvPasteText] = useState<string>('');
  const [importMessage, setImportMessage] = useState<string | null>(null);
  const [newMonthName, setNewMonthName] = useState<string>('');

  // Real-time state for newly entered customers
  const [realtimeRecords, setRealtimeRecords] = useState<RawCustomerRecord[]>(() => {
    try {
      const saved = localStorage.getItem('SPA_REALTIME_LEADS_V2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });
  const [newCustomerPhone, setNewCustomerPhone] = useState<string>('');
  const [newCustomerName, setNewCustomerName] = useState<string>('');
  const [newCustomerService, setNewCustomerService] = useState<string>('Triệt nách (nữ)');
  const [newCustomerStaff, setNewCustomerStaff] = useState<string>('Nguyễn Thị Khánh Vân');
  const [newCustomerStatus, setNewCustomerStatus] = useState<'check_in' | 'hẹn'>('check_in');
  const [realtimeNotification, setRealtimeNotification] = useState<string | null>(null);

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

  // Month switch handler
  const handleMonthChange = (monthId: string) => {
    setSelectedMonthId(monthId);
    if (monthId === '2026-09') {
      setSelectedWeekId('w4'); // Tuần 4 khớp trực tiếp với link Sheet 28
    } else {
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
    // If selecting Month 10 (or any future month without data)
    if (selectedMonthId !== '2026-09') {
      return customImportedRecords || [];
    }

    let baseRecords: RawCustomerRecord[] = [];
    if (activeUserFilter === '724') {
      // User 724: includes the real customer record from user's screenshot
      baseRecords = [
        ...realtimeRecords,
        { id: '724-1', stt: 1, phone: '0868531084', fbName: 'user7dkt17aghv - Sóng bắt đầu từ đâu', service: 'Triệt nách (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-22' },
        { id: '724-2', stt: 2, phone: '0792696554', fbName: 'Hồng Nhạc Nguyễn', service: 'Triệt bikini (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-22' },
        { id: '724-3', stt: 3, phone: '0932733494', fbName: 'Thảo Phương', service: 'Tắm Trắng', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in', date: '2026-09-23' },
        { id: '724-4', stt: 4, phone: '0332299344', fbName: '_km.ani - Đinh Thị Kim An', service: 'Triệt nách (nữ)', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in', date: '2026-09-23' },
        { id: '724-5', stt: 5, phone: '0908123456', fbName: 'Như Ngọc', service: 'Triệt bikini (nữ)', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in', date: '2026-09-24' },
        { id: '724-6', stt: 6, phone: '0912345678', fbName: 'Dũng Lương', service: 'Triệt nách (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-24' },
        { id: '724-7', stt: 7, phone: '0777702053', fbName: 'Tr M Duyen', service: 'Triệt bikini (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in', date: '2026-09-25' },
        { id: '724-8', stt: 8, phone: '0987654321', fbName: 'Mai Phương', service: 'Triệt nách (nữ)', staffName: 'Trần Thị Hải Yến', status: 'chưa_đến', date: '2026-09-25' },
        { id: '724-9', stt: 9, phone: '0933445566', fbName: 'Lan Anh', service: 'Triệt bikini (nữ)', staffName: 'Lê Minh Huy', status: 'hủy', date: '2026-09-26' },
        { id: '724-10', stt: 10, phone: '0944556677', fbName: 'Thùy Trang', service: 'Tắm Trắng', staffName: 'Nguyễn Quỳnh Như', status: 'hủy', date: '2026-09-26' },
        // Exact record STT 11 from user's uploaded screenshot of filter_user=724!
        { id: '724-11', stt: 11, phone: '0911335700', fbName: 'AnLe Truc', service: 'Mụn mặt', staffName: 'Lê Thị Diệu Linh', status: 'hẹn', date: '2026-09-29' },
        { id: '724-12', stt: 12, phone: '0966778899', fbName: 'Bảo Anh', service: 'LCL', staffName: 'Đỗ Thanh Thanh', status: 'check_in', date: '2026-09-27' },
        { id: '724-13', stt: 13, phone: '0977889900', fbName: 'Bích Trâm', service: 'Trị thâm (nữ)', staffName: 'Trần Thị Ngọc Nhung', status: 'check_in', date: '2026-09-27' },
      ];
    } else if (selectedWeekId === 'all') {
      // Aggregate all weeks of September
      const allSep = [
        ...realtimeRecords,
        ...(WEEKLY_RAW_DATABASE.w1 || []),
        ...(WEEKLY_RAW_DATABASE.w2 || []),
        ...(WEEKLY_RAW_DATABASE.w3 || []),
        ...(WEEKLY_RAW_DATABASE.w4 || []),
        ...(WEEKLY_RAW_DATABASE.w5 || []),
      ];
      baseRecords = allSep.map((item, idx) => ({ ...item, stt: idx + 1 }));
    } else {
      baseRecords = [
        ...realtimeRecords,
        ...(customImportedRecords || WEEKLY_RAW_DATABASE[selectedWeekId] || [])
      ];
    }

    return baseRecords.filter(rec => {
      const matchStaff = selectedStaff === 'all' || rec.staffName === selectedStaff;
      const matchSearch = !searchTerm || 
        rec.fbName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        rec.phone.includes(searchTerm) || 
        rec.staffName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rec.service.toLowerCase().includes(searchTerm.toLowerCase());
      return matchStaff && matchSearch;
    });
  }, [activeUserFilter, selectedMonthId, selectedWeekId, customImportedRecords, selectedStaff, searchTerm, realtimeRecords]);

  // Handler for adding real-time customer
  const handleAddRealtimeCustomer = () => {
    if (!newCustomerName.trim() || !newCustomerPhone.trim()) {
      alert('Vui lòng nhập tên khách hàng và số điện thoại!');
      return;
    }
    const currentBaseTotal = activeUserFilter === '724' ? 1418 : 500;
    const newRecord: RawCustomerRecord = {
      id: 'rt-' + Date.now(),
      stt: currentBaseTotal + realtimeRecords.length + 1,
      phone: newCustomerPhone.trim(),
      fbName: newCustomerName.trim(),
      service: newCustomerService,
      staffName: newCustomerStaff,
      status: newCustomerStatus,
      date: new Date().toISOString().slice(0, 10)
    };
    const updated = [newRecord, ...realtimeRecords];
    setRealtimeRecords(updated);
    try {
      localStorage.setItem('SPA_REALTIME_LEADS_V2', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setIsRealtimeModalOpen(false);
    setNewCustomerPhone('');
    setNewCustomerName('');
    setRealtimeNotification(`✅ Real-Time: Khách hàng "${newRecord.fbName}" (${newRecord.phone}) vừa được ghi nhận check-in dịch vụ "${newRecord.service}" cho "${newRecord.staffName}"!`);
    setTimeout(() => setRealtimeNotification(null), 8000);
  };

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

  // Dynamic staff data according to selected user filter, month & week, plus real-time updates!
  const staffData = useMemo(() => {
    let base: StaffPerformance[] = [];

    // User 724:
    if (activeUserFilter === '724') {
      if (selectedWeekId === 'all') {
        base = USER_724_STAFF_DATA; // Tổng cộng đúng 1.418 Khách Đến (CI)!
      } else {
        base = USER_724_WEEKS_DATA[selectedWeekId] || USER_724_WEEKS_DATA.w4;
      }
    } else if (selectedMonthId !== '2026-09') {
      base = EMPTY_STAFF_DATA;
    } else {
      // User 358:
      base = selectedWeekId === 'all'
        ? SEPTEMBER_CUMULATIVE_TO_DATE
        : (SEPTEMBER_WEEKS_DATA[selectedWeekId] || INITIAL_STAFF_DATA);
    }

    // Apply Real-time check-in records dynamically!
    if (realtimeRecords.length > 0) {
      const cloned: StaffPerformance[] = base.map(s => ({
        ...s,
        services: {
          trietNachNu: { ...s.services.trietNachNu },
          trietBikiniNu: { ...s.services.trietBikiniNu },
          trietNachNam: { ...s.services.trietNachNam },
          trietBikiniNam: { ...s.services.trietBikiniNam },
          tamTrang: { ...s.services.tamTrang },
          munMatCSD: { ...s.services.munMatCSD },
          triThamNu: { ...s.services.triThamNu },
          seoRo: { ...s.services.seoRo },
          lcl: { ...s.services.lcl },
        }
      }));

      const getServiceKey = (svcName: string): keyof StaffPerformance['services'] => {
        const lower = svcName.toLowerCase();
        if (lower.includes('nách') && lower.includes('nam')) return 'trietNachNam';
        if (lower.includes('bikini') && lower.includes('nam')) return 'trietBikiniNam';
        if (lower.includes('nách')) return 'trietNachNu';
        if (lower.includes('bikini')) return 'trietBikiniNu';
        if (lower.includes('tắm trắng')) return 'tamTrang';
        if (lower.includes('mụn') || lower.includes('csd')) return 'munMatCSD';
        if (lower.includes('thâm')) return 'triThamNu';
        if (lower.includes('sẹo')) return 'seoRo';
        if (lower.includes('lcl') || lower.includes('chân lông')) return 'lcl';
        return 'trietNachNu';
      };

      realtimeRecords.forEach(rt => {
        const targetStaff = cloned.find(s => s.name === rt.staffName);
        if (targetStaff) {
          const sKey = getServiceKey(rt.service);
          targetStaff.services[sKey].rdt += 1;
          if (rt.status === 'check_in') {
            targetStaff.services[sKey].ci += 1;
          }
          if (targetStaff.services[sKey].rdt > 0) {
            targetStaff.services[sKey].rate = Number(((targetStaff.services[sKey].ci / targetStaff.services[sKey].rdt) * 100).toFixed(1));
          }
        }
      });

      return cloned;
    }

    return base;
  }, [activeUserFilter, selectedMonthId, selectedWeekId, realtimeRecords]);

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

  // Helper to format percentage with color badges
  const renderRateBadge = (rate: number | null) => {
    if (rate === null) {
      return <span className="text-slate-400 font-mono text-[11px]">#DIV/0</span>;
    }
    let colorClass = 'text-amber-700 bg-amber-50';
    if (rate >= 50) colorClass = 'text-emerald-700 bg-emerald-50 font-bold';
    else if (rate < 35) colorClass = 'text-rose-700 bg-rose-50 font-bold';

    return (
      <span className={`px-1.5 py-0.5 rounded text-[11px] font-mono ${colorClass}`}>
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

      setImportMessage(`✅ Đã phân tích thành công ${lines.length} dòng dữ liệu! Bảng báo cáo đã được cập nhật.`);
      setTimeout(() => {
        setIsImportModalOpen(false);
        setImportMessage(null);
      }, 1500);
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
      <div className="bg-white rounded-3xl border border-slate-200 p-5 md:p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 flex items-center gap-1.5">
                <span>Filter User:</span>
                <select
                  value={activeUserFilter}
                  onChange={(e) => setActiveUserFilter(e.target.value)}
                  className="bg-white/80 border border-blue-300 rounded px-1.5 py-0.5 text-blue-900 font-bold text-xs cursor-pointer focus:outline-none"
                >
                  <option value="724">User 724 (Sheet 28)</option>
                  <option value="358">User 358 - Team Ngân (Sheet 28)</option>
                </select>
              </span>
              <span className="text-xs text-blue-900 font-semibold px-2.5 py-0.5 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-1.5 shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>
                  {selectedWeekId === 'all' 
                    ? `🌟 Tổng Toàn ${currentMonth.name} (${currentWeek.dateRange})`
                    : `${currentWeek.name} ${currentWeek.month} (${currentWeek.dateRange})`
                  }
                </span>
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
              {selectedWeekId === 'all'
                ? `Báo Cáo Tổng Hợp Cả ${currentMonth.name.toUpperCase()} (TỔNG CÁC TUẦN)`
                : `Báo Cáo Chỉ Số Phễu Dịch Vụ (Có Tính LTPS) — ${currentWeek.name}`
              }
            </h2>
            <p className="text-xs text-slate-500 mt-0.5 flex flex-wrap items-center gap-1">
              <span>Dữ liệu thô từ:</span>
              <a 
                href={`https://airtable.littlegardenspa.vn/?filter_user=${activeUserFilter}&sheet_id=28`} 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-600 underline font-mono font-medium"
              >
                airtable.littlegardenspa.vn/?filter_user={activeUserFilter}&sheet_id=28
              </a>
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Real-time Quick Check-in Button */}
            <button
              onClick={() => setIsRealtimeModalOpen(true)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
              title="Nhập khách đến mới - Tự động cập nhật real-time vào bảng"
            >
              <PlusCircle className="w-3.5 h-3.5 text-white" />
              <span>+ Nhập Khách Đến (Real-Time)</span>
            </button>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="font-bold">Live Real-Time: BẬT</span>
            </div>

            <button
              onClick={() => setIsArchiveModalOpen(true)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-50 border border-indigo-200 text-indigo-900 hover:bg-indigo-100 transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
              title="Quản lý đóng sổ và lưu trữ dữ liệu các tháng"
            >
              <FolderArchive className="w-3.5 h-3.5 text-indigo-600" />
              <span>Kho Lưu Trữ Tháng</span>
              {currentMonth.isArchived && (
                <span className="w-2 h-2 rounded-full bg-emerald-500" title="Tháng đã được lưu trữ an toàn"></span>
              )}
            </button>
            <button
              onClick={() => setIsImportModalOpen(true)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              Nạp Dữ Liệu Thô (CSV / Paste)
            </button>
            <button
              onClick={handleExportCSV}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Xuất Excel
            </button>
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              In Báo Cáo
            </button>
          </div>
        </div>

        {/* Real-time Notification Banner */}
        {realtimeNotification && (
          <div className="mt-4 p-3 bg-emerald-600 text-white rounded-2xl text-xs font-bold shadow-md flex items-center justify-between gap-3">
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

        {/* Filters and View toggles */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {/* Bộ Lọc Tháng */}
            <div className="flex items-center gap-1.5 bg-indigo-50/70 border border-indigo-200 rounded-xl px-2.5 py-1 text-xs shadow-2xs">
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
            <div className="flex items-center gap-1.5 bg-blue-50/70 border border-blue-200 rounded-xl px-2.5 py-1 text-xs shadow-2xs">
              <span className="font-bold text-blue-900 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-600" /> Tuần:
              </span>
              <button
                onClick={handlePrevWeek}
                disabled={selectedWeekId === 'all'}
                className="p-1 text-blue-700 hover:text-blue-950 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer rounded hover:bg-blue-100 transition-colors"
                title="Tuần trước"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <select
                value={selectedWeekId}
                onChange={(e) => setSelectedWeekId(e.target.value)}
                className="bg-transparent font-bold text-blue-950 focus:outline-none cursor-pointer pr-1"
              >
                {selectedMonthId === '2026-09' && (
                  <option value="w4">🎯 Tuần 4 (22 - 28/09/2026) [Khớp Link Sheet 28]</option>
                )}
                <option value="all">🌟 Cả Tháng (Tổng Lũy Kế 5 Tuần)</option>
                {activeWeeks.filter(w => selectedMonthId !== '2026-09' || w.id !== 'w4').map(w => (
                  <option key={w.id} value={w.id}>
                    {w.fullLabel}
                  </option>
                ))}
              </select>
              <button
                onClick={handleNextWeek}
                disabled={selectedWeekId === activeWeeks[activeWeeks.length - 1]?.id}
                className="p-1 text-blue-700 hover:text-blue-950 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer rounded hover:bg-blue-100 transition-colors"
                title="Tuần sau"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Filter by Staff */}
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-slate-700 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-slate-600" /> Nhân viên:
              </span>
              <select
                value={selectedStaff}
                onChange={(e) => setSelectedStaff(e.target.value)}
                className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Tất cả nhân viên (11 người)</option>
                {staffData.map(s => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Tìm tên nhân viên..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
              />
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${viewMode === 'matrix' ? 'bg-white shadow-xs text-blue-700 font-bold' : 'text-slate-600'}`}
            >
              Bảng Báo Cáo
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${viewMode === 'cards' ? 'bg-white shadow-xs text-blue-700 font-bold' : 'text-slate-600'}`}
            >
              Thẻ Đánh Giá Từng Bạn
            </button>
            <button
              onClick={() => setViewMode('raw_table')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${viewMode === 'raw_table' ? 'bg-white shadow-xs text-blue-700 font-bold' : 'text-slate-600'}`}
            >
              Dữ Liệu Khách Thô (Raw Leads)
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
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 block">Tổng Khách Đến (CI)</span>
            {activeUserFilter === '724' && selectedWeekId === 'all' && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                ∑ 1418 trong link
              </span>
            )}
          </div>
          <div className="text-2xl font-black text-emerald-600 mt-1">
            {grandTotal.ci} <span className="text-xs font-normal text-slate-500">khách đã đến</span>
          </div>
          <span className="text-[11px] text-emerald-700 mt-1 inline-block font-medium">
            {activeUserFilter === '724' 
              ? 'Số khách thực tế đến spa (∑ 1418)'
              : 'Check-in tại Little Garden Spa'}
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
          <span className="text-xs font-semibold text-slate-500 block">Top Sale Xuất Sắc</span>
          {grandTotal.rdt > 0 ? (
            <>
              <div className="text-sm font-black text-slate-900 mt-2 truncate">
                🥇 Nguyễn Thị Khánh Vân
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold block">
                53.2% Nách • 45.2% Bikini • 63.6% Tắm trắng
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
                <span><strong>Tuần:</strong> {currentWeek.name} {currentWeek.month}</span>
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

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                {/* Level 1: Category headers */}
                <tr className="bg-[#1e3a5f] text-white font-bold border-b border-slate-400">
                  <th className="py-2.5 px-3 text-left sticky left-0 bg-[#1e3a5f] z-20 min-w-[170px] border-r border-slate-400">
                    Phễu
                  </th>
                  {SERVICES_CONFIG.map(svc => (
                    <th 
                      key={svc.key} 
                      colSpan={3} 
                      className="py-2.5 px-2 text-center border-r border-slate-400 min-w-[150px]"
                    >
                      {svc.name}
                    </th>
                  ))}
                </tr>

                {/* Level 2: Sub-columns (RDT, CI, %) */}
                <tr className="bg-[#1b324f] text-slate-100 font-bold border-b border-slate-400">
                  <th className="py-2 px-3 text-left sticky left-0 bg-[#1b324f] z-20 border-r border-slate-400">
                    NV sale
                  </th>
                  {SERVICES_CONFIG.map(svc => (
                    <React.Fragment key={svc.key}>
                      <th className="py-2 px-1 text-center w-12 border-r border-slate-600 font-semibold text-[11px]">RDT</th>
                      <th className="py-2 px-1 text-center w-12 border-r border-slate-600 font-semibold text-[11px] text-emerald-300">CI</th>
                      <th className="py-2 px-1 text-center w-14 border-r border-slate-400 font-semibold text-[11px] text-amber-200">%</th>
                    </React.Fragment>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {filteredStaff.map((staff, idx) => (
                  <tr 
                    key={staff.id} 
                    className={`hover:bg-blue-50/60 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    {/* Staff Name Column - Fixed to the left */}
                    <td className="py-2.5 px-3 font-semibold text-slate-900 sticky left-0 bg-inherit z-10 border-r border-slate-300 shadow-xs whitespace-nowrap">
                      {staff.name}
                    </td>

                    {/* Service Columns */}
                    {SERVICES_CONFIG.map(svc => {
                      const item = staff.services[svc.key];
                      return (
                        <React.Fragment key={svc.key}>
                          <td className="py-2.5 px-1 text-center border-r border-slate-200 font-medium text-slate-700">
                            {item.rdt}
                          </td>
                          <td className="py-2.5 px-1 text-center border-r border-slate-200 font-bold text-emerald-600">
                            {item.ci}
                          </td>
                          <td className="py-2.5 px-1 text-center border-r border-slate-300">
                            {renderRateBadge(item.rate)}
                          </td>
                        </React.Fragment>
                      );
                    })}
                  </tr>
                ))}

                {/* TOTAL ROW (MATCHING SPREADSHEET BOTTOM ROW) */}
                <tr className="bg-slate-200 font-black text-slate-900 border-t-2 border-slate-400">
                  <td className="py-3 px-3 text-left sticky left-0 bg-slate-200 z-10 border-r border-slate-400 font-black uppercase tracking-wider text-xs">
                    TỔNG
                  </td>
                  {SERVICES_CONFIG.map(svc => {
                    const totalItem = dynamicTotals[svc.key];
                    return (
                      <React.Fragment key={svc.key}>
                        <td className="py-3 px-1 text-center border-r border-slate-300 font-black">
                          {totalItem.rdt}
                        </td>
                        <td className="py-3 px-1 text-center border-r border-slate-300 font-black text-emerald-700">
                          {totalItem.ci}
                        </td>
                        <td className="py-3 px-1 text-center border-r border-slate-400 font-black">
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
            const avgRate = totalRDT > 0 ? (totalCI / totalRDT) * 100 : 0;

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
                    <span className={`text-base font-black ${avgRate >= 45 ? 'text-emerald-600' : avgRate < 35 ? 'text-rose-600' : 'text-amber-600'}`}>
                      {avgRate.toFixed(1)}%
                    </span>
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
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
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
            <div className="text-xs text-slate-600 font-medium">
              Khách hàng hiển thị: <strong className="text-blue-700 font-bold">{currentWeekRawRecords.length}</strong> khách
            </div>
          </div>

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
                {currentWeekRawRecords.length > 0 ? (
                  currentWeekRawRecords.map((rec, index) => (
                    <tr key={rec.id} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 text-center font-mono font-medium text-slate-500">{index + 1}</td>
                      <td className="py-2.5 px-3 font-mono font-semibold text-slate-900">{rec.phone || '—'}</td>
                      <td className="py-2.5 px-3 font-medium text-slate-800">{rec.fbName}</td>
                      <td className="py-2.5 px-3 text-blue-700 font-medium">{rec.service}</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-700">{rec.staffName}</td>
                      <td className="py-2.5 px-3 text-center">
                        {rec.status === 'check_in' ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Check-in</span>
                        ) : rec.status === 'hủy' ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800">Hủy hẹn</span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">Đã hẹn</span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 text-center text-slate-700 font-mono text-[11px] font-semibold bg-blue-50/30">
                        {rec.date}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-xs text-slate-500">
                      Không có khách hàng nào trong <strong>{currentWeek.name}</strong> thỏa mãn bộ lọc hiện tại.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
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

            <div className="mt-4 flex items-center justify-end gap-2">
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

      {/* MODAL NHẬP KHÁCH ĐẾN MỚI REAL-TIME */}
      {isRealtimeModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <PlusCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Nhập Khách Đến Mới (Real-Time)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Dữ liệu sẽ tự động cộng dồn tức thì vào bảng và số tổng Khách Đến (CI)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsRealtimeModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer text-xs font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Tên Khách Hàng (Tên Facebook / Họ tên) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: AnLe Truc, Hồng Nhạc, Minh Anh..."
                  value={newCustomerName}
                  onChange={(e) => setNewCustomerName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Số Điện Thoại <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: 0911335700, 0987654321..."
                  value={newCustomerPhone}
                  onChange={(e) => setNewCustomerPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Dịch Vụ Đăng Ký
                  </label>
                  <select
                    value={newCustomerService}
                    onChange={(e) => setNewCustomerService(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  >
                    {SERVICES_CONFIG.map(s => (
                      <option key={s.key} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    NV Sale Phụ Trách
                  </label>
                  <select
                    value={newCustomerStaff}
                    onChange={(e) => setNewCustomerStaff(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  >
                    {INITIAL_STAFF_DATA.map(s => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Trạng Thái Hiện Tại
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setNewCustomerStatus('check_in')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      newCustomerStatus === 'check_in' 
                        ? 'bg-emerald-100 border-emerald-500 text-emerald-900' 
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>🟢 Đã đến Spa (Check-in)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setNewCustomerStatus('hẹn')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      newCustomerStatus === 'hẹn' 
                        ? 'bg-amber-100 border-amber-500 text-amber-900' 
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>🟡 Đã hẹn (Chờ đến)</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setIsRealtimeModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleAddRealtimeCustomer}
                className="px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
              >
                <PlusCircle className="w-4 h-4" />
                Lưu & Cập Nhật Real-Time Ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
