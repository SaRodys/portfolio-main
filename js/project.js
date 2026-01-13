const sliderItems = [
  {
    title: "WEB DESIGN",
    image: "./src/web2.png"
  },
  {
    title: "MARKETING STRATEGIST",
    image: "./src/marketing.png"
  },
  {
    title: "REGIA E MONTAGGIO",
    image: "./src/cinema.png"
  },
  {
    title: "PROGETTAZIONE APP",
    image: "./src/app3.png"
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    image: "./src/social.png"
  },
  {
    title: "SCENOGRAFIA TEATRALE",
    image: "./src/scenografia.png"
  },
  {
    title: "GRAFICA 3D",
    image: "./src//grafica.png"
  }
];


const visibleCards = 5;

const container = document.getElementById("sliderContainer");

container.innerHTML = `
  <div class="slider-wrapper position-relative">
    <button class="slider-btn bg-menu border-0 p-lg-2 pl-lg-3 pr-lg-3 rounded-4 left">‹</button>

    <div class="slider-viewport pt-lg-4 pb-lg-4">
      <div class="slider-track" id="sliderTrack">
        ${sliderItems
          .map(
            item => `
              <div class="slider-card border-box box-shadow rounded-4 p-4 text-center justify-content-center d-flex flex-column align-items-center">
                <img src="${item.image}" alt="${item.title}" class="slider-img mb-3 d-none d-md-block d-lg-block" width="auto" height="120rem"
                >
                <div class="slider-title p-0"><p class="p-0 m-0">${item.title}</p></div>
              </div>
            `
          )
          .join("")}
      </div>
    </div>

    <button class="slider-btn bg-menu border-0 p-lg-2 pl-lg-3 pr-lg-3 rounded-4 right">›</button>
  </div>
`;

const track = document.getElementById("sliderTrack");
let cards = Array.from(track.children);

let index = visibleCards;

const firstClones = cards.slice(0, visibleCards).map(card => card.cloneNode(true));
const lastClones = cards.slice(-visibleCards).map(card => card.cloneNode(true));

firstClones.forEach(clone => track.appendChild(clone));
lastClones.forEach(clone => track.insertBefore(clone, track.firstChild));

cards = Array.from(track.children);

const cardWidth = cards[0].offsetWidth + 20;

track.style.transform = `translateX(-${cardWidth * index}px)`;

function slide(direction) {
  index += direction;

  track.style.transition = "transform 0.4s ease";
  track.style.transform = `translateX(-${cardWidth * index}px)`;

  track.addEventListener("transitionend", resetPosition, { once: true });
}

function resetPosition() {
  if (index >= cards.length - visibleCards) {
    index = visibleCards;
    jump();
  }

  if (index <= 0) {
    index = cards.length - visibleCards * 2;
    jump();
  }
}

function jump() {
  track.style.transition = "none";
  track.style.transform = `translateX(-${cardWidth * index}px)`;
}

container.querySelector(".slider-btn.left").addEventListener("click", () => slide(-1));
container.querySelector(".slider-btn.right").addEventListener("click", () => slide(1));
