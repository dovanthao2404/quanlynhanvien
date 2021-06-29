function getEle(ele) {
  return document.getElementById(ele);
}

var congTy = new CongTy();
var nhanVienMoi = new NhanVien('1', "Do Van Thao", 'abc@gmail.com', 'truongthikhanhngan', 'ngayLamViec', 'chucVu');
congTy.ThemNhanVien(nhanVienMoi);
nhanVienMoi = new NhanVien('2', "Truong Thi Khanh Ngan", 'abc@gmail.com', 'truongthikhanhngan', 'ngayLamViec', 'chucVu');
congTy.ThemNhanVien(nhanVienMoi);

// Ham goi modal popup: Them Nhan Vien or Sua thong tin nhan vien
GoiModal = (modal_title, readonly = false, type = 1) => {
  // type = 1: them nhan vien, type = 2: sua thong tin
  getEle('header-title').innerHTML = modal_title;
  getEle('msnv').readonly = readonly;

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

// Reset form
XoaForm = () => {
  let elements = document.getElementsByTagName('input');
  for (let element of elements) {
    element.value = '';
  }
  document.getElementById('chucVu').selectedIndex = 0;
}

let trangHienThi = 1;
// HienThiDanhSach = (dsnv) => {
//   let tbody = getEle("tableDanhSach");
//   let htmls = '';
//   let soNV = dsnv.length;
//   for (let i = 0; i < soNV; i++) {
//     htmls += `<tr>
//       <th scope="row">${dsnv[i].maNV}</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>
//         <button class="btn btn-warning" id="sua">Sửa</button>
//         <button class="btn btn-danger" id="xoa">Xóa</button>
//       </td>
//     </tr>`
//   }
//   tbody.innerHTML = htmls;
// }
// HienThiDanhSach(congTy.DanhSachNhanVien);

function HienThiDanhSach(dsnv) {
  var tbody = document.querySelector('table tbody');
  // let tbody = getEle("tableDanhSach");
  var htmls = '';
  let soNV = dsnv.length;
  for (let i = 0; i < soNV; i++) {
    htmls += `<tr>
          <th scope="row">${dsnv[i].hoTen}</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>
            <button class="btn btn-warning" id="sua">Sửa</button>
            <button class="btn btn-danger" id="xoa">Xóa</button>
          </td>
        </tr>`
  }
  tbody.innerHTML = htmls;
}
HienThiDanhSach(congTy.DanhSachNhanVien);