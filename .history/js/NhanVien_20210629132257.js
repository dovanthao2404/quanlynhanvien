/**
 * mo ta: tao ra loi nhan vien
 */

function NhanVien(maNhanVien, ho, ten, ngayLam, chucVu, luong, ngayLamViec, luongCoBan, phuCap, ngaySinh) {
  this.maNhanVien = maNhanVien;
  this.ho = ho;
  this.ten = ten;
  this.ngaySinh = ngaySinh;
  this.chucVu = chucVu;
  this.luong = luong;
  this.soNgayLamViec = ngayLamViec;
  this.luongCoBan = luongCoBan;
  this.phuCap = phuCap;
  this.ngayLam = ngayLam;
  this.mangThuocTinh = [this.maNhanVien, this.ho, this.ten, this.ngaySinh,
  this.ngayLam,
  this.chucVu, this.soNgayLamViec, this.luongCoBan, this.phuCap];
  // this.tinhLuong = function () {
  //   return this.soNgayLamViec * luongCoBan + phuCap;
  // };
}

NhanVien.prototype.tinhLuong = function () {
  return this.soNgayLamViec * luongCoBan + phuCap;
}

NhanVien.prototype.render = function () {
  var htmls = `<tr>
  <th scope="row">${this.ho}</th>
  <th scope="col">${this.ten}</th>
  <th scope="col">${this.maNhanVien}</th>
  <th scope="col">${this.ngayLam}</th>
  <th scope="col">${this.chucVu}</th>
  <th scope="col">${this.luong} $</th>
  <th>
    <div class="form-group mb-0">
      <input class="btn btn-warning" type="button" value="Sửa">
      <input class="btn btn-danger" type="button" value="Xóa">
    </div>
  </th>
</tr>`;
  console.log(htmls);
  document.querySelector('#list-staff__content table tboby').innerHTML = htmls;

}