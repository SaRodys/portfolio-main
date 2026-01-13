const webDesignItems = [
  {
    title: "Gruppo Petrà",
    description: "Il Gruppo Petrà opera nel settore della produzione di serramenti in alluminio e PVC. Mi sono occupata della progettazione del design del sito web, partendo dalla palette cromatica e dallo stile geometrico definiti dalla visual identity aziendale, per poi sviluppare una piattaforma dinamica, minimale e dal linguaggio visivo professionale. La scelta di un tema scuro e l’utilizzo della forma esagonale richiamano i valori della brand identity, che mira a integrare un design elegante con la funzionalità e l’affidabilità di serramenti di alta qualità.",
    imgDesktop: "src/Frame 1.png",
    imgMobile: "src/Frame 1b.png",
    alt: "moodboard web design Gruppo Petrà",
    classes: { mobile: "border-box", desktop: "border-box" }
  },
  {
    title: "Area Italia",
    description: "Area Italia è un’azienda che si occupa di installare sistemi di allarme e videosorveglianza sui ponteggi. I valori da trasmettere sono affidabilità, serietà ed esperienza, motivo per cui per realizzre il sito web ho scelto uno stile lineare, semplice e professionale. La struttura geometrica regolare  su sfondo bianco trasmette rigidità e chiarezza, riprendendo la professionalità e la precisione dei servizi offerti.",
    imgDesktop: "src/Frame 2.png",
    imgMobile: "src/Frame 2b.png",
    alt: "moodboard web design Area Italia",
    classes: { mobile: "bg-menu text-clight", desktop: "bg-menu text-clight change-img" }
  },
  {
    title: "Allarme Casa",
    description: "Allarme Casa è un’azienda specializzata nella sicurezza, offrendo servizi di antifurti, sistemi di videosorveglianza e portoni blindati. Il rosso è alla base della palette di colori per richiamare il senso di urgenza e, nella sua tonalità scura, evocare sicurezza e affidabilità. Le forme regolari, spigolose e geometriche veicolano valori di precisione e attenzione. La compattezza dei pulsanti e la semplicità della struttura rendono i testi più chiari e facilitano la navigazione.",
    imgDesktop: "src/Frame 3.png",
    imgMobile: "src/Frame 3b.png",
    alt: "moodboard web design Allarme Casa",
    classes: { mobile: "border-box", desktop: "border-box" }
  },
  {
    title: "Home Garden",
    description: "Home Garden è un blog pensato per appassionati di giardinaggio che offre consigli sulla cura delle piante e sulle condizioni ideali per la loro crescita. La palette di colori richiama il mondo naturale, mentre struttura ed estetica si ispirano a diari e album fotografici, affiancando testi, fotografie e ritagli di giornale. Il sito si presenta come una raccolta di appunti raccolti e condivisi nel tempo da un appassionato.",
    extra: "Progetto realizzato durante il Master in Digital Communication Design.",
    imgDesktop: "src/Frame 4.png",
    imgMobile: "src/Frame 4b.png",
    alt: "moodboard web design Home Garden",
    classes: { mobile: "bg-menu text-clight", desktop: "bg-menu text-clight" }
  },
{
    title: "Home Garden 2.0",
    description: "Home Garden 2.0 è l’evoluzione della versione precedente, che da semplice blog diventa un e-commerce per l’acquisto online di piante. La palette di colori conserva i richiami naturalistici, ma con toni più scuri per un’estetica più elegante e per suscitare un’atmosfera rilassante. Il passaggio a e-shop richiede un tono più serio, volto a comunicare affidabilità e professionalità all’utente, motivo per cui sono stati rimosse le illustrazioni e i segni grafici.",
    extra: "Progetto realizzato durante il Master in Digital Communication Design.",
    imgDesktop: "src/Frame 5.png",
    imgMobile: "src/Frame 5b.png",
    alt: "moodboard web design Home Garden 2.0",
    classes: { mobile: "border-box", desktop: "border-box" }
  },
  {
    title: "Food Finder",
    description: "Per un progetto JavaScript ho realizzato un piccolo programma che permette di visualizzare gli ingredienti di alcune ricette e di filtrare i piatti in base ad allergie o intolleranze. Il progetto è pensato per un pubblico di bambini, con l’obiettivo di rendere la scelta dei piatti più piacevole e divertente.  La palette di colori richiama la rusticità dei menù delle trattorie, abbinata a font che ricordano la scrittura corsvia manuale, per enfatizzare un tratto giocoso coerente con il target di riferimento.",
    extra: "Progetto realizzato durante il Master in Digital Communication Design.",
    imgDesktop: "src/Frame 6.png",
    imgMobile: "src/Frame 6b.png",
    alt: "moodboard web design Food Finder",
    classes: { mobile: "bg-menu text-clight", desktop: "bg-menu text-clight" }
  }
];

const contenitore = document.getElementById("web-design-list");

function renderWebDesign(items) {
  contenitore.innerHTML = items.map((item, index) => `
  <!-- MOBILE -->
<div class="web-design mt-5 ${item.classes.mobile} rounded-4 pt-4 d-block d-md-none mb-5 mobile-box" data-index="${index}">
  <h2 class="reduce-font mb-3">${item.title}</h2>
  <div class="flip-card rounded-4 p-3 bg-transparent">
    <div class="flip-card-inner">
      <!-- FRONT: immagine -->
      <div class="flip-card-front rounded-4">
        <img src="${item.imgMobile}" alt="${item.alt}" width="100%">
      </div>
      <!-- BACK: descrizione -->
      <div class="flip-card-back rounded-4 bg-menu p-3">
        <p class="text-clight text-start">${item.description}
        ${item.extra ? `<br><br><span class="fst-italic">${item.extra}</span>` : ""}</p>
      </div>
    </div>
  </div>
</div>

<!-- DESKTOP -->
<div class="web-design contenitore text-left d-none d-md-block ${item.classes.desktop} rounded-4 pt-4 mb-5">
  <div class="row align-items-center ${index % 2 !== 0 ? "flex-row-reverse" : ""}">
    
    <div class="col-5 p-4">
      <h2 class="reduce-font mb-4">${item.title}</h2>
      <p>
        ${item.description}
        ${item.extra ? `<br><br><span class="fst-italic">${item.extra}</span>` : ""}
      </p>
    </div>

    <div class="col-7 m-0">
      <img src="${item.imgDesktop}" alt="${item.alt}" width="100%">
    </div>

  </div>
</div>

`).join("");


  // TOGGLE solo MOBILE dopo il render
  document.querySelectorAll(".mobile-box").forEach(box => {
    box.addEventListener("click", () => {
      const desc = box.querySelector(".mobile-description");
      // toggle display
      if(desc.style.display === "none") {
        desc.style.display = "block";
      } else {
        desc.style.display = "none";
      }
      box.classList.toggle("expanded");
    });
  });

  // TOGGLE solo MOBILE dopo il render
document.querySelectorAll(".mobile-box").forEach(box => {
  box.addEventListener("click", () => {
    box.classList.toggle("expanded");
  });
});


}

// Renderizza
renderWebDesign(webDesignItems);
