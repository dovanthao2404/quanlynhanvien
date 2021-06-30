function getMyEle(ele) {
  return document.getElementById(ele);
}


var mangThongBao = [
  'Vui lòng nhập họ',
  'Vui lòng nhập tên',
  'Vui lòng nhập mã nhân viên',
  'Vui lòng chọn ngày',
  'Vui lòng chọn chức vụ',
  'Họ phải là ký tự',
  'Tên phải là ký tự',
  'Độ dài từ 4 - 6',

]

function kiemTraNhap(idKiemTra, idThongBao, indexThongBao) {
  var noiDungKiemTra = getMyEle(idKiemTra).value;
  var idThongBao = getMyEle(idThongBao);
  if (noiDungKiemTra === '') {
    idThongBao.innerHTML = mangThongBao[indexThongBao];
    return false;
  } else {
    idThongBao.innerHTML = ''
    return true;
  }
}

function kiemTraChon(idKiemTra, idThongBao, indexThongBao) {
  var noiDungKiemTra = getMyEle(idKiemTra).selectedIndex;
  var idThongBao = getMyEle(idThongBao);
  if (noiDungKiemTra === 0) {
    idThongBao.innerHTML = mangThongBao[indexThongBao];
    return false;
  } else {
    idThongBao.innerHTML = ''
    return true;
  }
}

function kiemTraNhapKiTu(idKiemTra, idThongBao, indexThongBao) {
  var mangKiTu = /^[a-zA-Z]+$/;
  var field = getMyEle(idKiemTra).value;
  var thongBao = getMyEle(idThongBao);
  if (field.match(mangKiTu)) {
    thongBao.innerHTML = ''
    return true;
  } else {
    thongBao.innerHTML = mangThongBao[indexThongBao];
    return false;
  }
}

getMyEle('btnThemNhanVien').addEventListener("click", function () {
  var kq = kiemTraNhap('ho', 'thongBaoHo', 0);
  if (kq) {
    kiemTraNhapKiTu('ho', 'thongBaoHo', 5)
  }
  var kq2 = kiemTraNhap('ten', 'thongBaoTen', 1);
  if (kq2) {
    kiemTraNhapKiTu('ten', 'thongBaoTen', 6);
  }
  kiemTraNhap('maNV', 'thongBaoMS', 2);
  kiemTraNhap('ngayLamViec', 'thongBaoNgay', 3);
  kiemTraChon('chuVu', 'thongBaoChucVu', 4)
})