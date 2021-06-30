function getMyEle(ele) {
  return document.getElementById(ele);
}

function kiemTrNhap(idKiemTra, idThongBao, index) {
  var noiDungKiemTra = getMyEle(idKiemTra).value;
  var idThongBao = getMyEle(idThongBao);
  if (noiDungKiemTra === '') {
    idThongBao.innerHTML = '';
    return false;
  } else {
    return true;
  }
}

getMyEle('btnThemNhanVien').addEventListener("click", function () {
  kiemTrNhap('ho', 'thongBaoHo', 'vui long nhap ho');
})