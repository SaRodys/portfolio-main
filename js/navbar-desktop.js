class NavBarDesktop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar bg-menu justify-content-center p-0 pl-5 pr-0">
        <ul class="row align-items-center list-unstyled bg-menu menu-desktop p-2 m-0">
          <li class="bg-menu p-1 col-2">
            <a class="text-clight navhover bg-menu p-0 m-0 text-decoration-underline font-basic" href="index.html">HOME</a>
          </li>
          <li class="text-clight col-1">|</li>
          <li class="bg-menu p-1 col-2">
            <a class="text-clight navhover bg-menu p-0 m-0 text-decoration-underline font-basic" href="about.html">CHI SONO</a>
          </li>
          <li class="text-clight col-1">|</li>
          <li class="bg-menu p-1 col-2">
            <a class="text-clight navhover bg-menu p-0 m-0 text-decoration-underline font-basic" href="progetti.html">PROGETTI</a>
          </li>
          <li class="text-clight col-1">|</li>
          <li class="bg-menu p-1 col-2">
            <a class="text-clight navhover bg-menu p-0 m-0 text-decoration-underline font-basic" href="contatti.html">CONTATTI</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("nav-bar-desktop", NavBarDesktop);
