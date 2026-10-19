# Lab5Web - JavaScript Dasar dan Manipulasi HTML

## Tujuan
Mempelajari dasar JavaScript dan cara mengubah isi HTML.

## File
- `index.html` : halaman latihan.
- `script.js` : kode JavaScript untuk latihan.

## Cara Menjalankan
1. Download atau clone repository ini.
2. Buka folder `Lab5Web` di Visual Studio Code.
3. Buka file `index.html` di browser, atau gunakan ekstensi Live Server.
4. Untuk melihat hasil `console.log`, tekan `F12` lalu pilih tab Console.

## Latihan
1. Menampilkan Hello World di halaman dan Console.
2. Menggunakan `alert()` dan `prompt()`.
3. Membuat fungsi operasi matematika.
4. Menggunakan `if-else` untuk memeriksa kelulusan.
5. Menggunakan `switch-case` untuk angka 1 sampai 5.
6. Memeriksa bilangan genap atau ganjil.
7. Mengubah warna background.
8. Menghitung total menu yang dipilih.
9. Mini project kalkulator nilai akhir.
10. Latihan mandiri: tabel perkalian 7, fungsi `cekGenap()`, validasi form, dan toggle elemen.

## Jawaban Pertanyaan
1. `console.log()` menampilkan pesan di Console. `alert()` menampilkan kotak pesan, `prompt()` meminta input dari pengguna, sedangkan `textContent` mengubah teks pada elemen HTML dan `innerHTML` mengubah isi HTML pada elemen.
2. `let` digunakan untuk variabel yang nilainya dapat diubah. `const` digunakan untuk variabel yang tidak dapat diberi nilai ulang.
3. `==` membandingkan nilai dengan konversi tipe tertentu, sedangkan `===` membandingkan nilai dan tipe data.
4. `if-else` digunakan untuk memilih berdasarkan kondisi. `switch` digunakan untuk memilih berdasarkan nilai yang cocok dengan beberapa `case`.
5. Parameter adalah variabel penerima nilai saat fungsi dipanggil. `return` mengembalikan hasil dari fungsi.
6. `document.getElementById()` digunakan untuk mengambil elemen HTML berdasarkan atribut `id`.
7. Validasi nama dan nilai dibuat dengan memeriksa apakah nama kosong dan apakah nilai berada pada rentang 0 sampai 100.

## Screenshot
Tambahkan screenshot hasil saat program dijalankan di browser. Simpan gambar ke folder `screenshot` jika diperlukan, lalu tambahkan ke repository.

## Upload ke GitHub
1. Buat repository dengan nama `Lab5Web`.
2. Upload file `index.html`, `script.js`, dan `README.md`.
3. Commit perubahan dan push ke GitHub.
4. Salin URL repository untuk dikumpulkan.

## langkah kerja praktikum

Latihan 1 — Menampilkan Output

Tujuan

Memahami cara menampilkan teks pada halaman HTML dan Console menggunakan JavaScript.

Kode JavaScript

document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

Penjelasan

document.getElementById("pesan") digunakan untuk memilih elemen HTML dengan ID pesan.

textContent digunakan untuk mengubah teks di dalam elemen tersebut.

console.log() digunakan untuk menampilkan pesan pada Console browser.

Hasil yang Diharapkan

Pada halaman web, teks awal berubah menjadi:

Hello World

Pada Console browser, muncul:

Hello World

Kesimpulan: JavaScript dapat digunakan untuk menampilkan informasi langsung pada halaman HTML maupun melalui Console browser.

Latihan 2 — Alert dan Prompt

Tujuan

Memahami cara meminta masukan dari pengguna dan menampilkan pesan menggunakan prompt() dan alert().

Kode JavaScript

const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");

    document.getElementById("pesan").textContent =
        "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}

Penjelasan

prompt() menampilkan kotak dialog untuk memasukkan nama.

trim() menghapus spasi di awal dan akhir teks.

if-else memeriksa apakah nama sudah diisi.

alert() menampilkan pesan kepada pengguna.

textContent menampilkan pesan selamat datang pada halaman.

Hasil Pengujian

