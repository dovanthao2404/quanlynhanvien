/**
 *
 */
var mangThongBao = [
  "Vui lòng nhập vào họ",
  "Vui lòng nhập vào tên",
  "Vui lòng nhập mã nhân viên",
  "Vui lòng chọn ngày",
  "Vui lòng chọn chức vụ",
  "Ho Phai La Ky Tu"

];

function getMyEle(ele) {
  return document.getElementById(ele);
}

function kiemTraNhap(idField, idThongBao, indexCuaTB) {
  var valueField = getMyEle(idField).value;
  var idThongBao = getMyEle(idThongBao);
  if (valueField === "") {
    idThongBao.innerHTML = mangThongBao[indexCuaTB];
  } else {
    idThongBao.innerHTML = ''
  }
}
function kiemTraChucVu() {
  var theSelect = getMyEle('chucVu');
  var thongBaoChucVu = getMyEle('thongBaoChucVu');
  if (theSelect.selectedIndex === 0) {
    thongBaoChucVu.innerHTML = mangThongBao[4];
  } else {
    thongBaoChucVu.innerHTML = ''
  }
}

function kimTraNhapKiTu(idField, idThongBao, indexCuaTB) {
  var mangKiTu = /^[A-Za-z]+$/;
  var valueField = getMyEle(idField).value;
  var idThongBao = getMyEle(idThongBao);
  if (valueField.math(mangKiTu)) {
    idThongBao.innerHTML = '';
  } else {
    idThongBao.innerHTML = mangThongBao[indexCuaTB];
  }
}
getMyEle('btnThemNhanVien').addEventListener("click", function () {
  kiemTraNhap('ho', 'thongBaoHo', 0);
  kiemTraNhap('ten', 'thongBaoTen', 1);
  kiemTraNhap('maNhanVien', 'thongBaoMNV', 2);
  kiemTraNhap('ngayLam', 'thongBaoNgayLam', 3);
  kiemTraChucVu();
})