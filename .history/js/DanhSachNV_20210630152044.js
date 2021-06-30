function DanhSachNV() {
  this.DanhSachNV = [];
}

DanhSachNV.prototype.xuatLuong = function () {
  var soNV = this.DanhSachNV.length;
  for (var i = 0; i < soNV; i++) {
    this.DanhSachNV[i].tinhLuong();
  }
};