Pengujian 1: Pengguna memasukkan nama Hafiz.

Pesan dialog:

Halo, Hafiz!

Teks pada halaman:

Selamat datang, Hafiz.

Pengujian 2: Pengguna menekan Cancel atau membiarkan nama kosong.

Pesan dialog:

Nama belum diisi.

Kesimpulan: prompt() digunakan untuk menerima input, sedangkan alert() digunakan untuk menampilkan pesan kepada pengguna.

Latihan 3 — Function dan Operasi Aritmetika

Tujuan

Membuat function yang menerima dua bilangan dan melakukan operasi aritmetika.

Kode JavaScript

function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);

    console.log(
        "Pembagian:",
        b !== 0 ? a / b : "Tidak dapat dibagi nol"
    );

    console.log("Modulus:", a % b);
}

operasiDasar(9, 4);

Penjelasan

function operasiDasar(a, b) membuat fungsi dengan parameter a dan b.

+ digunakan untuk penjumlahan.

- digunakan untuk pengurangan.

* digunakan untuk perkalian.

/ digunakan untuk pembagian.

% digunakan untuk mencari sisa pembagian.

operasiDasar(9, 4) memanggil fungsi dengan nilai 9 dan 4.

Hasil yang Diharapkan

Output pada Console:

Penjumlahan: 13
Pengurangan: 5
Perkalian: 36
Pembagian: 2.25
Modulus: 1

Kesimpulan: Function memungkinkan sekumpulan instruksi digunakan kembali dengan nilai parameter yang berbeda.

Latihan 4 — Seleksi Kondisi If-Else

Tujuan

Membuat program untuk menentukan status kelulusan mahasiswa berdasarkan nilai yang dimasukkan.

Kode JavaScript

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

Penjelasan

prompt() menerima input nilai dari pengguna.

Number() mengubah input menjadi tipe data angka.

Number.isNaN() memeriksa apakah hasil konversi bukan angka yang valid.

if-else menentukan hasil berdasarkan kondisi.

Nilai minimal 60 dinyatakan lulus.

Hasil Pengujian

Input

Hasil

85

Lulus

60

Lulus

45

Belum lulus

101

Input nilai tidak valid

Kosong

Input nilai tidak valid

Kesimpulan: Percabangan if-else dapat digunakan untuk menentukan keputusan berdasarkan kondisi tertentu.

Latihan 5 — Percabangan Switch

Tujuan

Memahami penggunaan switch untuk menentukan output berdasarkan nilai pilihan.

Kode JavaScript

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

Penjelasan

switch memeriksa nilai variabel pilihan.

case menentukan instruksi untuk setiap nilai.

break menghentikan eksekusi pada case yang sesuai.

default dijalankan jika tidak ada case yang cocok.

Hasil yang Diharapkan

Karena variabel pilihan berisi "2", Console menampilkan:

Pilihan dua

Kesimpulan: switch cocok digunakan ketika program perlu memilih satu tindakan dari beberapa nilai yang telah ditentukan.

Latihan 6 — Memeriksa Bilangan Genap dan Ganjil

Tujuan

Membuat fungsi yang memeriksa apakah bilangan bulat termasuk genap atau ganjil melalui input pada halaman web.

Kode HTML

<label for="bilangan">Masukkan bilangan bulat:</label>
<input type="number" id="bilangan" step="1">

<button type="button" onclick="cekBilangan()">
    Periksa
</button>

<p id="hasilBilangan"></p>

Kode JavaScript

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

Penjelasan

value mengambil nilai dari kolom input.

Number.isInteger() memeriksa apakah nilai berupa bilangan bulat.

angka % 2 === 0 memeriksa apakah bilangan habis dibagi dua.

textContent menampilkan hasil pemeriksaan pada halaman.

Hasil Pengujian

Input

Hasil

8

Bilangan genap

7

Bilangan ganjil

0

Bilangan genap

-4

Bilangan genap

2.5

Masukkan bilangan bulat yang valid.

Kosong

Masukkan bilangan bulat yang valid.

Kesimpulan: Operator modulus % dapat digunakan untuk memeriksa bilangan genap atau ganjil.

