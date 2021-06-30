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

//  Tạo động các dòng
function taoDong(tBody, nv) {
  var tr = document.createElement('tr');
  tBody.appendChild(tr);
  for (var i = 0; i < nv.mangXuatDonGian.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = nv.mangXuatDonGian[i];
    td.setAttribute('class', nv.maNV);
    tr.appendChild(td);
  }
  var buttonSua = "<button id='btnSua_" + nv.maNV + "' class='btn btn-warning'>Sua</button>"
  var buttonCapNhat = "<button id='capNhat_" + nv.maNV + "' class='btn btn-warning btnCapNhat'>Cap Nhat</button>"
  var buttonXoa = "<button id='xoa_" + nv.maNV + "' class='btn btn-danger'>Xoa</button>"

  var td = document.createElement('td');
  td.innerHTML = buttonSua + buttonCapNhat + buttonXoa;
  tr.appendChild(td);
  deleteHandler("xoa_" + nv.maNV);
  editHandler("btnSua_" + nv.maNV, "capNhat_" + nv.maNV);
  saveHandler("capNhat_" + nv.maNV, "btnSua_" + nv.maNV);
}

// XỬ lý nhân viên vào table
function xuLyThemNhanVienVaoTable(dSNV) {
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
    var id = this.id;
    var mangTemp = id.split('_');
    dSNV.xoaNhanVienTheoMa(mangTemp[1]);
    xuLyThemNhanVienVaoTable(dSNV);
  })
}
function editHandler(eleID, idSave) {
  getMyEle(eleID).addEventListener("click", function () {
    getMyEle(eleID).style.display = 'none';
    getMyEle(idSave).style.display = 'inline-block';
    var id = this.id;
    var mangTemp = id.split('_');
    var trSua = document.getElementsByClassName(`${mangTemp[1]}`);
    for (let i = 1; i < trSua.length; i++) {
      trSua[i].setAttribute('contenteditable', true);
      trSua[i].style.border = "2px solid #333";
    }
  })
}
function saveHandler(eleID, idSave) {
  getMyEle(eleID).addEventListener("click", function () {
    getMyEle(eleID).style.display = 'none';
    getMyEle(idSave).style.display = 'inline-block';
    var id = this.id;
    var mangTemp = id.split('_');
    viTri = dSNV.timVi

    var trSua = document.getElementsByClassName(`${mangTemp[1]}`);
    for (let i = 1; i < trSua.length; i++) {
      trSua[i].setAttribute('contenteditable', false);
      trSua[i].style.border = '1px solid #dee2e6';
      console.log(trSua[i].innerText);
      console.log(nhanVien.mangXuatDonGian[i]);
      nhanVien[i] = trSua[i].innerText;
    }
  })
}


// Kiểm tra nhập
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

// Kiểm tra chọn
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

// Kiểm tra họ tên,
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


// Kiểm tra độ dài
function kiemTraDoDai(idKiemTra, idThongBao, indexThongBao) {
  var field = getMyEle(idKiemTra).value.length;
  var thongBao = getMyEle(idThongBao);
  if (field < 4 || field > 6) {
    thongBao.innerHTML = mangThongBao[indexThongBao];
    return false;
  } else {
    thongBao.innerHTML = ''
    return true;
  }
}


// Kiểm tra hợp lệ
function kiemTraHopLe() {
  var kq = kiemTraNhap('ho', 'thongBaoHo', 0);
  if (kq) {
    kq = kiemTraNhapKiTu('ho', 'thongBaoHo', 5)
  }
  var kq2 = kiemTraNhap('ten', 'thongBaoTen', 1);
  if (kq2) {
    kq2 = kiemTraNhapKiTu('ten', 'thongBaoTen', 6);
  }
  var kq3 = kiemTraNhap('maNV', 'thongBaoMS', 2);
  if (kq3) {
    kq3 = kiemTraDoDai('maNV', 'thongBaoMS', 7);
  }
  var kq4 = kiemTraNhap('ngayLamViec', 'thongBaoNgay', 3);
  var kq5 = kiemTraChon('chucVu', 'thongBaoChucVu', 4);

  if (kq && kq2 && kq3 && kq4 && kq5) {
    return true;
  } else {
    return false;
  }
}


// Làm mới form
function lamMoiForm() {
  getMyEle('ho').value = '';
  getMyEle('ten').value = '';
  getMyEle('maNV').value = '';
  getMyEle('ngayLamViec').value = '';
  getMyEle('chucVu').selectedIndex = 0;
}


// Thêm nhân viên
getMyEle('btnThemNhanVien').addEventListener("click", function () {
  var kq = kiemTraHopLe();
  if (kq) {
    var ho = getMyEle('ho').value;
    var ten = getMyEle('ten').value;
    var maNV = getMyEle('maNV').value;
    // var ngay
    var nhanVien = new NhanVien(maNV, ho, ten, '', '', '', '', '')
    dSNV.themNhanVien(nhanVien);
    lamMoiForm();
    var hienThi = getMyEle('hienThi');
    hienThi.style.display = 'block';
    xuLyThemNhanVienVaoTable(dSNV);
  }
})


// Chọn loại cần tìm
function chonLoaiCanTim() {
  var loaiCanTim = getMyEle('loaiCanTim');
  return loaiCanTim.selectedIndex;
}

function hienThiTimNhanVienTheoMa() {
  getMyEle('notFound').innerHTML = '';
  getMyEle('thongBaoTim').innerHTML = '';
  var ma = getMyEle('giaTriTim').value;
  var nhanVien = dSNV.timNhanVienTheoMa(ma);
  if (nhanVien !== undefined) {
    getMyEle('thetBody').innerHTML = ''
    getMyEle('thetBody').innerHTML = `
  <tr>
  <td class="${nv.maNV}">${nhanVien.maNV}</td>
  <td class="${nv.maNV}">${nhanVien.ho}</td>
  <td class="${nv.maNV}">${nhanVien.ten}</td>
  <td class="${nv.maNV}">
  <button id='btnSua_${nhanVien.maNV}' class='btn btn-warning'>Sua</button>
  <button id='capNhat_${nhanVien.maNV}' class='btn btn-warning btnCapNhat'>Cap Nhat</button>
  <button id='xoa_${nhanVien.maNV}' class='btn btn-danger'>Xoa</button>
  </td>
  </tr>
  `} else {
    getMyEle('notFound').innerHTML = 'Không tìm thấy';
  }
}

function hienThiTimNhanVienTheoTen() {
  getMyEle('thetBody').innerHTML = '';
  getMyEle('notFound').innerHTML = '';
  getMyEle('thongBaoTim').innerHTML = '';
  var ten = getMyEle('giaTriTim').value;
  var danhSachTheoTen = dSNV.timTheoTen(ten);
  xuLyThemNhanVienVaoTable(danhSachTheoTen);

}

// Tìm nhân viên
getMyEle('timNhanVien').addEventListener("click", function () {
  var chonLoaiTim = chonLoaiCanTim();
  if (chonLoaiTim === 1) {
    hienThiTimNhanVienTheoMa();
  } else if (chonLoaiTim === 2) {
    hienThiTimNhanVienTheoTen();
  } else {
    getMyEle('notFound').innerHTML = '';
    getMyEle('thongBaoTim').innerHTML = "Vui long chon.";
  }
})


// Hủy tìm
getMyEle('huyTim').addEventListener("click", function () {
  xuLyThemNhanVienVaoTable(dSNV);
  getMyEle('giaTriTim').value = '';
  getMyEle('notFound').innerHTML = '';
  getMyEle('thongBaoTim').innerHTML = '';
})