document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('gallery-overlay');
  if (!overlay) return;

  const imageFolder = 'img/random_gallery/';
  const imageExtensions = ['.jpg', '.png'];
  const totalImages = 20; // SETTA questo al numero reale di immagini nella cartella
  const spawnPerEvent = 2; // quante immagini generare per ogni scroll (regola se serve)
  const minIntervalMs = 250; // minimo intervallo fra spawn (throttle)
  const imageSizeDesktop = 200;
  const imageSizeMobile = 120;

  let lastSpawn = 0;

  function getRandomImage() {
    const idx = Math.floor(Math.random() * totalImages) + 1;
    const ext = imageExtensions[Math.floor(Math.random() * imageExtensions.length)];
    return `${imageFolder}img${idx}${ext}`;
  }

  function createImageElement(src, x, y) {
    const img = document.createElement('img');
    img.src = src;
    img.style.position = 'absolute';
    img.style.left = `${Math.max(0, Math.min(window.innerWidth - 10, x))}px`;
    img.style.top = `${Math.max(0, Math.min(window.innerHeight - 10, y))}px`;
    const size = (window.innerWidth < 600) ? imageSizeMobile : imageSizeDesktop;
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.objectFit = 'cover';
    img.style.borderRadius = '6px';
    img.style.boxShadow = '0 6px 18px rgba(0,0,0,0.25)';
    img.style.opacity = '0';
    img.style.transform = 'scale(0.6)';
    img.style.transition = 'transform 400ms ease, opacity 400ms ease';
    img.style.pointerEvents = 'none';
    overlay.appendChild(img);

    // apparizione con RAF per essere fluidi
    requestAnimationFrame(() => {
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    });

    // scomparsa e rimozione
    setTimeout(() => {
      img.style.opacity = '0';
      img.style.transform = 'scale(0.6)';
    }, 1200);

    setTimeout(() => {
      if (img.parentNode) overlay.removeChild(img);
    }, 1700);
  }

  // genera alcune immagini in posizioni random entro il viewport
  function spawnImagesFromScroll() {
    const now = Date.now();
    if (now - lastSpawn < minIntervalMs) return; // throttle
    lastSpawn = now;

    for (let i = 0; i < spawnPerEvent; i++) {
      // posizioni casuali preferibilmente vicine al centro verticale dello schermo
      const x = Math.random() * window.innerWidth;
      // per lo scroll, facciamo apparire le immagini in una banda verticale centrale
      const y = (window.innerHeight * 0.2) + Math.random() * (window.innerHeight * 0.6);
      const src = getRandomImage();
      createImageElement(src, x, y);
    }
  }

  // === Event listeners ===
  // desktop: anche scroll
  window.addEventListener('scroll', spawnImagesFromScroll, { passive: true });

  // mobile: touchstart & touchmove (fallback)
  window.addEventListener('touchstart', (e) => {
    // spawn subito al primo tocco
    const t = e.touches && e.touches[0];
    if (t) {
      // spawn vicino alla posizione del tocco
      for (let i = 0; i < spawnPerEvent; i++) {
        const jitterX = (Math.random() - 0.5) * 120;
        const jitterY = (Math.random() - 0.5) * 120;
        const src = getRandomImage();
        createImageElement(src, t.clientX + jitterX - 100, t.clientY + jitterY - 100);
      }
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    // spawn mentre scroll/touchmove
    spawnImagesFromScroll();
  }, { passive: true });

  // click/tap sullo sfondo per tornare (mantieni comportamento precedente)
  document.body.addEventListener('click', (e) => {
    if (e.target === overlay) {
      window.location.href = 'index.html';
    }
  });
});
