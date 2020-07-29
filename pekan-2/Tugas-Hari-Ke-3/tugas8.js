//Soal 1
console.log("----- Soal 1 -----");
const phi = 3.14;
//luas lingkaran
const luasLingkaran = r =>  phi*r*r; //implisit return (hanya 1 parameter dan memiliki tugas hanya me-return saja)

//keliling lingkaran
const kelilingLingkaran = r => 2*phi*r;

//tes data
console.log(`Luas lingkaran dengan jari-jari 10 adalah ${luasLingkaran(10)}`);
console.log(`Luas lingkaran dengan jari-jari 20 adalah ${luasLingkaran(10)}`);

console.log(`keliling lingkaran dengan jari-jari 10 adalah ${kelilingLingkaran(10)}`);
console.log(`keliling lingkaran dengan jari-jari 20 adalah ${kelilingLingkaran(10)}`);





//Soal 2
console.log("----- Soal 2 -----");
let kalimat = "";

const tambahKalimat = (string1, string2, string3, string4, string5) => `${string1} ${string2} ${string3} ${string4} ${string5}`;
// const tambahKalimat = (string1, string2, string3, string4, string5) => {return `${string1} ${string2} ${string3} ${string4} ${string5}`;} //cara yang lebih panjang

kalimat = tambahKalimat("saya", "adalah", "seorang", "frontend", "developer");
console.log(kalimat);




//Soal 3
console.log("----- Soal 3 -----");

class Book{
    constructor(name, totalPage, price){
        this.name = name;
        this.totalPage = totalPage;
        this.price = price;
    }
}

class Komik extends Book{
    constructor(name, totalPage, price, isColorful = true){  
        super(name, totalPage, price);      
        this.isColorful = isColorful;
    }
}

let komik = new Komik("naruto", 123, 50000, false);
console.log(komik.name);
console.log(komik.totalPage);
console.log(komik.price);
console.log(komik.isColorful);