<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Random Gallery</title>
  <link rel="stylesheet" href="style.css" />
  
  <style>
    @font-face {
      font-family: 'Karrik';
      src: url('fonts/Karrik-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    body {
      background-color: #595959;
      margin: 0;
      height: 100vh;
      overflow: hidden;
      cursor: crosshair;
      font-family: 'Karrik', sans-serif;
    }

    #gallery-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      overflow: hidden;
      z-index: 1;
    }

    #gallery-overlay img {
      position: absolute;
      width: 200px;
      height: 200px;
      object-fit: cover;
      pointer-events: none;
      opacity: 0;
      transform: scale(0.5);
      transition: transform 0.5s ease, opacity 0.5s ease;
    }
  </style>
</head>
<body>

  <div id="gallery-overlay"></div>

  <script>
    const overlay = document.getElementById('gallery-overlay');

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

    function createImageElement(src, x, y) {
      const img = document.createElement('img');
      img.src = src;
      img.style.left = x + 'px';
      img.style.top = y + 'px';
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
      return img;
    }

    function showRandomImage(x, y) {
      const randomIndex = Math.floor(Math.random() * images.length);
      const src = images[randomIndex];
      const img = createImageElement(src, x - 100, y - 100); // centrato

      overlay.appendChild(img);

      setTimeout(() => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.5)';
      }, 1000);

      setTimeout(() => {
        if (img.parentNode) overlay.removeChild(img);
      }, 1500);
    }

    // Desktop
    document.addEventListener('mousemove', e => {
      showRandomImage(e.clientX, e.clientY);
    });

    // Mobile
    function handleTouch(e) {
      e.preventDefault(); // blocca lo scroll
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        showRandomImage(touch.clientX, touch.clientY);
      }
    }

    document.addEventListener('touchstart', handleTouch, { passive: false });
    document.addEventListener('touchmove', handleTouch, { passive: false });

  </script>
</body>
</html>
