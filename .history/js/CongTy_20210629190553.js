class congTy {
  constructor() {
    this.DanhSachNhanVien = [];
  }
  // Phương thức thêm nhân viên mới vào mảng (thuộc tính) DanhSachNhanVien
  ThemNhanVien(nhanVienMoi) {
    this.DanhSachNhanVien = [...this.DanhSachNhanVien, nhanVienMoi];
  }
}