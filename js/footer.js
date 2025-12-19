class FooterBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-menu p-4">
        <div class="bg-menu mt-5">
            <h2 class="bg-menu text-clight">Contatti</h2>
            <a href="mailto:sararodigari01@gmail.com" class="text-clight footerhover">sararodigari01@gmail.com</a>
            <br>
            <a href="tel:+393486918180" class="text-clight footerhover">+39 348 691 8180</a>
        </div>
        <hr class="mt-4 mb-4">
        <div class="bg-menu">
            <h2 class="bg-menu text-clight">Social</h2>
            <a href="https://www.instagram.com/rodys__/" class="text-clight footerhover">Instagram: rodys__</a>
            <br>
            <a href="https://www.linkedin.com/in/sara-rodigari-7a56712bb/" class="text-clight footerhover">Linkedin: Sara Rodigari</a>
        </div>
        <hr class="mt-4 mb-4">
        <div class="bg-menu">
            <h2 class="bg-menu text-clight">Portfolio</h2>

            <div class="container">
                <div class="row bg-menu">
                    <div class="col-6 col-md-3 bg-menu p-0">
                        <a href="index.html" class="text-clight footerhover">home</a>
                    </div>

                    <div class="col-6 col-md-3 bg-menu p-0">
                        <a href="about.html" class="text-clight footerhover">about me</a>
                    </div>

                    <div class="col-6 col-md-3 bg-menu p-0">
                        <a href="progetti.html" class="text-clight footerhover">progetti</a>
                    </div>

                    <div class="col-6 col-md-3 bg-menu p-0">
                        <a href="contatti.html" class="text-clight footerhover">contatti</a>
                    </div>
                </div>
            </div>
        </div>
        <hr class="mt-4 mb-4">
        <h3 class="bg-menu text-clight">© 2025 - Sara Rodigari - Tutti i diritti riservati</h3>
      </footer>
    `;
  }
}

customElements.define("footer-bar", FooterBar);
