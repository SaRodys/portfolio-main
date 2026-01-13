const softskills = [
  {
    img: "./src/1.png",
    alt: "Icona messaggi",
    name: "Comunicazione chiara ed efficiente",
  },
  {
    img: "./src/2.png",
    alt: "Icona team",
    name: "Capacità di lavorare in gruppo",
  },
  {
    img: "./src/3.png",
    alt: "Icona puzzle",
    name: "Problem solving",
  },
  {
    img: "./src/4.png",
    alt: "Icona messaggi",
    name: "Gestione del tempo",
  },
  {
    img: "./src/5.png",
    alt: "Icona team",
    name: "Leadership",
  },
  {
    img: "./src/6.png",
    alt: "Icona puzzle",
    name: "Autonomia",
  }
];

const softskillsSection = document.getElementById("softskills-section");

softskillsSection.innerHTML = `
<div class="progetti m-3 p-3 border-box box-shadow rounded-4 ml-lg-0">
    <h2>Soft skills</h2>
    <div>
      <div class="row pl-1 pr-1 justify-content-center">
        ${softskills.map(softskil => `
<div class="col-6 text-center mt-4">
  <div class="row justify-content-center">
    <div class="col-5 col-lg-3">
      <img class="img-fluid rounded-circle mb-2 softskill-img" src="${softskil.img}" alt="${softskil.alt}">
    </div>
    <p class="col-12 col-lg-9">${softskil.name}</p>
  </div>
</div>

    `).join("")}
`;
