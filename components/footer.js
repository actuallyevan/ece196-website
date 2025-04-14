class SiteFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-content">
            <!-- Footer content removed as requested -->
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);

// Add styles specific to the footer component
const style = document.createElement("style");
style.textContent = `
  footer {
    margin-top: 4rem;
    padding: 2rem 0;
    background-color: rgba(18, 18, 18, 0.8);
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

document.head.appendChild(style);
