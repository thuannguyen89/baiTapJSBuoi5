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
        tienDien = tinhTienDienTheoKW(soKw);

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
    } else if (200 < soKw && soKw <= 350) {
        console.log("Bậc 4");
        tongTien = (50 * KW_50_DAU) + (50 * KW_50_KE) + (100 * KW_100_KE) + (soKw - 200) * KW_150_KE;
    } else if (soKw > 350) {
        console.log("Bậc 5");
        tongTien = (50 * KW_50_DAU) + (50 * KW_50_KE) + (100 * KW_100_KE) + (150 * KW_150_KE) + (soKw - 350) * KW_CON_LAI;
    } else {
        alert("Hãy nhập lại Kw");
    }

    return tongTien;
}





/**
 * Bai 3 : Tinh Thue Thu Nhap Ca Nhan
 * 
 * Inputs:
 * tenKH, tongThuNhapNam, soNguoiPhuThuoc
 * 
 * Process:
 * Function:
 *   B1: Lấy giá trị từ form
 *   B2: Kiểm tra tenKH không đươc phép rỗng
 *   B3: Lập công thức tính thuNhapChiuThue
 *     + thuNhapChiuThue = tongThuNhapNam - 4tr - (soNguoiPhuThuoc * 1.6tr)
 * 
 *   B4: Lập công thức tính thuế thu nhập cá nhân theo mức thuế suất quy định
 *   B5: thông báo kết quả
 * 
 * Outputs:
 * tongTienThue
 */

// Số tiền giảm trừ cá nhân 4tr
const SO_TIEN_GIAM_TRU_CA_NHAN = 4;

// Số tiền giảm trừ gia cảnh 1.6/nguoi
const SO_TIEN_GIAM_TRU_GIA_CANH = 1.6;

// Bảng Thuế suất theo mức thu nhập
const THUE_SUAT_0_60_TRIEU = 0.05;
const THUE_SUAT_TREN_60_120_TRIEU = 0.1;
const THUE_SUAT_TREN_120_210_TRIEU = 0.15;
const THUE_SUAT_TRÊN_210_384_TRIEU = 0.2;
const THUE_SUAT_TRÊN_384_624_TRIEU = 0.25;
const THUE_SUAT_TRÊN_624_960_TRIEU = 0.3;
const THUE_SUAT_TRÊN_960_TRIEU = 0.35;

function mainTinhThueThuNhap() {
    let tongTienThue = thuNhapChiuThue = 0;
    let tenKH = document.getElementById('hoTenKH').value;
    let tongThuNhapNam = document.getElementById('tongThuNhapNam').value;
    let soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value;

    // Kiem tra ten KH
    if (tenKH === '') {
        alert("Vui lòng nhập tên KH");
    } else if (tongThuNhapNam == '' || tongThuNhapNam < 0) {
        alert("Vui lòng nhập tổng thu nhập năm");
    } else if (soNguoiPhuThuoc == '' || soNguoiPhuThuoc < 0) {
        alert("Vui lòng nhập số người phụ thuộc");
    } else {
        // Tinh thu nhập chịu thuế
        thuNhapChiuThue = tinhThuNhapChiuThue(tongThuNhapNam, soNguoiPhuThuoc);

        // Tính tổng tiền thuế phải trả
        tongTienThue = tinhTongTienThueThuNhap(thuNhapChiuThue);

        if (tongTienThue > 0) {
            tongTienThue = Math.floor(tongTienThue * 1000000);
        }

        // Su dung ${} cua ES6 de binding du lieu
        let txtResult = document.getElementById('txtResultTinhThueThuNhapCaNhan');
        txtResult.innerHTML = `<br /> Tên KH : ${tenKH} 
            <br /> Số tiền thuế thu nhập cá nhân phải trả : ${tongTienThue.toLocaleString('vi-VN', {style:"currency", currency:"VND"})}
        `;
    }
}
// Goi ham mainTinhThueThuNhap khi click button 'btnTinhThueThuNhapCaNhan'
document.getElementById('btnTinhThueThuNhapCaNhan').onclick = mainTinhThueThuNhap;

// Ham tinh thu nhap chiu thue
function tinhThuNhapChiuThue(tongThuNhapNam, soNguoiPhuThuoc) {
    let thuNhapChiuThue = tongThuNhapNam - SO_TIEN_GIAM_TRU_CA_NHAN - (soNguoiPhuThuoc * SO_TIEN_GIAM_TRU_GIA_CANH);

    if (thuNhapChiuThue < 0) {
        return 0;
    }

    return thuNhapChiuThue;
}

