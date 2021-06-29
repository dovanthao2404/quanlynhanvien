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

function kiemTraHo(idFiedld, idThongBao, indexCuaTB) {
  var idFiedld = getMyEle('idFiedld').value;
  var thongBaoHo = getMyEle('thongBaoHo');
  if (idFiedld === "") {
    thongBaoHo.innerHTML = mangThongBao[indexCuaTB];
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