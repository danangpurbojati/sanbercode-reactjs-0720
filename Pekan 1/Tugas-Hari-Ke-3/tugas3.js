//Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

//merubah huruf pertama "kataKedua" menjadi huruf kapital
//ambil kata pertama -> rubah menjadi huruf besar -> sambung dengan kata selanjutnya
var hasilKataKedua = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1);

var jawabanSoal1 = kataPertama + ' ' + hasilKataKedua + ' ' + kataKetiga + ' ' + kataKeempat.toUpperCase();
console.log("Jawaban Soal 1 = " + jawabanSoal1);



//Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var jawabanSoal2 = Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat);
console.log("Jawaban Soal 2 = " + jawabanSoal2);




//Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24); // do your own! 
var kataKelima = kalimat.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);




//Soal 4
var nilai;
// nilai = 79; 

if(!(nilai > 100 || nilai < 0)){
    if (nilai >= 80){
        console.log("A");
    } else if (nilai >= 70){
        console.log("B");
    } else if (nilai >= 60){
        console.log("C");
    } else if (nilai >= 50){
        console.log("D");
    } else {
        console.log("E");
    }
} else {
    console.log("diluar jangkauan");
}




//Soal 5
var tanggal = 28;
var bulan = 7;
var tahun = 1993;

switch (bulan) {
    case 1:
        var hasil = tanggal + ' ' + 'Januari' + ' ' + tahun;
        console.log(hasil);
        break;
    case 2:
        var hasil = tanggal + ' ' + 'Februari' + ' ' + tahun;
        console.log(hasil);
        break;
    case 3:
        var hasil = tanggal + ' ' + 'Maret' + ' ' + tahun;
        console.log(hasil);
        break;
    case 4:
        var hasil = tanggal + ' ' + 'April' + ' ' + tahun;
        console.log(hasil);
        break;
    case 5:
        var hasil = tanggal + ' ' + 'Mei' + ' ' + tahun;
        console.log(hasil);
        break;
    case 6:
        var hasil = tanggal + ' ' + 'Juni' + ' ' + tahun;
        console.log(hasil);
        break;
    case 7:
        var hasil = tanggal + ' ' + 'Juli' + ' ' + tahun;
        console.log(hasil);
        break;
    case 8:
        var hasil = tanggal + ' ' + 'Agustus' + ' ' + tahun;
        console.log(hasil);
        break;
    case 9:
        var hasil = tanggal + ' ' + 'September' + ' ' + tahun;
        console.log(hasil);
        break;           
    case 10:
        var hasil = tanggal + ' ' + 'Oktober' + ' ' + tahun;
        console.log(hasil);
        break;
    case 11:
        var hasil = tanggal + ' ' + 'November' + ' ' + tahun;
        console.log(hasil);
        break;
    case 12:
        var hasil = tanggal + ' ' + 'Desember' + ' ' + tahun;
        console.log(hasil);
        break;   
    default:
        break;
}

