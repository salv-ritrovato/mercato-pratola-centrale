import { menuCategories } from "../../data/menuData";
import SectionHeading from "../SectionHeading/SectionHeading";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./Menu.module.css";

const EXPERIENCE = [
  {
    icon: "🍷",
    title: "Ristorante",
    text: "Cucina tradizionale con ingredienti selezionati ogni giorno dai produttori locali.",
  },
  {
    icon: "🍸",
    title: "Lounge Bar",
    text: "Una cantina con oltre 200 etichette selezionate, mixology creativa e distillati premium per il tuo aperitivo.",
  },
];

/**
 * Menu & Experience section — Bootstrap grid for cards and categories.
 */
export default function Menu() {
  return (
    <section id="menu" className={`section section--light ${styles.menu}`}>
      <div className="container site-container">
        <SectionHeading
          light
          label="Menu & Esperienza"
          title="Sapori tradizionali, atmosfera raffinata"
          subtitle="Una proposta che celebra la tradizione abruzzese attraverso sapori autentici e cocktail d’autore. Ogni piatto racconta il territorio, ogni drink completa l’esperienza."
        />

        <div className="row g-4 mb-5">
          {EXPERIENCE.map((item) => (
            <div className="col-md-6" key={item.title}>
              <div className={`card menu-card h-100 text-center border-0 ${styles.experienceCard}`}>
                <div className="card-body">
                  <span className={styles.experienceIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="card-title h5">{item.title}</h3>
                  <p className="card-text text-muted-custom mb-0">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          {menuCategories.map((category) => (
            <div className="col-lg-6 col-md-6" key={category.id}>
              <div className={`card menu-card h-100 ${styles.category}`}>
                <div className="card-body">
                  <header className={styles.categoryHeader}>
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                    <p className={styles.categorySubtitle}>{category.subtitle}</p>
                  </header>
                  {category.items.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={`${styles.note} text-center mt-5 mb-0`}>
          Il menu può variare in base alla stagione — disponibilità e prezzi soggetti a variazione.
          Segnalate eventuali allergie al nostro staff.
        </p>
      </div>
    </section>
  );
}
