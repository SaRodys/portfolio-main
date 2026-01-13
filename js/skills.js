const skills = [
  {
    img: "./src/adobe illustrator.png",
    name: "Adobe<br>Illustrator",
    stars: 5,
    description: "Software utilizzato per la grafica vettoriale, che permette di creare loghi, icone, illustrazioni, packaging e grafiche."
  },
  {
    img: "./src/adobe Lightroom.png",
    name: "Adobe<br>Lightroom",
    stars: 3,
    description: "Software di gestione e fotoritocco che permette di organizzare, modificare, archiviare e condividere immagini."
  },
  {
    img: "./src/adobe photoshop.png",
    name: "Adobe<br>Photoshop",
    stars: 4,
    description: "Software professionale che serve principalmente per modificare, ritoccare e creare immagini digitali."
  },
  {
    img: "./src/adobe_premiere_16368.png",
    name: "Adobe<br>Premiere<br>Pro",
    stars: 3,
    description: "Software di montaggio video che permette di modificare clip, aggiungere effetti visivi e sonori, creare titoli animati e gestire l'audio."
  },
  {
    img: "./src/html.webp",
    name: "HTML,<br>CSS,<br>JavaScript",
    stars: 4,
    description: "Strumenti essenziali per lo sviluppo web front-end per definire la struttura, lo stile, il design e l'interattività e dinamicità."
  },
  {
    img: "./src/meta.png",
    name: "Meta<br>Business<br>Suite",
    stars: 5,
    description: "Piattaforma di Meta che permette ad aziende e creator di gestire account Instrgram e Facebook e monitorare le loro performance."
  },
  {
    img: "./src/blender.webp",
    name: "Blender",
    stars: 4,
    description: "Software open-source per la modellazione, animazione 3D ed effetti visivi."
  },
  {
    img: "./src/canva.png",
    name: "Canva",
    stars: 5,
    description: "Piattaforma online di progettazione grafica per creare contenuti visivi professionali, presentazioni, poster, video, documenti ecc.."
  },
  {
    img: "./src/figma.png",
    name: "Figma",
    stars: 3,
    description: "Piattaforma di progettazione grafica e prototipazione UI/UX."
  },
  {
    img: "./src/microsoft office.png",
    name: "Microsoft<br>Office",
    stars: 5,
    description: "Suite di produttività che offre le applicazioni di Word, Excel, Power Point e Outlook."
  },
  
  {
    img: "./src/vue.png",
    name: "Vue",
    stars: 2,
    description: "Framework Javascript utilizzato per costruire interfacce utente e applicazioni web dinamiche."
  },
  {
    img: "./src/davinci.png",
    name: "DaVinci<br>Resolve",
    stars: 3,
    description: "Software per la post-produzione video, che integra montaggio, correzione colore, effetti visivi, grafica in movimento e missaggio audio."
  },
  {
    img: "./src/gimp.png",
    name: "Gimp",
    stars: 4,
    description: "Software per la manipolazione e creazione di immagini digitali."
  },
    {
    img: "./src/google.png",
    name: "Google Workspace",
    stars: 5,
    description: "Suite di strumenti di produttività e collaborazione, include google docs, gmail, meet, drive ecc.."
  },
    {
    img: "./src/analytics.png",
    name: "Google Analytics",
    stars: 4,
    description: "Piattaforma di analisi web che raccoglie, analizza e presenta dati sul comportamento degli utenti sui siti web e nelle app."
  },
    {
    img: "./src/wix.png",
    name: "Wix",
    stars: 4,
    description: "Piattaforma online per creare, gestire e sviluppare siti web profeessionali."
  },
  {
    img: "./src/wordpress.png",
    name: "Wordpress",
    stars: 3,
    description: "Sistema di gestione contenuti (CSM) che permette di creare e gestire siti web e blog."
  },
  {
    img: "./src/trello.png",
    name: "Trello",
    stars: 5,
    description: "Strumento di gestione del lavoro che aiuta team a organizzare progetti e flussi di lavoro in modo collaborativo e produttivo."
  }
];

const container = document.getElementById("skills");

skills.forEach(skill => {
  const stars = "★".repeat(skill.stars);

  container.innerHTML += `
    <div class="col-4 col-sm-2 col-md-2 col-lg-2">
      <div class="row mb-4">
        <div class="col-12 position-relative skill-item text-center">
          <img src="${skill.img}" 
               class="rounded-circle mb-2 img-fluid skill-img" 
               style="max-width:70%;">
          <div class="skill-tooltip rounded d-none d-lg-block">
            ${skill.description}
          </div>
        </div>
        <div class="col-12">
          <h6 class="text-center">${skill.name}</h6>
        </div>
        <div class="col-12">
          <p class="mb-0 text-center mb-4">${stars}</p>
        </div>
      </div>
    </div>
  `;
});

