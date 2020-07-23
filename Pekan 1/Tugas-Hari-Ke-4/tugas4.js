//Soal 1
console.log("----------- SOAL 1 -----------#");

console.log("LOOPING PERTAMA");
var result = 2;
while (result <= 20) {
    console.log(result + " - I love coding");
    result += 2;
}

console.log("LOOPING KEDUA");
var result = 20;
while (result > 0) {
    console.log(result + " - I love coding");
    result -= 2;
}





//Soal 2
console.log("----------- SOAL 2 -----------#");

for(i = 1; i <= 20; i++){
    if((i % 3 == 0) && (i % 2 !=0)){
        console.log(i +" I Love Coding");
    } else if (i % 2 == 0) {
        console.log(i + " Berkualitas");
    } else {
        console.log(i + " Santai");
    }
}





//Soal 3
console.log("----------- SOAL 3 -----------#");

var hasil = "";
for(i = 1; i <= 7 ; i++){
    console.log(hasil += '#');
}





//Soal 4
console.log("----------- SOAL 4 -----------#");

var kalimat= "saya sangat senang belajar javascript";
var splitKalimat = kalimat.split(' ');
console.log(splitKalimat);





//soal 5
console.log("----------- SOAL 5 -----------#");

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var sortBuah = daftarBuah.sort();
for (i = 0; i < sortBuah.length; i++ ){
    console.log(sortBuah[i]);
}

