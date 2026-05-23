import styles from "./MenuItem.module.css";

/**
 * Single menu row — Bootstrap row keeps price inside the card.
 */
export default function MenuItem({ name, description, price }) {
  return (
    <article className={`${styles.item} border-bottom pb-3 mb-3`}>
      <div className="row align-items-start g-2">
        <div className="col">
          <h4 className={`${styles.name} mb-0`}>{name}</h4>
        </div>
        <div className="col-auto">
          <span className={styles.price}>€{price}</span>
        </div>
      </div>
      <p className={`${styles.description} mb-0 mt-1`}>{description}</p>
    </article>
  );
}
