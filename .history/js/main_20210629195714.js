var congTy = new CongTy();
var nhanVienMoi = new NhanVien('1', "Do Van Thao", 'abc@gmail.com', 'truongthikhanhngan', 'ngayLamViec', 'chucVu');
congTy.ThemNhanVien(nhanVienMoi);
nhanVienMoi = new NhanVien('2', "Truong Thi Khanh Ngan", 'abc@gmail.com', 'truongthikhanhngan', 'ngayLamViec', 'chucVu');
congTy.ThemNhanVien(nhanVienMoi);

// Ham goi modal popup: Them Nhan Vien or Sua thong tin nhan vien
GoiModal =