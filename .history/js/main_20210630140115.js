function getMyEle(ele) {
  return document.getElementById(ele);
}

function kiemTrNhap(idKiemTra, idThongBao, index) {
  var noiDungKiemTra = getMyEle(idKiemTra).value;
  var idThongBao = getMyEle(idThongBao);
  if (noiDungKiemTra === '') {
    return false;
  }
}