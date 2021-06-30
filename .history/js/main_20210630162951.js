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
var dSNV = new DanhSachNV();


function taoDong(tBody, nv) {
  var tr = document.createElement('tr');
  tBody.appendChild(tr);
  for (var i = 0; i < nv.mangThuocTinh.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = nv.mangThuocTinh[i];
    tr.appendChild(td);
  }
  var buttonSua = "<button id'btnSua_" + nv.maNV + "' class='btn btn-warning'>Sua</button>"
  var buttonCapNhat = "<button id'capNhat_" + nv.maNV + "' class='btn btn-warning btnCapNhat'>Sua</button>"
  var buttonXoa = "<button id'xoa_" + nv.maNV + "' class='btn btn-danger'>Sua</button>"

  var td = document.createElement('td');
  td.innerHTML = buttonSua + buttonCapNhat + buttonXoa;
  tr.appendChild(td);
  deleteHandler("xoa_" + nv.maNV);
  editHandler("btnSua_" + nv.maNV);
  saveHandler("capNhat_" + nv.maNV);
}

function xuLyThemNhanVienVaoTable() {
  var tBody = getMyEle('thetBody');
  var soNhanVien = dSNV.DanhSachNV.length;
  // dSNV.xuatThuocTinhNV();
  tBody.innerHTML = '';
  for (var i = 0; i < soNhanVien; i++) {
    var nhanVien = dSNV.DanhSachNV[i];
    taoDong(tBody, nhanVien);
  }

}


function deleteHandler(eleID) {
  getMyEle(eleID).addEventListener("click", function () {
    var table = getMyEle('tableHienThi');
    console.log("delete" + this.maNV);
  })
}

function editHandler(eleID) {
  getMyEle(eleID).addEventListener("click", function () {

  })
}
function saveHandler(eleID) {
  getMyEle(eleID).addEventListener("click", function () {

  })
}
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

function kiemTraDoDai(idKiemTra, idThongBao, indexThongBao) {
  var field = getMyEle(idKiemTra).value.length;
  var thongBao = getMyEle(idThongBao);
  if (field < 2 || field > 6) {
    thongBao.innerHTML = mangThongBao[indexThongBao];
    return false;
  } else {
    thongBao.innerHTML = ''
    return true;
  }
}

function kiemTraHopLe() {
  var kq = kiemTraNhap('ho', 'thongBaoHo', 0);
  if (kq) {
    kiemTraNhapKiTu('ho', 'thongBaoHo', 5)
  }
  var kq2 = kiemTraNhap('ten', 'thongBaoTen', 1);
  if (kq2) {
    kiemTraNhapKiTu('ten', 'thongBaoTen', 6);
  }
  var kq3 = kiemTraNhap('maNV', 'thongBaoMS', 2);
  if (kq3) {
    kiemTraDoDai('maNV', 'thongBaoMS', 7);
  }
  var kq4 = kiemTraNhap('ngayLamViec', 'thongBaoNgay', 3);
  var kq5 = kiemTraChon('chucVu', 'thongBaoChucVu', 4);

  if (kq && kq2 && kq3 && kq4 && kq5) {
    return true;
  } else {
    return false;
  }
}

function lamMoiForm() {
  getMyEle('ho').value = '';
  getMyEle('ten').value = '';
  getMyEle('maNV').value = '';
  getMyEle('ngayLamViec').value = '';
  getMyEle('chucVu').selectedIndex = 0;
}

getMyEle('btnThemNhanVien').addEventListener("click", function () {
  var kq = kiemTraHopLe();
  if (kq) {
    var ho = getMyEle('ho').value;
    var ten = getMyEle('ten').value;
    var maNV = getMyEle('maNV').value;
    // var ngay
    var nhanVien = new NhanVien(ho, ten, maNV, '', '', '', '', '')
    dSNV.themNhanVien(nhanVien);
    lamMoiForm();
    var hienThi = getMyEle('hienThi');
    hienThi.style.display = 'block';
    xuLyThemNhanVienVaoTable();
  }
})