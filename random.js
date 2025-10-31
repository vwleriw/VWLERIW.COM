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

// Crea un'immagine e la mostra
function createImageAt(x, y) {
  const randomIndex = Math.floor(Math.random() * images.length);
  const img = document.createElement('img');
  img.src = images[randomIndex];

  img.style.left = (x - 100) + 'px';
  img.style.top = (y - 100) + 'px';
  img.style.opacity = '1';
  img.style.transform = 'scale(1)';

  overlay.appendChild(img);

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

// Mobile: touchstart e touchmove
function handleTouch(e) {
  e.preventDefault(); // blocca lo scroll
  for (let i = 0; i < e.touches.length; i++) {
    const touch = e.touches[i];
    createImageAt(touch.clientX, touch.clientY);
  }
}

// Listener touch con passive: false per poter usare preventDefault
document.addEventListener('touchstart', handleTouch, { passive: false });
document.addEventListener('touchmove', handleTouch, { passive: false });

// Solo desktop: clic sullo sfondo torna a index
document.addEventListener('click', e => {
  if (window.innerWidth > 768 && e.target === overlay) {
    window.location.href = 'index.html';
  }
});
</script>


