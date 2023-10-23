const pendapatanHarian = 600000; 
let uangJasa, persentaseKomisi;

if (pendapatanHarian <= 200000) {
    uangJasa = 10000;
    persentaseKomisi = 0.1;
} else if (pendapatanHarian > 200000 && pendapatanHarian <= 500000) {
    uangJasa = 20000;
    persentaseKomisi = 0.15;
} else {
    uangJasa = 30000;
    persentaseKomisi = 0.2;
}

const komisi = pendapatanHarian * persentaseKomisi;

const totalPendapatan = uangJasa + komisi;

console.log("Pendapatan Harian: Rp. " + pendapatanHarian);
console.log("Uang Jasa: Rp. " + uangJasa);
console.log("Komisi: Rp. " + komisi);
console.log("Total Pendapatan: Rp. " + totalPendapatan);