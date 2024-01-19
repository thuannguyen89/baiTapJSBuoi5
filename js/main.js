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
function tinhKQTuyenSinh() {
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
// Goi ham tinhKQTuyenSinh khi click button 'btnTinhKQTuyenSinh'
document.getElementById('btnTinhKQTuyenSinh').onclick = tinhKQTuyenSinh;

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