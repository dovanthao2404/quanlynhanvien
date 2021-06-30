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

}
DanhSachNV.prototype.xoaNhanVien = function (ma) {

}

DanhSachNV.prototype.timTheoTen = function () {

}