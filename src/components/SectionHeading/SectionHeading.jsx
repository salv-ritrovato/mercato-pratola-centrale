import styles from "./SectionHeading.module.css";

/**
 * Reusable section title block with optional subtitle and decorative line.
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  align = "center",
}) {
  return (
    <header
      className={`${styles.heading} ${light ? styles.light : ""} ${styles[align]}`}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <span className={styles.divider} aria-hidden="true" />
    </header>
  );
}
