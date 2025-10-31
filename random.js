document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('gallery-overlay');
  const imageFolder = 'img/random_gallery/';
  const imageExtensions = ['.jpg', '.png'];
  const totalImages = 20; // cambia in base al numero reale di file

  function getRandomImage() {
    const index = Math.floor(Math.random() * totalImages) + 1;
    const ext = imageExtensions[Math.floor(Math.random() * imageExtensions.length)];
    return `${imageFolder}img${index}${ext}`;
  }

  function createImageElement(src, x, y) {
    const img = document.createElement('img');
    img.src = src;
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    img.style.opacity = '0';
    img.style.transform = 'scale(0.5)';
    overlay.appendChild(img);

    // effetto di comparsa
    requestAnimationFrame(() => {
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    });

    // scomparsa dopo 1s
    setTimeout(() => {
      img.style.opacity = '0';
      img.style.transform = 'scale(0.5)';
    }, 1000);

    // rimuovi dopo 1.5s
    setTimeout(() => {
      overlay.removeChild(img);
    }, 1500);
  }

  function showRandomImageAtPosition(x, y) {
    const src = getRandomImage();
    createImageElement(src, x - 100, y - 100);
  }

  // 🖱️ Evento mouse (desktop)
  document.body.addEventListener('mousemove', (e) => {
    showRandomImageAtPosition(e.clientX, e.clientY);
  });

  // 📱 Evento touch (mobile)
  document.body.addEventListener(
    'touchstart',
    (e) => {
      const touch = e.touches[0];
      showRandomImageAtPosition(touch.clientX, touch.clientY);
    },
    { passive: true }
  );

  document.body.addEventListener(
    'touchmove',
    (e) => {
      const touch = e.touches[0];
      showRandomImageAtPosition(touch.clientX, touch.clientY);
    },
    { passive: true }
  );

  // 🔙 Tocca lo sfondo per tornare alla home
  document.body.addEventListener('click', (e) => {
    if (e.target === overlay) {
      window.location.href = 'index.html';
    }
  });
});
