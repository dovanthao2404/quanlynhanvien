function getEle(ele) {
  return document.getElementById(ele);
}

let congTy = new CongTy();
let nhanVienMoi = new NhanVien('1', "Do Van Thao", 'abc@gmail.com', 'truongthikhanhngan', 'ngayLamViec', 'Nhan Vien');
congTy.ThemNhanVien(nhanVienMoi);
nhanVienMoi = new NhanVien('2', "Truong Thi Khanh Ngan", 'abc@gmail.com', 'truongthikhanhngan', 'ngayLamViec', 'Truong Phong');
congTy.ThemNhanVien(nhanVienMoi);

// Ham goi modal popup: Them Nhan Vien or Sua thong tin nhan vien
GoiModal = (modal_title, readonly = false, type = 1) => {
  // type = 1: them nhan vien, type = 2: sua thong tin
  getEle('header-title').innerHTML = modal_title;
  getEle('msnv').readOnly = readonly;
  switch (type) {
    case 1: //Them nhanVien
      getEle("btnThemNhanVien").style.display = "inline-block";
      getEle("btnCapNhat").style.display = "none";
      getEle("btnDong").style.display = "inline-block";
      break;

    case 2:
      getEle("btnCapNhat").style.display = "inline-block";
      getEle("btnThemNhanVien").style.display = "none";
      getEle("btnDong").style.display = "inline-block";
      break;
  }
}

getEle('goiModal').addEventListener('click', function () {
  GoiModal("Thêm Nhân Viên");
})


// Reset form
XoaForm = () => {
  let elements = document.getElementsByTagName('input');
  for (let element of elements) {
    element.value = '';
  }
  document.getElementById('chucVu').selectedIndex = 0;
}

/**
 * Tạo các dòng dữ liệu là các nhân viên
 *
 */

function taoDong(tBody, nv) {
  var tr = document.createElement('tr');
  tBody.appendChild(tr);
  for (var i = 0; i < mangDoiChieu.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = mangDoiChieu[i]
    tr.appendChild(td);
    var sua = <button class="btn btn-warning" id="sua-${dsnv[i].maNV}" data-toggle="modal"
      data-target="#exampleModal">Sửa</button>
    var xoa = <button class="btn btn-danger" id="xoa-${dsnv[i].maNV}">Xóa</button>
  }
}

HienThiDanhSach = (dsnv) => {
  let tbody = document.querySelector('table tbody');
  let htmls = '';
  let soNV = dsnv.length;
  for (let i = 0; i < soNV; i++) {
    htmls += `<tr>
          <th scope="row">${dsnv[i].hoTen}</th>
          <td>${dsnv[i].maNV}</td>
          <td>${dsnv[i].ngayLamViec}</td>
          <td>${dsnv[i].chucVu}</td>
          <td>30 $</td>
          <td>
            <button class="btn btn-warning" id="sua-${dsnv[i].maNV}" data-toggle="modal"
            data-target="#exampleModal">Sửa</button>
            <button class="btn btn-danger" id="xoa-${dsnv[i].maNV}">Xóa</button>
          </td>
        </tr>`
    SuaNhanVien()
    XoaNhanVien(`${dsnv[i].maNV}`);
  }
  tbody.innerHTML = htmls;
}
HienThiDanhSach(congTy.DanhSachNhanVien);


// Thêm nhân viên

getEle('btnThemNhanVien').addEventListener('click', function () {
  let ma = getEle('msnv').value;
  let hoTen = getEle('hoTen').value;
  let email = getEle('email').value;
  let matKhau = getEle('matKhau').value;
  let ngayLam = getEle('ngayLam').value;
  let chucVu = getEle('chucVu').value;
  let nv = new NhanVien(ma, hoTen, email, matKhau, ngayLam, chucVu);
  congTy.ThemNhanVien(nv);
  HienThiDanhSach(congTy.DanhSachNhanVien);
  XoaForm();
})


// Sửa nhân viên
SuaNhanVien = (maNV) => {
  getEle(maNV).addEventListener("click", function () {
    GoiModal("Sửa Nhân Viên", true, 2);
  })
}

// Xóa nhân viên

XoaNhanVien = (maNV) => {
  getEle(maNV).addEventListener("click", function () {
    congTy.XoaNhanVienTheoMa(maNV);

    HienThiDanhSach(congTy.DanhSachNhanVien);
  })
}