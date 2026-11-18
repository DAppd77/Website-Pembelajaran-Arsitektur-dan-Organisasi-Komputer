// Data materi. Tambah atau ubah isi di sini.
var MATERI = [
  {
    id: "cpu", kategori: "Hardware", hash: "hardware", judul: "CPU",
    ringkas: "Unit pemroses pusat yang menjalankan instruksi program.",
    model3d: "models/cpu.glb",
    isi: [
      "CPU (Central Processing Unit) adalah otak komputer. Ia mengambil instruksi dari memori, memahaminya, lalu menjalankannya satu per satu dengan sangat cepat.",
      "CPU terdiri dari tiga bagian utama yang bekerja bersama. Unit kendali mengatur urutan kerja, ALU melakukan hitungan dan perbandingan logika, dan register menyimpan data sementara yang sedang diproses."
    ],
    poin: [
      "<b>ALU</b>: operasi aritmatika (tambah, kurang) dan logika (AND, OR).",
      "<b>Unit kendali</b>: mengatur aliran data dan memberi sinyal ke komponen lain.",
      "<b>Register</b>: memori sangat kecil dan sangat cepat di dalam CPU, misalnya Program Counter dan Instruction Register.",
      "<b>Clock</b>: pengatur ritme kerja CPU, diukur dalam GHz."
    ]
  },
  {
    id: "motherboard", kategori: "Hardware", hash: "hardware", judul: "Motherboard (MOBO)",
    ringkas: "Papan sirkuit utama penghubung dan pengendali komunikasi seluruh komponen komputer.",
    model3d: "models/motherboard.glb",
    isi: [
      "Motherboard (mainboard) adalah papan sirkuit cetak (PCB) utama tempat seluruh komponen komputer terpasang dan saling terhubung. Fungsi utamanya adalah mengatur dan mendistribusikan jalur komunikasi data serta daya listrik antar prosesor, memori, media penyimpanan, dan kartu ekspansi.",
      "Di atas motherboard terdapat soket prosesor sebagai tempat memasang CPU, slot RAM, slot ekspansi PCIe, dan beragam sirkuit pengontrol. Agar dapat dipasang dengan tepat di dalam casing komputer, ukuran fisik dan tata letak lubang sekrup motherboard harus sesuai dengan form factor casing, seperti standar ATX atau Micro-ATX."
    ],
    poin: [
      "<b>Soket CPU</b>: dudukan khusus pada motherboard untuk memasang dan mengunci prosesor.",
      "<b>Fungsi utama</b>: menghubungkan dan mengatur komunikasi serta aliran data antar komponen komputer.",
      "<b>Form factor</b>: standar ukuran fisik motherboard (misalnya ATX, Micro-ATX, Mini-ITX) yang harus cocok dengan casing.",
      "<b>Slot PCIe</b>: slot ekspansi untuk memasang kartu grafis (GPU) dan kartu tambahan lainnya."
    ]
  },
  {
    id: "ram", kategori: "Hardware", hash: "hardware", judul: "RAM",
    ringkas: "Memori akses acak yang menyimpan data dan instruksi program yang sedang berjalan.",
    model3d: "models/ram.glb",
    isi: [
      "RAM (Random Access Memory) adalah memori utama komputer yang bertugas menyimpan data dan instruksi program yang sedang aktif dijalankan oleh CPU. Karena kecepatan aksesnya jauh lebih tinggi daripada penyimpanan sekunder, RAM memungkinkan prosesor bekerja dengan cepat tanpa hambatan.",
      "RAM bersifat volatil (sementara), yang berarti semua data yang ada di dalamnya akan hilang seketika saat komputer dimatikan atau kehilangan daya listrik. Pada modul fisik RAM terdapat takik (lekukan) di bagian pin kontak yang berfungsi memastikan RAM terpasang pada arah dan jenis slot yang tepat."
    ],
    poin: [
      "<b>Fungsi utama</b>: menyimpan data dan program yang sedang dijalankan secara sementara.",
      "<b>Volatil</b>: data di dalam RAM akan hilang saat aliran listrik atau komputer dimatikan.",
      "<b>Takik (notch)</b>: lekukan pengaman agar modul RAM tidak terpasang terbalik atau salah generasi slot (DDR).",
      "<b>Kapasitas & kecepatan</b>: diukur dalam GB (kapasitas) dan MHz atau MT/s (kecepatan transfer)."
    ]
  },
  {
    id: "kipas", kategori: "Hardware", hash: "hardware", judul: "Kipas (Cooling Fan)",
    ringkas: "Sistem pendingin aktif untuk membuang panas dan menjaga kestabilan suhu komponen.",
    model3d: "models/kipas.glb",
    isi: [
      "Kipas pendingin (cooling fan) bertugas membuang panas yang dihasilkan oleh komponen komputer, terutama prosesor dan kartu grafis, agar suhu kerja tetap stabil. Komponen elektronik yang terlalu panas dapat mengalami thermal throttling (penurunan performa) atau bahkan kerusakan permanen.",
      "Kipas prosesor biasanya dipadukan dengan heatsink logam berradiator. Di antara permukaan atas prosesor (IHS) dan dasar heatsink harus dioleskan thermal paste (pasta termal) untuk mengisi celah mikro udara agar perpindahan panas berlangsung optimal. Kecepatan putaran kipas diukur dalam satuan RPM (Revolutions Per Minute)."
    ],
    poin: [
      "<b>Fungsi pendingin</b>: membuang panas dari komponen agar suhu operasional tetap aman dan stabil.",
      "<b>Thermal paste</b>: pasta penghantar panas yang dioleskan antara prosesor dan heatsink.",
      "<b>RPM</b>: Revolutions Per Minute, satuan ukuran kecepatan putaran kipas pendingin.",
      "<b>Heatsink</b>: sirip logam pelepas panas yang dibantu hembusan udara dari kipas."
    ]
  },
  {
    id: "hdd", kategori: "Hardware", hash: "hardware", judul: "HDD",
    ringkas: "Media penyimpanan data magnetik berkapasitas besar dan bersifat permanen (non-volatil).",
    model3d: "models/hdd.glb",
    isi: [
      "HDD (Hard Disk Drive) adalah perangkat penyimpanan sekunder yang berfungsi menyimpan data, berkas pengguna, dan sistem operasi secara jangka panjang. Berbeda dengan RAM, HDD bersifat non-volatil sehingga data tetap tersimpan aman meskipun komputer dimatikan.",
      "Di dalam HDD terdapat satu atau beberapa piringan logam magnetik (platter) yang berputar dengan kecepatan tinggi dan dibaca/ditulis oleh kepala baca (read/write head). Perbedaan utama HDD dengan SSD adalah HDD masih menggunakan komponen mekanis yang bergerak, sedangkan SSD sepenuhnya berbasis chip elektronik tanpa bagian bergerak."
    ],
    poin: [
      "<b>Penyimpanan permanen</b>: menyimpan sistem operasi dan berkas secara jangka panjang (non-volatil).",
      "<b>Piringan (platter)</b>: bagian mekanis cakram berputar yang dilapisi material magnetik untuk menyimpan data.",
      "<b>Komponen mekanis</b>: memiliki bagian yang bergerak (motor, platter, head), berbeda dengan SSD yang serba elektronik.",
      "<b>Koneksi SATA</b>: dihubungkan ke motherboard via kabel data SATA dan kabel daya SATA dari PSU."
    ]
  },
  {
    id: "ssd-m2", kategori: "Hardware", hash: "hardware", judul: "SSD M.2",
    ringkas: "Media penyimpanan berbasis flash memori ringkas berkecepatan tinggi langsung pada motherboard.",
    model3d: "models/ssd-m2.glb",
    isi: [
      "SSD M.2 (Solid State Drive M.2) adalah media penyimpanan modern berbasis chip memori flash NAND yang berbentuk papan sirkuit kecil memanjang. SSD M.2 dipasang langsung pada slot M.2 di motherboard dengan dikencangkan oleh baut kecil, sehingga tidak memerlukan kabel data maupun kabel daya tambahan.",
      "Keunggulan utama SSD dibanding HDD adalah kecepatan baca-tulis yang jauh lebih tinggi dan tahan guncangan karena tidak memiliki bagian mekanis yang bergerak. Sebelum membeli SSD M.2, perlu dipastikan bahwa motherboard memiliki slot M.2 yang kompatibel serta mendukung jenis protokol yang sesuai, seperti NVMe (PCIe) atau SATA."
    ],
    poin: [
      "<b>Bentuk fisik</b>: papan sirkuit kecil memanjang yang terpasang langsung pada slot di motherboard.",
      "<b>Performa tinggi</b>: jauh lebih cepat dibanding HDD karena menggunakan memori flash tanpa komponen bergerak.",
      "<b>Bebas kabel</b>: mendapatkan jalur data dan pasokan daya langsung melalui slot M.2 motherboard.",
      "<b>Kompatibilitas</b>: pastikan motherboard memiliki slot M.2 dan mendukung protokolnya (NVMe PCIe atau SATA)."
    ]
  },
  {
    id: "psu", kategori: "Hardware", hash: "hardware", judul: "Power Supply Unit (PSU)",
    ringkas: "Unit pengubah arus listrik AC dari stopkontak menjadi arus DC yang stabil untuk komponen.",
    model3d: "models/psu.glb",
    isi: [
      "PSU (Power Supply Unit) adalah perangkat keras yang bertugas mengonversi arus listrik bolak-balik (AC) bertegangan tinggi dari stopkontak rumah menjadi arus listrik searah (DC) bertegangan rendah (+12V, +5V, +3.3V) yang aman dan stabil untuk digunakan oleh seluruh komponen komputer.",
      "Kapasitas daya keluaran sebuah PSU diukur dalam satuan Watt. Daya PSU harus disesuaikan dengan total konsumsi listrik seluruh komponen di dalam PC agar komputer dapat berjalan stabil, tidak sering mati mendadak, serta terhindar dari kerusakan akibat kelebihan beban daya."
    ],
    poin: [
      "<b>Fungsi utama</b>: mengubah arus listrik AC dari stopkontak menjadi arus DC yang sesuai bagi komponen komputer.",
      "<b>Satuan Watt</b>: ukuran kapasitas daya maksimal yang dapat disalurkan oleh PSU ke sistem.",
      "<b>Kestabilan daya</b>: pemilihan daya PSU yang cukup menjamin kinerja seluruh komponen optimal dan terhindar dari restart mendadak.",
      "<b>Konektor output</b>: menyediakan konektor 24-pin motherboard, CPU EPS, PCIe GPU, dan daya SATA."
    ]
  }
];

