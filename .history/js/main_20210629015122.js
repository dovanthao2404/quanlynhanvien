/**
 *
 */
var mangThongBao = [
  "Vui lòng nhập vào họ",
  "Vui lòng nhập vào tên",
  "Vui lòng nhập mã nhân viên",
  "Vui lòng chọn ngày",
  "Vui lòng chọn chức vụ",
  "Họ phải là ký tự",
  "Tên phải là ký tự",

];

function getMyEle(ele) {
  return document.getElementById(ele);
}

function kiemTraNhap(idField, idThongBao, indexCuaTB) {
  var result = false;
  var valueField = getMyEle(idField).value;
  var thongBao = getMyEle(idThongBao);
  if (valueField === "") {
    thongBao.innerHTML = mangThongBao[indexCuaTB];
  } else {
    thongBao.innerHTML = ''
    result = true;
  }
  return result;
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
  var thongBao = getMyEle(idThongBao);
  if (valueField.match(mangKiTu)) {
    thongBao.innerHTML = '';
  } else {
    thongBao.innerHTML = mangThongBao[indexCuaTB];
  }
}
function kimTraNhapKiTu(idField, idThongBao, indexCuaTB) {
  var mangKiTu = /^[A-Za-z]+$/;
  var valueField = getMyEle(idField).value;
  var thongBao = getMyEle(idThongBao);
  if (valueField.match(mangKiTu)) {
    thongBao.innerHTML = '';
  } else {
    thongBao.innerHTML = mangThongBao[indexCuaTB];
  }
}
getMyEle('btnThemNhanVien').addEventListener("click", function () {
  var kq = kiemTraNhap('ho', 'thongBaoHo', 0);
  if (kq) {
    kimTraNhapKiTu('ho', 'thongBaoHo', 5);
  }
  kq = kiemTraNhap('ten', 'thongBaoTen', 1);
  if (kq) {
    kimTraNhapKiTu('ten', 'thongBaoTen', 6);
  }
  kiemTraNhap('maNhanVien', 'thongBaoMNV', 2);
  kiemTraNhap('ngayLam', 'thongBaoNgayLam', 3);
  kiemTraChucVu();
})