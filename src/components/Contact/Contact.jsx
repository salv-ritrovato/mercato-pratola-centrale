import SectionHeading from "../SectionHeading/SectionHeading";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./Contact.module.css";

const OPENING_HOURS = [
  { days: "Lunedì", hours: "06:30 - 20:00" },
  { days: "Mar – Dom", hours: "06:30 – 22:00" },
];

/**
 * Contact & Location — Bootstrap grid for info + form layout.
 */
export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container site-container">
        <SectionHeading
          label="Contatti & Location"
          title="Vieni a Trovarci"
          subtitle="Una formula contemporanea e moderna che non ti aspetteresti nel cuore dell'Abruzzo. A poca distanza dal casello autostradale, una bella vetrina dei prodotti di tutta la regione con particolare riferimento alla montagna."
        />

        <div className="row g-4 g-lg-5">
          <aside className="col-lg-5">
            <div className={`vstack gap-4 ${styles.info}`}>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Indirizzo</h3>
                <address className={styles.address}>
                  Strada Statale 5 Dir
                  <br />
                  67035 Pratola Peligna (AQ)
                  <br />
                  Abruzzo, Italia
                </address>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Contatti</h3>
                <ul className="list-unstyled mb-0 vstack gap-1">
                  <li>
                    <a href="tel:+390825000000">+39 0864 238183</a>
                  </li>
                  <li>
                    <a href="mailto:info@mercatopratolacentrale.it">
                      info@mercatopratolacentrale.it
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Orari di Apertura</h3>
                <dl className={`mb-0 ${styles.hours}`}>
                  {OPENING_HOURS.map((row) => (
                    <div className={styles.hoursRow} key={row.days}>
                      <dt>{row.days}</dt>
                      <dd>{row.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.1!2d13.8722404!3d42.1069309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133038da08b58b09%3A0xc57a54c0147f40f5!2sMercato%20Pratola%20Centrale%20-%20Ristorante%20e%20Lounge%20Bar!5e0!3m2!1sit!2sit!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Mercato Pratola Centrale"
                />
              </div>
            </div>
          </aside>

          <div className="col-lg-7">
            <div className={styles.formWrapper}>
              <h3 className={styles.formTitle}>Prenota un Tavolo</h3>
              <p className={`${styles.formSubtitle} mb-4`}>
                Compila il modulo e ti risponderemo entro 24 ore per confermare
                la disponibilità.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}