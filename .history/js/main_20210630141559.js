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

function kiemTrNhap(idKiemTra, idThongBao, index) {
  var noiDungKiemTra = getMyEle(idKiemTra).value;
  var idThongBao = getMyEle(idThongBao);
  if (noiDungKiemTra === '') {
    idThongBao.innerHTML = mangThongBao[index];
    return false;
  } else {
    return true;
  }
}

getMyEle('btnThemNhanVien').addEventListener("click", function () {
  kiemTrNhap('ho', 'thongBaoHo', 1);
  kiemTrNhap('ten', 'thongBaoTen', 2);
})