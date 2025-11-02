/* Reset base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Import font locale Karrik */
@font-face {
  font-family: 'Karrik';
  src: url('fonts/Karrik-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

/* Corpo pagina */
body {
  font-family: 'Karrik', sans-serif;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

/* Immagine principale */
.main-img {
  max-width: 10%;
  height: auto;
  margin-bottom: 40px;
}

/* Contenitore bottoni in colonna */
.bottone-wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
}

/* Stile bottoni */
button {
  border: 1px solid black;
  padding: 12px 30px;
  font-size: 18px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Karrik', sans-serif;
  text-transform: uppercase;
  background-color: transparent;
  color: #000;
}

/* Hover: cambia colore in palette */
button:hover {
  background-color: #92FC42;
  color: #000;
}

/* Focus accessibility sui bottoni */
button:focus {
  outline: 2px solid #92FC42;
  outline-offset: 3px;
}

/* Form contatti */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  margin: 40px auto 0;
}

.contact-form input,
.contact-form textarea {
  font-family: 'Karrik', sans-serif;
  font-size: 16px;
  padding: 12px;
  border: 1px solid #aaa;
  border-radius: 10px;
  resize: vertical;
}

.contact-form button {
  padding: 12px;
  font-size: 16px;
  background-color: #2F2F2F;
  color: white;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
}

.contact-form button:hover {
  background-color: #92FC42;
  color: #000;
}

/* Sezione Random Gallery */
header h1 {
  margin-bottom: 20px;
}

/* Contenitore a griglia per immagini quadrate */
.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
}

/* Box per ogni immagine */
.image-box {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 100%; /* mantiene quadrato */
}

/* Immagine dentro il box */
.image-box img {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease;
  filter: brightness(0.95);
}

/* Overlay leggero al passaggio del mouse */
.image-box::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.15);
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Effetto al passaggio del mouse */
.image-box:hover img {
  transform: scale(1.1); /* zoom */
  filter: brightness(1);
}

.image-box:hover::before {
  opacity: 1;
}

/* Overlay per gallery random (immagini generate dinamicamente) */
#gallery-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: #f9f9f9;
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
