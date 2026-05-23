import { ASSETS } from "../../constants/assets";
import styles from "./Footer.module.css";

/**
 * Site footer with branding and quick links.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className="container site-container">
        <div className="row align-items-center gy-4">
          <div className="col-md-4 text-center text-md-start">
            <img
              src={ASSETS.logo}
              alt="Mercato Pratola Centrale"
              className={styles.logo}
              width={200}
              height={44}
              loading="lazy"
            />
            <p className={`${styles.tagline} mt-2 mb-0`}>
              Ristorante e Lounge Bar
            </p>
          </div>

          <nav
            className="col-md-4 d-flex flex-wrap justify-content-center gap-2 gap-md-3"
            aria-label="Link footer"
          >
            {[
              { id: "home", label: "Home" },
              { id: "menu", label: "Menu" },
              { id: "contact", label: "Contatti" },
            ].map((link) => (
              <button
                key={link.id}
                type="button"
                className={`btn btn-link ${styles.link}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <p className={`col-md-4 text-center text-md-end mb-0 small ${styles.copy}`}>
            © {year} Mercato Pratola Centrale. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
