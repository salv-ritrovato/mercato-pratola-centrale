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
 * Warm stone background — distinct from Gallery (dark) and Menu (cream).
 */
export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className={`section ${styles.chiSiamo}`}>
      <div className="container site-container">
        <SectionHeading
          label="La nostra storia"
          title="Chi Siamo"
          subtitle=" Mercato Pratola Centrale nasce da un progetto ambizioso e rivoluzionario: siamo un ristorante e lounge bar a Pratola Peligna (AQ), nati dalla passione per la cucina autentica e dall'amore per la nostra terra. Un luogo dove la tradizione si incontra con la modernità."
          light
        />

        <div className={`row g-4 align-items-center ${styles.contentRow}`}>
          {/* Story copy */}
          <div className="col-lg-6">
            <p className={styles.storyCopy}>
             L’Azienda, nella sua dimensione ideale e fisica, nasce da una profonda passione per il nostro territorio — la Valle Peligna, nel cuore dell’Abruzzo interno — e da una precedente esperienza trentennale nel campo della ristorazione. Da questo legame profondo prende vita uno spazio accogliente, pensato per offrire un’esperienza gastronomica completa in ogni momento della giornata: dalla colazione al pranzo, dall’aperitivo alla cena.
            </p>
            <p className={styles.storyCopy}>
Dall'amore per la nostra terra e per i suoi sapori autentici nasce una proposta gastronomica unica, capace di far dialogare la tradizione abruzzese rivisitata in chiave d'eccellenza con la pizzeria moderna e un lounge bar curato. Vogliamo trasmettere questa grande passione a chiunque ci scelga, accogliendo gli ospiti in uno spazio del tutto innovativo e contemporaneo: un punto d'incontro strategico e facile da raggiungere da ogni angolo della regione.
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