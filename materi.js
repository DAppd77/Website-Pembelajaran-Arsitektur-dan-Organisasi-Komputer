(function () {
  var id = new URLSearchParams(location.search).get("id");
  var m = MATERI.filter(function (x) { return x.id === id; })[0];
  var konten = document.getElementById("konten");
  var pager = document.getElementById("pager");

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  if (!m) {
    konten.appendChild(el("h1", "", "Materi tidak ditemukan"));
    konten.appendChild(el("p", "ringkas", "Kembali ke daftar materi dan pilih salah satu."));
    return;
  }
  if (!terbuka(m.id)) {
    location.replace("index.html#" + m.hash);
    return;
  }

  var j = jalur(m.hash);
  var idx = j.indexOf(m);

  document.title = m.judul + " | Media Simulasi AOK";
  document.getElementById("back").href = "index.html#" + m.hash;

  konten.appendChild(el("p", "kategori", m.kategori));
  konten.appendChild(el("h1", "", m.judul));
  if (m.ringkas) konten.appendChild(el("p", "ringkas", m.ringkas));

  // Tampilkan model 3D jika materi memiliki aset 3D (sebelum penjelasan)
  if (m.model3d) {
    var modelBox = el("div", "model-box");
    var mv = document.createElement("model-viewer");
    mv.setAttribute("src", m.model3d);
    mv.setAttribute("alt", "Model 3D " + m.judul);
    mv.setAttribute("camera-controls", "");
    mv.setAttribute("disable-zoom", "");
    mv.setAttribute("disable-pan", "");
    mv.setAttribute("auto-rotate", "");
    mv.setAttribute("shadow-intensity", "1");
    mv.setAttribute("touch-action", "pan-y");

    var hint = el("p", "model-hint", "Model 3D Interaktif (Geser untuk memutar)");
    modelBox.appendChild(mv);
    modelBox.appendChild(hint);
    konten.appendChild(modelBox);
  }

  // Tampilkan gambar ilustrasi/diagram jika materi memiliki aset gambar (sebelum penjelasan)
  if (m.gambar) {
    var imgBox = el("div", "img-box");
    var img = document.createElement("img");
    img.src = m.gambar;
    img.alt = "Diagram " + m.judul;
    img.loading = "lazy";
    img.title = "Klik untuk membuka ukuran penuh";
    img.addEventListener("click", function () { window.open(m.gambar, "_blank"); });
    imgBox.appendChild(img);
    var caption = el("p", "model-hint", "Diagram " + m.judul + " (Klik gambar untuk ukuran penuh)");
    imgBox.appendChild(caption);
    konten.appendChild(imgBox);
  }

  if (m.isi && m.isi.length > 0) {
    konten.appendChild(el("h2", "", "Penjelasan"));
    m.isi.forEach(function (p) { konten.appendChild(el("p", "isi", p)); });
  }

  if (m.poin && m.poin.length > 0) {
    konten.appendChild(el("h2", "", "Poin penting"));
    var ul = el("ul", "poin");
    m.poin.forEach(function (p) {
      var li = document.createElement("li");
      li.innerHTML = p; // data berasal dari file ini sendiri
      ul.appendChild(li);
    });
    konten.appendChild(ul);
  }

  if ((!m.isi || m.isi.length === 0) && (!m.poin || m.poin.length === 0)) {
    konten.appendChild(el("p", "ringkas", "Materi belum ditambahkan."));
  }

  // ----- Tombol menuju halaman kuis (kuis dipisah agar materi tidak bisa dilihat saat menjawab) -----
  if (typeof KUIS !== "undefined" && KUIS[m.id] && KUIS[m.id].length > 0) {
    var cta = el("section", "kuis");
    cta.appendChild(el("h2", "", "Sudah paham?"));
    cta.appendChild(el("p", "isi", ambilLulus().indexOf(m.id) > -1
      ? "Kamu sudah lulus kuis materi ini. Kamu boleh mengulang untuk latihan."
      : "Pastikan kamu sudah membaca materi di atas."));
    var go = el("a", "btn", "Mulai kuis");
    go.href = "kuis.html?id=" + m.id;
    cta.appendChild(go);
    konten.appendChild(cta);
  }

  // ----- Navigasi sebelumnya / berikutnya (dalam jalur yang sama) -----
  function link(target, cls, label) {
    var a = el("a", cls);
    a.href = "materi.html?id=" + target.id;
    a.appendChild(el("small", "", label));
    a.appendChild(document.createTextNode(target.judul));
    return a;
  }
  function renderPager() {
    pager.innerHTML = "";
    if (idx > 0) pager.appendChild(link(j[idx - 1], "prev", "Sebelumnya"));
    if (idx < j.length - 1) {
      pager.appendChild(link(j[idx + 1], "next", "Berikutnya"));
    } else {
      var s = el("span", "next");
      s.appendChild(el("small", "", "Selesai"));
      s.appendChild(document.createTextNode("Semua materi " + m.kategori + " tuntas"));
      pager.appendChild(s);
    }
  }
  renderPager();
})();
