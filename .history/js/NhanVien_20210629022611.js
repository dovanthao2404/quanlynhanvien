/**
 * mo ta: tao ra loi nhan vien
 */

function NhanVien(maNhanVien, ho, ten, ngaySinh, chucVu, ngayLamViec, luongCoBan, phuCap) {
  this.maNhanVien = maNhanVien;
  this.ho = ho;
  this.ten = ten;
  this.ngaySinh = ngaySinh;
  this.chucVu = chucVu;
  this.soNgayLamViec = ngayLamViec;
  this.luongCoBan = luongCoBan;
  this.phuCap = phuCap;
  // this.tinhLuong = function () {
  //   return this.soNgayLamViec * luongCoBan + phuCap;
  // };
}

NhanVien.prototype.tinhLuong = function () {
  return this.soNgayLamViec * luongCoBan + phuCap;
}