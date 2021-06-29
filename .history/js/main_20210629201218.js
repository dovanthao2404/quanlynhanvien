function getEle(ele) {
  return document.getElementById(ele);
}

var congTy = new CongTy();
var nhanVienMoi = new NhanVien('1', "Do Van Thao", 'abc@gmail.com', 'truongthikhanhngan', 'ngayLamViec', 'chucVu');
congTy.ThemNhanVien(nhanVienMoi);
nhanVienMoi = new NhanVien('2', "Truong Thi Khanh Ngan", 'abc@gmail.com', 'truongthikhanhngan', 'ngayLamViec', 'chucVu');
congTy.ThemNhanVien(nhanVienMoi);

// Ham goi modal popup: Them Nhan Vien or Sua thong tin nhan vien
GoiModal = (modal_title, readonly, type) => {// type = 1: them nhan vien, type = 2: sua thong tin
  getEle('header-title').innerHTML = modal_title;
  getEle('msnv').readonly = readonly;

  switch (type) {
    case 1: //Them nhanVien
      getEle("btnThemNhanVien").style.display = "block";
      getEle("btnCapNhat").style.display = "none";
      getEle("btnDong").style.display = "block";
      break;

    case 2:
      getEle("btnCapNhat").style.display = "block";
      getEle("btnThemNhanVien").style.display = "none";
      getEle("btnDong").style.display = "block";
      break;
  }
}

XoaForm = () => {
  let elements = document.getElementsByTagName('input');
  for (let element of elements) {
    element.value = '';
  }
}