
/* LATIHAN 1: Menampilkan Hello World */
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");


/* LATIHAN 2: Input Nama Pengguna */
const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent =
    "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}


/* LATIHAN 3: Function dan Operasi Aritmetika */
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}

operasiDasar(9, 4);


/* LATIHAN 4: Percabangan if-else */
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);

if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}


/* LATIHAN 5: Percabangan switch */
const pilihan = "2";

switch (pilihan) {
  case "1":
    console.log("Pilihan satu");
    break;

  case "2":
    console.log("Pilihan dua");
    break;

  default:
    console.log("Pilihan tidak tersedia");
}

/* LATIHAN 6: Memeriksa bilangan genap atau ganjil */
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

/* LATIHAN 7: Mengubah warna latar belakang */
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

/* LATIHAN 8: Menghitung total harga menu */
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}


/* LATIHAN 9: Menghitung luas dan keliling lingkaran */
// Menghitung nilai akhir:
// Tugas 30%, UTS 30%, UAS 40%

function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

// Menentukan predikat nilai

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";

    return "E";
}

// Mengambil nilai dari form HTML

function hitungDariForm() {
    const inputTugas = document.getElementById("nilaiTugas").value;
    const inputUTS = document.getElementById("nilaiUTS").value;
    const inputUAS = document.getElementById("nilaiUAS").value;

    const hasil = document.getElementById("hasilNilai");

    // Validasi input kosong

    if (
        inputTugas.trim() === "" ||
        inputUTS.trim() === "" ||
        inputUAS.trim() === ""
    ) {
        hasil.textContent = "Semua nilai harus diisi.";
        return;
    }

    // Mengubah input menjadi angka

    const nilaiTugas = Number(inputTugas);
    const nilaiUTS = Number(inputUTS);
    const nilaiUAS = Number(inputUAS);

    // Validasi nilai 0 sampai 100

    if (
        !Number.isFinite(nilaiTugas) ||
        !Number.isFinite(nilaiUTS) ||
        !Number.isFinite(nilaiUAS) ||
        nilaiTugas < 0 || nilaiTugas > 100 ||
        nilaiUTS < 0 || nilaiUTS > 100 ||
        nilaiUAS < 0 || nilaiUAS > 100
    ) {
        hasil.textContent =
            "Nilai harus berupa angka antara 0 sampai 100.";
        return;
    }

    // Menghitung nilai akhir

    const nilaiAkhir = hitungNilaiAkhir(
        nilaiTugas,
        nilaiUTS,
        nilaiUAS
    );

    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum lulus";

    // Menampilkan hasil ke halaman HTML

    hasil.textContent =
        "Nilai Akhir: " + nilaiAkhir.toFixed(2) +
        " | Predikat: " + predikat +
        " | Status: " + status;

    // Menampilkan hasil ke Console

    console.log("Nilai akhir:", nilaiAkhir.toFixed(2));
    console.log("Predikat:", predikat);
    console.log("Status:", status);
}

/* EKSPERIMEN MANDIRI 1 OPERASI DUA NILAI DARI PROMPT */

function operasiDariPrompt() {
    const inputA = prompt("Masukkan bilangan pertama:");
    const inputB = prompt("Masukkan bilangan kedua:");

    if (
        inputA === null || inputA.trim() === "" ||
        inputB === null || inputB.trim() === ""
    ) {
        alert("Kedua bilangan harus diisi.");
        return;
    }

    const a = Number(inputA);
    const b = Number(inputB);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        alert("Masukkan angka yang valid.");
        return;
    }

    operasiDasar(a, b);
}

/* EKSPERIMEN MANDIRI 2 TABEL PERKALIAN 7 */

console.log("Tabel Perkalian 7:");

for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}


/* EKSPERIMEN MANDIRI 3 FUNCTION CEK GENAP */

function cekGenap(angka) {
    return angka % 2 === 0;
}

console.log("Apakah 8 genap?", cekGenap(8));
console.log("Apakah 7 genap?", cekGenap(7));


/* EKSPERIMEN MANDIRI 4 MENYEMBUNYIKAN/MENAMPILKAN ELEMEN */

function toggleTeks() {
    const teks = document.getElementById("teksToggle");

    if (teks.style.display === "none") {
        teks.style.display = "block";
    } else {
        teks.style.display = "none";
    }
}