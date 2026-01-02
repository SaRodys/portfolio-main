class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-menu p-4">
        <h4><a class="text-clight navhover alternative-font" href="index.html">Sara Rodigari</a></h4>
        <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="custom-toggler-icon">☰</span>
        </button>

        <div class="collapse navbar-collapse bg-menu" id="navbarSupportedContent">
            <hr class="mt-4">
            <ul class="navbar-nav mr-auto pt-3 bg-menu">
            <li class="nav-item bg-menu mb-4">
                <a class="text-clight navhover font-basic" href="index.html">home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item bg-menu mb-4">
                <a class="text-clight navhover font-basic" href="about.html">aboout me</a>
            </li>
            <li class="nav-item bg-menu mb-4">
                <a class="text-clight navhover font-basic" href="progetti.html">progetti</a>
            </li>
            <li class="nav-item bg-menu mb-4">
                <a class="text-clight navhover font-basic" href="contatti.html">contatti</a>
            </li>  
            <li class="bg-transparent">
                <a href="https://www.instagram.com/rodys__/"><img class="bg-transparent" src="./src/instagram_light.png" alt="instagram logo" width="10%"></a>
                <a href="https://www.linkedin.com/in/sara-rodigari-7a56712bb/"><img class="bg-transparent" src="./src/linkedin_light.png" alt="linkedin logo" width="10%"></a>
            </li>   
            </ul>
        </div>
        </nav>
    `;
  }
}
customElements.define("nav-bar", NavBar);
