document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("timeline");

  timeline.forEach(item => {
    container.innerHTML += `
      <div class="col-12 col-lg-4 lineaTempo pb-5 align-self-center align-self-lg-start">
        <div class="row align-items-center mt-lg-4">
          <div class="col-4 col-md-3">
            <img class="rounded" src="${item.img}" alt="${item.alt}" width="100%">
          </div>
          <div class="col-8 ml-0 p-0">
            <p>
              <span class="sottotesto">${item.period}</span><br>
              <strong>${item.title}</strong><br>
              ${item.subtitle}
              ${item.extra ? `<br><span class="sottotesto">${item.extra}</span>` : ""}
            </p>
          </div>
        </div>

        <div class="dettagli mt-3 text-lg-center">
          <p>${item.description}</p>
        </div>

        <span class="puntinoExpand"></span>
      </div>
    `;
  });

  // toggle apertura
  document.querySelectorAll(".puntinoExpand").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".lineaTempo").classList.toggle("aperto");
    });
  });
});
