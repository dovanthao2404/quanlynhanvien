function DanhSachNV() {
  this.DanhSachNV = [];
}

DanhSachNV.prototype.themNhanVien = function (nv) {
  this.DanhSachNV.push(nv);
}

DanhSachNV.prototype.xuatLuong = function () {
  var soNV = this.DanhSachNV.length;
  for (var i = 0; i < soNV; i++) {
    this.DanhSachNV[i].tinhLuong();
  }
};

DanhSachNV.prototype.timViTriTheoMa = function (ma) {
  var viTri = -1;
  for (var i = 0; i < chieuDaiDS; i++) {
    if (ds.DanhSachNV[i].maNV === ma) {
      viTri = i;
      break;
    }
  }
  return viTri;
}

DanhSachNV.prototype.timNhanVienTheoMa = function (ma) {
  var chieuDaiDS = this.DanhSachNV.length;
  var viTri = timViTriTheoMa(ma, chieuDaiDS, this);
  if (viTri !== -1) {
    return this.DanhSachNV[viTri];
  }
}
DanhSachNV.prototype.xoaNhanVienTheoMa = function (ma) {
  var chieuDaiDS = this.DanhSachNV.length;
  var viTri = timViTriTheoMa(ma, chieuDaiDS, this);
  if (viTri !== -1) {
    this.DanhSachNV.splice(viTri, '1');
  }
}

DanhSachNV.prototype.timTheoTen = function (ten) {
  var dsNV = new DanhSachNV();
  var chieuDaiDS = this.DanhSachNV.length;
  for (var i = 0; i < chieuDaiDS; i++) {
    if (this.DanhSachNV[i].ten === ten) {
      dsNV.themNhanVien(this.DanhSachNV[i]);
    }
  }
  return dsNV;
}