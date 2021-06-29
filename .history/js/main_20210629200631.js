var congTy = new CongTy();
var nhanVienMoi = new NhanVien('1', "Do Van Thao", 'abc@gmail.com', 'truongthikhanhngan', 'ngayLamViec', 'chucVu');
congTy.ThemNhanVien(nhanVienMoi);
nhanVienMoi = new NhanVien('2', "Truong Thi Khanh Ngan", 'abc@gmail.com', 'truongthikhanhngan', 'ngayLamViec', 'chucVu');
congTy.ThemNhanVien(nhanVienMoi);

// Ham goi modal popup: Them Nhan Vien or Sua thong tin nhan vien
GoiModal = (modal_title, readonly, type) => {// type = 1: them nhan vien, type = 2: sua thong tin
  document.getElementById('header-title').innerHTML = modal_title;
  document.getElementById('msnv').readonly = readonly;

  switch (type) {
    case 1: //Them nhanVien
      document.getElementById("btnThemNhanVien").style.display = "block";
      document.getElementById("btnCapNhat").style.display = "none";
      document.getElementById("btnDong").style.display = "block";
      break;
    case 2:

      document.getElementById("btnThemNhanVien").style.display = "block";
      document.getElementById("btnCapNhat").style.display = "none";
      document.getElementById("btnDong").style.display = "block";
  }
}