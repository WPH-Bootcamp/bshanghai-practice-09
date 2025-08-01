// -. Unary, Binary, dan Operand

// UNARY : Operator yang hanya membutuhkan 1 operand
// x = 5;
// x = -x;
// console.log(x);

// BINARY : Operator yang membutuhkan 2 atau lebih operand
// x = 1;
// y = 2;
// z = x + y;
// console.log(z);

// OPERAND : Nilai yang dioperasikan oleh operator
let x = 5; // 5 adalah operand
let y = 3;
let z = x - y; // x dan y adalah operand
// console.log(z);

// -. Operator Aritmatika : Operator aritmatika digunakan untuk melakukan operasi matematika pada angka.
// Macam-macam Operator Aritmatika :
/*
    1. Penjumlahan (+)
    2. Pengurangan (-)
    3. Perkalian (*)
    4. Pembagian (/)
    5. Perpangkatan (**)
    6. Modulus / Sisa Bagi (%)
*/

// -. Operator Assignment (Penugasan) : Operator assignment digunakan untuk menetapkan nilai ke variabel.
// Macam-macam Operator Assignment (Penugasan):
/*
    1. Penugasan (=)
    2. Penugasan dan Penjumlahan (+=)
    3. Penugasan dan Pengurangan (-=)
    4. Penugasan dan Perkalian (*=)
    5. Penugasan dan Pembagian (/=)
    6. Penugasan dan Perpangkatan (**=)
    7, Penugasan dan Sisa Bagi (%=)

*/

// -. Penugasan (=)
let angka = 10;
console.log(angka);
// -. Penugasan dan Penjumlahan (+=)
angka += 5;
console.log(angka);
// -. Penugasan dan Pengurangan (-=)
angka -= 2;
console.log(angka);
// -. Penugasan dan Perkalian (*=)
angka *= 3;
console.log(angka);
// -. Penugasan dan Pembagian (/=)
angka /= 2;
console.log(angka);
// -. Penugasan dan Perpangkatan (**=)
angka **= 2;
console.log(angka);
// -. Penugasan dan Sisa Bagi (%=)
angka %= 100;
console.log(angka);

// -. Operator Increment (++) dan Decrement(--)
/*
    1. Postfix Increment : x++
    2. Prefix Increment : ++x
    3. Postfix Decrement : x--
    2. Prefix Decrement : --x
*/

// -. Postfix Increment
let counter = 5;
console.log(counter++);
console.log(counter);

// -. Prefix Increment
let counter2 = 5;
console.log(++counter2);

// -. Postfix Decrement
let counter3 = 5;
console.log(counter3--);
console.log(counter3);

// -. Prefix Increment
let counter4 = 5;
console.log(--counter4);

// Conversi ke number dengan (+)
let str = "123";
let numbers = +str;
console.log(typeof numbers);
