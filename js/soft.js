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
<div class="progetti m-3 p-3 border-box rounded">
    <h2>Soft skills</h2>
    <div class="row pl-1 pr-1">
      ${softskills.map(softskil => `
        <div class="col-6 text-center mt-4">
          <img class="rounded-circle w-25 mb-2" src="${softskil.img}" alt="${softskil.alt}">
          <p>${softskil.name}</p>
        </div>
    `).join("")}
`;
