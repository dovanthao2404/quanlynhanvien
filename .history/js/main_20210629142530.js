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
  var result = false;
  var theSelect = getMyEle('chucVu');
  var thongBaoChucVu = getMyEle('thongBaoChucVu');
  if (theSelect.selectedIndex === 0) {
    thongBaoChucVu.innerHTML = mangThongBao[4];
  } else {
    thongBaoChucVu.innerHTML = ''
    result = true;
  }
  return result;
}

function kimTraNhapKiTu(idField, idThongBao, indexCuaTB) {
  var result = false;
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

var dSNhanVien = new danhSachNhanVien();

function kiemTraHopLe() {
  var kq1 = kiemTraNhap('ho', 'thongBaoHo', 0);
  if (kq1) {
    kq1 = kimTraNhapKiTu('ho', 'thongBaoHo', 5);
  }
  var kq2 = kiemTraNhap('ten', 'thongBaoTen', 1);
  if (kq2) {
    kq2 = kimTraNhapKiTu('ten', 'thongBaoTen', 6);
  }
  var kq3 = kiemTraNhap('maNhanVien', 'thongBaoMNV', 2);
  if (kq3) {
    kq3 = kiemTraDoDai(4, 6, 8);
  }
  var kq4 = kiemTraNhap('ngayLam', 'thongBaoNgayLam', 3);
  var kq5 = kiemTraChucVu();

  if (kq1 && kq2 && kq3 && kq4 && kq5) {
    return true;
  }
  return false;
}

function lamMoiForm() {
  getMyEle('ho').value = '';
  getMyEle('ten').value = '';
  getMyEle('maNhanVien').value = '';
  getMyEle('chucVu').selectedIndex = 0;

}
getMyEle(`'xoaNhanVien'-${this.ma}`).onclick = xoaNhanVien();
function xoaNhanVien() {
  getMyEle(`'xoaNhanVien'-${this.ma}`).addEventListener("click", function () {
    dSNhanVien.xoaNhanVien(dSNhanVienk[0]);
    dSNhanVien.xuat();
  })
}

getMyEle('btnThemNhanVien').addEventListener("click", function () {
  var kq = kiemTraHopLe();
  if (kq) {
    var ma = getMyEle('maNhanVien').value;
    var ho = getMyEle('ho').value;
    var ten = getMyEle('ten').value;
    var ngayLam = getMyEle('ngayLam').value;
    var chucVu = getMyEle('chucVu').value;

    var nhanVien = new NhanVien(ma, ho, ten, ngayLam, chucVu, 30);
    dSNhanVien.themNhanVien(nhanVien);
    lamMoiForm();
    nhanVien.render();
  }
})