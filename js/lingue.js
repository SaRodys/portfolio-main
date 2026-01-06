const lingue = [
  {
    img: "./src/ita.png",
    alt: "Bandiera italiana",
    name: "Italiano",
    level: "Madrelingua"
  },
  {
    img: "./src/en.jpg",
    alt: "Bandiera inglese",
    name: "Inglese",
    level: "Intermedio"
  },
  {
    img: "./src/fr.png",
    alt: "Bandiera francese",
    name: "Francese",
    level: "Base"
  },
];

const lingueSection = document.getElementById("lingue-section");

lingueSection.innerHTML = `
    ${lingue.map(lingua => `
      <div class="mt-4 ml-3 d-flex align-items-start">
        <img class="col-2 rounded-circle" src="${lingua.img}" alt="${lingua.alt}">
        <p class="col-8">
          ${lingua.name}: <strong>${lingua.level}</strong>
        </p>
      </div>
    `).join("")}
`;
