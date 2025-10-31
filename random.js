<script>
const overlay = document.getElementById('gallery-overlay');

// Lista immagini
const images = [
  'img/random_gallery/img1.jpg',
  'img/random_gallery/img2.jpg',
  'img/random_gallery/img3.jpg',
  'img/random_gallery/img4.jpg',
  'img/random_gallery/img5.jpg'
];

// Crea immagine e la posiziona
function createImageAt(x, y) {
  const randomIndex = Math.floor(Math.random() * images.length);
  const img = document.createElement('img');
  img.src = images[randomIndex];

  img.style.left = (x - 100) + 'px';
  img.style.top = (y - 100) + 'px';
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

// Desktop: mousemove
document.addEventListener('mousemove', e => {
  createImageAt(e.clientX, e.clientY);
});

// Mobile: touchstart
document.addEventListener('touchstart', e => {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    createImageAt(touch.clientX, touch.clientY);
  }
});

// Mobile: touchmove
document.addEventListener('touchmove', e => {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    createImageAt(touch.clientX, touch.clientY);
  }
}, { passive: true });

// Click sullo sfondo torna alla home
document.body.addEventListener('click', e => {
  if (e.target === overlay) {
    window.location.href = 'index.html';
  }
});
</script>
