const formazioni = [
  {
    anno: "2020",
    titolo: "Diploma Istituto Tecnico Commerciale",
    votazione: "100/100",
    istituto: "Istituto d'Istruzione Superiore Alberti di Bormio (SO)"
  },
  {
    anno: "2024",
    titolo: "Laurea in Discipline delle arti, della musica e dello spettacolo (DAMS)",
    extra: "Curriculum in produzioni digitali",
    votazione: "104/110",
    istituto: "Università degli Studi di Torino (TO)"
  },
  {
    anno: "2025",
    titolo: "Master in progettazione della comunicazione digitale - Digital Communication Design",
    votazione: "110L/110",
    istituto: "Università degli Studi di Torino (TO)"
  }
];

const container = document.getElementById("formazioni");

formazioni.forEach(formazione => {

  container.innerHTML += `
  <div class="col-12 col-lg-4 lineaTempo p-lg-4 text-lg-center">
      <p class="pl-3">${formazione.anno} - 
          <strong>${formazione.titolo}</strong>
          ${formazione.extra ? `<br><span>${formazione.extra}</span>` : ""}
          <br>Votazione ${formazione.votazione}
          <br><span class="sottotesto">${formazione.istituto}</span>
      </p>
      <span class="puntino"></span>
  </div>
  `;

 
});