// Ham tinh tong tien thue phai trả
function tinhTongTienThueThuNhap(thuNhapChiuThue) {
    if (0 < thuNhapChiuThue && thuNhapChiuThue <= 60) {
        console.log('Bậc 1');
        return thuNhapChiuThue * THUE_SUAT_0_60_TRIEU;
    } else if (60 < thuNhapChiuThue && thuNhapChiuThue <= 120) {
        console.log('Bậc 2');
        return (60 * THUE_SUAT_0_60_TRIEU) + (thuNhapChiuThue - 60) * THUE_SUAT_TREN_60_120_TRIEU;
    } else if (120 < thuNhapChiuThue && thuNhapChiuThue <= 210) {
        console.log('Bậc 3');
        return (60 * THUE_SUAT_0_60_TRIEU) + ((120 - 60) * THUE_SUAT_TREN_60_120_TRIEU) + (thuNhapChiuThue - 120) * THUE_SUAT_TREN_120_210_TRIEU;
    } else if (210 < thuNhapChiuThue && thuNhapChiuThue <= 384) {
        console.log('Bậc 4');
        return (60 * THUE_SUAT_0_60_TRIEU) + ((120 - 60) * THUE_SUAT_TREN_60_120_TRIEU) + ((210 - 120) * THUE_SUAT_TREN_120_210_TRIEU) + (thuNhapChiuThue - 210) * THUE_SUAT_TRÊN_210_384_TRIEU;
    } else if (384 < thuNhapChiuThue && thuNhapChiuThue <= 624) {
        console.log('Bậc 5');
        return (60 * THUE_SUAT_0_60_TRIEU) + ((120 - 60) * THUE_SUAT_TREN_60_120_TRIEU) + ((210 - 120) * THUE_SUAT_TREN_120_210_TRIEU) + ((384 - 210) * THUE_SUAT_TRÊN_210_384_TRIEU) + (thuNhapChiuThue - 384) * THUE_SUAT_TRÊN_384_624_TRIEU;
    } else if (624 < thuNhapChiuThue && thuNhapChiuThue <= 960) {
        console.log('Bậc 6');
        return (60 * THUE_SUAT_0_60_TRIEU) + ((120 - 60) * THUE_SUAT_TREN_60_120_TRIEU) + ((210 - 120) * THUE_SUAT_TREN_120_210_TRIEU) + ((384 - 210) * THUE_SUAT_TRÊN_210_384_TRIEU) + ((624 - 384) * THUE_SUAT_TRÊN_384_624_TRIEU) + (thuNhapChiuThue - 624) * THUE_SUAT_TRÊN_624_960_TRIEU;
    } else if (960 < thuNhapChiuThue) {
        console.log('Bậc 7');
        return (60 * THUE_SUAT_0_60_TRIEU) + ((120 - 60) * THUE_SUAT_TREN_60_120_TRIEU) + ((210 - 120) * THUE_SUAT_TREN_120_210_TRIEU) + ((384 - 210) * THUE_SUAT_TRÊN_210_384_TRIEU) + ((624 - 384) * THUE_SUAT_TRÊN_384_624_TRIEU) + ((960 - 624) * THUE_SUAT_TRÊN_624_960_TRIEU) + (thuNhapChiuThue - 960) * THUE_SUAT_TRÊN_624_960_TRIEU;
    } else {
        return 0;
    }
}








/**
 * Bai 4 : Tinh Tien Cap
 * 
 * Inputs:
 * maKH, loaiKH, soKetNoi, soKenhCaoCap
 * 
 * Process:
 * Function:
 *   B1: Lấy giá trị từ form
 *   B2: Kiểm tra loaiKH không đươc phép rỗng
 *     + Nếu loaiKH là doanh nghiệp thì hiển thị ô nhập soKetNoi
 *     + Ngược lại thì ẩn ô nhập soKetNoi
 *   B3: Lập công thức tính tongTienCap
 *     + tongTienCap = phiXuLyHoaDon + (phiDichVuCoBan * soKetNoi) + (phiThueKenhCaoCap * soKenhCaoCap)
 * 
 *   B4: thông báo kết quả
 * 
 * Outputs:
 * tongTienCap
 */


