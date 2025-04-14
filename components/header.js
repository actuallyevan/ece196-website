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

    const path = window.location.pathname;
    const page = path.split("/").pop();

    // Highlight current page in nav
    const navLinks = this.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === page) {
        link.classList.add("active");
      }
    });

    // Add scroll event handling for navbar transformation
    this.setupScrollHandler();
  }

  setupScrollHandler() {
    const navbar = document.querySelector(".navbar");

    // Initially add the top class if we're at the top, with no transition
    if (window.scrollY === 0) {
      navbar.classList.add("at-top");
    }

    // Remove the no-transition class after a brief delay to enable transitions after initial load
    setTimeout(() => {
      navbar.classList.remove("no-transition");
    }, 100);

    // Listen for scroll events
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        // At the top of the page
        navbar.classList.add("at-top");
      } else {
        // Scrolled down
        navbar.classList.remove("at-top");
      }
    });
  }
}

customElements.define("site-header", SiteHeader);

// We no longer need to add styles here as they are in critical.css
