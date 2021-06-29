function getEle(ele) {
  return document.getElementById(ele);
}

let congTy = new CongTy();
let nhanVienMoi = new NhanVien('1', "Do Van Thao", 'abc@gmail.com', 'truongthikhanhngan', 'ngayLamViec', 'Sep');
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
})


// Sửa nhân viên
function SuaNhanVien(dsnv) {
  let soNV = dsnv.length;
  for (let i = 0; i < soNV; i++) {
    getEle(`sua-${dsnv[i].maNV}`).addEventListener('click', function () {
      GoiModal("Sửa Nhân Viên", true, 2);
    })
  }
}

// Xóa nhân viên
function XoaNhanVien(dsnv) {
  let soNV = dsnv.length;
  for (let i = 0; i < soNV; i++) {
    getEle(`xoa-${dsnv[i].maNV}`).addEventListener('click', function () {
      congTy.XoaNhanVienTheoMa(dsnv[i].maNV);
    })
  }
  HienThiDanhSach(congTy.DanhSachNhanVien);
}

SuaNhanVien(congTy.DanhSachNhanVien);
XoaNhanVien(congTy.DanhSachNhanVien);
