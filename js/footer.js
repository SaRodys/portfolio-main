class FooterBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-menu p-4 justify-content-center text-center row m-0">
        <div class="bg-menu mt-5 mb-5 col-12 col-lg-4 text-lg-center m-lg-0 ">
            <h2 class="bg-menu text-clight p-lg-4 reduce-font alternative-font">Contatti</h2>
            <a href="mailto:sararodigari01@gmail.com" class="text-clight footerhover">sararodigari01@gmail.com</a>
            <br>
            <a href="tel:+393486918180" class="text-clight footerhover">+39 348 691 8180</a>
        </div>

        <div class="bg-menu mb-5 col-12 col-lg-4 text-lg-center border-lg-start border-lg-end pb-lg-5">
            <h2 class="bg-menu text-clight p-lg-4 reduce-font alternative-font">Social</h2>
            <a href="https://www.instagram.com/rodys__/" class="text-clight footerhover">Instagram: rodys__</a>
            <br>
            <a href="https://www.linkedin.com/in/sara-rodigari-7a56712bb/" class="text-clight footerhover">Linkedin: Sara Rodigari</a>
        </div>

        <div class="bg-menu mb-5 col-12 col-lg-4 text-lg-center">
            <h2 class="bg-menu text-clight p-lg-4 reduce-font alternative-font">Portfolio</h2>

            <div class="container">
                <div class="row bg-menu">
                    <div class="col-6 col-md-3 col-lg-6 bg-menu p-0">
                        <a href="index.html" class="text-clight footerhover">home</a>
                    </div>

                    <div class="col-6 col-md-3 col-lg-6 bg-menu p-0">
                        <a href="about.html" class="text-clight footerhover">chi sono</a>
                    </div>

                    <div class="col-6 col-md-3 col-lg-6 bg-menu p-0">
                        <a href="progetti.html" class="text-clight footerhover">progetti</a>
                    </div>

                    <div class="col-6 col-md-3 col-lg-6 bg-menu p-0">
                        <a href="contatti.html" class="text-clight footerhover">contatti</a>
                    </div>
                </div>
            </div>
        </div>

        <h6 class="bg-menu text-clight col-12 alternative-font">© 2025 - Sara Rodigari - Tutti i diritti riservati</h6>
        <h6 class="bg-menu text-clight col-12 alternative-font">Sito web realizzato da Sara Rodigari</h6>
      </footer>
    `;
  }
}

customElements.define("footer-bar", FooterBar);
