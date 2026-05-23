import { useCallback, useEffect, useRef, useState } from "react";
import { SLIDESHOW_IMAGES } from "../../constants/assets";
import styles from "./Gallery.module.css";

const AUTOPLAY_MS = 5000;

/**
 * Image carousel for venue photos — vanilla React (no external library).
 */
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = SLIDESHOW_IMAGES.length;

  const goTo = useCallback(
    (next) => {
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, goNext, total]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 48) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  if (total === 0) return null;

  return (
    <section
      id="gallery"
      className={styles.gallery}
      aria-label="Galleria fotografica"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container site-container">
        <header className={styles.header}>
          <span className={styles.label}>I nostri ambienti</span>
          <h2 className={styles.title}>L'atmosfera di Mercato Centrale</h2>
          <p className={styles.subtitle}>
            Scorri tra gli scatti del ristorante. Ambienti, dettagli e atmosfere che raccontano la nostra anima.
          </p>
        </header>

        <div
          className={styles.carousel}
          role="region"
          aria-roledescription="carousel"
          aria-label="Slideshow"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={styles.track}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SLIDESHOW_IMAGES.map((src, i) => (
              <div className={styles.slide} key={src} aria-hidden={i !== index}>
                <img
                  src={src}
                  alt={`Mercato Pratola Centrale — foto ${i + 1}`}
                  className={styles.image}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                className={`${styles.arrow} ${styles.arrowPrev}`}
                onClick={goPrev}
                aria-label="Immagine precedente"
              >
                ‹
              </button>
              <button
                type="button"
                className={`${styles.arrow} ${styles.arrowNext}`}
                onClick={goNext}
                aria-label="Immagine successiva"
              >
                ›
              </button>

              <div className={styles.dots} role="tablist" aria-label="Seleziona immagine">
                {SLIDESHOW_IMAGES.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    role="tab"
                    className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                    aria-selected={i === index}
                    aria-label={`Foto ${i + 1} di ${total}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>

              <p className={styles.counter} aria-live="polite">
                {index + 1} / {total}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
