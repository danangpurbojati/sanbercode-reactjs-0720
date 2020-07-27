//Soal 1
console.log("---------- SOAL 1 ----------");
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var objectDaftarPeserta = {
                            nama: "Asep",
                            jenis_kelamin: "laki-laki",
                            hobi: "baca buku",
                            tahun_lahir: 1992
                        };
console.log(objectDaftarPeserta.nama);





//Soal 2
console.log("---------- SOAL 2 ----------");
/*
1.nama: strawberry
  warna: merah
  ada bijinya: tidak
  harga: 9000 
2.nama: jeruk
  warna: oranye
  ada bijinya: ada
  harga: 8000
3.nama: Semangka
  warna: Hijau & Merah
  ada bijinya: ada
  harga: 10000
4.nama: Pisang
  warna: Kuning
  ada bijinya: tidak
  harga: 5000
*/
var buah = [
    {
        nama: "strawberry",
        warna: "merah",
        ada_bijinya: "tidak",
        harga: 9000
    },
    {
        nama: "jeruk",
        warna: "oranye",
        ada_bijinya: "ada",
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        ada_bijinya: "ada",
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        ada_bijinya: "tidak",
        harga: 5000
    }
];
console.log(buah[0]);





//Soal 3
console.log("---------- SOAL 3 ----------");

var dataFilm = []; //variabel global, dapat diakses di dalam fungsi

function tambahFilm(nama, durasi, genre, tahun){ 
   var film = {}; // hanya bisa diakses di dalam fungsi

   film.nama = nama; //string nama film
   film.durasi = durasi; //durasi dalam menit
   film.genre = genre; //string genre
   film.tahun = tahun; // tahun film

   return dataFilm.push(film); //karena "dataFilm" bersifat global, maka bisa di push oleh objek di dalam fungsi
}

//tes data
tambahFilm("Nyi Blorong", 120, "horror", 1982);
tambahFilm("Ratu Pantai", 138, "horror", 1980);
tambahFilm("Maju Kena Mundur Kena", 138, "comedy", 1983);

console.log(dataFilm);





//Soal 4
console.log("---------- SOAL 4 ----------");
//Release 0
console.log("---------- release 0 ----------");
class Animal{
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}

var sheep = new Animal("shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

//Release 1
console.log("---------- release 1 ----------");
class Ape extends Animal{
    constructor(name){
        super(name);
        this.legs = 4
    }

    yell(){
        console.log("Auoooo");
    }
}

class Frog extends Animal{
    constructor(name){
        super(name);
        this.cold_blooded = true;
    }

    jump(){
        console.log("hop hop");
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 





//Soal 4 clock
console.log("---------- SOAL 4 clock ----------");
class Clock{
    constructor({ template }){
        var timer;
  
        function render() {
        var date = new Date();
    
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        var output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
    
        console.log(output);
        }
  
        this.stop = function() {
        clearInterval(timer);
        };
  
        this.start = function() {
        render();
        timer = setInterval(render, 1000);
        };
    }
}
  
var clock = new Clock({template: 'h:m:s'});
clock.start(); 