// Giá quy đổi 1 USD qua VND
const GIA_QUY_DOI_USD_VNĐ = 23500;

// Gia tri cua loai KH
const KHACH_HANG_NHA_DAN = '1';
const KHACH_HANG_DOANH_NGHIEP = '2';

// Bảng phí cước đơn vị $
const PHI_XU_LY_HOA_DON_NHA_DAN = 4.5;
const PHI_DICH_VU_CO_BAN_NHA_DAN = 20.5;
const PHI_KENH_CAO_CAP_NHA_DAN = 7.5;

const PHI_XU_LY_HOA_DON_DOANH_NGHIEP = 15;
const PHI_DICH_VU_CO_BAN_DOANH_NGHIEP = 7.5; // 75$ cho 10 kênh
const PHI_KENH_CAO_CAP_DOANH_NGHIEP = 50;
const PHI_MOI_KET_NOI_THEM_DOANH_NGHIEP = 5;


function mainTinhTienCap() {
    let tongTienCap = 0;
    let maKH = document.getElementById('maKH').value;
    let loaiKH = document.getElementById('loaiKH').value;
    let soKetNoi = document.getElementById('soKetNoi').value;
    let soKenhCaoCap = document.getElementById('soKenhCaoCap').value;

    // Kiem tra ma KH
    if (maKH === '') {
        alert("Vui lòng nhập ma KH");
    } else if (soKenhCaoCap < 1) {
        alert("Vui lòng nhập số kênh cao cấp");
    } else {
        // Tính tổng tiền thuế phải trả
        switch (loaiKH) {
            case KHACH_HANG_NHA_DAN:
                // Tinh tổng tièn cáp
                tongTienCap = tinhTongTienCap(
                    PHI_XU_LY_HOA_DON_NHA_DAN,
                    PHI_DICH_VU_CO_BAN_NHA_DAN,
                    PHI_KENH_CAO_CAP_NHA_DAN,
                    1,
                    soKenhCaoCap
                );
                break;

            case KHACH_HANG_DOANH_NGHIEP:
                // Tinh tổng tièn cáp
                tongTienCap = tinhTongTienCap(
                    PHI_XU_LY_HOA_DON_DOANH_NGHIEP,
                    PHI_DICH_VU_CO_BAN_DOANH_NGHIEP,
                    PHI_KENH_CAO_CAP_DOANH_NGHIEP,
                    (soKetNoi > 10) ? 10 : soKetNoi,
                    soKenhCaoCap
                );

                // Nếu số kết nối của doanh nghiệp > 10 số.
                if (soKetNoi > 10) {
                    tongTienCap += tinhPhiMoiKetNoiThem(soKetNoi - 10);
                }
                break;
        }

        // Quy dổi USD qua VND
        // if (tongTienCap > 0) {
        //     tongTienCap = Math.floor(tongTienCap * GIA_QUY_DOI_USD_VNĐ);
        // }

        // Su dung ${} cua ES6 de binding du lieu
        let txtResult = document.getElementById('txtResultTinhTienCap');
        txtResult.innerHTML = `<br /> Mã KH : ${maKH}
            <br /> Loại : ${loaiKH}
            <br /> Số kết nối : ${soKetNoi}
            <br /> Số kệnh cao cấp : ${soKenhCaoCap}
            <br /> Tổng tiền cáp phải trả : ${tongTienCap.toLocaleString('en-US', {style:"currency", currency:"USD"})}
        `;
        // <br /> Tổng tiền cáp phải trả : ${tongTienCap.toLocaleString('vi-VN', {style:"currency", currency:"VND"})}
    }
}
// Goi ham mainTinhTienCap khi click button 'btnTinhTienCap'
document.getElementById('btnTinhTienCap').onclick = mainTinhTienCap;

// phiXuLyHoaDon + (phiDichVuCoBan * soKetNoi) + (phiThueKenhCaoCap * soKenhCaoCap)
function tinhTongTienCap(phiXuLyHoaDon, phiDichVuCoBan, phiThueKenhCaoCap, soKetNoi, soKenhCaoCap) {
    return phiXuLyHoaDon + (phiDichVuCoBan * soKetNoi) + (phiThueKenhCaoCap * soKenhCaoCap);
}

// Tinh phí mỗi kết nối thêm
function tinhPhiMoiKetNoiThem(soKetNoiThem) {
    return soKetNoiThem * PHI_MOI_KET_NOI_THEM_DOANH_NGHIEP;
}