Latihan 7 — Mengubah Warna Latar Halaman

Tujuan

Memanipulasi tampilan halaman menggunakan JavaScript dan tombol HTML.

Kode HTML

<button type="button" onclick="ubahWarnaLatar('lightgreen')">
    Latar Hijau
</button>

<button type="button" onclick="ubahWarnaLatar('white')">
    Latar Putih
</button>

<button type="button" onclick="ubahWarnaLatar('lightyellow')">
    Latar Kuning
</button>

Kode JavaScript

function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

Penjelasan

ubahWarnaLatar(warna) merupakan fungsi dengan parameter warna.

document.body memilih elemen body pada halaman HTML.

style.backgroundColor mengubah warna latar halaman.

Atribut onclick memanggil fungsi saat tombol diklik.

Hasil yang Diharapkan

Tombol

Hasil

Latar Hijau

Latar halaman berubah menjadi hijau muda.

Latar Putih

Latar halaman berubah menjadi putih.

Latar Kuning

Latar halaman berubah menjadi kuning muda.

Kesimpulan: JavaScript dapat mengubah properti CSS secara langsung melalui DOM.

Latihan 8 — DOM dan Checkbox Menu Makanan

Tujuan

Membuat daftar menu makanan yang dapat dipilih dan menghitung total harga secara otomatis.

Kode HTML

<h2>Daftar Menu Makanan</h2>

<label>
    <input type="checkbox" class="menu" value="5000">
    Ayam Goreng — Rp5.000
</label>
<br>

<label>
    <input type="checkbox" class="menu" value="500">
    Tempe — Rp500
</label>
<br>

<label>
    <input type="checkbox" class="menu" value="2500">
    Telur Dadar — Rp2.500
</label>
<br>

<label>
    <input type="checkbox" class="menu" value="3000">
    Es Teh — Rp3.000
</label>
<br>

<label>
    <input type="checkbox" class="menu" value="4000">
    Nasi Putih — Rp4.000
</label>

<p>Total: Rp<span id="total">0</span></p>

Kode JavaScript

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

Penjelasan

querySelectorAll(".menu") memilih semua elemen dengan class menu.

addEventListener("change", hitungTotal) memanggil fungsi ketika checkbox berubah.

item.checked memeriksa apakah menu dipilih.

Number(item.value) mengambil harga sebagai angka.

toLocaleString("id-ID") memformat angka sesuai format Indonesia.

Hasil Pengujian

Pilihan Menu

Total

Tidak memilih menu

Rp0

Ayam Goreng

Rp5.000

Ayam Goreng + Tempe

Rp5.500

Ayam Goreng + Telur Dadar

Rp7.500

Semua menu

Rp15.000

Kesimpulan: DOM dan event listener memungkinkan halaman web merespons perubahan pilihan pengguna tanpa perlu memuat ulang halaman.

F. Mini Project — Kalkulator Nilai Mahasiswa

Tujuan

Membuat program yang menghitung nilai akhir mahasiswa berdasarkan nilai tugas, UTS, dan UAS. Program juga menentukan predikat dan status kelulusan.

Rumus Perhitungan

Tugas: 30%

UTS: 30%

UAS: 40%

Rumus nilai akhir:

Nilai Akhir = (Tugas × 0,30) + (UTS × 0,30) + (UAS × 0,40)

Kode JavaScript

1. Fungsi menghitung nilai akhir

function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

Fungsi ini menerima tiga nilai dan mengembalikan hasil perhitungan nilai akhir.

2. Fungsi menentukan predikat

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";

    return "E";
}

3. Fungsi memproses form

