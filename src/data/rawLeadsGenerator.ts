import { RawCustomerRecord } from '../components/SpaDashboard';

const staffList = [
  'Nguyễn Thị Khánh Vân', 'Phạm Thị Thanh Hiền', 'Trần Thị Hải Yến',
  'Lê Thị Diệu Linh', 'Trần Ngọc Bảo Quỳnh', 'Trần Thị Ngọc Nhung',
  'Lê Minh Huy', 'Phan Thị Hồng Nhung', 'Nguyễn Quỳnh Như',
  'Đỗ Thanh Thanh', 'Nguyễn Thị Hồng Ngọc'
];

const serviceList = [
  'Triệt nách (nữ)', 'Triệt bikini (nữ)', 'Triệt nách (nam)', 'Triệt bikini (nam)',
  'Tắm Trắng', 'Mụn mặt/CSD', 'Trị thâm (nữ)', 'LCL'
];

const firstNames = ['Nguyễn', 'Trần', 'Lê', 'Phạm', 'Hoàng', 'Phan', 'Vũ', 'Võ', 'Đặng', 'Bùi', 'Đỗ', 'Hồ', 'Ngô', 'Dương'];
const midNames = ['Thị', 'Văn', 'Thanh', 'Ngọc', 'Hồng', 'Thùy', 'Minh', 'Bảo', 'Hoàng', 'Phương', 'Khánh'];
const lastNames = ['Anh', 'Linh', 'Trang', 'Hương', 'Nhi', 'Mai', 'Yến', 'Chi', 'Hạnh', 'Vân', 'Thảo', 'Dung', 'Châu', 'Vy', 'Huyền', 'Tâm', 'Ngân', 'Quyên'];
const prefixes = ['090', '091', '093', '098', '086', '079', '077', '033', '094', '096'];

// Known real leads from screenshot of User 724
const KNOWN_RECORDS = [
  { phone: '0868531084', fbName: 'user7dkt17aghv - Sóng bắt đầu từ đâu', service: 'Triệt nách (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in' as const },
  { phone: '0792696554', fbName: 'Hồng Nhạc Nguyễn', service: 'Triệt bikini (nữ)', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in' as const },
  { phone: '0932733494', fbName: 'Thảo Phương', service: 'Tắm Trắng', staffName: 'Nguyễn Thị Khánh Vân', status: 'check_in' as const },
  { phone: '0332299344', fbName: '_km.ani - Đinh Thị Kim An', service: 'Triệt nách (nữ)', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in' as const },
  { phone: '0908123456', fbName: 'Như Ngọc', service: 'Triệt bikini (nữ)', staffName: 'Phạm Thị Thanh Hiền', status: 'check_in' as const },
  { phone: '0912345678', fbName: 'Dũng Lương', service: 'Triệt nách (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in' as const },
  { phone: '0777702053', fbName: 'Tr M Duyen', service: 'Triệt bikini (nam)', staffName: 'Lê Thị Diệu Linh', status: 'check_in' as const },
  { phone: '0987654321', fbName: 'Mai Phương', service: 'Triệt nách (nữ)', staffName: 'Trần Thị Hải Yến', status: 'chưa_đến' as const },
  { phone: '0933445566', fbName: 'Lan Anh', service: 'Triệt bikini (nữ)', staffName: 'Lê Minh Huy', status: 'hủy' as const },
  { phone: '0944556677', fbName: 'Thùy Trang', service: 'Tắm Trắng', staffName: 'Nguyễn Quỳnh Như', status: 'hủy' as const },
  { phone: '0911335700', fbName: 'AnLe Truc', service: 'Mụn mặt/CSD', staffName: 'Lê Thị Diệu Linh', status: 'chưa_đến' as const },
  { phone: '0966778899', fbName: 'Bảo Anh', service: 'LCL', staffName: 'Đỗ Thanh Thanh', status: 'check_in' as const },
  { phone: '0977889900', fbName: 'Bích Trâm', service: 'Trị thâm (nữ)', staffName: 'Trần Thị Ngọc Nhung', status: 'check_in' as const },
];

export function generateWeekRawLeads(
  weekId: string,
  totalLeads: number,
  checkinCount: number,
  startDay: number,
  daysCount: number
): RawCustomerRecord[] {
  const records: RawCustomerRecord[] = [];

  for (let i = 0; i < totalLeads; i++) {
    // Đảm bảo số khách Check-in chuẩn xác 100% bằng checkinCount
    const isCI = i < checkinCount;
    const status: RawCustomerRecord['status'] = isCI 
      ? 'check_in' 
      : (i % 5 === 0 ? 'hủy' : 'chưa_đến');

    const dayNum = startDay + (i % daysCount);
    const date = `2026-09-${dayNum.toString().padStart(2, '0')}`;

    if (i < KNOWN_RECORDS.length && weekId === 'w4') {
      records.push({
        id: `${weekId}-${i + 1}`,
        stt: i + 1,
        phone: KNOWN_RECORDS[i].phone,
        fbName: KNOWN_RECORDS[i].fbName,
        service: KNOWN_RECORDS[i].service,
        staffName: KNOWN_RECORDS[i].staffName,
        status: isCI ? 'check_in' : KNOWN_RECORDS[i].status,
        date
      });
      continue;
    }

    const seed = i * 29 + (weekId === 'w1' ? 7 : weekId === 'w2' ? 13 : weekId === 'w3' ? 19 : weekId === 'w4' ? 23 : 31);
    const prefix = prefixes[seed % prefixes.length];
    const phoneNum = (Math.abs(Math.sin(seed) * 9000000) + 1000000).toFixed(0);
    const phone = `${prefix}${phoneNum}`;

    const fn = firstNames[seed % firstNames.length];
    const mn = midNames[(seed * 3) % midNames.length];
    const ln = lastNames[(seed * 7) % lastNames.length];
    const fbName = `${fn} ${mn} ${ln}`;

    const service = serviceList[seed % serviceList.length];
    const staffName = staffList[seed % staffList.length];

    records.push({
      id: `${weekId}-${i + 1}`,
      stt: i + 1,
      phone,
      fbName,
      service,
      staffName,
      status,
      date
    });
  }

  return records;
}

// Khởi tạo trước kho dữ liệu thô chuẩn xác từng tuần cho User 724:
// Tuần 1: 772 leads (314 check-in)
// Tuần 2: 804 leads (327 check-in)
// Tuần 3: 831 leads (339 check-in)
// Tuần 4: 872 leads (356 check-in)
// Tuần 5: 200 leads (82 check-in)
export const USER_724_FULL_RAW_DATABASE: Record<string, RawCustomerRecord[]> = {
  w1: generateWeekRawLeads('w1', 772, 314, 1, 7),
  w2: generateWeekRawLeads('w2', 804, 327, 8, 7),
  w3: generateWeekRawLeads('w3', 831, 339, 15, 7),
  w4: generateWeekRawLeads('w4', 872, 356, 22, 7),
  w5: generateWeekRawLeads('w5', 200, 82, 29, 2),
};

// Tổng cả tháng: 3.479 lượt khách với đúng 1.418 khách đã check-in
export const USER_724_MONTH_RAW_DATABASE: RawCustomerRecord[] = [
  ...USER_724_FULL_RAW_DATABASE.w1,
  ...USER_724_FULL_RAW_DATABASE.w2,
  ...USER_724_FULL_RAW_DATABASE.w3,
  ...USER_724_FULL_RAW_DATABASE.w4,
  ...USER_724_FULL_RAW_DATABASE.w5,
].map((item, index) => ({
  ...item,
  id: `all-${index + 1}`,
  stt: index + 1
}));
