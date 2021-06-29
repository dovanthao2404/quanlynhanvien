class congTy {
  constructor() {
    this.DanhSachNhanVien = [];
  }
  // Phương thức thêm nhân viên mới vào mảng (thuộc tính) DanhSachNhanVien
  ThemNhanVien(nhanVienMoi) {
    this.DanhSachNhanVien = [...this.DanhSachNhanVien, nhanVienMoi];
  }

  // Phước thức tìm nhân viên theo mã nhân viên, trả về vị trí nhân viên trong mảng DanhSachNhanVien
  TimViTriNhanVien(maNV) {
    // return this.DanhSachNhanVien.find(nhanVien => nhanVien.maNV === maNV)
    for (let viTri in this.DanhSachNhanVien) {
      if (this.DanhSachNhanVien[viTri].maNV === maNV) {
        return viTri;
      }
    }
    return -1;
  }
}