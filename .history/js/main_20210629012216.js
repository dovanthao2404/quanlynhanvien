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

function kiemTraHo() {
  var ho = getMyEle('ho').value;
  var thongBaoHo = getMyEle('thongBaoHo');
  if (ho === "") {

    thongBaoHo.innerHTML = mangThongBao[0];
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
  kiemTraHo();
  kiemTraTen();
  kiemTraMa();
  kiemTraNgayLam();
})