function NhanVien(maNV, ho, ten, ngaySinh, chucVu, ngayLamViec, luongCaoBan, phuCap) {
  this.maNV = maNV;
  this.ho = ho;
  this.ten = ten;
  this.ngaySinh = ngaySinh;
  this.chucVu = chucVu;
  this.soNgayLamViec = ngayLamViec;
  this.luongCaoBan = luongCaoBan;
  this.phuCap = phuCap;
  this.mangThuocTinh = [this.maNV, this.ho, this.ten, this.ngaySinh, this.chucVu, this.soNgayLamViec, this.luongCaoBan,
  this.phuCap];
  this.mangXuatDonGian = [this.maNV, this.ho, this.ten]
}

NhanVien.prototype.tinhLuong = function () {
  return this.soNgayLamViec + this.luongCaoBan + this.phuCap;
}