const skills = [
  {
    img: "./src/adobe illustrator.png",
    name: "Adobe<br>Illustrator",
    stars: 5
  },
  {
    img: "./src/adobe Lightroom.png",
    name: "Adobe<br>Lightroom",
    stars: 3
  },
  {
    img: "./src/adobe photoshop.png",
    name: "Adobe<br>Photoshop",
    stars: 4
  },
  {
    img: "./src/adobe_premiere_16368.png",
    name: "Adobe<br>Premiere<br>Pro",
    stars: 3
  },
  {
    img: "./src/blender.webp",
    name: "Blender",
    stars: 4
  },
  {
    img: "./src/canva.png",
    name: "Canva",
    stars: 5
  },
  {
    img: "./src/davinci.png",
    name: "DaVinci<br>Resolve",
    stars: 3
  },
  {
    img: "./src/figma.png",
    name: "Figma",
    stars: 3
  },
  {
    img: "./src/html.webp",
    name: "HTML,<br>CSS,<br>JavaScript",
    stars: 4
  },
  {
    img: "./src/meta.png",
    name: "Meta",
    stars: 5
  },
  {
    img: "./src/microsoft office.png",
    name: "Microsoft<br>Office",
    stars: 5
  },
  {
    img: "./src/vue.png",
    name: "Vue",
    stars: 2
  }
];

const container = document.getElementById("skills");

skills.forEach(skill => {
  const stars = "★".repeat(skill.stars);

  container.innerHTML += `
    <div class="col-3 col-sm-2 col-md-1 text-center">
      <div class="row mb-4">
        <div class="col-12">
          <img src="${skill.img}" class="rounded-circle mb-2 img-fluid" style="max-width:70%;">
        </div>
        <div class="col-12">
          <h3 class="h6">${skill.name}</h3>
        </div>
        <div class="col-12">
          <p class="mb-0">${stars}</p>
        </div>
      </div>
    </div>
  `;
});
