<script>
  const overlay = document.getElementById('gallery-overlay');

  // lista immagini (jpg o png, nomi liberi)
  const imageFolder = 'img/random_gallery/';
  const totalImages = 10; // metti qui il numero reale delle immagini nella cartella
  const extensions = ['.jpg', '.png'];

  function randomImage() {
    const n = Math.floor(Math.random() * totalImages) + 1;
    const ext = extensions[Math.floor(Math.random() * extensions.length)];
    return `${imageFolder}img${n}${ext}`;
  }

  function createImage(x, y) {
    const img = document.createElement('img');
    img.src = randomImage();
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

  // movimento mouse (desktop)
  document.addEventListener('mousemove', e => {
    createImage(e.clientX, e.clientY);
  });

  // touchmove (mobile)
  document.addEventListener('touchmove', e => {
    const t = e.touches[0];
    createImage(t.clientX, t.clientY);
  }, { passive: true });

  // touchstart (tocco iniziale)
  document.addEventListener('touchstart', e => {
    const t = e.touches[0];
    createImage(t.clientX, t.clientY);
  }, { passive: true });

  // clic/tap sullo sfondo torna alla home
  document.body.addEventListener('click', e => {
    if (e.target === overlay) {
      window.location.href = 'index.html';
    }
  });
</script>
