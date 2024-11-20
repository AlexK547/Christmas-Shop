import styles from "./styles.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <p className={styles.hero__text}>Merry Christmas</p>
        <h2 className={styles.hero__title}>
          Gift yourself the magic of new possibilities
        </h2>
        <button type="button" className={styles.hero__btn}>
          Explore Magical Gifts
        </button>
        <p className={styles.hero__text}>and Happy New Year</p>
      </div>
    </section>
  );
}

export default Hero;