// ===== Kuis: q = soal, o = pilihan, a = indeks jawaban benar, e = pembahasan =====
var LULUS_MIN = 2; // jumlah jawaban benar minimal untuk lulus
var KUIS = {
  "cpu": [
    {q:"Bagian CPU mana yang melakukan hitungan dan perbandingan logika?", o:["Register","ALU","Bus alamat","Cache"], a:1, e:"ALU (Arithmetic Logic Unit) menangani operasi aritmatika dan logika."},
    {q:"Apa tugas unit kendali?", o:["Menyimpan data permanen","Menampilkan gambar ke layar","Mengatur urutan kerja dan memberi sinyal ke komponen lain","Menghitung penjumlahan"], a:2, e:"Unit kendali mengatur aliran data dan memberi sinyal ke komponen lain."},
    {q:"Register adalah...", o:["Memori sangat kecil dan sangat cepat di dalam CPU","Penyimpanan data jangka panjang","Jalur data antar komponen","Pengatur ritme kerja CPU"], a:0, e:"Register berada di dalam CPU dan menyimpan data yang sedang diproses."}
  ],
  "motherboard": [
    {q:"Bagian motherboard mana yang menjadi tempat memasang CPU?", o:["Slot PCIe","Soket","Header panel depan","Port SATA"], a:1, e:"Soket CPU adalah dudukan tempat memasang dan mengunci prosesor pada motherboard."},
    {q:"Apa fungsi utama motherboard?", o:["Menyimpan data permanen","Mengubah listrik AC menjadi DC","Mendinginkan prosesor","Menghubungkan dan mengatur komunikasi antar komponen komputer"], a:3, e:"Motherboard menghubungkan dan mengatur komunikasi antar seluruh komponen komputer."},
    {q:"Agar motherboard dapat dipasang di casing, hal apa yang harus cocok?", o:["Ukuran (form factor), misalnya ATX atau Micro-ATX","Warna motherboard","Merek casing","Jumlah port USB"], a:0, e:"Form factor menentukan ukuran fisik dan tata letak dudukan baut motherboard di casing."}
  ],
  "ram": [
    {q:"Apa fungsi RAM?", o:["Menyimpan data dan program yang sedang dijalankan sementara","Menyimpan data jangka panjang","Menampilkan gambar ke layar","Mengatur aliran listrik ke komponen"], a:0, e:"RAM bertugas menyimpan data dan instruksi program yang sedang diproses secara sementara."},
    {q:"Apa fungsi takik (lekukan) pada modul RAM?", o:["Tempat menempelkan pendingin","Memperbesar kapasitas memori","Memastikan RAM terpasang dengan arah dan jenis yang benar","Menghubungkan RAM ke PSU"], a:2, e:"Takik memastikan RAM terpasang dengan arah yang benar dan sesuai dengan jenis slotnya."},
    {q:"Apa yang terjadi pada data di RAM saat komputer dimatikan?", o:["Tersimpan permanen","Berpindah ke CPU","Dipindahkan ke kipas","Hilang"], a:3, e:"RAM bersifat volatil, sehingga data di dalamnya akan hilang saat aliran listrik padam."}
  ],
  "kipas": [
    {q:"Apa tugas kipas pendingin pada prosesor?", o:["Menambah kecepatan internet","Membuang panas agar suhu tetap stabil","Menyimpan data sementara","Menyalurkan listrik ke motherboard"], a:1, e:"Kipas pendingin bertugas membuang panas agar suhu prosesor tetap stabil dan terhindar dari overheat."},
    {q:"Bahan apa yang dioleskan antara prosesor dan heatsink agar panas berpindah dengan baik?", o:["Thermal paste","Lem kertas","Oli mesin","Cat pelindung"], a:0, e:"Thermal paste dioleskan untuk mengisi celah mikro udara dan mengoptimalkan konduksi panas ke heatsink."},
    {q:"Kecepatan putar kipas diukur dengan satuan...", o:["GHz","RPM","Watt","GB"], a:1, e:"RPM (Revolutions Per Minute) adalah satuan untuk mengukur kecepatan putaran kipas."}
  ],
  "hdd": [
    {q:"Apa fungsi HDD?", o:["Menyimpan data jangka panjang","Menjalankan instruksi program","Menyimpan data sementara yang sedang diproses","Mendinginkan komponen"], a:0, e:"HDD berfungsi menyimpan data, berkas pengguna, dan sistem operasi secara jangka panjang (non-volatil)."},
    {q:"Bagian HDD yang menyimpan data secara magnetik adalah...", o:["Soket","Heatsink","Piringan (platter)","Takik"], a:2, e:"Piringan atau platter adalah cakram magnetik berputar tempat data disimpan pada HDD."},
    {q:"Apa perbedaan utama HDD dengan SSD?", o:["HDD memakai piringan berputar, SSD tidak memiliki bagian yang bergerak","HDD tidak bisa menyimpan data","SSD memakai piringan berputar, HDD tidak","HDD dipasang di soket CPU"], a:0, e:"HDD menggunakan piringan mekanik berputar, sedangkan SSD menggunakan memori flash tanpa bagian bergerak."}
  ],
  "ssd-m2": [
    {q:"Apa ciri fisik utama SSD M.2?", o:["Berbentuk kotak besar dengan piringan berputar","Berbentuk papan memanjang kecil yang dipasang langsung pada slot di motherboard","Berbentuk silinder dengan kipas","Berbentuk kartu besar dengan port layar"], a:1, e:"SSD M.2 berbentuk papan sirkuit kecil memanjang yang langsung ditancapkan ke slot M.2 di motherboard."},
    {q:"Apa keunggulan SSD dibanding HDD?", o:["Memiliki piringan magnetik","Tidak membutuhkan motherboard","Lebih cepat karena tidak memiliki bagian yang bergerak","Dapat menggantikan fungsi RAM sepenuhnya"], a:2, e:"SSD jauh lebih cepat dan tahan guncangan karena tidak memiliki bagian mekanis yang bergerak."},
    {q:"Apa yang perlu dicek sebelum membeli SSD M.2?", o:["Warna heatsink","Motherboard memiliki slot M.2 dan mendukung jenis (SATA/NVMe) yang sama","Jumlah kipas pada casing","Merek PSU"], a:1, e:"Pastikan motherboard memiliki slot M.2 dan mendukung tipe protokol yang sesuai (NVMe atau SATA)."}
  ],
  "psu": [
    {q:"Apa fungsi utama PSU?", o:["Menyimpan data permanen","Mengubah listrik AC dari stopkontak menjadi DC yang sesuai untuk komponen","Mengolah gambar grafis","Mendinginkan prosesor"], a:1, e:"PSU berfungsi mengubah arus listrik AC dari stopkontak menjadi arus DC yang stabil bagi komponen komputer."},
    {q:"Satuan yang menunjukkan kemampuan daya sebuah PSU adalah...", o:["Watt","GHz","RPM","GB"], a:0, e:"Satuan daya output power supply diukur dalam Watt."},
    {q:"Mengapa daya PSU harus disesuaikan dengan kebutuhan komponen?", o:["Agar casing lebih berat","Agar warna kabel serasi","Agar semua komponen mendapat daya cukup dan komputer stabil","Agar RAM bertambah besar"], a:2, e:"Daya PSU yang memadai menjamin seluruh komponen menerima pasokan listrik cukup dan sistem berjalan stabil."}
  ]
};

// ===== Kemajuan user (disimpan di browser) =====
var KUNCI = "aok-lulus";
function ambilLulus() {
  try { return JSON.parse(localStorage.getItem(KUNCI)) || []; } catch (e) { return []; }
}
function simpanLulus(id) {
  var l = ambilLulus();
  if (l.indexOf(id) < 0) {
    l.push(id);
    try { localStorage.setItem(KUNCI, JSON.stringify(l)); } catch (e) {}
  }
}
function resetLulus() {
  try { localStorage.removeItem(KUNCI); } catch (e) {}
}
function jalur(hash) {
  return MATERI.filter(function (m) { return m.hash === hash; });
}
function terbuka(id) {
  // Mode pengetesan: semua materi terbuka tanpa harus lulus kuis materi sebelumnya
  return true;
}
