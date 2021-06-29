/**
 *
 */
var mangThongBao = ["Vui lòng nhập vào họ",

];

function getMyEle(ele) {
  return document.getElementById(ele);
}

function kiemTraHo() {
  var ho = getMyEle('ho').value;
  var thongBaoHo = getMyEle('thongBaoHo');
  if (ho === "") {

    thongBaoHo.innerHTML = ;
  }
}

getMyEle('btnThemNhanVien').addEventListener("click", function () {
  kiemTraHo();
})