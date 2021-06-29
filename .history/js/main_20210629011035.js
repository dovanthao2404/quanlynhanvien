/**
 *
 */
var mangThongBao = ["Vui lòng nhập vào họ", "Vui lòng nhập vào ten",

];

function getMyEle(ele) {
  return document.getElementById(ele);
}

function kiemTraHo() {
  var ho = getMyEle('ho').value;
  var thongBaoHo = getMyEle('thongBaoHo');
  if (ho === "") {

    thongBaoHo.innerHTML = mangThongBao[0];
  }
}
function kiemTraTen() {
  var ten = getMyEle('ten').value;
  var thongBaoTen = getMyEle('thongBaoTen');
  if (ten === "") {

    thongBaoTen.innerHTML = mangThongBao[1];
  }
}
getMyEle('btnThemNhanVien').addEventListener("click", function () {
  kiemTraHo();
})