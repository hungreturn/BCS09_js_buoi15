// bài 1 kiểm tra điểm chuẩn sinh viên
function kiemTra(){
    var diemChuan = document.getElementById('diemChuan').value*1;
    var diemToan = document.getElementById('diemToan').value*1;
    var diemLy = document.getElementById('diemLy').value*1;
    var diemHoa = document.getElementById('diemHoa').value*1;

    var valueKhuVuc = document.getElementById('khuVuc').value;
    var khuVuc = 0;
    switch (valueKhuVuc){
        case 'X' : khuVuc = 0;
        break;
        case 'A' : khuVuc = 2;
        break;
        case 'B' : khuVuc = 1;
        break;
        case 'C' : khuVuc = 0.5;
        break;
    }
    var doiTuong = document.getElementById('doiTuong').value*1;
    console.log(diemChuan,diemHoa,diemToan,diemLy,khuVuc,doiTuong);

    var diemThi = (diemHoa + diemToan + diemLy)/3 + khuVuc + doiTuong;

    if(diemThi >= diemChuan){
        document.querySelector('.ketqua').innerHTML = `Bạn đã đậu. Tổng điểm:${diemThi}`
    }
    else{
        document.querySelector('.ketqua').innerHTML = `Bạn đã rớt. Tổng điểm:${diemThi}`
    }

}



// bài 2
function tinhTienDien(){
    var hoTen = document.getElementById('hoTen').value;
    var soKw = document.getElementById('soKw').value*1;
    var tienDien = 0;
    if(soKw <= 50){
        tienDien = soKw*500;
    }
    else if(soKw <= 100){
        tienDien = 50*500 + (soKw-50)*650;
    }
    else if(soKw <= 200){
        tienDien = 50*500 + 50*650 +(soKw-100)*850;
    }
    else if(soKw <= 350){
        tienDien = 50*500 + 50*650 +100*850 + (soKw-200)*1100;
    }
    else{
        tienDien = 50*500 + 50*650 +100*850 + 150*1100 + (soKw - 350)*1300;
    }
    document.querySelector('.soTienDien').innerHTML = `Tiền điện tháng này của ${hoTen} là ${tienDien}`;
}

//  bài 3
function dongThue(){
    var hoTen_3 = document.getElementById('txtTen').value;
    var txtThuNhap = document.getElementById('txtThuNhap').value*1;
    var txtPhuThuoc = document.getElementById('txtPhuThuoc').value*1;   
    var thuNhapChiuThue = txtThuNhap - 4 - 1.6*txtPhuThuoc;
    var thue = 0;
    if(thuNhapChiuThue <= 0){
        thue = 0;
    }
    else if(thuNhapChiuThue <= 60){
        thue =  thuNhapChiuThue * 5 / 100;
    }   
    else if(thuNhapChiuThue <= 120){
        thue =  thuNhapChiuThue * 10 / 100;
    }
    else if(thuNhapChiuThue <= 210){
        thue =  thuNhapChiuThue * 15 / 100;
        
    }
    else if(thuNhapChiuThue <= 384){
        
        thue =  thuNhapChiuThue * 20 / 100;
    }
    else if(thuNhapChiuThue <= 624){
        
        thue =  thuNhapChiuThue * 25 / 100;
    }
    else if(thuNhapChiuThue <= 960){
        thue =  thuNhapChiuThue * 30 / 100;
    }
    else{
        thue =  thuNhapChiuThue * 35 / 100;
    }
    document.querySelector('.dongthue').innerHTML = `Số tiền phải đóng thuế của ${hoTen_3} là ${thue}`; 
}


function loaiKhachHang(){
    var loaiKH = document.getElementById('loaiKH').value;
    if(loaiKH == 'doanhNghiep'){
    document.getElementById('soKetNoi').classList.remove("d-none");
    }
    else{
        document.getElementById('soKetNoi').classList.add("d-none");
    }
}

function bai4(){
    var loaiKH = document.getElementById('loaiKH').value;
    var maKhachHang = document.getElementById('maKhachHang').value*1;
    var soKenhCaoCap = document.getElementById('soKenhCaoCap').value*1;
    var soKetNoi = document.getElementById('soKetNoi').value*1;
    var sotienbai4 = 0;
    if(loaiKH == 'doanhNghiep'){
        var phiDv = 0;
        if(soKetNoi>= 10){
            phiDv = 75 +(soKetNoi-10)*5;
        }
        else{
            phiDv = 75;
        }
        sotienbai4 = phiDv + 15 + 50*soKenhCaoCap;
    }
    else{
        sotienbai4 = 4.5+20.5+7.5*soKenhCaoCap;
    }
    document.querySelector('.baicap').innerHTML = 
    ` 
    Mã khách hàng : ${maKhachHang}
    Loại khách hàng : ${loaiKH}
    Số tiền phải nộp là : ${sotienbai4}
    `;

}

