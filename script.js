// Data anggota: ganti "foto" dengan alamat gambar, misalnya "foto/daffa.jpg"
var anggota = [
  {nama:"M. Daffa Ariapatya D", nim:"2504349", peran:"Ketua Kelompok", foto:""},
  {nama:"Fahmy Dinar Elbadry", nim:"2509121", peran:"Anggota", foto:""},
  {nama:"Juhdi Nashri Sabil", nim:"2509484", peran:"Anggota", foto:""},
  {nama:"Iqbal Nur Fazri", nim:"2509708", peran:"Anggota", foto:""},
  {nama:"Zaky Ahmad Farisi", nim:"2508332", peran:"Anggota", foto:""}
];
var userIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>';

var box = document.getElementById('members');
anggota.forEach(function(a){
  var card = document.createElement('div');
  card.className = 'card';
  var photo = document.createElement('div');
  photo.className = 'photo';
  if (a.foto) {
    var img = document.createElement('img');
    img.src = a.foto; img.alt = 'Foto ' + a.nama;
    photo.appendChild(img);
  } else {
    photo.innerHTML = userIcon + '<span>Foto</span>';
  }
  var info = document.createElement('div');
  var n = document.createElement('p'); n.className = 'name'; n.textContent = a.nama;
  var m = document.createElement('p'); m.className = 'nim'; m.textContent = a.nim;
  var r = document.createElement('p'); r.className = 'role'; r.textContent = a.peran;
  info.appendChild(n); info.appendChild(m); info.appendChild(r);
  card.appendChild(photo); card.appendChild(info);
  box.appendChild(card);
});

// Accordion
var accs = document.querySelectorAll('.acc');
function setOpen(acc, open){
  acc.classList.toggle('open', open);
  acc.querySelector('button').setAttribute('aria-expanded', open ? 'true' : 'false');
}

/* --- Proximity: tampilkan acc-preview saat kursor dekat, sembunyikan bila jauh --- */
(function(){
  var NEAR = 100; /* jarak px dari tepi elemen */

  function distToRect(mx, my, r){
    var dx = Math.max(r.left - mx, 0, mx - r.right);
    var dy = Math.max(r.top  - my, 0, my - r.bottom);
    return Math.sqrt(dx*dx + dy*dy);
  }

  document.addEventListener('mousemove', function(e){
    accs.forEach(function(acc){
      var preview = acc.querySelector('.acc-preview');
      if(!preview) return;
      /* Kalau accordion sudah terbuka (menu link terlihat), sembunyikan preview */
      if(acc.classList.contains('open')){ preview.classList.remove('visible'); return; }
      var rect = acc.querySelector('button').getBoundingClientRect();
      var dist = distToRect(e.clientX, e.clientY, rect);
      preview.classList.toggle('visible', dist < NEAR);
    });
  });
})();

/* --- Click: langsung buka menu link --- */
accs.forEach(function(acc){
  acc.querySelector('button').addEventListener('click', function(){
    var preview = acc.querySelector('.acc-preview');
    var alreadyOpen = acc.classList.contains('open');

    /* Tutup preview */
    if(preview) preview.classList.remove('visible');

    /* Tutup semua accordion lain */
    accs.forEach(function(other){ if(other !== acc) setOpen(other, false); });

    setOpen(acc, !alreadyOpen);
  });
});

// Pencarian materi
var q = document.getElementById('q');
var empty = document.getElementById('empty');
q.addEventListener('input', function(){
  var term = q.value.trim().toLowerCase();
  var found = 0;
  accs.forEach(function(acc){
    var hits = 0;
    acc.querySelectorAll('li').forEach(function(li){
      var show = !term || li.textContent.toLowerCase().indexOf(term) > -1;
      li.hidden = !show;
      if (show) hits++;
    });
    acc.querySelectorAll('ul.sub-list li').forEach(function(subLi){
      if (!subLi.hidden) {
        var parentLi = subLi.closest('ul.sub-list').closest('li');
        if (parentLi) parentLi.hidden = false;
      }
    });
    var titleHit = acc.querySelector('button span:nth-of-type(2)').textContent.toLowerCase().indexOf(term) > -1;
    if (titleHit && term) { acc.querySelectorAll('li').forEach(function(li){ li.hidden = false; }); hits = 1; }
    acc.style.display = hits ? '' : 'none';
    if (term && hits) setOpen(acc, true);
    if (hits) found++;
  });
  empty.style.display = found ? 'none' : 'block';
});

// Tombol Mulai Simulasi
document.getElementById('startBtn').addEventListener('click', function(){
  document.getElementById('materi').scrollIntoView({behavior:'smooth'});
  setOpen(document.getElementById('acc-hw'), true);
});

// Buka menu sesuai hash (dipakai tombol "kembali" dari halaman materi)
(function(){
  var map = {'#hardware':'acc-hw', '#rakit':'acc-rk'};
  var id = map[location.hash];
  if (id) {
    setOpen(document.getElementById(id), true);
    document.getElementById('materi').scrollIntoView();
  }
})();

// Kunci materi sesuai kemajuan kuis
(function(){
  var lulus = ambilLulus();
  document.querySelectorAll('.acc li a').forEach(function(a){
    var id = new URL(a.href, location.href).searchParams.get('id');
    if (!id) return;
    var tag = document.createElement('span');
    if (lulus.indexOf(id) > -1) {
      tag.className = 'tag done';
      tag.textContent = 'Selesai';
      a.appendChild(tag);
    } else if (!terbuka(id)) {
      a.classList.add('terkunci');
      a.removeAttribute('href');
      a.setAttribute('aria-disabled', 'true');
      tag.className = 'tag';
      tag.textContent = 'Terkunci. Lulus kuis materi sebelumnya dulu.';
      a.appendChild(tag);
    }
  });
  document.getElementById('resetBtn').addEventListener('click', function(){
    resetLulus();
    location.reload();
  });
})();
