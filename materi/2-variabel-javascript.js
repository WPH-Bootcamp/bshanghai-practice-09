"use strict";
// VARIABEL => WADAH YANG MENYIMPAN SEBUAH DATA

/*
    Aturan membuat Variabel :
    deklarasi_variabel nama_variabel = nilai_variabel (tipe data)
*/

// DEKLARASI VARIABEL :
// 1. var : Tidak Block Scope dan bersifat Global Variabel
// 2. let : Block Scope dan nilai masih dapat berubah (mutable)
// 3. const : Block Scope namun nilai tetap (immutable)

let nama = "Dicky";
const umur = 30;

// -. Deklarasi : var

// 1. Tidak Block Scope
if (true) {
  var x = 5;
}
console.log(x, "Scope tidak berpengaruh");

// 2. Hoisting : Perilaku yang memungkin sebuah variabel dipanggil keatas (hoisted)
console.log(a);
var a = 10;
console.log(a);

// -. Deklarasi : let
// 1. Block Scope
// if (true) {
//   let alamat = "Jl ketapang";
//   console.log(alamat);
// }
// console.log(alamat);

// 2. Tidak ada hoisting yang bekerja
// console.log(name);
// let name = "syifa";
// console.log(name);

let age;
console.log(age);

// -. Deklarasi : const
const cangkir = "Air";
console.log(cangkir);

if (true) {
  const money = 1000;
  console.log(money);
}
// console.log(money);

// let VS const
let button = "dark"; // Kita boleh ubah nilai (redefined) dari let namun tidak boleh redeclare
button = "light";

console.log(button);

const car = "toyota"; // Totally tidak dapat di-redefined apalagi di-redeclare
// car = "mustang";

// Recommended : let dan const

let dompet = "uang";
let tas = dompet;

console.log(dompet);

const cuciGudang = 1;
let harga = 100 * cuciGudang;
let pembayaran = 200;
let kembalian = pembayaran - harga;
console.log(harga);
console.log(pembayaran);
console.log(kembalian);

const phi = Math.PI;
console.log(phi);

// Data Types :
/*
    Tipe Data Primitif :
    - number : int dan float
    - teks : string dan char
    - boolean : True/False
    - undefined : belum didefinisikan
    - null : kosong 

    Tipe Data Object : 
    - array
    - object
    - function
    - class
    - ...
*/

// Number
let angka1 = 10;
let angka2 = 102.5;
console.log(angka1);
console.log(angka2);

// Teks
let teks1 = 'Halo';
let teks2 = "Halo";
let teks3 = `Halo`;

console.log(teks1);
console.log(teks2);
console.log(teks3);

// Boolean
let bool1 = true
let bool2 = false
console.log(bool1)
console.log(bool2)

// Undefined
let belumAda = undefined
console.log(belumAda)

// Null
let kosong = null
console.log(kosong)

// Object
let obj = {
    key : "value"
}
console.log(obj)

// Array
let arr = ["Dicky", "Apple", 10, 20, true, false, {key : "value"}]
console.log(arr)

// Function
function halo(hai){
    return hai
}

console.log(halo("Halo"))

// Class
class mobil{
    constructor(){
        // Attribute
    }
    // Method
}

console.log(mobil)