function hitungDariForm() {
    const inputTugas = document.getElementById("nilaiTugas").value;
    const inputUTS = document.getElementById("nilaiUTS").value;
    const inputUAS = document.getElementById("nilaiUAS").value;

    const hasil = document.getElementById("hasilNilai");

    if (
        inputTugas.trim() === "" ||
        inputUTS.trim() === "" ||
        inputUAS.trim() === ""
    ) {
        hasil.textContent = "Semua nilai harus diisi.";
        return;
    }

    const nilaiTugas = Number(inputTugas);
    const nilaiUTS = Number(inputUTS);
    const nilaiUAS = Number(inputUAS);

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

    const nilaiAkhir = hitungNilaiAkhir(
        nilaiTugas,
        nilaiUTS,
        nilaiUAS
    );

    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum lulus";

    hasil.textContent =
        "Nilai Akhir: " + nilaiAkhir.toFixed(2) +
        " | Predikat: " + predikat +
        " | Status: " + status;

    console.log("Nilai akhir:", nilaiAkhir.toFixed(2));
    console.log("Predikat:", predikat);
    console.log("Status:", status);
}

Hasil Pengujian

Contoh pengujian menggunakan tiga skenario berikut.

Tugas

UTS

UAS

Nilai Akhir

Predikat

Status

85

78

88

84,10

B

Lulus

90

90

90

90,00

A

Lulus

40

50

55

49,00

E

Belum lulus

Kesimpulan: Mini project ini menerapkan function, parameter, return, percabangan, validasi input, serta manipulasi DOM untuk menampilkan hasil perhitungan pada halaman web.

G. Eksperimen Mandiri

Eksperimen 1 — Operasi Dua Nilai dari Prompt

Kode JavaScript

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

Hasil yang Diharapkan

Fungsi meminta dua bilangan, lalu menampilkan hasil penjumlahan, pengurangan, perkalian, pembagian, dan modulus di Console.

Catatan: Fungsi ini tidak dijalankan otomatis. Untuk mengujinya, panggil operasiDariPrompt() melalui Console browser.

Eksperimen 2 — Tabel Perkalian 7

Kode JavaScript

console.log("Tabel Perkalian 7:");

for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

Hasil yang Diharapkan

Tabel Perkalian 7:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70

Kesimpulan: Perulangan for digunakan untuk menjalankan instruksi berulang kali dengan jumlah pengulangan yang ditentukan.

Eksperimen 3 — Function Cek Genap

Kode JavaScript

function cekGenap(angka) {
    return angka % 2 === 0;
}

console.log("Apakah 8 genap?", cekGenap(8));
console.log("Apakah 7 genap?", cekGenap(7));

Hasil yang Diharapkan

Apakah 8 genap? true
Apakah 7 genap? false

Kesimpulan: Function dapat mengembalikan nilai boolean (true atau false) berdasarkan kondisi yang diperiksa.

Eksperimen 4 — Menampilkan dan Menyembunyikan Elemen

Kode HTML

<p id="teksToggle">Ini adalah teks yang bisa disembunyikan.</p>

<button type="button" onclick="toggleTeks()">
    Tampilkan / Sembunyikan Teks
</button>

Kode JavaScript

function toggleTeks() {
    const teks = document.getElementById("teksToggle");

    if (teks.style.display === "none") {
        teks.style.display = "block";
    } else {
        teks.style.display = "none";
    }
}

Hasil yang Diharapkan

Saat tombol diklik, teks disembunyikan. Jika tombol diklik kembali, teks ditampilkan lagi.

Kesimpulan: JavaScript dapat mengatur properti CSS untuk menampilkan atau menyembunyikan elemen HTML.

H. Ringkasan Hasil Praktikum

No.

Materi

Hasil

1

Output JavaScript

Teks tampil di halaman dan Console.

2

Alert dan prompt

Pengguna dapat memasukkan nama dan menerima sapaan.

3

Function dan aritmetika

Lima operasi matematika berhasil dihitung.

4

If-else

Program menentukan status kelulusan berdasarkan nilai.

5

Switch

Program menampilkan output sesuai pilihan.

6

Genap dan ganjil

Program memeriksa bilangan bulat.

7

Manipulasi CSS

Warna latar berubah saat tombol diklik.

8

DOM dan checkbox

Total harga berubah sesuai menu yang dipilih.

9

Kalkulator nilai

Nilai akhir, predikat, dan status ditampilkan.

10

Eksperimen mandiri

Perulangan, validasi, function boolean, dan toggle elemen berhasil dibuat.
