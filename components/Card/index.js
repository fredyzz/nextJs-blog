import styles from "./Card.module.scss";

const Card = ({ title, description, link }) => (
  <>
    <a href={link} className={styles.Card}>
      <h3>{`${title} &rarr;`}</h3>
      <p>{description}</p>
    </a>
  </>
);

export default Card;
