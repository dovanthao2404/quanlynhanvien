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
  "Vui lòng nhập số",
  "Độ dài tối thiểu, tối da"
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
    result = true;
  } else {
    thongBao.innerHTML = mangThongBao[indexCuaTB];
  }
  return result;
}
function kiemTraNhapSo(idField, idThongBao, indexCuaTB) {
  var result = false;
  var mangSo = /^[0-9]+$/;
  var valueField = getMyEle(idField).value;
  var thongBao = getMyEle(idThongBao);
  if (valueField.match(mangSo)) {
    thongBao.innerHTML = '';
    result = true;
  } else {
    thongBao.innerHTML = mangThongBao[indexCuaTB];
  }
  return result;
}

function kiemTraDoDai(minLength, maxLength, indexCuaTB) {
  var result = false;
  var valueField = getMyEle('maNhanVien').value;
  var thongBao = getMyEle('thongBaoMNV');
  if (valueField.length < minLength || valueField.length > maxLength) {
    thongBao.innerHTML = mangThongBao[indexCuaTB] + " " + minLength + " " + maxLength;
  } else {
    thongBao.innerHTML = ''
    result = true;
  }
  return result;
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
  kq = kiemTraNhap('maNhanVien', 'thongBaoMNV', 2);
  if (kq) {
    // kiemTraNhapSo('maNhanVien', 'thongBaoMNV', 7);
    kiemTraDoDai(4, 6, 8);

  }
  kiemTraNhap('ngayLam', 'thongBaoNgayLam', 3);
  kiemTraChucVu();
})