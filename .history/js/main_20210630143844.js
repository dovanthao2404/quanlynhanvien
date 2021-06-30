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
    return true;
  }
}

getMyEle('btnThemNhanVien').addEventListener("click", function () {
  kiemTraNhap('ho', 'thongBaoHo', 0);
  kiemTraNhap('ten', 'thongBaoTen', 1);
  kiemTraNhap('maNV', 'thongBaoMS', 2);
  kiemTraNhap('ngayLamViec', 'thongBaoNgay', 3);
  kiemTraChon('chuVu', 'thongBaoChucVu', 4)
})