function danhSachNhanVien() {
  this.danhSachNhanVien = [];
}
danhSachNhanVien.prototype.xuatLuong = function () {
  var soNhanVien = this.danhSachNhanVien.length;
  for (var i = 0; i < soNhanVien; i++) {
    return danhSachNhanVien[i].tinhLuong();
  }
}