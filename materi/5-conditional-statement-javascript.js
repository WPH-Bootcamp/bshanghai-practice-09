"use strict";

// CONDITIONAL STATEMENT :
// 1. if STATEMENT : Hanya ada 1 kondisi paramater saja yang benar

let umur = 17;

if (umur >= 17) {
  console.log("Dapat membuat sim");
}

// 2. if/else STATEMENT : Hanya ada 1 kondisi paramter dengan terdapat kondisi lain sebagai alternatif
let jajan = 3000;

if (jajan >= 2000) {
  console.log("Bisa beli gorengan");
} else {
  console.log("Bisa beli aqua gelas");
}

// 3. if/else if/else STATEMENT : Ada banyak kondisi parameter dengan terdapat kondisi lain sebagai alternatif
let nilai = 69;

if (nilai >= 90) {
  console.log("Grade : A");
} else if (nilai >= 80) {
  console.log("Grade : B");
} else if (nilai >= 70) {
  console.log("Grade : C");
} else {
  console.log("Anda tidak mendapatkan Grade");
}

// 4. Operator ternary (?)
/*
    Struktur Operator Ternary:
    kondisi ? ekspresi_benar : ekspresi_salah
*/

const age = 2;
const message = age >= 18 ? "Your are an adult." : "You are still young.";
console.log(message);

// 5. Operator Logika OR (||) : Jika salah satu saja benar, maka semua kondisi menjadi benar

let sudahMakan = true;
let sudahBelajar = true;

if (sudahMakan || sudahBelajar) {
  console.log("Hangout with friends");
} else {
  console.log("Kerjain dulu belajar atau makannya");
}

// 6. Operator Logika AND (&&) : Kedua kondisi harus benar (true), bari semua kondisi menjadi benar
let sudahMakan2 = false;
let sudahBelajar2 = false;

if (sudahMakan2 && sudahBelajar2) {
  console.log("Hangout with friends");
} else {
  console.log("Kerjain dulu belajar dan makannya");
}

// MINI PROJECT : LOGIN SYSTEM
let email = "dicky@example.com";
let password = "1234";
let recaptcha = "BogorUdahKemarau";

if (email == "dicky@example.com" && password == "1234") {
  if (recaptcha == "BogorUdahKemarau") {
    console.log("Yeay, anda berhasil login");
    console.log("Email anda :", email);
  } else {
    console.log("Masukkin captcha nya dlu mbak/mas");
  }
} else {
  console.log("Email or Password is incorrect");
}

if (
  (email == "dicky@example.com" && password == "1234") ||
  recaptcha == "BogorUdahKemarau"
) {
  console.log("halo");
}
