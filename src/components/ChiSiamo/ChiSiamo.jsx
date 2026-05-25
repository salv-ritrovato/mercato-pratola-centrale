import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./ChiSiamo.module.css";

const VALORI = [
  {
    icon: "◆",
    title: "Tradizione",
    description:
      "Trent'anni di esperienza nella ristorazione abruzzese, portati ogni giorno in cucina con rispetto per le ricette di una volta.",
  },
  {
    icon: "◆",
    title: "Territorio",
    description:
      "Ingredienti selezionati tra i produttori locali: dall’Appennino abruzzese alla tradizione contadina, il meglio della nostra terra nel tuo piatto.",
  },
  {
    icon: "◆",
    title: "Accoglienza",
    description:
      "Un ambiente caldo e contemporaneo dove ogni ospite si sente a casa, dal caffè del mattino all'aperitivo serale.",
  },
];

/**
 * ChiSiamo — brand story section with three value pillars.
 * Light background to visually break the dark-themed page flow.
 */
export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className={`section section--light ${styles.chiSiamo}`}>
      <div className="container site-container">
        <SectionHeading
          label="La nostra storia"
          title="Chi Siamo"
          subtitle=" Mercato Pratola Centrale nasce da un Progetto ambizioso e rivoluzionario: siamo un ristorante e lounge bar a Pratola Peligna, nati dalla passione per la cucina autentica e dall'amore per la nostra terra. Un luogo dove la tradizione si incontra con la modernità."
          light
        />

        <div className={`row g-4 align-items-center ${styles.contentRow}`}>
          {/* Story copy */}
          <div className="col-lg-6">
            <p className={styles.storyCopy}>
              Il Mercato Pratola Centrale nasce da un sogno semplice: portare
              sulla tavola i sapori veri dell'Abruzzo, quelli che raccontano la
              montagna, i pascoli e le tradizioni di generazioni. Con oltre
              trent'anni di esperienza nel settore della ristorazione, abbiamo
              aperto le nostre porte per offrire un'esperienza gastronomica
              completa — dalla colazione al pranzo, dall'aperitivo alla cena.
            </p>
            <p className={styles.storyCopy}>
              La nostra proposta spazia dalla cucina tradizionale abruzzese alla
              pizzeria moderna, passando per un lounge bar curato e una selezione
              di prodotti tipici del territorio. Tutto questo in un ambiente
              contemporaneo, a due passi dal casello autostradale, facilmente
              raggiungibile da tutta la regione.
            </p>
          </div>

          {/* Value pillars */}
          <div className="col-lg-6">
            <ul className={`list-unstyled vstack gap-3 mb-0 ${styles.valori}`}>
              {VALORI.map((v) => (
                <li key={v.title} className={styles.valoreItem}>
                  <span className={styles.valoreIcon} aria-hidden="true">
                    {v.icon}
                  </span>
                  <div>
                    <h3 className={styles.valoreTitle}>{v.title}</h3>
                    <p className={styles.valoreDesc}>{v.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}