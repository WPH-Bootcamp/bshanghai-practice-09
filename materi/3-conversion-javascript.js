// Type Conversion :

// -. Explicit Conversion :
// 1. Number()
// 2. String()
// 3. Boolean()
// 4. Array()
// 5. Object()

let angka = "123";
let angkaBener = Number(angka);
console.log(typeof angka);
console.log(typeof angkaBener);

let teks = true
let teksBener = String(teks)
console.log(typeof teks)
console.log(typeof teksBener)

// -. Implicit Conversion :
let result = "5" + 2
console.log(typeof result)

let result2 = "1" + 1
console.log(result2)

let result3 = "5" * 2
console.log(result3)

let result4 = true + 1
console.log(result4)

console.log("5" == 5) // (==) Hanya membandingkan nilai tanpa melihat tipe data
console.log("5" === 5) // (===) Membandingkan nilai dan melihat tipe data