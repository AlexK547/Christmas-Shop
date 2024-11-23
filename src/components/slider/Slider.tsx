import styles from "./styles.module.scss";
import snowmanIMG from "/images/png/snowman.png";
import christmasTreesIMG from "/images/png/christmas-trees.png";
import christmasTreeBallIMG from "/images/png/christmas-tree-ball.png";
import fairytaleHouseIMG from "/images/png/fairytale-house.png";
import { useEffect, useState } from "react";

function Slider() {
    const [sliderPosition, setSliderPosition] = useState(0);
    const [isSelectBtnLeft, setIsSelectBtnLeft] = useState(false);
    const [isSelectBtnRight, setIsSelectBtnRight] = useState(true);

    const changePositionLeft = () => {
        if (sliderPosition < 0) {
            setSliderPosition(sliderPosition + 180);
            setIsSelectBtnRight(true);
        }
    };
    const changePositionRight = () => {
        if (sliderPosition > -720) {
            setSliderPosition(sliderPosition - 180);
            setIsSelectBtnLeft(true);
        }
    };

    useEffect(() => {
        if (sliderPosition == 0) {
            setIsSelectBtnLeft(false);
        }
        if (sliderPosition < -700) {
            setIsSelectBtnRight(false);
        }
    }, [sliderPosition]);

    return (
        <section className={styles["slider-section"]}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.content__caption}>Become Happier!</p>
                    <h2 className={styles.content__title}>in the new 2025</h2>
                </div>
                <div className={styles.slider} style={{ left: sliderPosition }}>
                    <div className={styles.slider__card}>
                        <h3 className={styles["slider__card-text"]}>Live</h3>
                        <img
                            src={snowmanIMG}
                            alt="snowman"
                            className={styles["slider__card-img"]}
                        />
                    </div>
                    <div className={styles.slider__card}>
                        <h3 className={styles["slider__card-text"]}>create</h3>
                        <img
                            src={christmasTreesIMG}
                            alt="christmas trees"
                            className={styles["slider__card-img"]}
                        />
                    </div>
                    <div className={styles.slider__card}>
                        <h3 className={styles["slider__card-text"]}>Love</h3>
                        <img
                            src={christmasTreeBallIMG}
                            alt="christmas tree ball"
                            className={styles["slider__card-img"]}
                        />
                    </div>
                    <div className={styles.slider__card}>
                        <h3 className={styles["slider__card-text"]}>dream</h3>
                        <img
                            src={fairytaleHouseIMG}
                            alt="fairytail house"
                            className={styles["slider__card-img"]}
                        />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button
                        type="button"
                        className={
                            isSelectBtnLeft
                                ? styles.buttons__item + " " + styles.buttons__item_active
                                : styles.buttons__item
                        }
                        onClick={changePositionLeft}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.5 12H6M6 12L12 6M6 12L12 18"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className={
                            isSelectBtnRight
                                ? styles.buttons__item + " " + styles.buttons__item_active
                                : styles.buttons__item
                        }
                        onClick={changePositionRight}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Slider;
