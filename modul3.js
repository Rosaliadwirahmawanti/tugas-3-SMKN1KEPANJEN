const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function () {
    bodyHalaman.classList.toggle('light-mode');

    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = 'Mode Gelap 🌙';
    } else {
        btnTema.textContent = 'Mode Terang ☀️';
    }
});

const btnBukaModal = document.querySelector('#btnKontak'); 
const elemenModal = document.querySelector('#modalKontak'); 
const btnTutupModal = document.querySelector('#btnTutupModal'); 

btnBukaModal.addEventListener('click', function(event) {  
    event.preventDefault(); 
    elemenModal.classList.add('show');
}); 

btnTutupModal.addEventListener('click', function() {  
    elemenModal.classList.remove('show'); 
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (elemenModal.classList.contains('show')) {
            elemenModal.classList.remove('show');
            console.log('modal ditutup menggunakan tombol ESC');
        }
    }
});

function ubahGreetingOtomatis() {
    const jam = new Date().getHours();
    let ucapan = "";

    if (jam >= 5 && jam < 12) {
        ucapan = "Selamat Pagi 🌅";
    } else if (jam >= 12 && jam < 15) {
        ucapan = "Selamat Siang ☀️";
    } else if (jam >= 15 && jam < 18) {
        ucapan = "Selamat Sore 🌇";
    } else {
        ucapan = "Selamat Malam 🌙"; 
    }
    return ucapan;
}

const elemenRole = document.querySelector('#roleSiswa');
if (elemenRole) {
    elemenRole.textContent = ubahGreetingOtomatis();
}

const avatar = document.querySelector('#avatarProfil');

if (avatar) {
  avatar.addEventListener('click', function () {
    avatar.classList.add('putar-avatar');
    avatar.addEventListener(
      'animationend',
      function () {
        avatar.classList.remove('putar-avatar');
      },
      { once: true }
    );
  });
}