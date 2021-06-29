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
  var viTri = -1;
  var doDaiDanhSach = this.danhSachNhanVien.length
  for (var i = 0; i < doDaiDanhSach; i++) {
    if (nv.maNhanVien === danhSachNhanVien[i].maNhanVien) {
      viTri = i;
      break;
    }
  }
  return viTri
}

danhSachNhanVien.prototype.xoaNhanVien = function (nv) {
  this.danhSachNhanVien.splice()
}

danhSachNhanVien.prototype.timTheoTen = function (ten) {

}

danhSachNhanVien.prototype.timTheoMa = function (ma) {

}
