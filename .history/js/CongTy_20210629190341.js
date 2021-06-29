class congTy {
  constructor() {
    this.DanhSachNhanVien = [];
  }

  ThemNhanVien(nhanVienMoi) {
    this.DanhSachNhanVien = [...this.DanhSachNhanVien, nhanVienMoi];
  }
}