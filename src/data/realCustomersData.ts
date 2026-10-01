// Dữ liệu khách hàng thật 100% được đồng bộ từ link Airtable Little Garden Spa
// Tổng số: 1464 khách hàng thật
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

export const REAL_LITTLE_GARDEN_RECORDS: RawCustomerRecord[] = [
  {
    "id": "lg-1790844340598-1",
    "stt": 1,
    "phone": "0901371208",
    "fbName": "Ai Yuri",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340599-2",
    "stt": 2,
    "phone": "0868072079",
    "fbName": "Yến Linh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340599-3",
    "stt": 3,
    "phone": "0832278222",
    "fbName": "Tóc Kẹp Hường Em",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340599-4",
    "stt": 4,
    "phone": "0902728075",
    "fbName": "Gấu B.E.A.R",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340599-5",
    "stt": 5,
    "phone": "0348061511",
    "fbName": "Thụy Trầm",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340600-6",
    "stt": 6,
    "phone": "0908957300",
    "fbName": "Quách Mỹ Ngân",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340600-7",
    "stt": 7,
    "phone": "0769263183",
    "fbName": "Sunny JN",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340600-8",
    "stt": 8,
    "phone": "0705383948",
    "fbName": "Thi Nguyễn",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340600-9",
    "stt": 9,
    "phone": "0938574476",
    "fbName": "Phuong Nguyên Ngoc",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340600-10",
    "stt": 10,
    "phone": "0905430989",
    "fbName": "Truong Tu Anh",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340600-11",
    "stt": 11,
    "phone": "0911335700",
    "fbName": "AnLe Truc",
    "service": "Mụn mặt",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340600-12",
    "stt": 12,
    "phone": "0916084359",
    "fbName": "Trần Ngọc Kiều",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340600-13",
    "stt": 13,
    "phone": "0902911299",
    "fbName": "Dung Hoàng",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340600-14",
    "stt": 14,
    "phone": "0889949106",
    "fbName": "Thư Nguyễn",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340600-15",
    "stt": 15,
    "phone": "0933979234",
    "fbName": "Di Rita",
    "service": "Mụn mặt",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340600-16",
    "stt": 16,
    "phone": "0909281211",
    "fbName": "Nguyen Tran",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340600-17",
    "stt": 17,
    "phone": "0931553165",
    "fbName": "Hoanh Bùi AF",
    "service": "Buffet Da 249K",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340600-18",
    "stt": 18,
    "phone": "0707770497",
    "fbName": "Cẩm Phú",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340601-19",
    "stt": 19,
    "phone": "0364481559",
    "fbName": "Honghanh An",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340601-20",
    "stt": 20,
    "phone": "0777904618",
    "fbName": "Yến",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340601-21",
    "stt": 21,
    "phone": "0937232323",
    "fbName": "Anhthu Nguyen",
    "service": "Mụn mặt",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340601-22",
    "stt": 22,
    "phone": "0918373573",
    "fbName": "Thanh Thuy",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340601-23",
    "stt": 23,
    "phone": "0985788847",
    "fbName": "Nguyen Ngoc",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340601-24",
    "stt": 24,
    "phone": "0902653799",
    "fbName": "sammitr02 - Sammi02 đồ bộ",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340601-25",
    "stt": 25,
    "phone": "0975037471",
    "fbName": "Thi Thu Cao",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340601-26",
    "stt": 26,
    "phone": "0909524955",
    "fbName": "Linh Diệu Phạm",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340601-27",
    "stt": 27,
    "phone": "0931023416",
    "fbName": "Thuý Loan",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "hủy",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340601-28",
    "stt": 28,
    "phone": "0919555909",
    "fbName": "Tien Ngo",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340601-29",
    "stt": 29,
    "phone": "0985667098",
    "fbName": "Nguyen Thanhthanh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340601-30",
    "stt": 30,
    "phone": "0988821410",
    "fbName": "Kim Anh Trương",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340601-31",
    "stt": 31,
    "phone": "0395673294",
    "fbName": "lolemva7chulun_",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340601-32",
    "stt": 32,
    "phone": "0384397094",
    "fbName": "Nguyễn Giang",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340602-33",
    "stt": 33,
    "phone": "0971560926",
    "fbName": "Thuy Nga Hoang",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340602-34",
    "stt": 34,
    "phone": "0987070404",
    "fbName": "Thanh Như",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340602-35",
    "stt": 35,
    "phone": "0927840718",
    "fbName": "imgotyouuuuuuuuuuu - Krubxie",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340602-36",
    "stt": 36,
    "phone": "0938334839",
    "fbName": "Gia Hào",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340602-37",
    "stt": 37,
    "phone": "0792043253",
    "fbName": "Lam Ai Huong",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340602-38",
    "stt": 38,
    "phone": "0933531863",
    "fbName": "Mai Khanh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340602-39",
    "stt": 39,
    "phone": "0963297670",
    "fbName": "Đặng Thủy Tiên",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340602-40",
    "stt": 40,
    "phone": "0905219588",
    "fbName": "Quynh Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340602-41",
    "stt": 41,
    "phone": "0354360118",
    "fbName": "Ngọc Trâm",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340602-42",
    "stt": 42,
    "phone": "0779751921",
    "fbName": "Khách 42",
    "service": "Triệt Bikini Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340602-43",
    "stt": 43,
    "phone": "0388510348",
    "fbName": "qnhidethuong - Tống Quỳnh Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340602-44",
    "stt": 44,
    "phone": "0932779031",
    "fbName": "Phụng Nga",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340603-45",
    "stt": 45,
    "phone": "0939923231",
    "fbName": "Khánh Đăng",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340603-46",
    "stt": 46,
    "phone": "0836387128",
    "fbName": "Khách 46",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340604-47",
    "stt": 47,
    "phone": "0902426363",
    "fbName": "Trần Trâm Thư",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340604-48",
    "stt": 48,
    "phone": "0857333743",
    "fbName": "maydinhpy - Maydinhpy - Nhà Nẫu Quán",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340604-49",
    "stt": 49,
    "phone": "0903771881",
    "fbName": "laihotel - Lai Hotel",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340604-50",
    "stt": 50,
    "phone": "0398187836",
    "fbName": "Ngọc Diễm",
    "service": "Buffet Da 249K",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340604-51",
    "stt": 51,
    "phone": "0937127399",
    "fbName": "Minh Xuân",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340604-52",
    "stt": 52,
    "phone": "0984362820",
    "fbName": "Mon Le",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340604-53",
    "stt": 53,
    "phone": "0399541520",
    "fbName": "Lê Đình Mỹ Linh",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340604-54",
    "stt": 54,
    "phone": "0357481224",
    "fbName": "Thi Hoàng",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340604-55",
    "stt": 55,
    "phone": "0387222624",
    "fbName": "Hồng Nkug",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340604-56",
    "stt": 56,
    "phone": "0387500704",
    "fbName": "Quang Vinh",
    "service": "Triệt Bikini Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340604-57",
    "stt": 57,
    "phone": "0964745157",
    "fbName": "Uyen Pham",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340604-58",
    "stt": 58,
    "phone": "0962940401",
    "fbName": "Bình Ann",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340605-59",
    "stt": 59,
    "phone": "0938448105",
    "fbName": "Nam Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340605-60",
    "stt": 60,
    "phone": "0906970795",
    "fbName": "Nhi Le",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340605-61",
    "stt": 61,
    "phone": "0978592820",
    "fbName": "Vinh Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340605-62",
    "stt": 62,
    "phone": "0964484427",
    "fbName": "Thùy Trang",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340605-63",
    "stt": 63,
    "phone": "0354161162",
    "fbName": "Hồng Duyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340605-64",
    "stt": 64,
    "phone": "0832254788",
    "fbName": "Lương Ánh Dương",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340605-65",
    "stt": 65,
    "phone": "0902461789",
    "fbName": "Duong Van",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340605-66",
    "stt": 66,
    "phone": "0792557552",
    "fbName": "Thảo Nguyên",
    "service": "Trị thâm (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340605-67",
    "stt": 67,
    "phone": "0774700444",
    "fbName": "Phương Nguyễn",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340605-68",
    "stt": 68,
    "phone": "0963365195",
    "fbName": "Yin Wei",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340605-69",
    "stt": 69,
    "phone": "0962640310",
    "fbName": "Bảo Linh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340605-70",
    "stt": 70,
    "phone": "0932484774",
    "fbName": "Truc Nguyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340605-71",
    "stt": 71,
    "phone": "0522056105",
    "fbName": "Bảo Thi",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340605-72",
    "stt": 72,
    "phone": "0967272705",
    "fbName": "Melany Jin",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340606-73",
    "stt": 73,
    "phone": "0906507009",
    "fbName": "Phượng Phan",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340606-74",
    "stt": 74,
    "phone": "0888283015",
    "fbName": "Oanh Pham",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340606-75",
    "stt": 75,
    "phone": "0948100983",
    "fbName": "Beo Mun",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340606-76",
    "stt": 76,
    "phone": "0389357921",
    "fbName": "cmtnguyl92 - cẩm tú",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340606-77",
    "stt": 77,
    "phone": "0938184767",
    "fbName": "Phúc",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340606-78",
    "stt": 78,
    "phone": "0376452432",
    "fbName": "Hông Vân",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340606-79",
    "stt": 79,
    "phone": "0773335534",
    "fbName": "Nhat Thu Dang",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340606-80",
    "stt": 80,
    "phone": "0373701514",
    "fbName": "Thắm Minhon",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340606-81",
    "stt": 81,
    "phone": "0347335542",
    "fbName": "Lê Trần Thiện Nhân",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340606-82",
    "stt": 82,
    "phone": "0902416769",
    "fbName": "Trần Phên",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340606-83",
    "stt": 83,
    "phone": "0968940505",
    "fbName": "Thuy Dung Nguyen",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340606-84",
    "stt": 84,
    "phone": "0938365284",
    "fbName": "Nguyễn Thanh Tuyền",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340606-85",
    "stt": 85,
    "phone": "0938011622",
    "fbName": "Trần Thị Phượng Quyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340606-86",
    "stt": 86,
    "phone": "0967586425",
    "fbName": "Quỳnh An",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340607-87",
    "stt": 87,
    "phone": "0901931801",
    "fbName": "Lý Ngọc Phương Trang",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340607-88",
    "stt": 88,
    "phone": "0988321454",
    "fbName": "Thanh Huệ",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340607-89",
    "stt": 89,
    "phone": "0988931201",
    "fbName": "Phạm Nga",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340607-90",
    "stt": 90,
    "phone": "0975391838",
    "fbName": "Trang Nguyễn",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340608-91",
    "stt": 91,
    "phone": "0399477324",
    "fbName": "Diễm Trinh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340608-92",
    "stt": 92,
    "phone": "0813965286",
    "fbName": "Nguyễn Ngọc Yến Linh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340608-93",
    "stt": 93,
    "phone": "0348175354",
    "fbName": "Diễm Kiều",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340608-94",
    "stt": 94,
    "phone": "0973940980",
    "fbName": "Ngọc Phương",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340608-95",
    "stt": 95,
    "phone": "0944324439",
    "fbName": "Valen Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340608-96",
    "stt": 96,
    "phone": "0975925038",
    "fbName": "Nguyễn Hà Vy",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340608-97",
    "stt": 97,
    "phone": "0909528463",
    "fbName": "Nguyen Thi Thu Hang",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340608-98",
    "stt": 98,
    "phone": "0969547517",
    "fbName": "Khánh Linh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340608-99",
    "stt": 99,
    "phone": "0399105340",
    "fbName": "Thúy Nga",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340608-100",
    "stt": 100,
    "phone": "0915075970",
    "fbName": "Thục Quyên",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340608-101",
    "stt": 101,
    "phone": "0349747052",
    "fbName": "Nguyễn Hiền",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340608-102",
    "stt": 102,
    "phone": "0976615543",
    "fbName": "Ni Ka",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340608-103",
    "stt": 103,
    "phone": "0908198832",
    "fbName": "Thảo Lâm",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340608-104",
    "stt": 104,
    "phone": "0902389235",
    "fbName": "Nga Socola",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "hủy",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340608-105",
    "stt": 105,
    "phone": "0973123585",
    "fbName": "Nguyễn Hằng",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340608-106",
    "stt": 106,
    "phone": "0903718167",
    "fbName": "Đỗ Quỳnh Như",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340608-107",
    "stt": 107,
    "phone": "0703594851",
    "fbName": "_dthanh._.ngann_ - ᥫ᭡.Շɦαทɦ_ทջâท˚.🎀༘⋆",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340608-108",
    "stt": 108,
    "phone": "0909468289",
    "fbName": "Lan Cao",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340609-109",
    "stt": 109,
    "phone": "0778793886",
    "fbName": "Nguyễn Phương Nhi",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340609-110",
    "stt": 110,
    "phone": "0945749252",
    "fbName": "Trịnh Gia Như",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340609-111",
    "stt": 111,
    "phone": "0346690975",
    "fbName": "Suri Loan",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340609-112",
    "stt": 112,
    "phone": "0852574431",
    "fbName": "qxu003 - LNQT🐷",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340609-113",
    "stt": 113,
    "phone": "0787919468",
    "fbName": "Nguyễn Thi Hoang Yen",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340609-114",
    "stt": 114,
    "phone": "0904787777",
    "fbName": "Hằng Đỗ",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340609-115",
    "stt": 115,
    "phone": "0363231132",
    "fbName": "Huỳnh Thị Kim Ngân",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340609-116",
    "stt": 116,
    "phone": "0768178111",
    "fbName": "t93barbershop - T93_Relax ❤️‍🔥",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340609-117",
    "stt": 117,
    "phone": "0866509273",
    "fbName": "MR HƯNG",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340609-118",
    "stt": 118,
    "phone": "0899448409",
    "fbName": "MS Ý",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340609-119",
    "stt": 119,
    "phone": "0979999802",
    "fbName": "Bảo Hương",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340609-120",
    "stt": 120,
    "phone": "0703327051",
    "fbName": "Muoi Dang",
    "service": "Mụn mặt",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340609-121",
    "stt": 121,
    "phone": "0968616043",
    "fbName": "Hoa Lê",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340609-122",
    "stt": 122,
    "phone": "0386226309",
    "fbName": "Thùy Trang",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340609-123",
    "stt": 123,
    "phone": "0393696057",
    "fbName": "MS VY",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340609-124",
    "stt": 124,
    "phone": "0828160604",
    "fbName": "Phương",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340609-125",
    "stt": 125,
    "phone": "0337586164",
    "fbName": "Đoàn Thị Quý",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340609-126",
    "stt": 126,
    "phone": "0896473419",
    "fbName": "Tâm Tâm",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340609-127",
    "stt": 127,
    "phone": "0905368853",
    "fbName": "Lê Minh Trị",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340609-128",
    "stt": 128,
    "phone": "0797055366",
    "fbName": "Dung Candy",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340609-129",
    "stt": 129,
    "phone": "0979479126",
    "fbName": "Lan Kim",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340610-130",
    "stt": 130,
    "phone": "0396038797",
    "fbName": "Kim Ngân",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340610-131",
    "stt": 131,
    "phone": "0393594324",
    "fbName": "Vũ Nguyên",
    "service": "Triệt nách Nam",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340610-132",
    "stt": 132,
    "phone": "0335380808",
    "fbName": "Ha Thu",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340610-133",
    "stt": 133,
    "phone": "0355221809",
    "fbName": "_tkim._.yu_ - Thiên Kim",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "hủy",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340610-134",
    "stt": 134,
    "phone": "0935517835",
    "fbName": "Tran Thinh",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340610-135",
    "stt": 135,
    "phone": "0767343139",
    "fbName": "Đinh Ngọc Lân",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340610-136",
    "stt": 136,
    "phone": "0985232625",
    "fbName": "Vy Lê",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340610-137",
    "stt": 137,
    "phone": "0397398839",
    "fbName": "Hải Âu",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340610-138",
    "stt": 138,
    "phone": "0909794050",
    "fbName": "Nguyệt Châu",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340610-139",
    "stt": 139,
    "phone": "0797076423",
    "fbName": "Khách 139",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340610-140",
    "stt": 140,
    "phone": "0379590339",
    "fbName": "BẠN CỦA Nguyệt Châu",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340610-141",
    "stt": 141,
    "phone": "0332738469",
    "fbName": "Phạm Gia Thiên Ân",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340610-142",
    "stt": 142,
    "phone": "0911726600",
    "fbName": "Khách 142",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340610-143",
    "stt": 143,
    "phone": "0784414272",
    "fbName": "Phan Thái Hà",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340610-144",
    "stt": 144,
    "phone": "0888399939",
    "fbName": "Hoang Oanh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340610-145",
    "stt": 145,
    "phone": "0966327230",
    "fbName": "Le Thu",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340610-146",
    "stt": 146,
    "phone": "0933286818",
    "fbName": "Galaxylovely Mithda",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340610-147",
    "stt": 147,
    "phone": "0981640408",
    "fbName": "Mai Ngọc Thanh Vân",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340610-148",
    "stt": 148,
    "phone": "0372214330",
    "fbName": "Anh Bao",
    "service": "Triệt Bikini Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340611-149",
    "stt": 149,
    "phone": "0938183143",
    "fbName": "Khanh IP",
    "service": "Triệt nách Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340611-150",
    "stt": 150,
    "phone": "0868522659",
    "fbName": "Tuan Le",
    "service": "Buffet Da 249K",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340611-151",
    "stt": 151,
    "phone": "0768012830",
    "fbName": "Thái Tiểu Ngân",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340611-152",
    "stt": 152,
    "phone": "0964112338",
    "fbName": "Huỳnh Quân Di",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340611-153",
    "stt": 153,
    "phone": "0934680139",
    "fbName": "Trái Tim Đồng Cảm",
    "service": "Triệt nách Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340611-154",
    "stt": 154,
    "phone": "0329422079",
    "fbName": "Tuyết Sang",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340611-155",
    "stt": 155,
    "phone": "0828478314",
    "fbName": "Nguyễn Thị Mai Duy",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "hủy",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340611-156",
    "stt": 156,
    "phone": "0367712880",
    "fbName": "Nguyễn Phương Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340611-157",
    "stt": 157,
    "phone": "0979089839",
    "fbName": "Mai Nhung",
    "service": "Trị thâm (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340611-158",
    "stt": 158,
    "phone": "0947131361",
    "fbName": "MS YẾN",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340611-159",
    "stt": 159,
    "phone": "0769334858",
    "fbName": "MS TRÂN",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340611-160",
    "stt": 160,
    "phone": "0902600615",
    "fbName": "Lưu Gia Huy",
    "service": "Triệt nách Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340611-161",
    "stt": 161,
    "phone": "0966738135",
    "fbName": "Nguyen Thanh",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340612-162",
    "stt": 162,
    "phone": "0327917247",
    "fbName": "Ha Ma",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340612-163",
    "stt": 163,
    "phone": "0946067679",
    "fbName": "Ng Ngọc Diễm",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340612-164",
    "stt": 164,
    "phone": "0967178375",
    "fbName": "Duyên Đỗ",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340612-165",
    "stt": 165,
    "phone": "0858595848",
    "fbName": "ally24320 - O A N H (ally) 🐉",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340612-166",
    "stt": 166,
    "phone": "0797369777",
    "fbName": "Huỳnh Duyên",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340612-167",
    "stt": 167,
    "phone": "0775239861",
    "fbName": "Tran Ngan",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340612-168",
    "stt": 168,
    "phone": "0368067275",
    "fbName": "Sun Ny",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340612-169",
    "stt": 169,
    "phone": "0964299698",
    "fbName": "Thu Hanna",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340612-170",
    "stt": 170,
    "phone": "0909448689",
    "fbName": "Hoàng Oanh",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340612-171",
    "stt": 171,
    "phone": "0379127445",
    "fbName": "Vu Diep",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340612-172",
    "stt": 172,
    "phone": "0327362050",
    "fbName": "Ngân Ngân",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340612-173",
    "stt": 173,
    "phone": "0907699443",
    "fbName": "Lisa Tran",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340612-174",
    "stt": 174,
    "phone": "0901508789",
    "fbName": "Emily Tran",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340612-175",
    "stt": 175,
    "phone": "0918883800",
    "fbName": "Nguyễn Thuyền",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340612-176",
    "stt": 176,
    "phone": "0358998985",
    "fbName": "Điệp Trần",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340613-177",
    "stt": 177,
    "phone": "0968933548",
    "fbName": "Nhi Nguyen",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340613-178",
    "stt": 178,
    "phone": "0971526762",
    "fbName": "John The Baptist",
    "service": "Triệt nách Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340613-179",
    "stt": 179,
    "phone": "0942873802",
    "fbName": "Shindy Trâm",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340613-180",
    "stt": 180,
    "phone": "0902015899",
    "fbName": "Nguyen Thi Hue",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340613-181",
    "stt": 181,
    "phone": "0888095695",
    "fbName": "Ngọc Cát Tường",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340613-182",
    "stt": 182,
    "phone": "0909921989",
    "fbName": "Trang Trần",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340613-183",
    "stt": 183,
    "phone": "0865833825",
    "fbName": "Phạm Minh Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340613-184",
    "stt": 184,
    "phone": "0908193202",
    "fbName": "Nguyễn Phạm Thanh Vân",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340613-185",
    "stt": 185,
    "phone": "0937448351",
    "fbName": "Nguyễn Phương Nga",
    "service": "Buffet Da 249K",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "03-09-2026"
  },
  {
    "id": "lg-1790844340613-186",
    "stt": 186,
    "phone": "0969498979",
    "fbName": "Suzy Kim",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340613-187",
    "stt": 187,
    "phone": "0918668499",
    "fbName": "My My",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340613-188",
    "stt": 188,
    "phone": "0862294634",
    "fbName": "Tú Tú",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340613-189",
    "stt": 189,
    "phone": "0834973789",
    "fbName": "Sarah Dinh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340613-190",
    "stt": 190,
    "phone": "0962772323",
    "fbName": "Anna Vu",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340614-191",
    "stt": 191,
    "phone": "0332368876",
    "fbName": "Bích Tường",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340614-192",
    "stt": 192,
    "phone": "0768160386",
    "fbName": "lan.phng9245 - Lan Phương",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340614-193",
    "stt": 193,
    "phone": "0966002017",
    "fbName": "Thảo Ly",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340614-194",
    "stt": 194,
    "phone": "0902791155",
    "fbName": "Nguyễn Liên",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340614-195",
    "stt": 195,
    "phone": "0984006608",
    "fbName": "Tony Nguyễn",
    "service": "Triệt Bikini Nam",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340614-196",
    "stt": 196,
    "phone": "0987184061",
    "fbName": "hoaiphuc211 - Zzz☘️☘️☘️",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340614-197",
    "stt": 197,
    "phone": "0903475867",
    "fbName": "Quỳnh An",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340614-198",
    "stt": 198,
    "phone": "0932656364",
    "fbName": "Thien Thanh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "02-09-2026"
  },
  {
    "id": "lg-1790844340614-199",
    "stt": 199,
    "phone": "0565571254",
    "fbName": "Mymy Tran",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340614-200",
    "stt": 200,
    "phone": "0909680527",
    "fbName": "Chau Pham",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340614-201",
    "stt": 201,
    "phone": "0388670990",
    "fbName": "Tai Nguyen",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340614-202",
    "stt": 202,
    "phone": "0704667059",
    "fbName": "Tú Hoàng",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340615-203",
    "stt": 203,
    "phone": "0774354520",
    "fbName": "Hồng Phúc Phạm Nguyễn",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-204",
    "stt": 204,
    "phone": "0569193822",
    "fbName": "Phạm Vy",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-205",
    "stt": 205,
    "phone": "0968893185",
    "fbName": "Ngọc Thu",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-206",
    "stt": 206,
    "phone": "0355442072",
    "fbName": "MS NHI",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-207",
    "stt": 207,
    "phone": "0909390628",
    "fbName": "Minh Hằng",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "hủy",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-208",
    "stt": 208,
    "phone": "0357952527",
    "fbName": "linhliinh92 - Nữ xinh yêu 🌹🥰",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-209",
    "stt": 209,
    "phone": "0396678501",
    "fbName": "motngaymoioi - Mộc",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-210",
    "stt": 210,
    "phone": "0938966779",
    "fbName": "Nguyễn  Long",
    "service": "Triệt nách Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-211",
    "stt": 211,
    "phone": "0933008202",
    "fbName": "Phương Uyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-212",
    "stt": 212,
    "phone": "0862523595",
    "fbName": "Vương Cọt",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340615-213",
    "stt": 213,
    "phone": "0936705659",
    "fbName": "Lan Phương",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-214",
    "stt": 214,
    "phone": "0903053169",
    "fbName": "Khả Tú",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340615-215",
    "stt": 215,
    "phone": "0983481370",
    "fbName": "Hương Lê",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340615-216",
    "stt": 216,
    "phone": "0865554838",
    "fbName": "Nhựt Tân",
    "service": "Triệt Bikini Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-217",
    "stt": 217,
    "phone": "0367916092",
    "fbName": "Garcia Diễm Thúy",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340615-218",
    "stt": 218,
    "phone": "0936379291",
    "fbName": "Phương Huyền",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340615-219",
    "stt": 219,
    "phone": "0914660075",
    "fbName": "Lư Phương",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-220",
    "stt": 220,
    "phone": "0903366300",
    "fbName": "Kim Thao Nguyen",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340615-221",
    "stt": 221,
    "phone": "0913859598",
    "fbName": "Le Thai Bao Tran",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340615-222",
    "stt": 222,
    "phone": "0368147144",
    "fbName": "Huệ Huệ",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340615-223",
    "stt": 223,
    "phone": "0837219771",
    "fbName": "huong_ngoc91 - Hương Lê",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340616-224",
    "stt": 224,
    "phone": "0824321379",
    "fbName": "Mai Thanh",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340616-225",
    "stt": 225,
    "phone": "0966332602",
    "fbName": "Thu Hang Bui",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340616-226",
    "stt": 226,
    "phone": "0979778907",
    "fbName": "Linh Lê",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340616-227",
    "stt": 227,
    "phone": "0764295471",
    "fbName": "Huỳnh Hoa",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340616-228",
    "stt": 228,
    "phone": "0833919878",
    "fbName": "佳懿",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340616-229",
    "stt": 229,
    "phone": "0706888879",
    "fbName": "Lethiút Lethiut",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340616-230",
    "stt": 230,
    "phone": "0935227323",
    "fbName": "lnwinhu - kendall",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340616-231",
    "stt": 231,
    "phone": "0937543679",
    "fbName": "Nguyễn Xuxu",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340616-232",
    "stt": 232,
    "phone": "0972335097",
    "fbName": "Bảo Nhân",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "hủy",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340616-233",
    "stt": 233,
    "phone": "0943517613",
    "fbName": "Ngát Kim",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340616-234",
    "stt": 234,
    "phone": "0869069486",
    "fbName": "Bích Huệ Trần",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340616-235",
    "stt": 235,
    "phone": "0932493134",
    "fbName": "MS DƯƠNG",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340616-236",
    "stt": 236,
    "phone": "0357890520",
    "fbName": "Từ Văn An",
    "service": "Triệt nách Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340616-237",
    "stt": 237,
    "phone": "0903017152",
    "fbName": "Vu Quynh Phuong",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340616-238",
    "stt": 238,
    "phone": "0383259727",
    "fbName": "Ngọc Qúy",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340616-239",
    "stt": 239,
    "phone": "0933330101",
    "fbName": "Chi Bui Thi Kim",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340616-240",
    "stt": 240,
    "phone": "0794322341",
    "fbName": "Mạch Thuý Vy",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340616-241",
    "stt": 241,
    "phone": "0944345234",
    "fbName": "Pham Kiều Anh",
    "service": "Buffet Da 249K",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340616-242",
    "stt": 242,
    "phone": "0764276448",
    "fbName": "pony.170 - 🍭",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340616-243",
    "stt": 243,
    "phone": "0937327628",
    "fbName": "Lâm Ngọc Trầm",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340616-244",
    "stt": 244,
    "phone": "0916382868",
    "fbName": "h.thanh0387 - Hà Thanh",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340617-245",
    "stt": 245,
    "phone": "0937101665",
    "fbName": "Linh Do",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340617-246",
    "stt": 246,
    "phone": "0328002857",
    "fbName": "Thu Thảo",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340617-247",
    "stt": 247,
    "phone": "0938122219",
    "fbName": "Mickey Mousse",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340617-248",
    "stt": 248,
    "phone": "0329324143",
    "fbName": "Phú Ngô",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340617-249",
    "stt": 249,
    "phone": "0889889957",
    "fbName": "Huynh Trang",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340617-250",
    "stt": 250,
    "phone": "0943751674",
    "fbName": "ye.nnhi.ng - Ye.nnhi '○'",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340617-251",
    "stt": 251,
    "phone": "0376393354",
    "fbName": "Trần Nguyễn Thảo Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340617-252",
    "stt": 252,
    "phone": "0397682066",
    "fbName": "Loan Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340617-253",
    "stt": 253,
    "phone": "0706600157",
    "fbName": "Trần Xuân Tiến",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340617-254",
    "stt": 254,
    "phone": "0928707979",
    "fbName": "Tony Tran",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340617-255",
    "stt": 255,
    "phone": "0386700599",
    "fbName": "Ngân Ngân",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340617-256",
    "stt": 256,
    "phone": "0908248401",
    "fbName": "Diểm Trang",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340617-257",
    "stt": 257,
    "phone": "0943796798",
    "fbName": "Thu Linh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340617-258",
    "stt": 258,
    "phone": "0375005296",
    "fbName": "Thanh Ngân",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340617-259",
    "stt": 259,
    "phone": "0936056771",
    "fbName": "anvatsuotngay",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340618-260",
    "stt": 260,
    "phone": "0907360390",
    "fbName": "Nhật Loan",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340618-261",
    "stt": 261,
    "phone": "0902782079",
    "fbName": "Duong RN",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340618-262",
    "stt": 262,
    "phone": "0932751193",
    "fbName": "Noo Ken",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340618-263",
    "stt": 263,
    "phone": "0987896545",
    "fbName": "Thanh Nguyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340618-264",
    "stt": 264,
    "phone": "0902424000",
    "fbName": "Ely Trần",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340618-265",
    "stt": 265,
    "phone": "0977918633",
    "fbName": "Nguyễn Hạnh Trang",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340618-266",
    "stt": 266,
    "phone": "0377015298",
    "fbName": "Gia Huệ",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340618-267",
    "stt": 267,
    "phone": "0393195366",
    "fbName": "Hoàng Ánh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340618-268",
    "stt": 268,
    "phone": "0903122204",
    "fbName": "Hiền Đặng",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340618-269",
    "stt": 269,
    "phone": "0937193886",
    "fbName": "Hoàng Quốc Việt",
    "service": "Triệt Bikini Nam",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340618-270",
    "stt": 270,
    "phone": "0907730257",
    "fbName": "Hong Pham",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340618-271",
    "stt": 271,
    "phone": "0338863226",
    "fbName": "Anh Phạm",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340618-272",
    "stt": 272,
    "phone": "0901489952",
    "fbName": "Nguyễn Xuân",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340618-273",
    "stt": 273,
    "phone": "0783269927",
    "fbName": "Mai Hoa",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340619-274",
    "stt": 274,
    "phone": "0911416028",
    "fbName": "Dung Ta",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340619-275",
    "stt": 275,
    "phone": "0902457513",
    "fbName": "Phương Phạm",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340619-276",
    "stt": 276,
    "phone": "0933468464",
    "fbName": "th.hin.l456 - Thị Hiền Lê",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340619-277",
    "stt": 277,
    "phone": "0967283943",
    "fbName": "Thu Thủy",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340619-278",
    "stt": 278,
    "phone": "0925960644",
    "fbName": "Thao Vo",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340619-279",
    "stt": 279,
    "phone": "0943819733",
    "fbName": "Tân Khải",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340619-280",
    "stt": 280,
    "phone": "0903959565",
    "fbName": "Lu Xu Bu",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340619-281",
    "stt": 281,
    "phone": "0939211268",
    "fbName": "Huynh Diem Duong",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340619-282",
    "stt": 282,
    "phone": "0398972884",
    "fbName": "Đoàn Ngọc Ánh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340619-283",
    "stt": 283,
    "phone": "0389887016",
    "fbName": "Uyên Bùi",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340619-284",
    "stt": 284,
    "phone": "0913983499",
    "fbName": "Khách 284",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340619-285",
    "stt": 285,
    "phone": "0962432451",
    "fbName": "Tiên",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340619-286",
    "stt": 286,
    "phone": "0343001240",
    "fbName": "Hải Ngân",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "hủy",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340619-287",
    "stt": 287,
    "phone": "0902946787",
    "fbName": "Thư",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340619-288",
    "stt": 288,
    "phone": "0934154564",
    "fbName": "Trần Như Quỳnh",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340620-289",
    "stt": 289,
    "phone": "0944060673",
    "fbName": "Thùy",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340620-290",
    "stt": 290,
    "phone": "0774964025",
    "fbName": "Tuyet Cuong",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340620-291",
    "stt": 291,
    "phone": "0947338810",
    "fbName": "Hoàng Nam",
    "service": "Triệt nách Nam",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340620-292",
    "stt": 292,
    "phone": "0949735101",
    "fbName": "Nhung Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340620-293",
    "stt": 293,
    "phone": "0937456791",
    "fbName": "Vy Vy",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340620-294",
    "stt": 294,
    "phone": "0932782214",
    "fbName": "Phuong Ngo",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340620-295",
    "stt": 295,
    "phone": "0348970725",
    "fbName": "Hoa Sữa",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340620-296",
    "stt": 296,
    "phone": "0946271007",
    "fbName": "Luu Mạnh",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340620-297",
    "stt": 297,
    "phone": "0933188265",
    "fbName": "Loan Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340621-298",
    "stt": 298,
    "phone": "0385631823",
    "fbName": "Nhi Em",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340621-299",
    "stt": 299,
    "phone": "0915901414",
    "fbName": "Thảo Thảo",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "04-09-2026"
  },
  {
    "id": "lg-1790844340621-300",
    "stt": 300,
    "phone": "0909623134",
    "fbName": "Nguyễn Như",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340621-301",
    "stt": 301,
    "phone": "0328096996",
    "fbName": "Thu Hồng",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340621-302",
    "stt": 302,
    "phone": "0974572582",
    "fbName": "Tony Thắng",
    "service": "Triệt nách Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340621-303",
    "stt": 303,
    "phone": "0388780393",
    "fbName": "Nguyễn Hồng Nhung",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340621-304",
    "stt": 304,
    "phone": "0392744116",
    "fbName": "MS DUYÊN",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340621-305",
    "stt": 305,
    "phone": "0989052228",
    "fbName": "Tí Nị",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340622-306",
    "stt": 306,
    "phone": "0336556605",
    "fbName": "Trần Quỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340622-307",
    "stt": 307,
    "phone": "0938491171",
    "fbName": "Bích Trâm",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340622-308",
    "stt": 308,
    "phone": "0852699375",
    "fbName": "Vũ Minh Nhật",
    "service": "Triệt Bikini Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340622-309",
    "stt": 309,
    "phone": "0917834369",
    "fbName": "Hải Linh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340622-310",
    "stt": 310,
    "phone": "0907291453",
    "fbName": "dlorier - 🐟",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340622-311",
    "stt": 311,
    "phone": "0393022816",
    "fbName": "Bích Ngân",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340622-312",
    "stt": 312,
    "phone": "0399165700",
    "fbName": "Nga Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340622-313",
    "stt": 313,
    "phone": "0342579689",
    "fbName": "MS LINH",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340622-314",
    "stt": 314,
    "phone": "0772053196",
    "fbName": "Lo Dinh Dinh",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340622-315",
    "stt": 315,
    "phone": "0983261739",
    "fbName": "Phương Trinh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340622-316",
    "stt": 316,
    "phone": "0397651115",
    "fbName": "Lai Bâng",
    "service": "Triệt Bikini Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340622-317",
    "stt": 317,
    "phone": "0902858501",
    "fbName": "May Nguyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340622-318",
    "stt": 318,
    "phone": "0986851893",
    "fbName": "Phương Trinh",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340622-319",
    "stt": 319,
    "phone": "0942195009",
    "fbName": "Nguyễn Mai Phương Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340622-320",
    "stt": 320,
    "phone": "0374026449",
    "fbName": "quyngoccuteee - công chúa ngủ đông",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340622-321",
    "stt": 321,
    "phone": "0772779389",
    "fbName": "Hoàng Duy",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340622-322",
    "stt": 322,
    "phone": "0853060209",
    "fbName": "Ngân Võ",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340622-323",
    "stt": 323,
    "phone": "0933771068",
    "fbName": "Thương Thương",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "hủy",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340622-324",
    "stt": 324,
    "phone": "0979907219",
    "fbName": "Hai Nguyen",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340623-325",
    "stt": 325,
    "phone": "0397800924",
    "fbName": "Vân Thanh",
    "service": "Mụn mặt",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340623-326",
    "stt": 326,
    "phone": "0974391207",
    "fbName": "My Huynh",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340623-327",
    "stt": 327,
    "phone": "0975651714",
    "fbName": "Hong Mai",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340623-328",
    "stt": 328,
    "phone": "0932214443",
    "fbName": "Le Tram",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340623-329",
    "stt": 329,
    "phone": "0914736722",
    "fbName": "Lê Tô Xuân Ngân",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340623-330",
    "stt": 330,
    "phone": "0938501297",
    "fbName": "beyeumylovechuli - beyeu@",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340623-331",
    "stt": 331,
    "phone": "0971314170",
    "fbName": "Lanh Dương",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340623-332",
    "stt": 332,
    "phone": "0902698336",
    "fbName": "Vàng Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "05-09-2026"
  },
  {
    "id": "lg-1790844340623-333",
    "stt": 333,
    "phone": "0901371208",
    "fbName": "Ai Yuri",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340623-334",
    "stt": 334,
    "phone": "8562129422",
    "fbName": "Nhung Hoang",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340623-335",
    "stt": 335,
    "phone": "0393657843",
    "fbName": "Kim Đàng",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340623-336",
    "stt": 336,
    "phone": "0931942295",
    "fbName": "Lê Thảo",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340623-337",
    "stt": 337,
    "phone": "0328876379",
    "fbName": "Hải Bánh",
    "service": "Triệt Bikini Nam",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340623-338",
    "stt": 338,
    "phone": "0938885721",
    "fbName": "Lệ Huỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340623-339",
    "stt": 339,
    "phone": "0382770902",
    "fbName": "Trung Kiên",
    "service": "Triệt nách Nam",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340623-340",
    "stt": 340,
    "phone": "0389667133",
    "fbName": "Thanh Ngọc",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340623-341",
    "stt": 341,
    "phone": "0975144359",
    "fbName": "Mỹ Tuyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340623-342",
    "stt": 342,
    "phone": "0987805849",
    "fbName": "Song Ngoc",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340623-343",
    "stt": 343,
    "phone": "0906642797",
    "fbName": "Huyền Thanh",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340623-344",
    "stt": 344,
    "phone": "0332082220",
    "fbName": "sasanguyen8 - Sasa Nguyen Shop",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340623-345",
    "stt": 345,
    "phone": "0765781578",
    "fbName": "Quyên Tran",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340624-346",
    "stt": 346,
    "phone": "0706666409",
    "fbName": "Mai Hoang Nguyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340624-347",
    "stt": 347,
    "phone": "0906661339",
    "fbName": "nghiv11 - Nghi võ",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340624-348",
    "stt": 348,
    "phone": "0389583561",
    "fbName": "Phạm Trang",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340624-349",
    "stt": 349,
    "phone": "0347037507",
    "fbName": "Thanh Huyền",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340624-350",
    "stt": 350,
    "phone": "0787855551",
    "fbName": "Yến Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340624-351",
    "stt": 351,
    "phone": "0344986910",
    "fbName": "Hỏa Nhi",
    "service": "Sẹo Rỗ Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340624-352",
    "stt": 352,
    "phone": "0908927196",
    "fbName": "Izabella Le",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340624-353",
    "stt": 353,
    "phone": "0934996062",
    "fbName": "Đoan Thanh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340624-354",
    "stt": 354,
    "phone": "0946090094",
    "fbName": "Thanh Tuyền",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340624-355",
    "stt": 355,
    "phone": "0938027377",
    "fbName": "Bđs Bình Dương",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340624-356",
    "stt": 356,
    "phone": "0786136231",
    "fbName": "trm.cha.lnh40 - ♥️Trạm Chữa Lành♥️",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340624-357",
    "stt": 357,
    "phone": "0983524524",
    "fbName": "Đặng Phúc",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340624-358",
    "stt": 358,
    "phone": "0933832449",
    "fbName": "Quan Nguyen",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340624-359",
    "stt": 359,
    "phone": "0343594969",
    "fbName": "Võ Bích Tuyền",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340624-360",
    "stt": 360,
    "phone": "0941431261",
    "fbName": "Ngọc Bích",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340624-361",
    "stt": 361,
    "phone": "0936149698",
    "fbName": "Nguyễn Thị Thanh Đẩu",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340624-362",
    "stt": 362,
    "phone": "0962013120",
    "fbName": "Văn Cần",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340624-363",
    "stt": 363,
    "phone": "0941225215",
    "fbName": "Gấu",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "hủy",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340624-364",
    "stt": 364,
    "phone": "0968102037",
    "fbName": "Trần Hương Trà",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340624-365",
    "stt": 365,
    "phone": "0938998804",
    "fbName": "Nguyen Oanh-Oanh",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340624-366",
    "stt": 366,
    "phone": "0327277427",
    "fbName": "Đan Khanh",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340624-367",
    "stt": 367,
    "phone": "0326373780",
    "fbName": "Bée Bơ",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340625-368",
    "stt": 368,
    "phone": "0774815820",
    "fbName": "Mi Mi",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340625-369",
    "stt": 369,
    "phone": "0949232543",
    "fbName": "Thúy Anh Đào",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340625-370",
    "stt": 370,
    "phone": "0584187472",
    "fbName": "Reny Shawol",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340625-371",
    "stt": 371,
    "phone": "0932948675",
    "fbName": "Nguyễn Ngọc Thơ",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340625-372",
    "stt": 372,
    "phone": "0364299692",
    "fbName": "MS VY AN",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340625-373",
    "stt": 373,
    "phone": "0387214064",
    "fbName": "សា នុ",
    "service": "Mụn mặt",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340625-374",
    "stt": 374,
    "phone": "0328450459",
    "fbName": "Phạm Nhung",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340625-375",
    "stt": 375,
    "phone": "0989335365",
    "fbName": "Phương Đỗ",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340625-376",
    "stt": 376,
    "phone": "0961651367",
    "fbName": "Diệu Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340625-377",
    "stt": 377,
    "phone": "0936847047",
    "fbName": "Lê Hiền",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340625-378",
    "stt": 378,
    "phone": "0903962658",
    "fbName": "Khánh Linh",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340625-379",
    "stt": 379,
    "phone": "0704152227",
    "fbName": "Lê Thư",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340625-380",
    "stt": 380,
    "phone": "0947813088",
    "fbName": "MS MY",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340625-381",
    "stt": 381,
    "phone": "0702878596",
    "fbName": "Tien Nha",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340625-382",
    "stt": 382,
    "phone": "0796667982",
    "fbName": "Tú Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340625-383",
    "stt": 383,
    "phone": "0392710624",
    "fbName": "Mỹ Linh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340625-384",
    "stt": 384,
    "phone": "0359714192",
    "fbName": "Bảo Yến",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340625-385",
    "stt": 385,
    "phone": "0982260198",
    "fbName": "Trang Trần Thị",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340625-386",
    "stt": 386,
    "phone": "0329671535",
    "fbName": "Thảo Nhi",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340625-387",
    "stt": 387,
    "phone": "0938830875",
    "fbName": "Ngọc Diệu",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340625-388",
    "stt": 388,
    "phone": "0945493797",
    "fbName": "Hạnh Phan",
    "service": "Mụn mặt",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340626-389",
    "stt": 389,
    "phone": "0705460234",
    "fbName": "Thương Lii",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340626-390",
    "stt": 390,
    "phone": "0974152803",
    "fbName": "Nguyễn Tuyền",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340626-391",
    "stt": 391,
    "phone": "0707656446",
    "fbName": "Tâm Như",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340626-392",
    "stt": 392,
    "phone": "0974863964",
    "fbName": "Hoàn Chu",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340626-393",
    "stt": 393,
    "phone": "0338032553",
    "fbName": "afrg67_ - tẹt",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340626-394",
    "stt": 394,
    "phone": "0772908086",
    "fbName": "Pham Thi Hoang Linh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340626-395",
    "stt": 395,
    "phone": "0937376881",
    "fbName": "Trâm Huỳnh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340626-396",
    "stt": 396,
    "phone": "0988616868",
    "fbName": "Như Quỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340626-397",
    "stt": 397,
    "phone": "0967666608",
    "fbName": "Beta Tran",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340626-398",
    "stt": 398,
    "phone": "0933878678",
    "fbName": "Bích Thảo",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340626-399",
    "stt": 399,
    "phone": "0906203477",
    "fbName": "Huong Giang Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340626-400",
    "stt": 400,
    "phone": "0335646616",
    "fbName": "Nguyễn Ngọc Yến Nhi",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340626-401",
    "stt": 401,
    "phone": "0898347519",
    "fbName": "Bich Chi",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340627-402",
    "stt": 402,
    "phone": "0979499348",
    "fbName": "Hươngg Hươngg",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340627-403",
    "stt": 403,
    "phone": "0937552509",
    "fbName": "Jade Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340627-404",
    "stt": 404,
    "phone": "0342893242",
    "fbName": "Nhật Duy",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340627-405",
    "stt": 405,
    "phone": "0968639619",
    "fbName": "Trần Diệp Thúy Hằng",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340627-406",
    "stt": 406,
    "phone": "0394782785",
    "fbName": "Dương An Nhiên",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340627-407",
    "stt": 407,
    "phone": "0357233194",
    "fbName": "Che Lơi",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340627-408",
    "stt": 408,
    "phone": "0988777705",
    "fbName": "Ngô Kiển",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340627-409",
    "stt": 409,
    "phone": "0907375646",
    "fbName": "Thy Thy",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340627-410",
    "stt": 410,
    "phone": "0985532346",
    "fbName": "Baba Sunshine",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340627-411",
    "stt": 411,
    "phone": "0357534371",
    "fbName": "Khả Hân",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340627-412",
    "stt": 412,
    "phone": "0966374364",
    "fbName": "MS HẠNH",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340627-413",
    "stt": 413,
    "phone": "0963011358",
    "fbName": "thichminion - Flora ✨🌷",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340627-414",
    "stt": 414,
    "phone": "0395611379",
    "fbName": "BẠN ANH HẢI (MS HÀ)",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "06-09-2026"
  },
  {
    "id": "lg-1790844340627-415",
    "stt": 415,
    "phone": "0379383779",
    "fbName": "Kim Trang",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340627-416",
    "stt": 416,
    "phone": "0814627977",
    "fbName": "Vũ Thu Vân",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "01-09-2026"
  },
  {
    "id": "lg-1790844340627-417",
    "stt": 417,
    "phone": "0934814832",
    "fbName": "MS NHI",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340627-418",
    "stt": 418,
    "phone": "0772500903",
    "fbName": "Dang Phuong",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340627-419",
    "stt": 419,
    "phone": "0949577797",
    "fbName": "MS HÀ",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340627-420",
    "stt": 420,
    "phone": "0917327655",
    "fbName": "Hân Hân",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340627-421",
    "stt": 421,
    "phone": "0347549786",
    "fbName": "Nguyễn Thị Ngọc Ánh",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340627-422",
    "stt": 422,
    "phone": "0911871656",
    "fbName": "MR HIẾU",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340627-423",
    "stt": 423,
    "phone": "0961436779",
    "fbName": "Huong Truong",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340628-424",
    "stt": 424,
    "phone": "0917196639",
    "fbName": "Trang Nguyễn",
    "service": "Mụn mặt",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340628-425",
    "stt": 425,
    "phone": "0888483363",
    "fbName": "chuoichiencatim - Chuoi chien ca tim",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340628-426",
    "stt": 426,
    "phone": "0358498725",
    "fbName": "Kiều Duyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340628-427",
    "stt": 427,
    "phone": "0936325334",
    "fbName": "Trịnh Nhung Dương",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340628-428",
    "stt": 428,
    "phone": "0906891257",
    "fbName": "Mỹ Lợi",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340628-429",
    "stt": 429,
    "phone": "0934836650",
    "fbName": "Tố Ngọc Văn",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340628-430",
    "stt": 430,
    "phone": "0339438612",
    "fbName": "Mai Thi",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340628-431",
    "stt": 431,
    "phone": "0927356555",
    "fbName": "my.love.7785 - My Love",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340628-432",
    "stt": 432,
    "phone": "0338978207",
    "fbName": "t.hienn__ - 🧚🏻‍♀️",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340628-433",
    "stt": 433,
    "phone": "0775402190",
    "fbName": "Nguyễn Thanh Phương",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340628-434",
    "stt": 434,
    "phone": "0332244298",
    "fbName": "Nhung Trần",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340628-435",
    "stt": 435,
    "phone": "0866235024",
    "fbName": "Kim Cương",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340628-436",
    "stt": 436,
    "phone": "0975615485",
    "fbName": "Hanh Tran",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340628-437",
    "stt": 437,
    "phone": "0909525584",
    "fbName": "PT M-ichelle",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340628-438",
    "stt": 438,
    "phone": "0979193673",
    "fbName": "MS THÙY",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340628-439",
    "stt": 439,
    "phone": "0915144031",
    "fbName": "Nguyen Thi Huong",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340628-440",
    "stt": 440,
    "phone": "0967104944",
    "fbName": "Phạm Thị Lan Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340628-441",
    "stt": 441,
    "phone": "0908285521",
    "fbName": "Nguyễn Thị Mỹ Hạnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340628-442",
    "stt": 442,
    "phone": "0917291209",
    "fbName": "Mỹ Trang",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340628-443",
    "stt": 443,
    "phone": "0867504974",
    "fbName": "btcuteso1thegioi - bt",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340628-444",
    "stt": 444,
    "phone": "0358351801",
    "fbName": "Lê Ngọc Tú Minh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340628-445",
    "stt": 445,
    "phone": "0918583305",
    "fbName": "Thư Nguyễn",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340629-446",
    "stt": 446,
    "phone": "0869616530",
    "fbName": "camthach965 - CẨM XÀ CỪ",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340629-447",
    "stt": 447,
    "phone": "0378896253",
    "fbName": "chang_28_11 - Tranqq Thùy",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340629-448",
    "stt": 448,
    "phone": "0769342540",
    "fbName": "Như Như",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340629-449",
    "stt": 449,
    "phone": "0523584558",
    "fbName": "embenoiloankakaka - mụt 2k8 nổi lọn😋",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340629-450",
    "stt": 450,
    "phone": "0399994989",
    "fbName": "Minh Châu",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340629-451",
    "stt": 451,
    "phone": "0902779848",
    "fbName": "Thùy An Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340629-452",
    "stt": 452,
    "phone": "0784336633",
    "fbName": "Lê Tuyên",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340629-453",
    "stt": 453,
    "phone": "0908068005",
    "fbName": "Ms Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340629-454",
    "stt": 454,
    "phone": "0834316291",
    "fbName": "Mạnh Trí",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340629-455",
    "stt": 455,
    "phone": "0792358888",
    "fbName": "Nguyễn Quyn Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340629-456",
    "stt": 456,
    "phone": "0377007265",
    "fbName": "Mỹ Mỹ",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "hủy",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340629-457",
    "stt": 457,
    "phone": "0935519050",
    "fbName": "Trinh Vo",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340629-458",
    "stt": 458,
    "phone": "0933260673",
    "fbName": "Ha Na Kiều",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340629-459",
    "stt": 459,
    "phone": "0399375509",
    "fbName": "Nguyễn Thị Kim Tuyến",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340629-460",
    "stt": 460,
    "phone": "0939592705",
    "fbName": "Leo Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340629-461",
    "stt": 461,
    "phone": "0326618349",
    "fbName": "cuc.258 - Trần Hiền 92@&",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340629-462",
    "stt": 462,
    "phone": "0775958223",
    "fbName": "Yến Nhi",
    "service": "Mụn mặt",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340629-463",
    "stt": 463,
    "phone": "0966038830",
    "fbName": "Thuỳ Dương",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340629-464",
    "stt": 464,
    "phone": "0913748069",
    "fbName": "Linh Phan",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340629-465",
    "stt": 465,
    "phone": "0948864502",
    "fbName": "_cammm00 - mika",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340629-466",
    "stt": 466,
    "phone": "0345219665",
    "fbName": "Huỳnh Đào",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340630-467",
    "stt": 467,
    "phone": "0961050530",
    "fbName": "Ân Bùi",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340630-468",
    "stt": 468,
    "phone": "0772801795",
    "fbName": "Cẩm Tú",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "07-09-2026"
  },
  {
    "id": "lg-1790844340630-469",
    "stt": 469,
    "phone": "0819034683",
    "fbName": "minhthu2852 - chiwuawua",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340630-470",
    "stt": 470,
    "phone": "0379568879",
    "fbName": "Luyến",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340630-471",
    "stt": 471,
    "phone": "0974425690",
    "fbName": "Thu Hằng",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340630-472",
    "stt": 472,
    "phone": "0901607788",
    "fbName": "Hà Khánh Linh",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340630-473",
    "stt": 473,
    "phone": "0969026474",
    "fbName": "Út Kiều",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340630-474",
    "stt": 474,
    "phone": "0932094618",
    "fbName": "Lily Ho",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340630-475",
    "stt": 475,
    "phone": "0774336369",
    "fbName": "Trần Nguyễn Như Quỳnh",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340630-476",
    "stt": 476,
    "phone": "0784188070",
    "fbName": "Trần Song Trinh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340630-477",
    "stt": 477,
    "phone": "0357765513",
    "fbName": "Nhi Kim",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340630-478",
    "stt": 478,
    "phone": "0896881875",
    "fbName": "ghnaaa_1512 - Hann Tran",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340630-479",
    "stt": 479,
    "phone": "0357948679",
    "fbName": "Nguyễn Mai Phương Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340630-480",
    "stt": 480,
    "phone": "0988931232",
    "fbName": "Thang Nguyen",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340630-481",
    "stt": 481,
    "phone": "0365536054",
    "fbName": "Huỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340630-482",
    "stt": 482,
    "phone": "0973382412",
    "fbName": "Nguyễn Phương",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340630-483",
    "stt": 483,
    "phone": "0903379075",
    "fbName": "Cẩm Tú",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340630-484",
    "stt": 484,
    "phone": "0908099207",
    "fbName": "Hari Quyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340630-485",
    "stt": 485,
    "phone": "0978925971",
    "fbName": "Minh Tung Tran",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340630-486",
    "stt": 486,
    "phone": "0522012234",
    "fbName": "Diên Diên",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340630-487",
    "stt": 487,
    "phone": "0975957977",
    "fbName": "Thu Linh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340630-488",
    "stt": 488,
    "phone": "0703030363",
    "fbName": "Quân Huỳnh",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340631-489",
    "stt": 489,
    "phone": "0865449717",
    "fbName": "Phạm Ngân",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340631-490",
    "stt": 490,
    "phone": "0942830745",
    "fbName": "MS TRÂN",
    "service": "Mụn mặt",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340631-491",
    "stt": 491,
    "phone": "0912381948",
    "fbName": "Nguyễn Kiều Trâm",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340631-492",
    "stt": 492,
    "phone": "0919041517",
    "fbName": "Như Ý Lê",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340631-493",
    "stt": 493,
    "phone": "0989596700",
    "fbName": "Đào Đức Linh",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340631-494",
    "stt": 494,
    "phone": "0776877384",
    "fbName": "ngocy878 - ngọc ý",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340631-495",
    "stt": 495,
    "phone": "0934173417",
    "fbName": "Khách 495",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340631-496",
    "stt": 496,
    "phone": "0936295372",
    "fbName": "Diep Minh Tu",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340631-497",
    "stt": 497,
    "phone": "0973026208",
    "fbName": "Kieu Nhii",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340631-498",
    "stt": 498,
    "phone": "0823102008",
    "fbName": "dnhtuanh - nhà ỉa học",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340631-499",
    "stt": 499,
    "phone": "0377014970",
    "fbName": "Ngân Lam",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340631-500",
    "stt": 500,
    "phone": "0968988092",
    "fbName": "Mai Mint",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340631-501",
    "stt": 501,
    "phone": "0939056365",
    "fbName": "Kim Cuong",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340631-502",
    "stt": 502,
    "phone": "0346888163",
    "fbName": "Linh Xinh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340631-503",
    "stt": 503,
    "phone": "0902515724",
    "fbName": "Chi Kim",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340632-504",
    "stt": 504,
    "phone": "0902720570",
    "fbName": "Trần Thu Thủy",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340632-505",
    "stt": 505,
    "phone": "0933389288",
    "fbName": "Nhung Lê",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340632-506",
    "stt": 506,
    "phone": "0397524044",
    "fbName": "My Tazi",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340632-507",
    "stt": 507,
    "phone": "0898227068",
    "fbName": "Huynh Doan Chi",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340632-508",
    "stt": 508,
    "phone": "0939573430",
    "fbName": "mt.oww - Lười kiểu làm biếng",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340632-509",
    "stt": 509,
    "phone": "0702096352",
    "fbName": "Diep Hoang Truong",
    "service": "Trị thâm (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340632-510",
    "stt": 510,
    "phone": "0369111499",
    "fbName": "Ellie MiMi",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340632-511",
    "stt": 511,
    "phone": "0973636753",
    "fbName": "Lêlê Duong",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340632-512",
    "stt": 512,
    "phone": "0975442444",
    "fbName": "Phương Thuỳ",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340632-513",
    "stt": 513,
    "phone": "0397379003",
    "fbName": "Thư Dương",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340632-514",
    "stt": 514,
    "phone": "0985353117",
    "fbName": "Hieu Tran",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340632-515",
    "stt": 515,
    "phone": "0798791989",
    "fbName": "Duy Tran",
    "service": "Triệt nách Nam",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340632-516",
    "stt": 516,
    "phone": "0777171161",
    "fbName": "Phạm Thảo",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340632-517",
    "stt": 517,
    "phone": "0972579562",
    "fbName": "My Duong",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340632-518",
    "stt": 518,
    "phone": "0979970624",
    "fbName": "MS Ý",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340632-519",
    "stt": 519,
    "phone": "0981209490",
    "fbName": "Hiền",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340632-520",
    "stt": 520,
    "phone": "0825796540",
    "fbName": "Linh Đan",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340632-521",
    "stt": 521,
    "phone": "0909590293",
    "fbName": "Kieu Le",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340632-522",
    "stt": 522,
    "phone": "0918060928",
    "fbName": "MS HỒNG",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340633-523",
    "stt": 523,
    "phone": "0394523013",
    "fbName": "Thanh Trà Kim",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340633-524",
    "stt": 524,
    "phone": "0397523157",
    "fbName": "Lee Hoàng Văn",
    "service": "Triệt nách Nam",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340633-525",
    "stt": 525,
    "phone": "0909878792",
    "fbName": "Nh Phương",
    "service": "Mụn mặt",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340633-526",
    "stt": 526,
    "phone": "0962850141",
    "fbName": "Thanh Ngân",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "hủy",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340633-527",
    "stt": 527,
    "phone": "0348334842",
    "fbName": "Lê Trí",
    "service": "Mụn mặt",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340633-528",
    "stt": 528,
    "phone": "0326634916",
    "fbName": "Mee Nail",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340633-529",
    "stt": 529,
    "phone": "0785949926",
    "fbName": "Nguyễn Nhã Thuơng",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340633-530",
    "stt": 530,
    "phone": "0356968302",
    "fbName": "Phạm Khuyên",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340633-531",
    "stt": 531,
    "phone": "0937549286",
    "fbName": "Bích Nga",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340633-532",
    "stt": 532,
    "phone": "0389917157",
    "fbName": "Ngà",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340633-533",
    "stt": 533,
    "phone": "0335774284",
    "fbName": "Ngọc",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340633-534",
    "stt": 534,
    "phone": "0903075510",
    "fbName": "pbeunix - P B Unique",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340633-535",
    "stt": 535,
    "phone": "0936073200",
    "fbName": "Khánh Hy",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340633-536",
    "stt": 536,
    "phone": "0902758265",
    "fbName": "Heli Kiu",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340633-537",
    "stt": 537,
    "phone": "0856985779",
    "fbName": "Thuy Le",
    "service": "Buffet Da 249K",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340633-538",
    "stt": 538,
    "phone": "0764365678",
    "fbName": "Ly Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340633-539",
    "stt": 539,
    "phone": "0902942342",
    "fbName": "An Yên",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340633-540",
    "stt": 540,
    "phone": "0938573993",
    "fbName": "Theu Bom",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340633-541",
    "stt": 541,
    "phone": "0933651336",
    "fbName": "THÚY",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340633-542",
    "stt": 542,
    "phone": "0988065223",
    "fbName": "Lê Nga",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340633-543",
    "stt": 543,
    "phone": "0936259298",
    "fbName": "Tiết Nhã Dạ Phong",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340633-544",
    "stt": 544,
    "phone": "0899900910",
    "fbName": "Daniel Mai",
    "service": "Triệt nách Nam",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340634-545",
    "stt": 545,
    "phone": "0349408041",
    "fbName": "Châu Tuyết Linh",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340634-546",
    "stt": 546,
    "phone": "0366096868",
    "fbName": "Nguyễn Thị Hạnh Nguyên",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340634-547",
    "stt": 547,
    "phone": "0982087248",
    "fbName": "minhtrinh1011 - MINH TRINH nè 😜",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340634-548",
    "stt": 548,
    "phone": "0912949249",
    "fbName": "Phuong Do",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340634-549",
    "stt": 549,
    "phone": "0346829462",
    "fbName": "Nguyễn Xuân",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "08-09-2026"
  },
  {
    "id": "lg-1790844340634-550",
    "stt": 550,
    "phone": "0768932762",
    "fbName": "Trần Thu Thảo",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340634-551",
    "stt": 551,
    "phone": "0902292225",
    "fbName": "MS TIÊN",
    "service": "Trị thâm (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340634-552",
    "stt": 552,
    "phone": "0848241020",
    "fbName": "Thao Nguyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340634-553",
    "stt": 553,
    "phone": "0901925645",
    "fbName": "Nguyễn Thắng",
    "service": "Triệt nách Nam",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340634-554",
    "stt": 554,
    "phone": "0906704484",
    "fbName": "Công Đạt",
    "service": "Triệt nách Nam",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340634-555",
    "stt": 555,
    "phone": "0987549312",
    "fbName": "Mai Hoàng Nguyễn",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340634-556",
    "stt": 556,
    "phone": "0909451215",
    "fbName": "Nguyễn Trần Anh Thư",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340634-557",
    "stt": 557,
    "phone": "0383124733",
    "fbName": "Đế Nguyệt",
    "service": "Mụn mặt",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340634-558",
    "stt": 558,
    "phone": "0382526454",
    "fbName": "Nàng Gốm Nhật",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340634-559",
    "stt": 559,
    "phone": "0924329072",
    "fbName": "khanhlinhnguyen8649 - Nguyễn Khánh Linh",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340634-560",
    "stt": 560,
    "phone": "0839836815",
    "fbName": "Thao Doan",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340634-561",
    "stt": 561,
    "phone": "0374672209",
    "fbName": "Quiền Chan",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340634-562",
    "stt": 562,
    "phone": "0792869936",
    "fbName": "Nguyễn Phương Tuyền",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340634-563",
    "stt": 563,
    "phone": "0824172777",
    "fbName": "impiesuaa - sữa",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340634-564",
    "stt": 564,
    "phone": "0903659665",
    "fbName": "MS TÚ",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340634-565",
    "stt": 565,
    "phone": "0906986431",
    "fbName": "MS NHI",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "09-09-2026"
  },
  {
    "id": "lg-1790844340635-566",
    "stt": 566,
    "phone": "0346647280",
    "fbName": "Oanh Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340635-567",
    "stt": 567,
    "phone": "0387992640",
    "fbName": "Thảo Như",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340635-568",
    "stt": 568,
    "phone": "0352227147",
    "fbName": "Út Hằng Moon",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340635-569",
    "stt": 569,
    "phone": "0862042506",
    "fbName": "Thư Ng",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340635-570",
    "stt": 570,
    "phone": "0783567144",
    "fbName": "Nguyễn Đỗ Bảo Hân",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340635-571",
    "stt": 571,
    "phone": "0978954988",
    "fbName": "Ngọc Minh",
    "service": "Mụn mặt",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340635-572",
    "stt": 572,
    "phone": "0933317936",
    "fbName": "Jini Lara",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340635-573",
    "stt": 573,
    "phone": "0385212488",
    "fbName": "hong.shop68 - Hoàng Ý Shop",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340635-574",
    "stt": 574,
    "phone": "0901668789",
    "fbName": "Ngọc Diễm",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340635-575",
    "stt": 575,
    "phone": "0947641359",
    "fbName": "Tr Kieu Nga",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340635-576",
    "stt": 576,
    "phone": "0364214146",
    "fbName": "Tiên Hà",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340635-577",
    "stt": 577,
    "phone": "0817228377",
    "fbName": "bngocdangiu2100 - bngocdangiu210",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340635-578",
    "stt": 578,
    "phone": "0775601126",
    "fbName": "Phương Quỳnh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340635-579",
    "stt": 579,
    "phone": "0865432534",
    "fbName": "Ori Sen",
    "service": "Triệt Bikini Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340635-580",
    "stt": 580,
    "phone": "0902906575",
    "fbName": "Minh Thư",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "hủy",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340635-581",
    "stt": 581,
    "phone": "0972496296",
    "fbName": "Như Quỳnh",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340635-582",
    "stt": 582,
    "phone": "0938337225",
    "fbName": "Phạm Phương Thảo",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340635-583",
    "stt": 583,
    "phone": "0369075785",
    "fbName": "Nhu Hanhh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340635-584",
    "stt": 584,
    "phone": "0385933170",
    "fbName": "Tâm Mint",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340635-585",
    "stt": 585,
    "phone": "0399829526",
    "fbName": "Phương Thảo",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340635-586",
    "stt": 586,
    "phone": "0588291920",
    "fbName": "Khách 586",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340636-587",
    "stt": 587,
    "phone": "0867567828",
    "fbName": "Khoảng Lặng",
    "service": "Mụn mặt",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340636-588",
    "stt": 588,
    "phone": "0964267339",
    "fbName": "Hiền Elly",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340636-589",
    "stt": 589,
    "phone": "0779362838",
    "fbName": "Ngô Ngọc Thùy Hương",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340636-590",
    "stt": 590,
    "phone": "0332636112",
    "fbName": "Nguyen Linh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340636-591",
    "stt": 591,
    "phone": "0964682327",
    "fbName": "Ngọc Diệp",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340636-592",
    "stt": 592,
    "phone": "0388490201",
    "fbName": "Như Ýi",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340636-593",
    "stt": 593,
    "phone": "0336396533",
    "fbName": "Thảo My",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340636-594",
    "stt": 594,
    "phone": "0972316002",
    "fbName": "Hoài Xuân",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340636-595",
    "stt": 595,
    "phone": "0383964884",
    "fbName": "Na Cherry",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "hủy",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340636-596",
    "stt": 596,
    "phone": "0787905033",
    "fbName": "Võ Xuân Trang",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340636-597",
    "stt": 597,
    "phone": "0869553401",
    "fbName": "Thảo Sang",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340636-598",
    "stt": 598,
    "phone": "0355113495",
    "fbName": "Vy Vy",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340636-599",
    "stt": 599,
    "phone": "0382577308",
    "fbName": "Khanh Lie",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340636-600",
    "stt": 600,
    "phone": "0933827678",
    "fbName": "Nguyễn Ngọc Khuê",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "hủy",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340636-601",
    "stt": 601,
    "phone": "0925045678",
    "fbName": "Bill Boss Bis",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340636-602",
    "stt": 602,
    "phone": "0968852327",
    "fbName": "MS ĐÔNG",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340636-603",
    "stt": 603,
    "phone": "0379507874",
    "fbName": "Khuee Pig",
    "service": "Mụn mặt",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340636-604",
    "stt": 604,
    "phone": "0933200097",
    "fbName": "Trương Thanh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340637-605",
    "stt": 605,
    "phone": "0325170445",
    "fbName": "MS MỸ",
    "service": "Mụn mặt",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "10-09-2026"
  },
  {
    "id": "lg-1790844340637-606",
    "stt": 606,
    "phone": "0868905381",
    "fbName": "Nguyễn Phan Lan Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340637-607",
    "stt": 607,
    "phone": "0911141048",
    "fbName": "Yến Hoàng",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340637-608",
    "stt": 608,
    "phone": "0348589487",
    "fbName": "Nguyễn SI MMy",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340637-609",
    "stt": 609,
    "phone": "0989692394",
    "fbName": "Dương Phi",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340637-610",
    "stt": 610,
    "phone": "0862802806",
    "fbName": "Anh Duc",
    "service": "Triệt Bikini Nam",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340637-611",
    "stt": 611,
    "phone": "0905238161",
    "fbName": "Ánh Hồng",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340637-612",
    "stt": 612,
    "phone": "0909531494",
    "fbName": "Ngọc Dung",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340637-613",
    "stt": 613,
    "phone": "0918277979",
    "fbName": "Trí Thuần Dương",
    "service": "Triệt Bikini Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340637-614",
    "stt": 614,
    "phone": "0869696800",
    "fbName": "Nguyễn Hoàng Nhân",
    "service": "Triệt nách Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340637-615",
    "stt": 615,
    "phone": "0559641727",
    "fbName": "Tuyet Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340637-616",
    "stt": 616,
    "phone": "0989446431",
    "fbName": "Ngọc Ngọc",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340637-617",
    "stt": 617,
    "phone": "0933393744",
    "fbName": "Ngọc Trâm",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340637-618",
    "stt": 618,
    "phone": "0787547839",
    "fbName": "Lê Phương Ny",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340637-619",
    "stt": 619,
    "phone": "0964475274",
    "fbName": "Trọng Thái",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340637-620",
    "stt": 620,
    "phone": "0901464735",
    "fbName": "tiktok.ngocnu2212 - út nữ",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340637-621",
    "stt": 621,
    "phone": "0936028145",
    "fbName": "lylyyoga0403",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340638-622",
    "stt": 622,
    "phone": "0918927330",
    "fbName": "Pham Nhu Ha",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340638-623",
    "stt": 623,
    "phone": "0903954889",
    "fbName": "NT BíchHiệu",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340638-624",
    "stt": 624,
    "phone": "0928831313",
    "fbName": "nhadanlangthang13 - Nhã Đan Lang Thang",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340638-625",
    "stt": 625,
    "phone": "0918587029",
    "fbName": "Nguyen Thi Anh Thu",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340638-626",
    "stt": 626,
    "phone": "0846763765",
    "fbName": "Linh Phương",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340638-627",
    "stt": 627,
    "phone": "0899999790",
    "fbName": "Quân Huỳnh",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340638-628",
    "stt": 628,
    "phone": "0359631621",
    "fbName": "Trà My",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340638-629",
    "stt": 629,
    "phone": "0945101393",
    "fbName": "hoangdung3003 - Hoàng Dung",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340638-630",
    "stt": 630,
    "phone": "0943993997",
    "fbName": "Minh Trang",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340638-631",
    "stt": 631,
    "phone": "0933642699",
    "fbName": "sunaclothe.1109 - Vina.1109",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340638-632",
    "stt": 632,
    "phone": "0933864688",
    "fbName": "Hoa Xương Rồng",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "11-09-2026"
  },
  {
    "id": "lg-1790844340638-633",
    "stt": 633,
    "phone": "0915656674",
    "fbName": "Ngân Thanh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340638-634",
    "stt": 634,
    "phone": "0909878437",
    "fbName": "Teresa Được",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340638-635",
    "stt": 635,
    "phone": "0905335427",
    "fbName": "page.of_trangg - Trang Lê",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340638-636",
    "stt": 636,
    "phone": "0328727281",
    "fbName": "lelacafe0 - Thu nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340638-637",
    "stt": 637,
    "phone": "0975026997",
    "fbName": "Nga Huỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340638-638",
    "stt": 638,
    "phone": "0938390569",
    "fbName": "Thanh Hà",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340638-639",
    "stt": 639,
    "phone": "0986030605",
    "fbName": "Ngọc Thuý",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340638-640",
    "stt": 640,
    "phone": "0777281759",
    "fbName": "欣欣",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340638-641",
    "stt": 641,
    "phone": "0888449894",
    "fbName": "Linh Thuỳ",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340638-642",
    "stt": 642,
    "phone": "0762930684",
    "fbName": "Nguyen Suny",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340639-643",
    "stt": 643,
    "phone": "0797463542",
    "fbName": "Bạn của chị Linh Đan",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340639-644",
    "stt": 644,
    "phone": "0369926018",
    "fbName": "Lance Lovelylance",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340639-645",
    "stt": 645,
    "phone": "0363622787",
    "fbName": "Trần Nguyễn Huyền Trang",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340639-646",
    "stt": 646,
    "phone": "0961975070",
    "fbName": "woosallyy_ - phn.yn",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340639-647",
    "stt": 647,
    "phone": "0398708444",
    "fbName": "Aju Aju",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340639-648",
    "stt": 648,
    "phone": "0766102970",
    "fbName": "Mỹ Linh",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340639-649",
    "stt": 649,
    "phone": "0789461649",
    "fbName": "Hoài Thanh",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340639-650",
    "stt": 650,
    "phone": "0326173177",
    "fbName": "vegetchef - Vegetchef",
    "service": "Mụn mặt",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340639-651",
    "stt": 651,
    "phone": "0776622959",
    "fbName": "Huỳnh Ngọc NhưÝ",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340639-652",
    "stt": 652,
    "phone": "0363464540",
    "fbName": "MS NHUNG",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340639-653",
    "stt": 653,
    "phone": "0906573511",
    "fbName": "Trần Thu",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340639-654",
    "stt": 654,
    "phone": "0345977805",
    "fbName": "cuongchau.ueh.779 - Cường Châu",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340639-655",
    "stt": 655,
    "phone": "0393654807",
    "fbName": "Loan Pham",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340639-656",
    "stt": 656,
    "phone": "0902615121",
    "fbName": "MR TRÍ",
    "service": "Mụn mặt",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340639-657",
    "stt": 657,
    "phone": "0342442509",
    "fbName": "MR KHANG - 3N ##",
    "service": "Triệt nách Nam",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340639-658",
    "stt": 658,
    "phone": "0908384614",
    "fbName": "MS Ý",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340639-659",
    "stt": 659,
    "phone": "0773761407",
    "fbName": "MS NGỌC",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340639-660",
    "stt": 660,
    "phone": "0396000935",
    "fbName": "Lam Linh",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340639-661",
    "stt": 661,
    "phone": "0906706289",
    "fbName": "Minh Thư",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340639-662",
    "stt": 662,
    "phone": "0923239091",
    "fbName": "Huong Minh",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340639-663",
    "stt": 663,
    "phone": "0983263014",
    "fbName": "Thảo",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340639-664",
    "stt": 664,
    "phone": "0938130076",
    "fbName": "_ddmyuyen_ - Đoàn Dương Mỹ Uyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340640-665",
    "stt": 665,
    "phone": "0792917314",
    "fbName": "ponyelfin - Photocopy Lê Dũng",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340640-666",
    "stt": 666,
    "phone": "0826766177",
    "fbName": "Nguyễn Đinh Minh Thư",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340640-667",
    "stt": 667,
    "phone": "0937806173",
    "fbName": "Bùi Thu Hằng",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340640-668",
    "stt": 668,
    "phone": "0901171826",
    "fbName": "Kim Khuyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340640-669",
    "stt": 669,
    "phone": "0906615551",
    "fbName": "Phi Tây",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340640-670",
    "stt": 670,
    "phone": "0909778620",
    "fbName": "Phạm Hoàng Minh Châu",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340640-671",
    "stt": 671,
    "phone": "0903317060",
    "fbName": "conangxauci60 - LUCYNGUYEN60",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340640-672",
    "stt": 672,
    "phone": "0395559177",
    "fbName": "Trần Minh Toàn",
    "service": "Triệt nách Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340640-673",
    "stt": 673,
    "phone": "0382211199",
    "fbName": "Thùy Trang Bùi",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340640-674",
    "stt": 674,
    "phone": "0347912435",
    "fbName": "PD Thiện Tấn",
    "service": "Triệt nách Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340640-675",
    "stt": 675,
    "phone": "0393224900",
    "fbName": "An Do",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340640-676",
    "stt": 676,
    "phone": "0909709023",
    "fbName": "Dang Black Marble",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340640-677",
    "stt": 677,
    "phone": "0987746860",
    "fbName": "Minh Ngữ Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340640-678",
    "stt": 678,
    "phone": "0339659141",
    "fbName": "Kim Cương",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340640-679",
    "stt": 679,
    "phone": "0967935944",
    "fbName": "phuonganh439431 - PHUONGANH68",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340640-680",
    "stt": 680,
    "phone": "0384243428",
    "fbName": "Giang Cẩm Võ",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340640-681",
    "stt": 681,
    "phone": "0938439798",
    "fbName": "Xinh Le",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340640-682",
    "stt": 682,
    "phone": "0946550204",
    "fbName": "Ngọc Thảo",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340640-683",
    "stt": 683,
    "phone": "0949859139",
    "fbName": "Ngọc Bạch",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340640-684",
    "stt": 684,
    "phone": "0966214523",
    "fbName": "Vũ Thị Vân",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340640-685",
    "stt": 685,
    "phone": "0785182532",
    "fbName": "Yu Juan",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340640-686",
    "stt": 686,
    "phone": "0583128260",
    "fbName": "ngoc.vy532 - Ngoc vy",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340641-687",
    "stt": 687,
    "phone": "0865891134",
    "fbName": "chu_u03 - Chu",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340641-688",
    "stt": 688,
    "phone": "0325313425",
    "fbName": "Vu Luong",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340641-689",
    "stt": 689,
    "phone": "0339596506",
    "fbName": "Dương Thị Linh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340641-690",
    "stt": 690,
    "phone": "0931325682",
    "fbName": "Nhien Duy",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340641-691",
    "stt": 691,
    "phone": "0933386371",
    "fbName": "Tien Cam",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340641-692",
    "stt": 692,
    "phone": "0975034323",
    "fbName": "Linh Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340641-693",
    "stt": 693,
    "phone": "0932270596",
    "fbName": "Nhii Lê",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340641-694",
    "stt": 694,
    "phone": "0584953218",
    "fbName": "Huỳnh Thị Kim Ngân",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340641-695",
    "stt": 695,
    "phone": "0328767095",
    "fbName": "lucnhi0409 - Bánh mì Sữa",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340641-696",
    "stt": 696,
    "phone": "0942862629",
    "fbName": "Nguyễn Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340641-697",
    "stt": 697,
    "phone": "0937812888",
    "fbName": "Phượng Lê",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340641-698",
    "stt": 698,
    "phone": "0933888735",
    "fbName": "Nga Phạm",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340641-699",
    "stt": 699,
    "phone": "0773335387",
    "fbName": "Dung Hoàng",
    "service": "Mụn mặt",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340641-700",
    "stt": 700,
    "phone": "0329805379",
    "fbName": "Phuong Thanh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340641-701",
    "stt": 701,
    "phone": "0329308219",
    "fbName": "Mung Vu",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340641-702",
    "stt": 702,
    "phone": "0933738374",
    "fbName": "Hồng Lê",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340641-703",
    "stt": 703,
    "phone": "0389277054",
    "fbName": "Khánh Dung",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340641-704",
    "stt": 704,
    "phone": "0342808871",
    "fbName": "HẠ",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340641-705",
    "stt": 705,
    "phone": "0907785757",
    "fbName": "Xíu Xíu",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340641-706",
    "stt": 706,
    "phone": "0384207517",
    "fbName": "Yen Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340641-707",
    "stt": 707,
    "phone": "0907053357",
    "fbName": "Nguyễn Phước",
    "service": "Triệt nách Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340642-708",
    "stt": 708,
    "phone": "0865234736",
    "fbName": "Thùy Trang",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340642-709",
    "stt": 709,
    "phone": "0907081578",
    "fbName": "CON GÁI MS THÚY",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340642-710",
    "stt": 710,
    "phone": "0329974840",
    "fbName": "paradoxox_bmy - tao mệt rồi huỷ diệt đi.",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340642-711",
    "stt": 711,
    "phone": "0933047288",
    "fbName": "Chau Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340642-712",
    "stt": 712,
    "phone": "0901365147",
    "fbName": "Phngocc Quynhu",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340642-713",
    "stt": 713,
    "phone": "0969131176",
    "fbName": "Lệ Thanh",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340642-714",
    "stt": 714,
    "phone": "0975903939",
    "fbName": "huyenrrose - H-rose",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340642-715",
    "stt": 715,
    "phone": "0334784012",
    "fbName": "Nga",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340642-716",
    "stt": 716,
    "phone": "0333452241",
    "fbName": "Hải Phượng",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340642-717",
    "stt": 717,
    "phone": "0834590648",
    "fbName": "Nguyễn Ngọc Đông Trang",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340642-718",
    "stt": 718,
    "phone": "0376211446",
    "fbName": "Phạm Thanh Nhàn",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340642-719",
    "stt": 719,
    "phone": "0931875101",
    "fbName": "THÙY",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340642-720",
    "stt": 720,
    "phone": "0969303334",
    "fbName": "Khánh Ly",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340643-721",
    "stt": 721,
    "phone": "0394811519",
    "fbName": "Kiều Chi",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340643-722",
    "stt": 722,
    "phone": "0938415295",
    "fbName": "Mai Khánh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340643-723",
    "stt": 723,
    "phone": "0708982667",
    "fbName": "Phương Vy",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340643-724",
    "stt": 724,
    "phone": "0366993372",
    "fbName": "Kim Yến",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340643-725",
    "stt": 725,
    "phone": "0981487426",
    "fbName": "Linh My",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340643-726",
    "stt": 726,
    "phone": "0929889008",
    "fbName": "Hy Minh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340643-727",
    "stt": 727,
    "phone": "0778788129",
    "fbName": "Hoang Phúc Le",
    "service": "Triệt nách Nam",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340643-728",
    "stt": 728,
    "phone": "0843482889",
    "fbName": "Phú Khangg",
    "service": "Triệt Bikini Nam",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340643-729",
    "stt": 729,
    "phone": "0338909647",
    "fbName": "kimhoai93 - kim Hoài",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340643-730",
    "stt": 730,
    "phone": "0332505764",
    "fbName": "Khả Vy",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340643-731",
    "stt": 731,
    "phone": "0965499160",
    "fbName": "Nguyễn Thuỷ TiÊn",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340643-732",
    "stt": 732,
    "phone": "0366602606",
    "fbName": "Huỳnh Đăng Khoa",
    "service": "Triệt Bikini Nam",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340643-733",
    "stt": 733,
    "phone": "0326372026",
    "fbName": "Hân Hân",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340643-734",
    "stt": 734,
    "phone": "0776733942",
    "fbName": "Yến Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340643-735",
    "stt": 735,
    "phone": "0397415168",
    "fbName": "Thuy Ngo",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340643-736",
    "stt": 736,
    "phone": "0903355363",
    "fbName": "Dương Hoàng Đạo",
    "service": "Triệt Bikini Nam",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340643-737",
    "stt": 737,
    "phone": "0982088879",
    "fbName": "ceciliahanh78 - Thanh Hạnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340643-738",
    "stt": 738,
    "phone": "0962101161",
    "fbName": "Khách 738",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340643-739",
    "stt": 739,
    "phone": "0399836524",
    "fbName": "Khách 739",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340643-740",
    "stt": 740,
    "phone": "0938860099",
    "fbName": "Phương Trâm",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340643-741",
    "stt": 741,
    "phone": "0978725949",
    "fbName": "tieule1993 - Seline",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340643-742",
    "stt": 742,
    "phone": "0908341307",
    "fbName": "Khách 742",
    "service": "Mụn mặt",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340644-743",
    "stt": 743,
    "phone": "0194882532",
    "fbName": "BẠN CỦA tieule1993 - Seline",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340644-744",
    "stt": 744,
    "phone": "0937776272",
    "fbName": "minh.trangmita - Minh trang",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340644-745",
    "stt": 745,
    "phone": "0963300313",
    "fbName": "Khách 745",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340644-746",
    "stt": 746,
    "phone": "0776585914",
    "fbName": "Pham Phượng",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340644-747",
    "stt": 747,
    "phone": "0909105005",
    "fbName": "Hiếu Thảo",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340644-748",
    "stt": 748,
    "phone": "0903110606",
    "fbName": "hanngo._ - Han Ngo",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340644-749",
    "stt": 749,
    "phone": "0971310457",
    "fbName": "Thúy Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340644-750",
    "stt": 750,
    "phone": "0938789881",
    "fbName": "Hà Tiên",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340644-751",
    "stt": 751,
    "phone": "0938139610",
    "fbName": "Nguyen Diem Thuy",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340644-752",
    "stt": 752,
    "phone": "0918885801",
    "fbName": "Minh Vũ",
    "service": "Triệt Bikini Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340644-753",
    "stt": 753,
    "phone": "0923163565",
    "fbName": "_mukihjhj - vy",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340644-754",
    "stt": 754,
    "phone": "0343834029",
    "fbName": "Thư Đồng",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340644-755",
    "stt": 755,
    "phone": "0334168575",
    "fbName": "Nhan Yến Nhii",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340644-756",
    "stt": 756,
    "phone": "0898999993",
    "fbName": "Tô Thị Ánh Hồng",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "12-09-2026"
  },
  {
    "id": "lg-1790844340644-757",
    "stt": 757,
    "phone": "0941635627",
    "fbName": "Diễm My",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340644-758",
    "stt": 758,
    "phone": "0949648168",
    "fbName": "MS TUYỀN",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340644-759",
    "stt": 759,
    "phone": "0981205146",
    "fbName": "My Lê",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340644-760",
    "stt": 760,
    "phone": "0389944187",
    "fbName": "MS VEN",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340644-761",
    "stt": 761,
    "phone": "0944290390",
    "fbName": "tram290390",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340644-762",
    "stt": 762,
    "phone": "0982201219",
    "fbName": "Trần Thuỷ",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340644-763",
    "stt": 763,
    "phone": "0788072097",
    "fbName": "Lê Thị Thu Trang",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "13-09-2026"
  },
  {
    "id": "lg-1790844340645-764",
    "stt": 764,
    "phone": "0977558814",
    "fbName": "Đăng Mỹ Châu",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340645-765",
    "stt": 765,
    "phone": "0702377138",
    "fbName": "Trần Thiên Thanh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340645-766",
    "stt": 766,
    "phone": "0393636391",
    "fbName": "Huỳnh My My Cáo",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340645-767",
    "stt": 767,
    "phone": "0901996488",
    "fbName": "Tí Tí",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340645-768",
    "stt": 768,
    "phone": "0357963188",
    "fbName": "Như Thuỷ",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340645-769",
    "stt": 769,
    "phone": "0775993717",
    "fbName": "Thư Huỳnh Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340645-770",
    "stt": 770,
    "phone": "0983650350",
    "fbName": "Nguyễn Ngọc AnAn",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340645-771",
    "stt": 771,
    "phone": "0338387598",
    "fbName": "Tưởng Trần",
    "service": "Triệt Bikini Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340645-772",
    "stt": 772,
    "phone": "0812897610",
    "fbName": "Như Quỳnh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340645-773",
    "stt": 773,
    "phone": "0395708885",
    "fbName": "MS NHUNG",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340645-774",
    "stt": 774,
    "phone": "0904225304",
    "fbName": "MS TRINH",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "hủy",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340645-775",
    "stt": 775,
    "phone": "0947772545",
    "fbName": "Thu Huynh",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340645-776",
    "stt": 776,
    "phone": "0398492523",
    "fbName": "Hạ Hạ Trân",
    "service": "Mụn mặt",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340645-777",
    "stt": 777,
    "phone": "0374141331",
    "fbName": "Trần Thị Ngọc Nguyên",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340645-778",
    "stt": 778,
    "phone": "0931369948",
    "fbName": "Lê Ngân",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340645-779",
    "stt": 779,
    "phone": "0772632502",
    "fbName": "Trà Mi",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340645-780",
    "stt": 780,
    "phone": "0931332490",
    "fbName": "Dung Dung",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340645-781",
    "stt": 781,
    "phone": "0337638806",
    "fbName": "Đinh Trương Trà Giang",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340645-782",
    "stt": 782,
    "phone": "0909411442",
    "fbName": "Cindy Ngô",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340645-783",
    "stt": 783,
    "phone": "0965789228",
    "fbName": "Huynh Anh",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340645-784",
    "stt": 784,
    "phone": "0975993194",
    "fbName": "emthuu._ - Thuu Ngan",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340646-785",
    "stt": 785,
    "phone": "0973548788",
    "fbName": "Nguyễn Diễm",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340646-786",
    "stt": 786,
    "phone": "0772768818",
    "fbName": "Vy Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340646-787",
    "stt": 787,
    "phone": "0981861239",
    "fbName": "Thúy Tâm Đặng",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340646-788",
    "stt": 788,
    "phone": "0985109685",
    "fbName": "Kim Oanh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340646-789",
    "stt": 789,
    "phone": "0931431538",
    "fbName": "nbtnbtnbt02 - 🥹",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340646-790",
    "stt": 790,
    "phone": "0888709155",
    "fbName": "Minh Huỳnh",
    "service": "Mụn mặt",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340646-791",
    "stt": 791,
    "phone": "0938445344",
    "fbName": "user2761225888125 - Kim Yến",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340646-792",
    "stt": 792,
    "phone": "0939777761",
    "fbName": "Đặng Hữu Phúc",
    "service": "Triệt Bikini Nam",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340646-793",
    "stt": 793,
    "phone": "0913744745",
    "fbName": "ms linh",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340646-794",
    "stt": 794,
    "phone": "0974880165",
    "fbName": "Nguyễn Thuý Quyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340646-795",
    "stt": 795,
    "phone": "0334623997",
    "fbName": "Nguyễn Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340646-796",
    "stt": 796,
    "phone": "0946623239",
    "fbName": "Ngoc Cam Van",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340646-797",
    "stt": 797,
    "phone": "0918602316",
    "fbName": "diary25123 - 思睿",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340646-798",
    "stt": 798,
    "phone": "0388820028",
    "fbName": "Thúy Diễm",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340646-799",
    "stt": 799,
    "phone": "0964313208",
    "fbName": "Thanh Thảo",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340647-800",
    "stt": 800,
    "phone": "0965590940",
    "fbName": "Ngoc Huyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340647-801",
    "stt": 801,
    "phone": "0376882083",
    "fbName": "bongcaa - ntth",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340647-802",
    "stt": 802,
    "phone": "0908976666",
    "fbName": "Dat Dat",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340647-803",
    "stt": 803,
    "phone": "0989177898",
    "fbName": "Hằng Hoàng",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340647-804",
    "stt": 804,
    "phone": "0398907259",
    "fbName": "Nguyễn Phúc An",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "14-09-2026"
  },
  {
    "id": "lg-1790844340647-805",
    "stt": 805,
    "phone": "0915746981",
    "fbName": "Lan Thuy",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340647-806",
    "stt": 806,
    "phone": "0921416066",
    "fbName": "hivanehehehe - Hivane 🍃",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340647-807",
    "stt": 807,
    "phone": "0899854386",
    "fbName": "chinchin_story - chinchin🌻",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340647-808",
    "stt": 808,
    "phone": "0788031422",
    "fbName": "nnnnnnvcfxxvkdndnsbanja - Người Châu Á Da Châu Phi",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340647-809",
    "stt": 809,
    "phone": "0862442995",
    "fbName": "Thao Vy",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340647-810",
    "stt": 810,
    "phone": "0909941259",
    "fbName": "Dung Shuchin",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340647-811",
    "stt": 811,
    "phone": "0832657257",
    "fbName": "Truong Vy",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340648-812",
    "stt": 812,
    "phone": "0912608376",
    "fbName": "ghi2358 - như tường",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340648-813",
    "stt": 813,
    "phone": "0856568591",
    "fbName": "Phúc Châu",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340648-814",
    "stt": 814,
    "phone": "0567789995",
    "fbName": "Vi Tuong Nguyen",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340648-815",
    "stt": 815,
    "phone": "0877702877",
    "fbName": "phamhoa1230 - Quỳnh Hoa",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340648-816",
    "stt": 816,
    "phone": "0909707081",
    "fbName": "Bao Tran",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340648-817",
    "stt": 817,
    "phone": "0705100942",
    "fbName": "Violet Vía",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340648-818",
    "stt": 818,
    "phone": "0332994109",
    "fbName": "sun.yata13 - Śūnyatā",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340648-819",
    "stt": 819,
    "phone": "0904817739",
    "fbName": "Lệ Diễm",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340648-820",
    "stt": 820,
    "phone": "0395766113",
    "fbName": "Bá Thủy",
    "service": "Triệt nách Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340648-821",
    "stt": 821,
    "phone": "0832557938",
    "fbName": "diem.huynh1608 - Diễm Huỳnh",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340648-822",
    "stt": 822,
    "phone": "0772705134",
    "fbName": "MS THƯ",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340648-823",
    "stt": 823,
    "phone": "0396386382",
    "fbName": "Mai Đặng",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340648-824",
    "stt": 824,
    "phone": "0901391154",
    "fbName": "phuonglin1983 - Phương Linh 83",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340648-825",
    "stt": 825,
    "phone": "0376517573",
    "fbName": "Đỗ Quyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340648-826",
    "stt": 826,
    "phone": "0908519890",
    "fbName": "Son Nguyen",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340648-827",
    "stt": 827,
    "phone": "0799315796",
    "fbName": "Thach La",
    "service": "Triệt Bikini Nam",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340648-828",
    "stt": 828,
    "phone": "0394908055",
    "fbName": "lnhao05 - Lê Nhựt Hào",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340648-829",
    "stt": 829,
    "phone": "0981183074",
    "fbName": "Huỳnh Nhật Lam",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340648-830",
    "stt": 830,
    "phone": "0933795039",
    "fbName": "Bích Phượng",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340648-831",
    "stt": 831,
    "phone": "0356803208",
    "fbName": "Nguyễn Lan Duy",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340648-832",
    "stt": 832,
    "phone": "0907013307",
    "fbName": "Bích Phượng",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340649-833",
    "stt": 833,
    "phone": "0587738738",
    "fbName": "Thanh Trúc",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340649-834",
    "stt": 834,
    "phone": "0967359141",
    "fbName": "Nguyễn Thương",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340649-835",
    "stt": 835,
    "phone": "0833010088",
    "fbName": "Le Quyen Hoang",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340649-836",
    "stt": 836,
    "phone": "0933911099",
    "fbName": "Rosa Ngo",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340649-837",
    "stt": 837,
    "phone": "0876450976",
    "fbName": "MR SANG",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340649-838",
    "stt": 838,
    "phone": "0909276971",
    "fbName": "Ngọc Xuyến",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340649-839",
    "stt": 839,
    "phone": "0901349331",
    "fbName": "Danh Freedom",
    "service": "Triệt Bikini Nam",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340649-840",
    "stt": 840,
    "phone": "0326293138",
    "fbName": "Đặng Thành Đạt",
    "service": "Mụn mặt",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340649-841",
    "stt": 841,
    "phone": "0909252318",
    "fbName": "Nguyễn Quỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340649-842",
    "stt": 842,
    "phone": "0336203048",
    "fbName": "Ut Ngân",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340649-843",
    "stt": 843,
    "phone": "0919673888",
    "fbName": "duydong99 - Duy Đông",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340649-844",
    "stt": 844,
    "phone": "0986687485",
    "fbName": "MR NIỆM",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340649-845",
    "stt": 845,
    "phone": "0937625485",
    "fbName": "Bich Tram",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340649-846",
    "stt": 846,
    "phone": "0929400749",
    "fbName": "Nguyễn Mai Thảo",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340649-847",
    "stt": 847,
    "phone": "0918579246",
    "fbName": "Nguyenn Thao",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340649-848",
    "stt": 848,
    "phone": "0834404279",
    "fbName": "Thúy Hân",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340649-849",
    "stt": 849,
    "phone": "0395055583",
    "fbName": "Phạm Ngân",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "15-09-2026"
  },
  {
    "id": "lg-1790844340649-850",
    "stt": 850,
    "phone": "0938616362",
    "fbName": "Phuong An",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340649-851",
    "stt": 851,
    "phone": "0932694857",
    "fbName": "Hà Điểm",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340649-852",
    "stt": 852,
    "phone": "0917514979",
    "fbName": "Bằng An",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340650-853",
    "stt": 853,
    "phone": "0376272258",
    "fbName": "Trang Vũ",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340650-854",
    "stt": 854,
    "phone": "0932338422",
    "fbName": "Nhi Kha",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340650-855",
    "stt": 855,
    "phone": "0933139886",
    "fbName": "Vy Vy",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340650-856",
    "stt": 856,
    "phone": "0977736116",
    "fbName": "Hằng Bùi",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340650-857",
    "stt": 857,
    "phone": "0337690619",
    "fbName": "Trần Hoàng Long",
    "service": "Triệt nách Nam",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340650-858",
    "stt": 858,
    "phone": "0948295845",
    "fbName": "Na Na",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340650-859",
    "stt": 859,
    "phone": "0343505865",
    "fbName": "Thu Nguyen",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340650-860",
    "stt": 860,
    "phone": "0869610113",
    "fbName": "Thái Trần",
    "service": "Triệt nách Nam",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340650-861",
    "stt": 861,
    "phone": "0786073880",
    "fbName": "tina.bui - Tina bui",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340650-862",
    "stt": 862,
    "phone": "0357598629",
    "fbName": "Hoàng Phi",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340650-863",
    "stt": 863,
    "phone": "0394620470",
    "fbName": "Thùy Linh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340650-864",
    "stt": 864,
    "phone": "0386262323",
    "fbName": "Kim Hải",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340650-865",
    "stt": 865,
    "phone": "0939966906",
    "fbName": "Phùn Ngọc",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340650-866",
    "stt": 866,
    "phone": "0349224697",
    "fbName": "Lê Thị Van Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "hủy",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340650-867",
    "stt": 867,
    "phone": "0931383865",
    "fbName": "Nguyen Thi Ngoc Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340650-868",
    "stt": 868,
    "phone": "0337701954",
    "fbName": "Chí Nguyện",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340650-869",
    "stt": 869,
    "phone": "0979254493",
    "fbName": "Hà Tâm",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340650-870",
    "stt": 870,
    "phone": "0906928286",
    "fbName": "Van Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340650-871",
    "stt": 871,
    "phone": "0939458912",
    "fbName": "Yen Kim Yến",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340650-872",
    "stt": 872,
    "phone": "0794184362",
    "fbName": "Nguyen Thuy",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340650-873",
    "stt": 873,
    "phone": "0908056080",
    "fbName": "Xiaoping Tran",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340651-874",
    "stt": 874,
    "phone": "0972714136",
    "fbName": "MS DƯƠNG",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340651-875",
    "stt": 875,
    "phone": "0963261110",
    "fbName": "MR SIÊU ( 7-10N)",
    "service": "Triệt nách Nam",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340651-876",
    "stt": 876,
    "phone": "0942129396",
    "fbName": "Phương Trâm",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340651-877",
    "stt": 877,
    "phone": "0983857565",
    "fbName": "Lê Thị Van Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340651-878",
    "stt": 878,
    "phone": "0906064100",
    "fbName": "Nhi Thanh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340651-879",
    "stt": 879,
    "phone": "0968513960",
    "fbName": "Thân Thach",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340651-880",
    "stt": 880,
    "phone": "0932104666",
    "fbName": "cuc.258 - Trần Hiền 92@&",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340651-881",
    "stt": 881,
    "phone": "0936008998",
    "fbName": "Hoa Nguyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340651-882",
    "stt": 882,
    "phone": "0398290191",
    "fbName": "Như Huỳnh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340651-883",
    "stt": 883,
    "phone": "0344623820",
    "fbName": "ynenii_05 - Đỗ Yến Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340651-884",
    "stt": 884,
    "phone": "0778080114",
    "fbName": "Nga Phạmm",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340651-885",
    "stt": 885,
    "phone": "0908572188",
    "fbName": "Trần Diễm",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340651-886",
    "stt": 886,
    "phone": "0906886383",
    "fbName": "Lan Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340651-887",
    "stt": 887,
    "phone": "0903835829",
    "fbName": "Đăng Vy",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340651-888",
    "stt": 888,
    "phone": "0962968401",
    "fbName": "Dua Dua",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340651-889",
    "stt": 889,
    "phone": "0914287144",
    "fbName": "subabi._ - ᴛʀᴀᴍ ᴀɴʜ🖇️",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340651-890",
    "stt": 890,
    "phone": "0907799909",
    "fbName": "Lelita Del",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340651-891",
    "stt": 891,
    "phone": "0902666388",
    "fbName": "Phuong Tran",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340651-892",
    "stt": 892,
    "phone": "0866931589",
    "fbName": "Hồng Phương Nguyễn",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340651-893",
    "stt": 893,
    "phone": "0368255019",
    "fbName": "Hoàng Xinh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340651-894",
    "stt": 894,
    "phone": "0866820608",
    "fbName": "Lưu My",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340651-895",
    "stt": 895,
    "phone": "0393742894",
    "fbName": "Nguyen Mai Ngan",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340652-896",
    "stt": 896,
    "phone": "0967760800",
    "fbName": "Tống Nữ Ái Trinh",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340652-897",
    "stt": 897,
    "phone": "0983570731",
    "fbName": "Lucsy Goh",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340652-898",
    "stt": 898,
    "phone": "0397988492",
    "fbName": "roselie2994 - Julie",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340652-899",
    "stt": 899,
    "phone": "0777813302",
    "fbName": "Trần Thu Ánh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340652-900",
    "stt": 900,
    "phone": "0909166517",
    "fbName": "Soc Coffee Tea",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340652-901",
    "stt": 901,
    "phone": "0898485298",
    "fbName": "Mai Pham",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340652-902",
    "stt": 902,
    "phone": "0933267445",
    "fbName": "Hòa Nguyễn",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340652-903",
    "stt": 903,
    "phone": "0334978077",
    "fbName": "ngoc.m288 - Ngoc Mỹ",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340652-904",
    "stt": 904,
    "phone": "0972505459",
    "fbName": "Nguyễn Linl",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "16-09-2026"
  },
  {
    "id": "lg-1790844340652-905",
    "stt": 905,
    "phone": "0907175853",
    "fbName": "gecko.8861680",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340652-906",
    "stt": 906,
    "phone": "0903563627",
    "fbName": "Ng Minh Thư",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340652-907",
    "stt": 907,
    "phone": "0327111761",
    "fbName": "Huang Chan",
    "service": "Mụn mặt",
    "staffName": "Trần Thị Hải Yến",
    "status": "hủy",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340652-908",
    "stt": 908,
    "phone": "0968931167",
    "fbName": "Nguyễn Phương Thảo",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340652-909",
    "stt": 909,
    "phone": "0359588551",
    "fbName": "Như Ý Bé Ba",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340652-910",
    "stt": 910,
    "phone": "0907007405",
    "fbName": "Quỳnh Qui",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340652-911",
    "stt": 911,
    "phone": "0969955448",
    "fbName": "Nguyễn Diễm",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340652-912",
    "stt": 912,
    "phone": "0839737278",
    "fbName": "Bùi Ngọc Lan",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340652-913",
    "stt": 913,
    "phone": "0915768798",
    "fbName": "Nhi Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340652-914",
    "stt": 914,
    "phone": "0899344696",
    "fbName": "Phương Uyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340653-915",
    "stt": 915,
    "phone": "0395215265",
    "fbName": "bechisp - Phi Cơ",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340653-916",
    "stt": 916,
    "phone": "0936321743",
    "fbName": "Lê Thị Tuyết Trinh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340653-917",
    "stt": 917,
    "phone": "0354390896",
    "fbName": "i.knocc - Bự",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340653-918",
    "stt": 918,
    "phone": "0985307060",
    "fbName": "Pham Nhi",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340653-919",
    "stt": 919,
    "phone": "0908863361",
    "fbName": "hoahongden8290 - Hoa Hồng đen (che do doc than)",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340654-920",
    "stt": 920,
    "phone": "0348953631",
    "fbName": "Thu Cúc",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340654-921",
    "stt": 921,
    "phone": "0932656667",
    "fbName": "Thuy Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340654-922",
    "stt": 922,
    "phone": "0964878104",
    "fbName": "Trangg Trần",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340654-923",
    "stt": 923,
    "phone": "0817960129",
    "fbName": "thanhngan_31032005 - TN🌹💚",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340654-924",
    "stt": 924,
    "phone": "0937468665",
    "fbName": "Cong Dang",
    "service": "Triệt Bikini Nam",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340654-925",
    "stt": 925,
    "phone": "0942902741",
    "fbName": "anhahahhahah - LA☆",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340654-926",
    "stt": 926,
    "phone": "0888794284",
    "fbName": "Ngọc Trinh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "17-09-2026"
  },
  {
    "id": "lg-1790844340654-927",
    "stt": 927,
    "phone": "0385363781",
    "fbName": "Yến Nhi",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340654-928",
    "stt": 928,
    "phone": "0877279722",
    "fbName": "Yan Yan",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340654-929",
    "stt": 929,
    "phone": "0933301616",
    "fbName": "Nguyễn Nga",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340654-930",
    "stt": 930,
    "phone": "0902447305",
    "fbName": "Thao Huong Le",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340654-931",
    "stt": 931,
    "phone": "0902740056",
    "fbName": "Nguyen Vanh",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340654-932",
    "stt": 932,
    "phone": "0961987386",
    "fbName": "Liễu Doãn",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340654-933",
    "stt": 933,
    "phone": "0765780425",
    "fbName": "Chi Diệp",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340654-934",
    "stt": 934,
    "phone": "0888307315",
    "fbName": "Phan Đỗ An Mẫn",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340654-935",
    "stt": 935,
    "phone": "0977240058",
    "fbName": "Đạt Đỗ Đỗ",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340654-936",
    "stt": 936,
    "phone": "0945734565",
    "fbName": "Trần Kiên Hào",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340654-937",
    "stt": 937,
    "phone": "0941444914",
    "fbName": "Phương Anh Huỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340655-938",
    "stt": 938,
    "phone": "0394773145",
    "fbName": "Tú Phạm",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340655-939",
    "stt": 939,
    "phone": "0903361520",
    "fbName": "Huỳnh Thanh Huyền",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340655-940",
    "stt": 940,
    "phone": "0829193979",
    "fbName": "Mai Đỗ Anh Tuấn",
    "service": "Triệt Bikini Nam",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340655-941",
    "stt": 941,
    "phone": "0332855841",
    "fbName": "Tú Phạm",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340655-942",
    "stt": 942,
    "phone": "0823161627",
    "fbName": "Hồng Khanh Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340655-943",
    "stt": 943,
    "phone": "0906921514",
    "fbName": "Phương Vũ",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340655-944",
    "stt": 944,
    "phone": "0704610207",
    "fbName": "Gia Huy",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340655-945",
    "stt": 945,
    "phone": "0938992301",
    "fbName": "Hien Phan",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340655-946",
    "stt": 946,
    "phone": "0585706463",
    "fbName": "Nguyên Lê",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340655-947",
    "stt": 947,
    "phone": "0376665085",
    "fbName": "Ngọc Yến",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340655-948",
    "stt": 948,
    "phone": "0707243028",
    "fbName": "Bội Nhàn",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340655-949",
    "stt": 949,
    "phone": "0398387958",
    "fbName": "nhi0101nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340655-950",
    "stt": 950,
    "phone": "0359072548",
    "fbName": "Idol Ngân",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340655-951",
    "stt": 951,
    "phone": "0964005179",
    "fbName": "MS MY",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340655-952",
    "stt": 952,
    "phone": "0328632986",
    "fbName": "Quán Nét Quang Anh",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340655-953",
    "stt": 953,
    "phone": "0908077618",
    "fbName": "Hải Ly",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340655-954",
    "stt": 954,
    "phone": "0879879072",
    "fbName": "Thanh Yên",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340655-955",
    "stt": 955,
    "phone": "0366996702",
    "fbName": "Maria Đỗ Hoàng Châu",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340655-956",
    "stt": 956,
    "phone": "0914956064",
    "fbName": "Huỳnh Diệu Ngân",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340655-957",
    "stt": 957,
    "phone": "0795430792",
    "fbName": "Ngọc Hoa",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340655-958",
    "stt": 958,
    "phone": "0795334790",
    "fbName": "Yến Nhi",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340656-959",
    "stt": 959,
    "phone": "0977237140",
    "fbName": "Ngọc Yến",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340656-960",
    "stt": 960,
    "phone": "0908993555",
    "fbName": "Khanh Truong",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340656-961",
    "stt": 961,
    "phone": "0914489774",
    "fbName": "dangthihieu7 - 🪷Ngok🍂🍁",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340656-962",
    "stt": 962,
    "phone": "0938252298",
    "fbName": "userphuong0938252298 - Châu Phương",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340656-963",
    "stt": 963,
    "phone": "0966525227",
    "fbName": "Dieuu Hienn",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340656-964",
    "stt": 964,
    "phone": "0915999285",
    "fbName": "Hue Ha",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340656-965",
    "stt": 965,
    "phone": "0343568077",
    "fbName": "Cẩm Hồng",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340656-966",
    "stt": 966,
    "phone": "0708016018",
    "fbName": "Phương Ngàn",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340656-967",
    "stt": 967,
    "phone": "0777417443",
    "fbName": "Phi Phi",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340656-968",
    "stt": 968,
    "phone": "0937801454",
    "fbName": "Dy Dy",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340656-969",
    "stt": 969,
    "phone": "0812576064",
    "fbName": "MS HUỆ ( BẠN C XUYẾN)",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340656-970",
    "stt": 970,
    "phone": "0933777451",
    "fbName": "Trang Huỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340656-971",
    "stt": 971,
    "phone": "0913906188",
    "fbName": "fan_fan_ko - Ching_",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340656-972",
    "stt": 972,
    "phone": "0365305355",
    "fbName": "Huynh James",
    "service": "Triệt Bikini Nam",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340656-973",
    "stt": 973,
    "phone": "0943394641",
    "fbName": "utdieu9999 - Hồng trúc69🥰🥰🥰",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340656-974",
    "stt": 974,
    "phone": "0971645370",
    "fbName": "bebeo411 - Bebeo",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340656-975",
    "stt": 975,
    "phone": "0336190492",
    "fbName": "Vũ Thiên Hy",
    "service": "Triệt nách Nam",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340656-976",
    "stt": 976,
    "phone": "0375476642",
    "fbName": "MỸ Linh",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340656-977",
    "stt": 977,
    "phone": "0888538924",
    "fbName": "tthg1403___ - Thanh Hường",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340656-978",
    "stt": 978,
    "phone": "0398560146",
    "fbName": "Đào Thị Tú Trinh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340656-979",
    "stt": 979,
    "phone": "0384397901",
    "fbName": "Trần Phón",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340657-980",
    "stt": 980,
    "phone": "0981863314",
    "fbName": "Nguyễn Linh",
    "service": "Triệt Bikini Nam",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340657-981",
    "stt": 981,
    "phone": "0899158189",
    "fbName": "MS THÚY",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340657-982",
    "stt": 982,
    "phone": "0373620000",
    "fbName": "Canh Hoang",
    "service": "Triệt Bikini Nam",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340657-983",
    "stt": 983,
    "phone": "0328154786",
    "fbName": "Kiếm Phong Kim",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340657-984",
    "stt": 984,
    "phone": "0942267187",
    "fbName": "Phạm Chritina",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340657-985",
    "stt": 985,
    "phone": "0934200804",
    "fbName": "Diệu Thi",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340657-986",
    "stt": 986,
    "phone": "0362282267",
    "fbName": "trucngan767 - Hồ Nguyễn Trúc Ngân",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340657-987",
    "stt": 987,
    "phone": "0907838519",
    "fbName": "Oanh Trân Kim Oanh",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340657-988",
    "stt": 988,
    "phone": "0934921514",
    "fbName": "KP Lai",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340657-989",
    "stt": 989,
    "phone": "0794017109",
    "fbName": "Oanh Trân Kim Oanh",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340657-990",
    "stt": 990,
    "phone": "0949082165",
    "fbName": "quynhhuong_pt - quynhhuong",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340657-991",
    "stt": 991,
    "phone": "0912564402",
    "fbName": "MS",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340657-992",
    "stt": 992,
    "phone": "0909047982",
    "fbName": "Mayca Tran",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340657-993",
    "stt": 993,
    "phone": "0942861879",
    "fbName": "user8119413393439 - xo",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340657-994",
    "stt": 994,
    "phone": "0914008339",
    "fbName": "Ni Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340657-995",
    "stt": 995,
    "phone": "0359134398",
    "fbName": "Thu Hiền",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340657-996",
    "stt": 996,
    "phone": "0931846673",
    "fbName": "Trâm Phan",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340657-997",
    "stt": 997,
    "phone": "0907451892",
    "fbName": "_cetoy - Cet Piicue",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340657-998",
    "stt": 998,
    "phone": "0917420247",
    "fbName": "Trịnh Thy Thơ",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340657-999",
    "stt": 999,
    "phone": "0909244838",
    "fbName": "Thế Hiển",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340658-1000",
    "stt": 1000,
    "phone": "0938101052",
    "fbName": "Oanh Ni",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340658-1001",
    "stt": 1001,
    "phone": "0764028814",
    "fbName": "linhienan - MiniÓn 👾",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340658-1002",
    "stt": 1002,
    "phone": "0834788068",
    "fbName": "Ăn Vặt Chu Chu",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340658-1003",
    "stt": 1003,
    "phone": "0339166585",
    "fbName": "Khách 1003",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340658-1004",
    "stt": 1004,
    "phone": "0933936667",
    "fbName": "Kha Xuân Mai",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340658-1005",
    "stt": 1005,
    "phone": "0786637148",
    "fbName": "Lê Thị Diễm Sương",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340658-1006",
    "stt": 1006,
    "phone": "0969436696",
    "fbName": "Hoa Hướng Dương",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340658-1007",
    "stt": 1007,
    "phone": "0987145187",
    "fbName": "Chi Lì",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340658-1008",
    "stt": 1008,
    "phone": "0911010979",
    "fbName": "Thanh Giang",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340658-1009",
    "stt": 1009,
    "phone": "0964784837",
    "fbName": "MS BÉ",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340658-1010",
    "stt": 1010,
    "phone": "0377179344",
    "fbName": "Phan Thị Quý",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340658-1011",
    "stt": 1011,
    "phone": "0934927089",
    "fbName": "anh_thu1989 - Lê Thị Kim Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "18-09-2026"
  },
  {
    "id": "lg-1790844340658-1012",
    "stt": 1012,
    "phone": "0902574411",
    "fbName": "Huong Như Pham",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340658-1013",
    "stt": 1013,
    "phone": "0834551481",
    "fbName": "Trang Le",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "hủy",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340658-1014",
    "stt": 1014,
    "phone": "0942178661",
    "fbName": "Đình Phước",
    "service": "Triệt Bikini Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340659-1015",
    "stt": 1015,
    "phone": "0946413150",
    "fbName": "Lam Giang Lê",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340659-1016",
    "stt": 1016,
    "phone": "0898400987",
    "fbName": "Huyền Trang",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340659-1017",
    "stt": 1017,
    "phone": "0858102279",
    "fbName": "Thảo Vy",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340659-1018",
    "stt": 1018,
    "phone": "0334947354",
    "fbName": "Nguyễn Thịnh",
    "service": "Triệt Bikini Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340659-1019",
    "stt": 1019,
    "phone": "0937233953",
    "fbName": "Minh Minh",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340659-1020",
    "stt": 1020,
    "phone": "0837384808",
    "fbName": "huh26945 - hướng nội",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340659-1021",
    "stt": 1021,
    "phone": "0931176859",
    "fbName": "Ninh Thu Nguyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340659-1022",
    "stt": 1022,
    "phone": "0902706320",
    "fbName": "Uyen Tran",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340659-1023",
    "stt": 1023,
    "phone": "0902955578",
    "fbName": "Vũ Quế Như",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340659-1024",
    "stt": 1024,
    "phone": "0924703147",
    "fbName": "Ngọc Bích",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340659-1025",
    "stt": 1025,
    "phone": "0903622993",
    "fbName": "Trang Tran",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340659-1026",
    "stt": 1026,
    "phone": "0971422653",
    "fbName": "Thanh Bi",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340659-1027",
    "stt": 1027,
    "phone": "0934824771",
    "fbName": "miiiliah - milia ☻",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340660-1028",
    "stt": 1028,
    "phone": "0773151676",
    "fbName": "Tr Minh Truc Quynh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340660-1029",
    "stt": 1029,
    "phone": "0906845611",
    "fbName": "Trần Thanh Tuyền",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340660-1030",
    "stt": 1030,
    "phone": "0932744079",
    "fbName": "Ivy Lê",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340660-1031",
    "stt": 1031,
    "phone": "0868607940",
    "fbName": "Dung Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340660-1032",
    "stt": 1032,
    "phone": "0789788369",
    "fbName": "MS TÚ",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "19-09-2026"
  },
  {
    "id": "lg-1790844340660-1033",
    "stt": 1033,
    "phone": "0868661234",
    "fbName": "Trần Hoàng Đức",
    "service": "CSD 249K Vũng Tàu",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340660-1034",
    "stt": 1034,
    "phone": "0812000590",
    "fbName": "Thuỷ Tiên",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340660-1035",
    "stt": 1035,
    "phone": "0939358173",
    "fbName": "Sino Lâm",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340660-1036",
    "stt": 1036,
    "phone": "0945259127",
    "fbName": "La Hiền",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340660-1037",
    "stt": 1037,
    "phone": "0918758855",
    "fbName": "Sapphire Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340660-1038",
    "stt": 1038,
    "phone": "0333433584",
    "fbName": "Bùi Thuý Hồng",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340660-1039",
    "stt": 1039,
    "phone": "0938830597",
    "fbName": "foxxieprivate - Hien Duong",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340660-1040",
    "stt": 1040,
    "phone": "0862516826",
    "fbName": "lecowwxg_",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340660-1041",
    "stt": 1041,
    "phone": "0877653204",
    "fbName": "Minh Thư",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340660-1042",
    "stt": 1042,
    "phone": "0918226446",
    "fbName": "ngocanh198071",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340660-1043",
    "stt": 1043,
    "phone": "0326690996",
    "fbName": "Thanh Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340660-1044",
    "stt": 1044,
    "phone": "0905302947",
    "fbName": "neyuh0305 - Neyuh_110🐳",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340660-1045",
    "stt": 1045,
    "phone": "0939886522",
    "fbName": "nnyn_nhie",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340660-1046",
    "stt": 1046,
    "phone": "0912656470",
    "fbName": "luxihunh - Công Chúa Nước Cạn🌻",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340660-1047",
    "stt": 1047,
    "phone": "0933115076",
    "fbName": "Han Nie",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340660-1048",
    "stt": 1048,
    "phone": "0935875558",
    "fbName": "Ny Ha Le",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340661-1049",
    "stt": 1049,
    "phone": "0357355697",
    "fbName": "bichloan283 - rồgbayphượgmúaBíchLoancôngchúa",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340661-1050",
    "stt": 1050,
    "phone": "0799667164",
    "fbName": "Phuong Thao Dang",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340661-1051",
    "stt": 1051,
    "phone": "0938901186",
    "fbName": "Hoàng Võ",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340661-1052",
    "stt": 1052,
    "phone": "0869402258",
    "fbName": "con chị hoàng",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340661-1053",
    "stt": 1053,
    "phone": "0384551250",
    "fbName": "Hoàngg Thịi Thùyy Trangg",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "hủy",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340661-1054",
    "stt": 1054,
    "phone": "0925453414",
    "fbName": "MR  QUỐC đlh",
    "service": "Triệt Bikini Nam",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340661-1055",
    "stt": 1055,
    "phone": "0967311807",
    "fbName": "Nong Meo",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340661-1056",
    "stt": 1056,
    "phone": "0819593413",
    "fbName": "Nong Meo",
    "service": "Triệt Bikini Nam",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340661-1057",
    "stt": 1057,
    "phone": "0703005508",
    "fbName": "Tina Nguyen",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340661-1058",
    "stt": 1058,
    "phone": "0962870839",
    "fbName": "HIền Rosannryy",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340661-1059",
    "stt": 1059,
    "phone": "0357953839",
    "fbName": "Linh Thái",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340661-1060",
    "stt": 1060,
    "phone": "0989110743",
    "fbName": "Hạ Ngọc",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340661-1061",
    "stt": 1061,
    "phone": "0393736479",
    "fbName": "Nguyễn Thiện Phú",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340661-1062",
    "stt": 1062,
    "phone": "0917114978",
    "fbName": "Cẩm Thu",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340661-1063",
    "stt": 1063,
    "phone": "0988556109",
    "fbName": "Hoàng Yến",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340661-1064",
    "stt": 1064,
    "phone": "0385404118",
    "fbName": "Nguyễn Quỳnh Mai",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340661-1065",
    "stt": 1065,
    "phone": "0522397794",
    "fbName": "_bnhuu - 🦀",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340661-1066",
    "stt": 1066,
    "phone": "0965390316",
    "fbName": "Anh Lê",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340661-1067",
    "stt": 1067,
    "phone": "0973544643",
    "fbName": "Nguyệt Hr",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340661-1068",
    "stt": 1068,
    "phone": "0383561751",
    "fbName": "Trân Thị Ngọc Điệp",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340661-1069",
    "stt": 1069,
    "phone": "0934240202",
    "fbName": "Tằng Lynh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340662-1070",
    "stt": 1070,
    "phone": "0908552979",
    "fbName": "昊越河",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340662-1071",
    "stt": 1071,
    "phone": "0352469204",
    "fbName": "Như Huỳnh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340662-1072",
    "stt": 1072,
    "phone": "0909457504",
    "fbName": "Nguyễn Phượng Cầu",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340662-1073",
    "stt": 1073,
    "phone": "0898418801",
    "fbName": "Kim Tuyết",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340662-1074",
    "stt": 1074,
    "phone": "0937478289",
    "fbName": "Hà Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340662-1075",
    "stt": 1075,
    "phone": "0969271688",
    "fbName": "MR MINH",
    "service": "Triệt Bikini Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340662-1076",
    "stt": 1076,
    "phone": "0333338859",
    "fbName": "Nhu Pham",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "20-09-2026"
  },
  {
    "id": "lg-1790844340662-1077",
    "stt": 1077,
    "phone": "0939325066",
    "fbName": "Tracey Lewis",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340662-1078",
    "stt": 1078,
    "phone": "0901463495",
    "fbName": "Diệp Hoàng",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340662-1079",
    "stt": 1079,
    "phone": "0853150711",
    "fbName": "MS GIA HÂN (30N)",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340662-1080",
    "stt": 1080,
    "phone": "0393055616",
    "fbName": "Lê Thị Thu Hòa",
    "service": "Trị thâm (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340662-1081",
    "stt": 1081,
    "phone": "0392406286",
    "fbName": "Lê Thị Sơn Ca",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340662-1082",
    "stt": 1082,
    "phone": "0862666679",
    "fbName": "Phu Hoang",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340662-1083",
    "stt": 1083,
    "phone": "0961417508",
    "fbName": "kutievaicl._ - ko ai bit là ai",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340662-1084",
    "stt": 1084,
    "phone": "0866146362",
    "fbName": "Ph Thị Thanh Hiềnn",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "hủy",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340662-1085",
    "stt": 1085,
    "phone": "0329301097",
    "fbName": "Cẩm Duyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340662-1086",
    "stt": 1086,
    "phone": "0386098710",
    "fbName": "Hồng Đặng",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340662-1087",
    "stt": 1087,
    "phone": "0328634080",
    "fbName": "hihihi.1305 - Anna",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340662-1088",
    "stt": 1088,
    "phone": "0799663605",
    "fbName": "Quốc Đạt",
    "service": "Triệt Bikini Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340662-1089",
    "stt": 1089,
    "phone": "0906822065",
    "fbName": "Yến Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340662-1090",
    "stt": 1090,
    "phone": "0969435997",
    "fbName": "Raica Phuong",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340663-1091",
    "stt": 1091,
    "phone": "0967820772",
    "fbName": "Ngọc Peach",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340663-1092",
    "stt": 1092,
    "phone": "0933153347",
    "fbName": "Phạm Huỳnh Mỹ Duyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340663-1093",
    "stt": 1093,
    "phone": "0366072709",
    "fbName": "Khiem Nguyen",
    "service": "Triệt nách Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340663-1094",
    "stt": 1094,
    "phone": "0794747189",
    "fbName": "Yen Huynh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340663-1095",
    "stt": 1095,
    "phone": "0565572389",
    "fbName": "Bé Su",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340663-1096",
    "stt": 1096,
    "phone": "0584349425",
    "fbName": "Nguyễn Hương",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340663-1097",
    "stt": 1097,
    "phone": "0908592179",
    "fbName": "Xavia Duong",
    "service": "Combo Glow & White 3 dịch vụ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340663-1098",
    "stt": 1098,
    "phone": "0764112205",
    "fbName": "Trúc Quỳnhh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340663-1099",
    "stt": 1099,
    "phone": "0938189308",
    "fbName": "Hilary Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340663-1100",
    "stt": 1100,
    "phone": "0983183804",
    "fbName": "Chung Bước",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340663-1101",
    "stt": 1101,
    "phone": "0932605960",
    "fbName": "Hiếu Cobe",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340663-1102",
    "stt": 1102,
    "phone": "0708626139",
    "fbName": "Nguyễn Thiên Kim",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340663-1103",
    "stt": 1103,
    "phone": "0932969940",
    "fbName": "Uyên Phạm",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Bình Phương Ngân",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340663-1104",
    "stt": 1104,
    "phone": "0909311142",
    "fbName": "Hoàng Xuân",
    "service": "Trị thâm (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340663-1105",
    "stt": 1105,
    "phone": "0908233483",
    "fbName": "Đào Đỗ",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340663-1106",
    "stt": 1106,
    "phone": "0786897622",
    "fbName": "MS VY",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340663-1107",
    "stt": 1107,
    "phone": "0937516051",
    "fbName": "lananhmai2460 - Lan Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340663-1108",
    "stt": 1108,
    "phone": "0352252914",
    "fbName": "_baby0702_ - hihi",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340663-1109",
    "stt": 1109,
    "phone": "0985574043",
    "fbName": "Nguyễn Xuân",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340664-1110",
    "stt": 1110,
    "phone": "0764841525",
    "fbName": "Trang Dang",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340664-1111",
    "stt": 1111,
    "phone": "0909064331",
    "fbName": "Trang Van Etteryk",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340664-1112",
    "stt": 1112,
    "phone": "0947249335",
    "fbName": "My Lan Phan",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340664-1113",
    "stt": 1113,
    "phone": "0345525061",
    "fbName": "Dương Tuấn",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340664-1114",
    "stt": 1114,
    "phone": "0901202088",
    "fbName": "Diệu Phương",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "21-09-2026"
  },
  {
    "id": "lg-1790844340664-1115",
    "stt": 1115,
    "phone": "0937598052",
    "fbName": "Hiếu Thảo",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340664-1116",
    "stt": 1116,
    "phone": "0399244713",
    "fbName": "Hồng Đặng",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340664-1117",
    "stt": 1117,
    "phone": "0703520122",
    "fbName": "Trần Nguyên",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340665-1118",
    "stt": 1118,
    "phone": "0363444589",
    "fbName": "Thuỳ Vy",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340665-1119",
    "stt": 1119,
    "phone": "0867121614",
    "fbName": "Võ Khánh Trúc",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340665-1120",
    "stt": 1120,
    "phone": "0384325777",
    "fbName": "Ngọc Lý",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340665-1121",
    "stt": 1121,
    "phone": "0763905715",
    "fbName": "Pé Py",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340665-1122",
    "stt": 1122,
    "phone": "0332872166",
    "fbName": "k.lynretatt - Bướng 😜",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340665-1123",
    "stt": 1123,
    "phone": "0776567566",
    "fbName": "joycengyn - Nguyen Dinh Kieu Tho",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340665-1124",
    "stt": 1124,
    "phone": "0899916181",
    "fbName": "Thu Ngân Cao",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340665-1125",
    "stt": 1125,
    "phone": "0971849202",
    "fbName": "Trần Lê Quyên",
    "service": "Mụn mặt",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340665-1126",
    "stt": 1126,
    "phone": "0933867602",
    "fbName": "Thúy Huỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340665-1127",
    "stt": 1127,
    "phone": "0967285841",
    "fbName": "My My",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "hủy",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340665-1128",
    "stt": 1128,
    "phone": "0569161135",
    "fbName": "Nhung Bùi",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340665-1129",
    "stt": 1129,
    "phone": "0931267397",
    "fbName": "thu_hien1809 - Nguyễn Thị Thu Hiền",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340665-1130",
    "stt": 1130,
    "phone": "0349390841",
    "fbName": "Trương Tố Quyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340665-1131",
    "stt": 1131,
    "phone": "0763124603",
    "fbName": "Trần Xuân Hùng",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340665-1132",
    "stt": 1132,
    "phone": "0352323762",
    "fbName": "Huế Uyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340665-1133",
    "stt": 1133,
    "phone": "0983510070",
    "fbName": "Thanh Vo",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340665-1134",
    "stt": 1134,
    "phone": "0938220609",
    "fbName": "Cố Thị Chuyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340665-1135",
    "stt": 1135,
    "phone": "0386132677",
    "fbName": "Trúc Linh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340665-1136",
    "stt": 1136,
    "phone": "0868497541",
    "fbName": "n.ttuyen_ - Thanh Tuyền",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340666-1137",
    "stt": 1137,
    "phone": "0792828618",
    "fbName": "Ái Lưu",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340666-1138",
    "stt": 1138,
    "phone": "0343902707",
    "fbName": "Xuân Trinh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340666-1139",
    "stt": 1139,
    "phone": "0938064378",
    "fbName": "Khách 1139",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340666-1140",
    "stt": 1140,
    "phone": "0382591261",
    "fbName": "Trang Phi",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340666-1141",
    "stt": 1141,
    "phone": "0909772423",
    "fbName": "Khách 1141",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340666-1142",
    "stt": 1142,
    "phone": "0522934819",
    "fbName": "Tii Hoàng",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340666-1143",
    "stt": 1143,
    "phone": "0937067610",
    "fbName": "Hà Lan",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340666-1144",
    "stt": 1144,
    "phone": "0937477170",
    "fbName": "phuonguyenblr - 𝓟𝓱ươ𝓷𝓰 𝓤𝔂ê𝓷💜",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340666-1145",
    "stt": 1145,
    "phone": "0832358559",
    "fbName": "Quỳnh Trâm",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340666-1146",
    "stt": 1146,
    "phone": "0338871435",
    "fbName": "Lê Thị Mỹ Hiền",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340666-1147",
    "stt": 1147,
    "phone": "0792897493",
    "fbName": "Lê Phương",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340666-1148",
    "stt": 1148,
    "phone": "0799992868",
    "fbName": "Sương Kem",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340666-1149",
    "stt": 1149,
    "phone": "0373492284",
    "fbName": "Thuy Phan",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340666-1150",
    "stt": 1150,
    "phone": "0939818416",
    "fbName": "nguy_n.giao - Nguyên Giao",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340666-1151",
    "stt": 1151,
    "phone": "0368037172",
    "fbName": "Pham Talia",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340666-1152",
    "stt": 1152,
    "phone": "0862003302",
    "fbName": "Đặng Hoài Thương",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340666-1153",
    "stt": 1153,
    "phone": "0777056143",
    "fbName": "tuanngo2563 - Minh Tuấn Ngô",
    "service": "Triệt nách Nam",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340666-1154",
    "stt": 1154,
    "phone": "0365707029",
    "fbName": "Daw Tea",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340666-1155",
    "stt": 1155,
    "phone": "0933159703",
    "fbName": "Mai Chinh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340666-1156",
    "stt": 1156,
    "phone": "0934708528",
    "fbName": "Thuỳ Duyên",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340667-1157",
    "stt": 1157,
    "phone": "0982452893",
    "fbName": "Thu Hiền",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340667-1158",
    "stt": 1158,
    "phone": "0908998179",
    "fbName": "Hồng Ngọc",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340667-1159",
    "stt": 1159,
    "phone": "0325849088",
    "fbName": "Đoàn Thị Mỹ Duyên",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340667-1160",
    "stt": 1160,
    "phone": "0328865915",
    "fbName": "Quỳnh Như",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340667-1161",
    "stt": 1161,
    "phone": "0913953146",
    "fbName": "beesuiu - cua rang me",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340667-1162",
    "stt": 1162,
    "phone": "0766852089",
    "fbName": "ĐinhThịị Thanhh Hiềnn",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340667-1163",
    "stt": 1163,
    "phone": "—",
    "fbName": "Sương Kem",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "22-09-2026"
  },
  {
    "id": "lg-1790844340667-1164",
    "stt": 1164,
    "phone": "0906646451",
    "fbName": "Phương Thảo",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340667-1165",
    "stt": 1165,
    "phone": "0916792776",
    "fbName": "id.daoem - ĐÀO EM",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340667-1166",
    "stt": 1166,
    "phone": "0909050551",
    "fbName": "Diem Le",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340667-1167",
    "stt": 1167,
    "phone": "0937059201",
    "fbName": "Nhã Hiếu",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340667-1168",
    "stt": 1168,
    "phone": "0357818629",
    "fbName": "Phượng Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340667-1169",
    "stt": 1169,
    "phone": "0343296391",
    "fbName": "Kim Oanh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340667-1170",
    "stt": 1170,
    "phone": "0907735588",
    "fbName": "Ngoc Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340667-1171",
    "stt": 1171,
    "phone": "0396082242",
    "fbName": "Vũ Ngọc Yến Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340667-1172",
    "stt": 1172,
    "phone": "0919289595",
    "fbName": "Vương Minh Trang",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340667-1173",
    "stt": 1173,
    "phone": "0393320361",
    "fbName": "T Hoàng T Trúc",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340667-1174",
    "stt": 1174,
    "phone": "0798660807",
    "fbName": "Bao Yenn",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340668-1175",
    "stt": 1175,
    "phone": "0818534369",
    "fbName": "Nguyễn Hồng Ngân",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340668-1176",
    "stt": 1176,
    "phone": "0971804995",
    "fbName": "Khánh Huyền",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340668-1177",
    "stt": 1177,
    "phone": "0911152743",
    "fbName": "tmaiii2910 - xuemei",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340668-1178",
    "stt": 1178,
    "phone": "0909016383",
    "fbName": "Hạnh Võ",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340668-1179",
    "stt": 1179,
    "phone": "0938380540",
    "fbName": "Van Anh Tran",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340668-1180",
    "stt": 1180,
    "phone": "0886868948",
    "fbName": "Ánh Nguyệt",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340668-1181",
    "stt": 1181,
    "phone": "0837092240",
    "fbName": "Lê Kim The",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340668-1182",
    "stt": 1182,
    "phone": "0707541575",
    "fbName": "Hiep Phan",
    "service": "Mụn mặt",
    "staffName": "Lê Thị Diệu Linh",
    "status": "hủy",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340668-1183",
    "stt": 1183,
    "phone": "0967811715",
    "fbName": "Vũ T. Lan Anh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340668-1184",
    "stt": 1184,
    "phone": "0779120876",
    "fbName": "Loan Thanh",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340668-1185",
    "stt": 1185,
    "phone": "0366115329",
    "fbName": "Lên Thuỵ",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340668-1186",
    "stt": 1186,
    "phone": "0344065264",
    "fbName": "_ongchu30 - Ông Chú U30",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340668-1187",
    "stt": 1187,
    "phone": "0902483846",
    "fbName": "Yến Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340668-1188",
    "stt": 1188,
    "phone": "0932653002",
    "fbName": "pttn_rkiss - Phạm Ngọc",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340668-1189",
    "stt": 1189,
    "phone": "0772689342",
    "fbName": "Ted Ngoc Mingg",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340668-1190",
    "stt": 1190,
    "phone": "0768138866",
    "fbName": "kiu.nguyn3886 - KIỂU NGUYỄN",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340668-1191",
    "stt": 1191,
    "phone": "0379971524",
    "fbName": "Thang Nguyen",
    "service": "Triệt nách Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340668-1192",
    "stt": 1192,
    "phone": "0942458052",
    "fbName": "Như Quỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340668-1193",
    "stt": 1193,
    "phone": "0975020440",
    "fbName": "Phương Thanh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340668-1194",
    "stt": 1194,
    "phone": "0966089470",
    "fbName": "Huy Nguyen",
    "service": "Triệt nách Nam",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340669-1195",
    "stt": 1195,
    "phone": "0768911203",
    "fbName": "Huỳnh Thị Kiều Nhung",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340669-1196",
    "stt": 1196,
    "phone": "0967697094",
    "fbName": "MS LY",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340669-1197",
    "stt": 1197,
    "phone": "0356628091",
    "fbName": "Thanh Thanh",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340669-1198",
    "stt": 1198,
    "phone": "0906640634",
    "fbName": "Nhi Lê",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340669-1199",
    "stt": 1199,
    "phone": "0919044136",
    "fbName": "Nhật Linh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340669-1200",
    "stt": 1200,
    "phone": "0368825183",
    "fbName": "Kheng Khengkheng",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340669-1201",
    "stt": 1201,
    "phone": "0839694904",
    "fbName": "Anh Hoang",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340669-1202",
    "stt": 1202,
    "phone": "0776663938",
    "fbName": "Lọ Lem",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340669-1203",
    "stt": 1203,
    "phone": "0368123035",
    "fbName": "gemwme - Vũ Thị Hồng Ngọc",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340669-1204",
    "stt": 1204,
    "phone": "18329073138",
    "fbName": "Van Tieu",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340669-1205",
    "stt": 1205,
    "phone": "0939568907",
    "fbName": "Tien Bui",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340669-1206",
    "stt": 1206,
    "phone": "0915710195",
    "fbName": "Ng Cẩm Ly",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340669-1207",
    "stt": 1207,
    "phone": "0932708333",
    "fbName": "Hạ Nguyên",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340669-1208",
    "stt": 1208,
    "phone": "0828436018",
    "fbName": "Hoàng Yến",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340669-1209",
    "stt": 1209,
    "phone": "0778683556",
    "fbName": "Ngọc Như",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340669-1210",
    "stt": 1210,
    "phone": "0772613559",
    "fbName": "Vũ Ngọc Yến Nhi",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340669-1211",
    "stt": 1211,
    "phone": "0935566862",
    "fbName": "Bichvan Tran",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340669-1212",
    "stt": 1212,
    "phone": "0907132906",
    "fbName": "Dng Thi Minh Anh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340669-1213",
    "stt": 1213,
    "phone": "0334042318",
    "fbName": "Tú Châu",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "hủy",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340669-1214",
    "stt": 1214,
    "phone": "0967027158",
    "fbName": "Nguyễn ThanhThư",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340669-1215",
    "stt": 1215,
    "phone": "0376770114",
    "fbName": "Pham Anh Thư",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340670-1216",
    "stt": 1216,
    "phone": "0376099079",
    "fbName": "Minh Nguyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340670-1217",
    "stt": 1217,
    "phone": "0902608446",
    "fbName": "Lý Hiển",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340670-1218",
    "stt": 1218,
    "phone": "0339487060",
    "fbName": "Tam Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340670-1219",
    "stt": 1219,
    "phone": "0796937776",
    "fbName": "Nguyễn Kim Ngân",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340670-1220",
    "stt": 1220,
    "phone": "0345574901",
    "fbName": "Mỹ Duyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340670-1221",
    "stt": 1221,
    "phone": "0973624259",
    "fbName": "Thao Pham",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340670-1222",
    "stt": 1222,
    "phone": "0765976890",
    "fbName": "Cherry Pham",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340670-1223",
    "stt": 1223,
    "phone": "0935170726",
    "fbName": "Ngân Sagi",
    "service": "Mụn mặt",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340670-1224",
    "stt": 1224,
    "phone": "0707170018",
    "fbName": "Thuỵ Ngân",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340670-1225",
    "stt": 1225,
    "phone": "0364355255",
    "fbName": "Hồng Ngân",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340671-1226",
    "stt": 1226,
    "phone": "0905310554",
    "fbName": "Huỳnh Ngọc Nhân",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340671-1227",
    "stt": 1227,
    "phone": "0988180839",
    "fbName": "Kim Yến",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340671-1228",
    "stt": 1228,
    "phone": "0934609263",
    "fbName": "Ngoc Tuyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340671-1229",
    "stt": 1229,
    "phone": "0965537810",
    "fbName": "MS THẢO",
    "service": "Trị thâm (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340671-1230",
    "stt": 1230,
    "phone": "0939883955",
    "fbName": "MS TUYÊN",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340671-1231",
    "stt": 1231,
    "phone": "0907643157",
    "fbName": "MR QUÂN",
    "service": "Triệt nách Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340671-1232",
    "stt": 1232,
    "phone": "0908096655",
    "fbName": "Fabregas Andres",
    "service": "Triệt nách Nam",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340671-1233",
    "stt": 1233,
    "phone": "0937131332",
    "fbName": "Phung Ngo",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340671-1234",
    "stt": 1234,
    "phone": "0909992934",
    "fbName": "Quyên Quyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340671-1235",
    "stt": 1235,
    "phone": "0908653969",
    "fbName": "Cẩm Giang",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340671-1236",
    "stt": 1236,
    "phone": "0906898662",
    "fbName": "Ney Mo",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340671-1237",
    "stt": 1237,
    "phone": "0783288229",
    "fbName": "Lương Y Tình",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340671-1238",
    "stt": 1238,
    "phone": "0337221627",
    "fbName": "Quỳnh Như",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340671-1239",
    "stt": 1239,
    "phone": "0935137043",
    "fbName": "Ah Thư",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340671-1240",
    "stt": 1240,
    "phone": "0918082141",
    "fbName": "ngoc_van_02 - Ngọc Vân",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340671-1241",
    "stt": 1241,
    "phone": "0908241025",
    "fbName": "Huỳnh Trâm",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340671-1242",
    "stt": 1242,
    "phone": "0868555756",
    "fbName": "Nguyễn Hồng",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340671-1243",
    "stt": 1243,
    "phone": "0932923781",
    "fbName": "My Huỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340671-1244",
    "stt": 1244,
    "phone": "0766863238",
    "fbName": "Ngọc Thi",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340671-1245",
    "stt": 1245,
    "phone": "0395315021",
    "fbName": "Yến Tuyết",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340672-1246",
    "stt": 1246,
    "phone": "0937383927",
    "fbName": "Hai Nguyen",
    "service": "Triệt nách Nam",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340672-1247",
    "stt": 1247,
    "phone": "0379871737",
    "fbName": "Kim Ngân",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340672-1248",
    "stt": 1248,
    "phone": "0916853885",
    "fbName": "MS NHƯ Ý",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "23-09-2026"
  },
  {
    "id": "lg-1790844340672-1249",
    "stt": 1249,
    "phone": "0981974611",
    "fbName": "Chế Nguyễn Ngọc Phương",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340672-1250",
    "stt": 1250,
    "phone": "0942794076",
    "fbName": "Nguyễn Vy",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340672-1251",
    "stt": 1251,
    "phone": "0364723651",
    "fbName": "Phương Uyên Phan",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340672-1252",
    "stt": 1252,
    "phone": "0945577914",
    "fbName": "Lê Nguyệt",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340672-1253",
    "stt": 1253,
    "phone": "0334145522",
    "fbName": "Đinh Nhung",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340672-1254",
    "stt": 1254,
    "phone": "0938529107",
    "fbName": "Lâm Minh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340672-1255",
    "stt": 1255,
    "phone": "0853919903",
    "fbName": "NP Thảo",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340672-1256",
    "stt": 1256,
    "phone": "0344800792",
    "fbName": "Quynh Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340672-1257",
    "stt": 1257,
    "phone": "0877647310",
    "fbName": "Ngọc Hạnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340672-1258",
    "stt": 1258,
    "phone": "0942293395",
    "fbName": "Phuong Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340672-1259",
    "stt": 1259,
    "phone": "0327153643",
    "fbName": "Ngọc Thơ",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340672-1260",
    "stt": 1260,
    "phone": "0337073572",
    "fbName": "Zi Zu",
    "service": "Triệt Bikini Nam",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340672-1261",
    "stt": 1261,
    "phone": "0343260170",
    "fbName": "Lê Huyền",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340672-1262",
    "stt": 1262,
    "phone": "0907599566",
    "fbName": "MS VY",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340672-1263",
    "stt": 1263,
    "phone": "0947100597",
    "fbName": "MS PHƯỢNG",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340672-1264",
    "stt": 1264,
    "phone": "0365392000",
    "fbName": "Hoàng Anh Chi",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340672-1265",
    "stt": 1265,
    "phone": "0972441663",
    "fbName": "Hien Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340673-1266",
    "stt": 1266,
    "phone": "0932107142",
    "fbName": "Ngoc Nguyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340673-1267",
    "stt": 1267,
    "phone": "0888441616",
    "fbName": "Nhung Conan",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340673-1268",
    "stt": 1268,
    "phone": "0938597415",
    "fbName": "MS UYÊN",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340673-1269",
    "stt": 1269,
    "phone": "0358529187",
    "fbName": "Phạm Chritina",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340673-1270",
    "stt": 1270,
    "phone": "0335977536",
    "fbName": "Phuong Giang",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340673-1271",
    "stt": 1271,
    "phone": "0799812233",
    "fbName": "Emi Vu",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340673-1272",
    "stt": 1272,
    "phone": "0379427428",
    "fbName": "Vi Quynh",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340673-1273",
    "stt": 1273,
    "phone": "0888941060",
    "fbName": "Diễm Hương",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340673-1274",
    "stt": 1274,
    "phone": "0352262314",
    "fbName": "Tiểu Mẫn",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340673-1275",
    "stt": 1275,
    "phone": "0337810943",
    "fbName": "MS NHƯ",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "24-09-2026"
  },
  {
    "id": "lg-1790844340673-1276",
    "stt": 1276,
    "phone": "0919045952",
    "fbName": "Nguyễn Thảo",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340673-1277",
    "stt": 1277,
    "phone": "0364136210",
    "fbName": "abcguaa_ - imnotgua",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340673-1278",
    "stt": 1278,
    "phone": "0985139189",
    "fbName": "Trần Sương",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340673-1279",
    "stt": 1279,
    "phone": "0907641315",
    "fbName": "Hồ Huyền Chi",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340673-1280",
    "stt": 1280,
    "phone": "0868954415",
    "fbName": "Loan Tran",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340673-1281",
    "stt": 1281,
    "phone": "0349433403",
    "fbName": "Nguyễnn Thị Cẩm Tú",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340673-1282",
    "stt": 1282,
    "phone": "0973632108",
    "fbName": "Nhu Phuong Nguyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340673-1283",
    "stt": 1283,
    "phone": "0926118138",
    "fbName": "Nguyễn Linh",
    "service": "Triệt nách Nam",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340673-1284",
    "stt": 1284,
    "phone": "0938878912",
    "fbName": "Boc My Yen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340673-1285",
    "stt": 1285,
    "phone": "0793349316",
    "fbName": "Lê Vân",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340673-1286",
    "stt": 1286,
    "phone": "0918387859",
    "fbName": "Duyen Duyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340674-1287",
    "stt": 1287,
    "phone": "0909171650",
    "fbName": "Thi Minh Duc Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340674-1288",
    "stt": 1288,
    "phone": "0937666525",
    "fbName": "Ngọc Trần",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340674-1289",
    "stt": 1289,
    "phone": "0933922191",
    "fbName": "Tham Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340674-1290",
    "stt": 1290,
    "phone": "0946286401",
    "fbName": "Thanh Thảo",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340674-1291",
    "stt": 1291,
    "phone": "0909668257",
    "fbName": "Lê Phạm Gia Phượng",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340674-1292",
    "stt": 1292,
    "phone": "0909272650",
    "fbName": "Vân Huỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340674-1293",
    "stt": 1293,
    "phone": "0962941342",
    "fbName": "Nguyen Phong",
    "service": "Triệt Bikini Nam",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340674-1294",
    "stt": 1294,
    "phone": "0333061327",
    "fbName": "Thu Hà Nguyễn",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340674-1295",
    "stt": 1295,
    "phone": "0387258843",
    "fbName": "Thủy Tiên",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340674-1296",
    "stt": 1296,
    "phone": "0937508292",
    "fbName": "Ân Hồ",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340674-1297",
    "stt": 1297,
    "phone": "0366901429",
    "fbName": "Nhã Thy",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340674-1298",
    "stt": 1298,
    "phone": "0328317522",
    "fbName": "Nhị Huỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Minh Huy",
    "status": "hủy",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340674-1299",
    "stt": 1299,
    "phone": "0845613514",
    "fbName": "Ái Linhh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340674-1300",
    "stt": 1300,
    "phone": "0903006181",
    "fbName": "Mây Trắng",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340674-1301",
    "stt": 1301,
    "phone": "0903728666",
    "fbName": "Liễu Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340674-1302",
    "stt": 1302,
    "phone": "0707222889",
    "fbName": "Thuý Hằng",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "25-09-2026"
  },
  {
    "id": "lg-1790844340674-1303",
    "stt": 1303,
    "phone": "0393086169",
    "fbName": "Đỗ Thị Mỹ Chánh",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340674-1304",
    "stt": 1304,
    "phone": "0393274936",
    "fbName": "Nguyễn Thị Ngọc Huyền",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340674-1305",
    "stt": 1305,
    "phone": "0989212261",
    "fbName": "My Truong",
    "service": "Thu nhỏ LCL",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340674-1306",
    "stt": 1306,
    "phone": "0984210489",
    "fbName": "Rỡ Lê",
    "service": "Mụn mặt",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340675-1307",
    "stt": 1307,
    "phone": "0978272790",
    "fbName": "BẠN MR HIỆP",
    "service": "Mụn mặt",
    "staffName": "Lê Thị Diệu Linh",
    "status": "hủy",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340675-1308",
    "stt": 1308,
    "phone": "0828020068",
    "fbName": "Ngọc Quỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340675-1309",
    "stt": 1309,
    "phone": "0909393648",
    "fbName": "Mai Manh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340675-1310",
    "stt": 1310,
    "phone": "0906383508",
    "fbName": "Minh Toàn Nguyễn Hải",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340675-1311",
    "stt": 1311,
    "phone": "0908969192",
    "fbName": "Duc Huu Ho",
    "service": "Triệt nách Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340675-1312",
    "stt": 1312,
    "phone": "0379774519",
    "fbName": "Nguyen Van",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340675-1313",
    "stt": 1313,
    "phone": "0364115541",
    "fbName": "charlieguo311 - Charlie",
    "service": "Triệt Bikini Nam",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340675-1314",
    "stt": 1314,
    "phone": "0903426218",
    "fbName": "btcln61 - TCH",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340675-1315",
    "stt": 1315,
    "phone": "0979474958",
    "fbName": "Minh Ngoc",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340675-1316",
    "stt": 1316,
    "phone": "0325888161",
    "fbName": "Mai Miêu",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340675-1317",
    "stt": 1317,
    "phone": "0972152943",
    "fbName": "Tr Ng Như Quỳnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340675-1318",
    "stt": 1318,
    "phone": "0914101711",
    "fbName": "Thu Vân",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340675-1319",
    "stt": 1319,
    "phone": "0948865332",
    "fbName": "Dung Thuy",
    "service": "Trị thâm (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340675-1320",
    "stt": 1320,
    "phone": "0909462555",
    "fbName": "Linh Vũ",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340675-1321",
    "stt": 1321,
    "phone": "0706574370",
    "fbName": "Công Bùi",
    "service": "Triệt Bikini Nam",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340676-1322",
    "stt": 1322,
    "phone": "0392619406",
    "fbName": "Anh Nguyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340676-1323",
    "stt": 1323,
    "phone": "0902391779",
    "fbName": "Kien Thieu Van",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "hủy",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340677-1324",
    "stt": 1324,
    "phone": "0979946630",
    "fbName": "Phụng Kiều",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340677-1325",
    "stt": 1325,
    "phone": "0344237108",
    "fbName": "Thảo Nguyênn",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340677-1326",
    "stt": 1326,
    "phone": "0764452456",
    "fbName": "Ngọc Bích",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340677-1327",
    "stt": 1327,
    "phone": "0397319096",
    "fbName": "Thanh Tuyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340677-1328",
    "stt": 1328,
    "phone": "0918859844",
    "fbName": "Gia Hân",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340677-1329",
    "stt": 1329,
    "phone": "0812082537",
    "fbName": "Đỗ Nguyễn Tuyết Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340677-1330",
    "stt": 1330,
    "phone": "0937071101",
    "fbName": "ahni.___ - an.ime",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340677-1331",
    "stt": 1331,
    "phone": "0923925046",
    "fbName": "Quách Thoại",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340677-1332",
    "stt": 1332,
    "phone": "0336396364",
    "fbName": "Trang Lê",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340677-1333",
    "stt": 1333,
    "phone": "0396890364",
    "fbName": "Kim Ngân",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340677-1334",
    "stt": 1334,
    "phone": "0902785036",
    "fbName": "Phạm Tuyết",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340677-1335",
    "stt": 1335,
    "phone": "0822613418",
    "fbName": "Ngocc Trinhh",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340677-1336",
    "stt": 1336,
    "phone": "0976824825",
    "fbName": "Tuyet Coi",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340677-1337",
    "stt": 1337,
    "phone": "0988783007",
    "fbName": "Tram Le",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340677-1338",
    "stt": 1338,
    "phone": "0966824601",
    "fbName": "An Thien Trang",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340677-1339",
    "stt": 1339,
    "phone": "0333498438",
    "fbName": "MS HẠ",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340677-1340",
    "stt": 1340,
    "phone": "0971746851",
    "fbName": "Hiệu",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340677-1341",
    "stt": 1341,
    "phone": "0384757012",
    "fbName": "Phương Mon",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340678-1342",
    "stt": 1342,
    "phone": "0931553254",
    "fbName": "Tôn Nữ",
    "service": "Trị thâm (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340678-1343",
    "stt": 1343,
    "phone": "0386688949",
    "fbName": "Thúy Hồng",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340678-1344",
    "stt": 1344,
    "phone": "0936114995",
    "fbName": "MS DUNG",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340678-1345",
    "stt": 1345,
    "phone": "0397729891",
    "fbName": "khonganduocduahau - K ăn được dưa hấu",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340678-1346",
    "stt": 1346,
    "phone": "0356306844",
    "fbName": "Bé Bự Nguyễn",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340678-1347",
    "stt": 1347,
    "phone": "0908889910",
    "fbName": "Trang Nguyễn",
    "service": "Mụn mặt",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340678-1348",
    "stt": 1348,
    "phone": "0868118866",
    "fbName": "Nguyễn Quỳnh Trang",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340678-1349",
    "stt": 1349,
    "phone": "0931311987",
    "fbName": "Thao Winh",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340678-1350",
    "stt": 1350,
    "phone": "0925112116",
    "fbName": "Khách 1350",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340678-1351",
    "stt": 1351,
    "phone": "0902613188",
    "fbName": "Lệ Giang",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340678-1352",
    "stt": 1352,
    "phone": "0906058304",
    "fbName": "Mai Hương",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340678-1353",
    "stt": 1353,
    "phone": "0935412439",
    "fbName": "Ngocmai Truong",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340678-1354",
    "stt": 1354,
    "phone": "0396455632",
    "fbName": "Phương Uyên",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340678-1355",
    "stt": 1355,
    "phone": "0787744503",
    "fbName": "Lê Nguyễn Thảo Vy",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340678-1356",
    "stt": 1356,
    "phone": "0383284428",
    "fbName": "HT Ngọc Yến",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340678-1357",
    "stt": 1357,
    "phone": "0384641451",
    "fbName": "Yến Linh",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340678-1358",
    "stt": 1358,
    "phone": "0984555561",
    "fbName": "Ca Cao Sua Da",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340678-1359",
    "stt": 1359,
    "phone": "0933771521",
    "fbName": "Tóc Xu",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340678-1360",
    "stt": 1360,
    "phone": "0984552402",
    "fbName": "user95765204 - Đặng Như (Mẹ Cốm's)",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340678-1361",
    "stt": 1361,
    "phone": "0852555989",
    "fbName": "Mạn Đà La",
    "service": "Trị thâm (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340679-1362",
    "stt": 1362,
    "phone": "0944008067",
    "fbName": "Nguyễn Đoàn Bảo Ngọc",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340679-1363",
    "stt": 1363,
    "phone": "0784145146",
    "fbName": "Quynh Lai",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340679-1364",
    "stt": 1364,
    "phone": "0916160077",
    "fbName": "Khánh Hoà",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340679-1365",
    "stt": 1365,
    "phone": "0943972708",
    "fbName": "Thu Trang",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340679-1366",
    "stt": 1366,
    "phone": "0902810777",
    "fbName": "Duong Le",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340679-1367",
    "stt": 1367,
    "phone": "0942694076",
    "fbName": "MS THƯ",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "26-09-2026"
  },
  {
    "id": "lg-1790844340679-1368",
    "stt": 1368,
    "phone": "0918985034",
    "fbName": "Ngoc Anh",
    "service": "Thu nhỏ LCL",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340679-1369",
    "stt": 1369,
    "phone": "0328001817",
    "fbName": "Jerry Nguyen",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340679-1370",
    "stt": 1370,
    "phone": "0909542680",
    "fbName": "Trang Hạnh",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340679-1371",
    "stt": 1371,
    "phone": "0937021416",
    "fbName": "Nguyễn Thu Vân",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340679-1372",
    "stt": 1372,
    "phone": "0937425239",
    "fbName": "Gia Sư Ngọc Hân",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340679-1373",
    "stt": 1373,
    "phone": "0378459058",
    "fbName": "Thuy Nguyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340679-1374",
    "stt": 1374,
    "phone": "0963399690",
    "fbName": "Vũ Nam",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340679-1375",
    "stt": 1375,
    "phone": "0334360309",
    "fbName": "Nguyễn Thu Hồng",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340679-1376",
    "stt": 1376,
    "phone": "0949892222",
    "fbName": "Trần An An",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340679-1377",
    "stt": 1377,
    "phone": "0932016591",
    "fbName": "MS QUỲNH",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340679-1378",
    "stt": 1378,
    "phone": "0795805463",
    "fbName": "Kim Hương",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340679-1379",
    "stt": 1379,
    "phone": "0383070080",
    "fbName": "nganquynhpham_ - Ngan Quynh Pham",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340679-1380",
    "stt": 1380,
    "phone": "0898406605",
    "fbName": "Tâm Hà Trần",
    "service": "Thu nhỏ LCL",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340679-1381",
    "stt": 1381,
    "phone": "0932700150",
    "fbName": "Nhi Nhi",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340680-1382",
    "stt": 1382,
    "phone": "0937267508",
    "fbName": "Ms HẠNH",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340680-1383",
    "stt": 1383,
    "phone": "0986935979",
    "fbName": "LibrAki Chubb",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340680-1384",
    "stt": 1384,
    "phone": "0967593579",
    "fbName": "Vân Lê",
    "service": "Tắm Trắng Body",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340680-1385",
    "stt": 1385,
    "phone": "0362185675",
    "fbName": "Pé T'rinh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340680-1386",
    "stt": 1386,
    "phone": "0364776769",
    "fbName": "Đặng Thị Thúy",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340680-1387",
    "stt": 1387,
    "phone": "0965593544",
    "fbName": "Bích Loan",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340680-1388",
    "stt": 1388,
    "phone": "0907596558",
    "fbName": "Thuy Phan",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340680-1389",
    "stt": 1389,
    "phone": "0962257321",
    "fbName": "Trang Thị Phương Lê",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340680-1390",
    "stt": 1390,
    "phone": "0934365923",
    "fbName": "Như Quỳnh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340680-1391",
    "stt": 1391,
    "phone": "0981621668",
    "fbName": "Lưu Thiện",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340680-1392",
    "stt": 1392,
    "phone": "0332420978",
    "fbName": "MS PHƯƠNG",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340680-1393",
    "stt": 1393,
    "phone": "0787533417",
    "fbName": "Võ Trần Ánh Dương",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340680-1394",
    "stt": 1394,
    "phone": "0345295940",
    "fbName": "Ngọc Thương",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340680-1395",
    "stt": 1395,
    "phone": "0937850785",
    "fbName": "San San",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340680-1396",
    "stt": 1396,
    "phone": "0915806306",
    "fbName": "Hoạ My",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340680-1397",
    "stt": 1397,
    "phone": "0909601027",
    "fbName": "Quỳnh Lê",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340680-1398",
    "stt": 1398,
    "phone": "0337624855",
    "fbName": "Ken Bi",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340680-1399",
    "stt": 1399,
    "phone": "0938924242",
    "fbName": "Sophie Le",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340680-1400",
    "stt": 1400,
    "phone": "0783934266",
    "fbName": "Nguyễn Phương",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340680-1401",
    "stt": 1401,
    "phone": "0966722614",
    "fbName": "Trà My Nguyễn",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340681-1402",
    "stt": 1402,
    "phone": "0378937019",
    "fbName": "Lanh Lanh",
    "service": "Thu nhỏ LCL",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340681-1403",
    "stt": 1403,
    "phone": "0981682613",
    "fbName": "HàVy Nguyễn",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340681-1404",
    "stt": 1404,
    "phone": "0329771897",
    "fbName": "Vu Quynh Anh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340681-1405",
    "stt": 1405,
    "phone": "0348082622",
    "fbName": "Lê Nguyễn Thảo Vy",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Khánh Vân",
    "status": "check_in",
    "date": "27-09-2026"
  },
  {
    "id": "lg-1790844340681-1406",
    "stt": 1406,
    "phone": "0913681688",
    "fbName": "Zoey Ngai",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340681-1407",
    "stt": 1407,
    "phone": "0939509225",
    "fbName": "Mymy Nguyen",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340681-1408",
    "stt": 1408,
    "phone": "0908904393",
    "fbName": "Trần Phạm Mai Hoa",
    "service": "Tắm Trắng Body",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340681-1409",
    "stt": 1409,
    "phone": "0768988974",
    "fbName": "Thùy Trinhh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340681-1410",
    "stt": 1410,
    "phone": "0912294409",
    "fbName": "Đinh Thị Thảo Trinh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340681-1411",
    "stt": 1411,
    "phone": "0836340609",
    "fbName": "Nhàn Trần",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340681-1412",
    "stt": 1412,
    "phone": "0908450313",
    "fbName": "Nhi Tran",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340681-1413",
    "stt": 1413,
    "phone": "0913798406",
    "fbName": "Trinh Cat Tuong",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340681-1414",
    "stt": 1414,
    "phone": "0936651585",
    "fbName": "Ngọc Ánh",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340681-1415",
    "stt": 1415,
    "phone": "0912204009",
    "fbName": "Nguyễn SI MMy",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340681-1416",
    "stt": 1416,
    "phone": "0868531084",
    "fbName": "user7dkt17aghv - Sóng bắt đầu từ đâu",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340681-1417",
    "stt": 1417,
    "phone": "0986155172",
    "fbName": "Trần Thị Thúy Hằng",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340681-1418",
    "stt": 1418,
    "phone": "0934697383",
    "fbName": "Ngân Ái Trương",
    "service": "Tắm Trắng Body",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "28-09-2026"
  },
  {
    "id": "lg-1790844340681-1419",
    "stt": 1419,
    "phone": "0823507979",
    "fbName": "Sandy Trương",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340681-1420",
    "stt": 1420,
    "phone": "0938308103",
    "fbName": "Trần Hạnh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340682-1421",
    "stt": 1421,
    "phone": "0562072681",
    "fbName": "Thanh Tuyền",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340682-1422",
    "stt": 1422,
    "phone": "0342450906",
    "fbName": "Ngoc Tram",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340682-1423",
    "stt": 1423,
    "phone": "0914037087",
    "fbName": "MS PHƯỢNG BẠN CHỊ TRÂM",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340682-1424",
    "stt": 1424,
    "phone": "0937300790",
    "fbName": "Tran Thi Chi",
    "service": "Triệt Bikini Nữ",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340682-1425",
    "stt": 1425,
    "phone": "0784151151",
    "fbName": "Trang Doll",
    "service": "Triệt nách (nữ)",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340682-1426",
    "stt": 1426,
    "phone": "0936193511",
    "fbName": "MS Mai",
    "service": "Mụn mặt",
    "staffName": "Phan Thị Hồng Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340682-1427",
    "stt": 1427,
    "phone": "0382833802",
    "fbName": "My Duyen",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340682-1428",
    "stt": 1428,
    "phone": "0364122915",
    "fbName": "Trịnh Thị Phúc",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340682-1429",
    "stt": 1429,
    "phone": "0392237679",
    "fbName": "Diep Diep",
    "service": "Tắm Trắng Body",
    "staffName": "Nguyễn Quỳnh Như",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340682-1430",
    "stt": 1430,
    "phone": "0933353562",
    "fbName": "Nguyễn Bảo",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340682-1431",
    "stt": 1431,
    "phone": "0932768811",
    "fbName": "Hồng Hạnh",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340682-1432",
    "stt": 1432,
    "phone": "0779393490",
    "fbName": "MS ÂN",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340683-1433",
    "stt": 1433,
    "phone": "0909836336",
    "fbName": "Humei Lê",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340683-1434",
    "stt": 1434,
    "phone": "0968244230",
    "fbName": "Bích Thảo",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340683-1435",
    "stt": 1435,
    "phone": "0907622638",
    "fbName": "Nguyễn Thu Thảo",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340683-1436",
    "stt": 1436,
    "phone": "0833653337",
    "fbName": "Nhẹ Nhàng",
    "service": "Triệt nách (nữ)",
    "staffName": "Phạm Thị Thanh Hiền",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340683-1437",
    "stt": 1437,
    "phone": "0935393725",
    "fbName": "Văn Khánh Ly",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340683-1438",
    "stt": 1438,
    "phone": "0784652507",
    "fbName": "Pé Chang",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Ngọc Bảo Quỳnh",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340683-1439",
    "stt": 1439,
    "phone": "0334292092",
    "fbName": "Nhi Lê",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340683-1440",
    "stt": 1440,
    "phone": "0902084274",
    "fbName": "Mai Huy Hoàng",
    "service": "Triệt nách Nam",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340683-1441",
    "stt": 1441,
    "phone": "0797323964",
    "fbName": "julymoon61 - Julymoon",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340683-1442",
    "stt": 1442,
    "phone": "0902662549",
    "fbName": "Thanh Thúy",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340683-1443",
    "stt": 1443,
    "phone": "0932165372",
    "fbName": "Khách 1443",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340683-1444",
    "stt": 1444,
    "phone": "0898034685",
    "fbName": "Khách 1444",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340683-1445",
    "stt": 1445,
    "phone": "0938121177",
    "fbName": "Khách 1445",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340683-1446",
    "stt": 1446,
    "phone": "0984465588",
    "fbName": "Khách 1446",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340683-1447",
    "stt": 1447,
    "phone": "0932733494",
    "fbName": "Thảo Phương",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340683-1448",
    "stt": 1448,
    "phone": "0946783279",
    "fbName": "Tram Nguyen",
    "service": "Triệt Bikini Nữ",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340683-1449",
    "stt": 1449,
    "phone": "0933833893",
    "fbName": "Ngân Thái",
    "service": "Triệt nách (nữ)",
    "staffName": "Nguyễn Thị Hồng Ngọc",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340683-1450",
    "stt": 1450,
    "phone": "0384663926",
    "fbName": "Lien Quynh Pham",
    "service": "Trị thâm (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340683-1451",
    "stt": 1451,
    "phone": "0398952449",
    "fbName": "Nguyễn Ngọc Phuong Anh",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340684-1452",
    "stt": 1452,
    "phone": "0779866669",
    "fbName": "Jessie Le",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340684-1453",
    "stt": 1453,
    "phone": "0345778112",
    "fbName": "Ngọc Trâm",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "29-09-2026"
  },
  {
    "id": "lg-1790844340684-1454",
    "stt": 1454,
    "phone": "0902383860",
    "fbName": "Mai Anh Nguyễn Ngọc",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340684-1455",
    "stt": 1455,
    "phone": "0392411802",
    "fbName": "Kim Xoan Yvy",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340684-1456",
    "stt": 1456,
    "phone": "0337789815",
    "fbName": "Bée Kunn",
    "service": "Tắm Trắng Body",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340684-1457",
    "stt": 1457,
    "phone": "0918815899",
    "fbName": "MS HẰNG",
    "service": "Triệt nách (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340684-1458",
    "stt": 1458,
    "phone": "0328862586",
    "fbName": "Trần Thu Thảo",
    "service": "Trị thâm (nữ)",
    "staffName": "Lê Thị Diệu Linh",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340684-1459",
    "stt": 1459,
    "phone": "0399851359",
    "fbName": "Khách 1459",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340684-1460",
    "stt": 1460,
    "phone": "0779641189",
    "fbName": "Linh Thang",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340684-1461",
    "stt": 1461,
    "phone": "0902366702",
    "fbName": "Khách 1461",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340684-1462",
    "stt": 1462,
    "phone": "0384253128",
    "fbName": "Khách 1462",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Ngọc Nhung",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340684-1463",
    "stt": 1463,
    "phone": "0774232335",
    "fbName": "Đinh Trần Quỳnh Ngân",
    "service": "Triệt nách (nữ)",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "30-09-2026"
  },
  {
    "id": "lg-1790844340684-1464",
    "stt": 1464,
    "phone": "0394425721",
    "fbName": "Mỹ Quỳnh",
    "service": "Triệt Bikini Nữ",
    "staffName": "Trần Thị Hải Yến",
    "status": "check_in",
    "date": "30-09-2026"
  }
];
