/**
 * Bai 1 : Quan Ly Tuyen Sinh
 * 
 * Inputs:
 * diemChuan, diemMon1, diemMon2, diemMon3, khuVucUuTien, doiTuongDuThi 
 * 
 * Process:
 * Function:
 *   B1: Lấy giá trị từ form
 *   B2: kiểm tra diemChuan, diem 3 mon #0
 *   B3: Tính điểm từ khuVucUuTien
 *   B4: Tính điểm từ doiTuongDuThi
 *   B5: Lập công thức tính ketQua và tongDiem
 * 
 *   B6: thông báo kết quả
 * 
 * Outputs:
 * ketQua, tongDiem
 */
function mainTinhKQTuyenSinh() {
    let tongDiem = 0;
    let diemChuan = document.getElementById('diemChuan').value;
    let diemMon1 = document.getElementById('diemMon1').value;
    let diemMon2 = document.getElementById('diemMon2').value;
    let diemMon3 = document.getElementById('diemMon3').value;
    let khuVucUuTien = document.getElementById('khuVucUuTien').value;
    let doiTuongDuThi = document.getElementById('doiTuongDuThi').value;

    // Kiem tra diem nhap vao 
    if (!kiemTraDiem(diemChuan) || !kiemTraDiem(diemMon1) || !kiemTraDiem(diemMon2) || !kiemTraDiem(diemMon3)) {
        alert("Vui lòng kiểm tra lại điểm nhập");
    } else {
        // Tinh tổng điểm
        tongDiem = Number(diemMon1) + Number(diemMon2) + Number(diemMon3) + Number(khuVucUuTien) + Number(doiTuongDuThi);

        let ketQua = '';
        if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
            ketQua = 'Rớt';
        } else {
            if (tongDiem < diemChuan) {
                ketQua = 'Rớt';
            } else {
                ketQua = 'Đậu';
            }
        }

        // Su dung ${} cua ES6 de binding du lieu
        let txtResult = document.getElementById('txtResultTinhKQTuyenSinh');
        txtResult.innerHTML = `<br /> Kết quả : ${ketQua} 
            <br /> Tổng điểm : ${tongDiem}
        `;
    }
}
// Goi ham mainTinhKQTuyenSinh khi click button 'btnTinhKQTuyenSinh'
document.getElementById('btnTinhKQTuyenSinh').onclick = mainTinhKQTuyenSinh;

/**
 * Kiem tra diem nhap vao
 *
 * @param float diem 
 * @returns bool
 */
function kiemTraDiem(diem) {
    if (diem === "" || diem < 0) {
        return false;
    }

    return true;
}





/**
 * Bai 2 : Tinh Tien Dien
 * 
 * Inputs:
 * tenKH, soKw
 * 
 * Process:
 * Function:
 *   B1: Lấy giá trị từ form
 *   B2: Kiểm tra so Kw
 *   B3: Lập công thức tính tienDien
 * 
 *   B6: thông báo kết quả
 * 
 * Outputs:
 * tienDien
 */
// Bảng Kw điện
const KW_50_DAU = 500;
const KW_50_KE = 650;
const KW_100_KE = 850;
const KW_150_KE = 1100;
const KW_CON_LAI = 1300;

function mainTinhTienDien() {
    let tienDien = 0;
    let tenKH = document.getElementById('tenKH').value;
    let soKw = document.getElementById('soKw').value;

    // Kiem tra ten KH
    if (tenKH === '') {
        alert("Vui lòng nhập tên KH");
    } else if (soKw == '' || soKw < 0) {
        alert("Vui lòng nhập số Kw");
    } else {
        // Tinh tiền điện
        tienDien =  tinhTienDienTheoKW(soKw);

        // Su dung ${} cua ES6 de binding du lieu
        let txtResult = document.getElementById('txtResultTinhTienDien');
        txtResult.innerHTML = `<br /> Tên KH : ${tenKH} 
            <br /> Số tiền điện : ${tienDien.toLocaleString('vi-VN', {style:"currency", currency:"VND"})}
        `;
    }
}
// Goi ham mainTinhTienDien khi click button 'btnTinhTienDien'
document.getElementById('btnTinhTienDien').onclick = mainTinhTienDien;

// Ham tinh tien theo KW
function tinhTienDienTheoKW(soKw) {
    let tongTien = 0;
    if (0 < soKw && soKw <= 50) {
        console.log("Bậc 1");
        tongTien = soKw * KW_50_DAU;
    } else if (50 < soKw && soKw <= 100) {
        console.log("Bậc 2");
        tongTien = 50 * KW_50_DAU + (soKw - 50) * KW_50_KE;
    } else if (100 < soKw && soKw <= 200) {
        console.log("Bậc 3");
        tongTien = (50 * KW_50_DAU) + (50 * KW_50_KE) + (soKw - 100) * KW_100_KE;
    } else if (200 < soKw && soKw <= 350 ) {
        console.log("Bậc 4");
        tongTien = (50 * KW_50_DAU) + (50 * KW_50_KE) + (100 * KW_100_KE) + (soKw - 200) * KW_150_KE;
    } else if (soKw > 350 ) {
        console.log("Bậc 5");
        tongTien = (50 * KW_50_DAU) + (50 * KW_50_KE) + (100 * KW_100_KE) + (150 * KW_150_KE) + (soKw - 350) * KW_CON_LAI;
    } else {
        alert("Hãy nhập lại Kw");
    }

    return tongTien;
}