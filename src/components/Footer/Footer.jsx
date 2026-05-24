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

  const socials = [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/mercatopratolacentrale_/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="0.5"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/mercatopratolacentrale/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
  ];

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

          <div className="col-md-4 d-flex flex-column align-items-center align-items-md-end gap-2">
            <div className="d-flex gap-3">
              {socials.map(({ id, label, href, icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>

            <p className={`mb-0 small ${styles.copy}`}>
              © {year} Mercato Pratola Centrale. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}