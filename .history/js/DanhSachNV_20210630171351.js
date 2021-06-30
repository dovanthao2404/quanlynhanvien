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
  var soNhanVien = this.DanhSachNV.length;
  var viTri = -1;
  for (var i = 0; i < soNhanVien; i++) {
    if (this.DanhSachNV[i].maNV === ma) {
      viTri = i;
      break;
    }
  }
  return viTri;
}
DanhSachNV.prototype.xoaNhanVienTheoMa = function (ma) {
  var viTri = timViTriTheoMa(ma);
  if (viTri !== -1) {
    this.DanhSachNV.splice(viTri, '1');
  }
}

DanhSachNV.prototype.timTheoTen = function () {

}