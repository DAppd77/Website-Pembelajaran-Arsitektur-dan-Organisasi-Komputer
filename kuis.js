(function () {
  var id = new URLSearchParams(location.search).get("id");
  var m = MATERI.filter(function (x) { return x.id === id; })[0];
  var konten = document.getElementById("konten");

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  if (!m || !KUIS[m.id]) {
    konten.appendChild(el("h1", "", "Kuis tidak ditemukan"));
    konten.appendChild(el("p", "ringkas", "Kembali ke daftar materi dan pilih salah satu."));
    return;
  }
  if (!terbuka(m.id)) {
    location.replace("index.html#" + m.hash);
    return;
  }

  var kuis = KUIS[m.id];
  var j = jalur(m.hash);
  var idx = j.indexOf(m);
  document.title = "Kuis " + m.judul + " | Media Simulasi AOK";
  document.getElementById("back").href = "materi.html?id=" + m.id;
  document.getElementById("back").textContent = "\u2190 Kembali ke materi";

  function render() {
    konten.innerHTML = "";
    konten.appendChild(el("p", "kategori", m.kategori));
    konten.appendChild(el("h1", "", "Kuis: " + m.judul));
    konten.appendChild(el("p", "ringkas", "Jawab minimal " + LULUS_MIN + " dari " + kuis.length + " soal dengan benar untuk membuka materi berikutnya."));

    var fields = [];
    kuis.forEach(function (soal, i) {
      var fs = el("fieldset", "soal");
      fs.appendChild(el("legend", "", (i + 1) + ". " + soal.q));
      soal.o.forEach(function (opt, k) {
        var lb = el("label", "opsi");
        var r = document.createElement("input");
        r.type = "radio"; r.name = "s" + i; r.value = k;
        lb.appendChild(r);
        lb.appendChild(document.createTextNode(" " + opt));
        fs.appendChild(lb);
      });
      var fb = el("p", "umpan");
      fs.appendChild(fb);
      konten.appendChild(fs);
      fields.push({fs: fs, fb: fb});
    });

    var pesan = el("p", "hasil");
    pesan.setAttribute("role", "status");
    var cek = el("button", "btn", "Periksa jawaban");
    cek.type = "button";
    konten.appendChild(cek);
    konten.appendChild(pesan);

    cek.addEventListener("click", function () {
      var pilihan = kuis.map(function (_, i) {
        var c = konten.querySelector('input[name="s' + i + '"]:checked');
        return c ? parseInt(c.value, 10) : -1;
      });
      if (pilihan.indexOf(-1) > -1) {
        pesan.className = "hasil salah";
        pesan.textContent = "Jawab semua soal dulu sebelum diperiksa.";
        return;
      }
      var benar = 0;
      kuis.forEach(function (soal, i) {
        var ok = pilihan[i] === soal.a;
        if (ok) benar++;
        fields[i].fb.className = "umpan " + (ok ? "benar" : "salah");
        fields[i].fb.textContent = (ok ? "Benar. " : "Kurang tepat. ") + soal.e;
        fields[i].fs.querySelectorAll("input").forEach(function (x) { x.disabled = true; });
      });
      cek.remove();

      var aksi = el("div", "aksi");
      if (benar >= LULUS_MIN) {
        simpanLulus(m.id);
        pesan.className = "hasil benar";
        pesan.textContent = "Lulus! Skor kamu " + benar + " dari " + kuis.length + ".";
        var lanjut = el("a", "btn");
        if (idx < j.length - 1) {
          lanjut.href = "materi.html?id=" + j[idx + 1].id;
          lanjut.textContent = "Lanjut ke materi berikutnya";
        } else {
          lanjut.href = "index.html#" + m.hash;
          lanjut.textContent = "Semua materi " + m.kategori + " tuntas. Kembali ke daftar";
        }
        aksi.appendChild(lanjut);
      } else {
        pesan.className = "hasil salah";
        pesan.textContent = "Skor kamu " + benar + " dari " + kuis.length + ". Pelajari materinya lagi, lalu coba kuis kembali.";
        var ulang = el("button", "btn", "Coba lagi");
        ulang.type = "button";
        ulang.addEventListener("click", function () { render(); window.scrollTo(0, 0); });
        aksi.appendChild(ulang);
        var baca = el("a", "btn alt", "Baca materi lagi");
        baca.href = "materi.html?id=" + m.id;
        aksi.appendChild(baca);
      }
      konten.appendChild(aksi);
    });
  }
  render();
})();
