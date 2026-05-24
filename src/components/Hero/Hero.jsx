import { ASSETS } from "../../constants/assets";
import styles from "./Hero.module.css";

/**
 * Landing hero — banner logo, tagline, intro, and primary CTAs.
 */
export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={styles.hero} aria-label="Home">
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container site-container ${styles.wrapper}`}>
        <div className="row align-items-center justify-content-center gy-4 gy-lg-5">
          {/* Banner — focal brand mark; scales down on mobile/tablet */}
          <div className="col-10 col-sm-8 col-md-7 col-lg-5 col-xl-4">
            <div className={styles.bannerWrap}>
              <img
                src={ASSETS.banner}
                alt="Mercato Pratola Centrale — Ristorante, cafè e foodstore"
                className={styles.banner}
                width={480}
                height={640}
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Copy + CTAs */}
          <div className="col-lg-7 col-xl-6 text-center text-lg-start">
            <h1 className="visually-hidden">
              Mercato Pratola Centrale — Ristorante e Lounge Bar
            </h1>

            <p className={styles.eyebrow}>Ristorante e Lounge Bar · Pratola Peligna</p>

            <p className={styles.tagline}>
              La tradizione d&apos;Abruzzo e l&apos;eleganza del lounge
            </p>

            <p className={styles.intro}>
              Un&apos;esperienza gastronomica che celebra i prodotti del territorio,
              la tradizione abruzzese e l&apos;atmosfera raffinata di un lounge bar
              contemporaneo. Sapori autentici che derivano da una grande passione per la cucina e da una precedente esperienza trentennale nel campo della ristorazione.
            </p>

            <div
              className={`d-flex flex-wrap gap-3 mb-4 mb-lg-5 ${styles.actions}`}
            >
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo("menu")}
              >
                Scopri il Menu
              </button>
              <button
                type="button"
                className="btn btn-outline-gold"
                onClick={() => scrollTo("contact")}
              >
                Prenota un Tavolo
              </button>
            </div>

            <ul
              className="row row-cols-1 row-cols-sm-3 g-3 list-unstyled text-center mb-0"
              aria-label="Punti di forza"
            >
              {[
                "Tradizione abruzzese",
                "Lounge & cocktail bar",
                "Pizzeria moderna",
              ].map((text) => (
                <li className="col" key={text}>
                  <span className={styles.highlightIcon} aria-hidden="true">
                    ◆
                  </span>{" "}
                  <span className={styles.highlightText}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <a
        href="#menu"
        className={styles.scrollHint}
        onClick={(e) => {
          e.preventDefault();
          scrollTo("menu");
        }}
        aria-label="Scorri verso il menu"
      >
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}
