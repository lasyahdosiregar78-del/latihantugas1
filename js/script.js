// ================= DATA (ASLI - TIDAK DIUBAH) =================

var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta"
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar"
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat"
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP"
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat"
  }
];

var dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    cover: "img/pengantar_komunikasi.jpg"
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    cover: "img/manajemen_keuangan.jpg"
  },
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    cover: "img/kepemimpinan.jpg"
  },
  {
    kodeLokasi: "0MLG01",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165,
    cover: "img/mikrobiologi.jpg"
  },
  {
    kodeLokasi: "0UPBJJBDG",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204,
    cover: "img/paud_perkembangan.jpg"
  }
];

var dataTracking = {
  "2023001234": {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan"
      }
    ]
  },
  "2023005678": {
    nomorDO: "2023001234",
    nama: "Agus Pranoto",
    status: "Dikirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Kota Bandung"
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG"
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi"
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto"
      }
    ]
  }
};

// ================= FUNCTION =================

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = dataPengguna.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    alert("Login berhasil, selamat datang " + user.nama);
    window.location.href = "dashboard.html";
  } else {
    alert("email/password yang anda masukkan salah");
  }
}

// GREETING
function greeting() {
  const jam = new Date().getHours();
  let text = "";

  if (jam < 12) text = "Selamat pagi";
  else if (jam < 18) text = "Selamat siang";
  else text = "Selamat malam";

  document.getElementById("greeting").innerHTML = text;
}

// STOK
function tampilkanStok() {
  const table = document.getElementById("tabelStok");

  dataBahanAjar.forEach((item, index) => {
    let row = table.insertRow();
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.kodeBarang}</td>
      <td>${item.namaBarang}</td>
      <td>${item.jenisBarang}</td>
      <td>${item.edisi}</td>
      <td>${item.stok}</td>
    `;
  });
}

// TAMBAH DATA
function tambahStok() {
  const kode = document.getElementById("kodeBarang").value;
  const nama = document.getElementById("namaBarang").value;
  const stok = document.getElementById("stok").value;

  dataBahanAjar.push({
    kodeLokasi: "NEW",
    kodeBarang: kode,
    namaBarang: nama,
    jenisBarang: "BMP",
    edisi: "1",
    stok: parseInt(stok),
    cover: ""
  });

  alert("Data berhasil ditambahkan");
  location.reload();
}

// TRACKING
function cariTracking() {
  const no = document.getElementById("noDO").value;
  const data = dataTracking[no];
  const hasil = document.getElementById("hasilTracking");

  if (data) {
    let html = `
      <h3>${data.nama}</h3>
      <p>Status: ${data.status}</p>
      <p>Ekspedisi: ${data.ekspedisi}</p>
      <p>Tanggal: ${data.tanggalKirim}</p>
      <p>Total: ${data.total}</p>
      <h4>Riwayat:</h4>
      <ul>
    `;

    data.perjalanan.forEach(p => {
      html += `<li>${p.waktu} - ${p.keterangan}</li>`;
    });

    html += "</ul>";

    hasil.innerHTML = html;
  } else {
    hasil.innerHTML = "Data tidak ditemukan";
  }
}