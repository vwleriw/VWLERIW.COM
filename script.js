// Variabile per gestire il tema chiaro/scuro
let isChiaro = true;

// Funzione per cambiare il colore dello sfondo e dei bottoni
function cambiaColore() {
  const body = document.body;
  const bottone = document.querySelector("button");

  if (isChiaro) {
    body.style.backgroundColor = "#2F2F2F";
    body.style.color = "#FFFFFF";
    bottone.style.backgroundColor = "#EA9010";
    bottone.style.color = "#000000";
    body.style.backgroundImage = ""; // Rimuove sfondo immagine se presente
  } else {
    body.style.backgroundColor = "#DDDDDD";
    body.style.color = "#2E2E2E";
    bottone.style.backgroundColor = "#2E2E2E";
    bottone.style.color = "#FFFFFF";
    body.style.backgroundImage = ""; // Rimuove sfondo immagine se presente
  }

  isChiaro = !isChiaro; // Toggle per il tema
}

// Funzione per cambiare lo sfondo con un'immagine
function cambiaSfondoImg() {
  const body = document.body;
  body.style.backgroundImage = "url('img/random_01_img.png')";
  body.style.backgroundSize = "100% 100%"; // Sfondo proporzionato alla viewport
  body.style.backgroundPosition = "center";
  body.style.backgroundRepeat = "no-repeat";
  body.style.color = "#ffffff"; // Colore testo bianco per leggibilità
  body.style.backgroundColor = ""; // Rimuove il colore di sfondo fisso
}

// Gestione della visualizzazione dell'immagine con animazione a stella
const btnMostra = document.getElementById("mostra-img-btn");
const contenitoreImg = document.getElementById("contenitore-immagine");

// Mostra immagine con animazione a stella
btnMostra.addEventListener("click", (event) => {
  event.stopPropagation();  // Impedisce la propagazione del click

  contenitoreImg.style.display = "block"; // Mostra il contenitore immagine
  contenitoreImg.classList.remove("nascondi-stella"); // Rimuove l'animazione di uscita
  void contenitoreImg.offsetWidth;  // Forza il reflow
  contenitoreImg.classList.add("mostra-stella"); // Aggiunge l'animazione di entrata
});

// Gestisce il click fuori dall'immagine per nasconderla
document.addEventListener("click", (event) => {
  if (!contenitoreImg.contains(event.target) && event.target !== btnMostra) {
    contenitoreImg.classList.remove("mostra-stella"); // Rimuove animazione di entrata
    contenitoreImg.classList.add("nascondi-stella"); // Aggiunge animazione di uscita

    // Nasconde l'immagine dopo l'animazione
    setTimeout(() => {
      contenitoreImg.style.display = "none";
    }, 700); // Tempo dell'animazione
  }
});

// Collega il bottone "ALTRO" per cambiare lo sfondo in un'immagine
const altroBtn = document.querySelectorAll("button")[1];
altroBtn.addEventListener("click", cambiaSfondoImg);
