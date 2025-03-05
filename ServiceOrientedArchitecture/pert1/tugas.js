
let nilai = 75

if (nilai >= 80 && nilai <=100) {
    console.log("Selamat, Anda mendapatkan nilai A")
}else if (nilai >= 70 && nilai < 80) {
    console.log("Selamat, Anda mendapatkan nilai B")
}else if (nilai >=60 && nilai <70) {
    console.log("Selamat, Anda mendapatkan nilai C")
}else if (nilai >= 50 && nilai <60) {
    console.log("Selamat, Anda mendapatkan nilai D")
}else if(nilai>100) {
    console.log("Nilai lebih dari batas maksimum 100")
}else{
    Console.log("Anda mendapatkan nilai E")
}