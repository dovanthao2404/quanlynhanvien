function danhSachNhanVien() {
  this.danhSachNhanVien = [];
}

danhSachNhanVien.prototype.xuat = function (nv) {
  nv.render();
}

danhSachNhanVien.prototype.themNhanVien = function (nv) {
  this.danhSachNhanVien.push(nv);
}

danhSachNhanVien.prototype.xuatLuong = function () {
  var soNhanVien = this.danhSachNhanVien.length;
  for (var i = 0; i < soNhanVien; i++) {
    return danhSachNhanVien[i].tinhLuong();
  }
}

function timMaNhanVien(nv) {
  var ma = -1;
  var doDaiDanhSach = this.danhSachNhanVien.length
  for (var i = 0; i < doDaiDanhSach; i++) {

  }
}

danhSachNhanVien.prototype.xoaNhanVien = function (nv) {
  this.danhSachNhanVien.splice()
}

danhSachNhanVien.prototype.timTheoTen = function (ten) {

}

danhSachNhanVien.prototype.timTheoMa = function (ma) {

}
