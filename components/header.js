class SiteHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="nav-container">
          <nav class="navbar no-transition">
            <div class="nav-logo">ECE 196 Team 6</div>
            <div class="nav-links">
              <a href="index.html" class="nav-link">Home</a>
              <a href="team.html" class="nav-link">Team</a>
              <a href="problem.html" class="nav-link">Problem</a>
            </div>
          </nav>
        </div>
      </header>
    `;

    this.highlightCurrentPage();
    this.setupScrollHandler();
  }

  highlightCurrentPage() {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const navLinks = this.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === page) {
        link.classList.add("active");
      }
    });
  }

  setupScrollHandler() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY === 0) {
      navbar.classList.add("at-top");
    }

    setTimeout(() => {
      navbar.classList.remove("no-transition");
    }, 100);

    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        navbar.classList.add("at-top");
      } else {
        navbar.classList.remove("at-top");
      }
    });
  }
}

customElements.define("site-header", SiteHeader);
