<script>
const overlay = document.getElementById('gallery-overlay');

// Lista immagini (jpg o png, nomi liberi)
const images = [
  'img/random_gallery/img1.jpg',
  'img/random_gallery/img2.jpg',
  'img/random_gallery/img3.jpg',
  'img/random_gallery/img4.jpg',
  'img/random_gallery/img5.jpg',
  'img/random_gallery/img6.jpg',
  'img/random_gallery/img7.jpg',
  'img/random_gallery/img8.jpg',
  'img/random_gallery/img9.jpg',
  'img/random_gallery/img10.jpg'
];

// Funzione per creare un’immagine casuale
function createRandomImage(x, y) {
  const randomIndex = Math.floor(Math.random() * images.length);
  const src = images[randomIndex];

  const img = document.createElement('img');
  img.src = src;

  // Se mobile, centra l’immagine sullo schermo
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    x = window.innerWidth / 2 - 100; // centrata
    y = window.innerHeight / 2 - 100;
  } else {
    x = x - 100;
    y = y - 100;
  }

  img.style.left = x + 'px';
  img.style.top = y + 'px';
  img.style.opacity = '1';
  img.style.transform = 'scale(1)';
  overlay.appendChild(img);

  // Animazione scomparsa
  setTimeout(() => {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.5)';
  }, 1000);

  setTimeout(() => {
    if (img.parentNode) overlay.removeChild(img);
  }, 1500);
}

// Desktop: movimento mouse
document.addEventListener('mousemove', e => {
  createRandomImage(e.clientX, e.clientY);
});

// Mobile: tocco
document.addEventListener('touchstart', e => {
  createRandomImage();
});

// Mobile: scorrimento
document.addEventListener('touchmove', e => {
  createRandomImage();
}, { passive: true });

// Clic/tap sullo sfondo torna alla home
document.body.addEventListener('click', e => {
  if (e.target === overlay) {
    window.location.href = 'index.html';
  }
});
</script>
