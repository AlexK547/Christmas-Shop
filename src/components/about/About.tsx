import styles from "./styles.module.scss";
import santaIMG from "/images/jpg/santa.jpg";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__content}>
          <p className={styles.about__caption}>About</p>
          <h2 className={styles.about__title}>Unleash your inner superhero!</h2>
          <p className={styles.about__text}>
            This New Year marks the beginning of your journey to inner harmony
            and new strengths. We offer unique gifts that will help you improve
            your life.
          </p>
        </div>
        <img src={santaIMG} alt="santa" />
      </div>
    </section>
  );
}

export default About;
