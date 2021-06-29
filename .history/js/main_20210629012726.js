/**
 *
 */
var mangThongBao = [
  "Vui lòng nhập vào họ",
  "Vui lòng nhập vào tên",
  "Vui lòng nhập mã nhân viên",
  "Vui lòng chọn ngày",
  "Vui lòng chọn chức vụ",

];

function getMyEle(ele) {
  return document.getElementById(ele);
}

function kiemTraNhap(idFiedld, idThongBao, indexCuaTB) {
  var idFiedld = getMyEle(idFiedld).value;
  var idThongBao = getMyEle(idThongBao);
  if (idFiedld === "") {
    idThongBao.innerHTML = mangThongBao[indexCuaTB];
  }
}
function kiemTraChucVu() {
  var chucVu = getMyEle('chucVu').value;
  var thongBaoChucVu = getMyEle('thongBaoChucVu');
  if (chucVu === '') {
    thongBaoChucVu.innerHTML = mangThongBao[4];
  }
}
getMyEle('btnThemNhanVien').addEventListener("click", function () {
  kiemTraNhap('ho', 'thongBaoHo', 0);
  kiemTraNhap('ten', 'thongBaoTen', 1);
  kiemTraNhap('maNhanVien', 'thongBaoMNV', 2);
  kiemTraNhap('ngayLam', 'thongBaoNgayLam', 3);
  console.log(getMyEle('chucVu'));
})