import { useState } from "react";
import styles from "./ContactForm.module.css";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  date: "",
  guests: "2",
  message: "",
};

/**
 * Reservation form — Bootstrap grid + form controls.
 */
export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`alert ${styles.success}`} role="status">
        <p className={`${styles.successTitle} mb-2`}>Richiesta inviata</p>
        <p className="mb-3">
          Grazie, {form.name || "ospite"}! Ti contatteremo a breve per confermare
          la prenotazione.
        </p>
        <button
          type="button"
          className="btn btn-outline-gold"
          onClick={() => {
            setForm(INITIAL_FORM);
            setSubmitted(false);
          }}
        >
          Nuova richiesta
        </button>
      </div>
    );
  }

  return (
    <form className="form-dark" onSubmit={handleSubmit} noValidate>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="name">
            Nome e cognome *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Mario Rossi"
            autoComplete="name"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="nome@email.it"
            autoComplete="email"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="phone">
            Telefono
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="form-control"
            value={form.phone}
            onChange={handleChange}
            placeholder="+39 ..."
            autoComplete="tel"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="date">
            Data preferita
          </label>
          <input
            id="date"
            type="date"
            name="date"
            className="form-control"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="guests">
            Numero ospiti
          </label>
          <select
            id="guests"
            name="guests"
            className="form-select"
            value={form.guests}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={String(n)}>
                {n} {n === 1 ? "persona" : "persone"}
              </option>
            ))}
            <option value="8+">8+ (contattaci)</option>
          </select>
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="message">
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Allergie, occasioni speciali, richieste..."
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100 w-md-auto">
            Invia richiesta
          </button>
        </div>
      </div>
    </form>
  );
}
