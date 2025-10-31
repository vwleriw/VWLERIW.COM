document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('gallery-overlay');
  const imageFolder = 'img/random_gallery/';
  const imageExtensions = ['.jpg', '.png'];

  // 🔄 Recupera automaticamente tutte le immagini nella cartella
  // (non possiamo leggere il file system, quindi generiamo un set casuale)
  const totalImages = 20; // imposta qui quanti file circa ci sono nella cartella

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

    // effetto apparizione
    requestAnimationFrame(() => {
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    });

    // dissolvenza e rimozione dopo 1,5 sec
    setTimeout(() => {
      img.style.opacity = '0';
      img.style.transform = 'scale(0.5)';
    }, 1000);

    setTimeout(() => {
      overlay.removeChild(img);
    }, 1500);
  }

  // 📱 Funzione comune per mouse e touch
  function showRandomImage(e) {
    let x, y;
    if (e.touches && e.touches.length > 0) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }

    const src = getRandomImage();
    createImageElement(src, x - 100, y - 100);
  }

  // 🖱️ PC
  document.body.addEventListener('mousemove', showRandomImage);

  // 📱 Mobile / tablet
  document.body.addEventListener('touchmove', showRandomImage);

  // 🔙 Tap o click sullo sfondo → torna alla home
  document.body.addEventListener('click', (e) => {
    if (e.target === overlay) {
      location.href = 'index.html';
    }
  });
});
