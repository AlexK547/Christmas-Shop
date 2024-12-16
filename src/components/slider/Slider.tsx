import styles from "./styles.module.scss";
import snowmanIMG from "/images/png/snowman.png";
import christmasTreesIMG from "/images/png/christmas-trees.png";
import christmasTreeBallIMG from "/images/png/christmas-tree-ball.png";
import fairytaleHouseIMG from "/images/png/fairytale-house.png";

const Slider: React.FC = () => {
  return (
    <section className={styles["slider-section"]}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.content__title}>
            Стань счастливие в новом 2025 году!
          </h2>
        </div>
        <div className={styles.slider}>
          <div className={styles.slider__container}>
            <div className={styles.slider__items}>
              <div className={styles.slider__card}>
                <h3 className={styles["slider__card-text"]}>Живи</h3>
                <img
                  src={snowmanIMG}
                  alt="snowman"
                  className={styles["slider__card-img"]}
                />
              </div>
              <div className={styles.slider__card}>
                <h3 className={styles["slider__card-text"]}>Создавай</h3>
                <img
                  src={christmasTreesIMG}
                  alt="christmas trees"
                  className={styles["slider__card-img"]}
                />
              </div>
              <div className={styles.slider__card}>
                <h3 className={styles["slider__card-text"]}>Люби</h3>
                <img
                  src={christmasTreeBallIMG}
                  alt="christmas tree ball"
                  className={styles["slider__card-img"]}
                />
              </div>
              <div className={styles.slider__card}>
                <h3 className={styles["slider__card-text"]}>Мечтай</h3>
                <img
                  src={fairytaleHouseIMG}
                  alt="fairytail house"
                  className={styles["slider__card-img"]}
                />
              </div>
            </div>

            <div className={styles.slider__items}>
              <div className={styles.slider__card}>
                <h3 className={styles["slider__card-text"]}>Живи</h3>
                <img
                  src={snowmanIMG}
                  alt="snowman"
                  className={styles["slider__card-img"]}
                />
              </div>
              <div className={styles.slider__card}>
                <h3 className={styles["slider__card-text"]}>Создавай</h3>
                <img
                  src={christmasTreesIMG}
                  alt="christmas trees"
                  className={styles["slider__card-img"]}
                />
              </div>
              <div className={styles.slider__card}>
                <h3 className={styles["slider__card-text"]}>Люби</h3>
                <img
                  src={christmasTreeBallIMG}
                  alt="christmas tree ball"
                  className={styles["slider__card-img"]}
                />
              </div>
              <div className={styles.slider__card}>
                <h3 className={styles["slider__card-text"]}>Мечтай</h3>
                <img
                  src={fairytaleHouseIMG}
                  alt="fairytail house"
                  className={styles["slider__card-img"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
