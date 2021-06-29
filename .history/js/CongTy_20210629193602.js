class CongTy {
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

  // Tìm nhân viên theo mã trả về nhân viên
  TimNhanVienTheoMa(maNV) {
    let viTri = this.TimViTriNhanVien(maNV);
    if (viTri != -1) {
      return this.DanhSachNhanVien[viTri];
    } else {
    }
  }

  // Xóa nhân viên theo mã
  XoaNhanVien(maNV) {
    let viTri = this.TimViTriNhanVien(maNV);
    if (viTri != -1) {
      this.DanhSachNhanVien.splice(viTri, 1);
    } else {
    }
  }
}