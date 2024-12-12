import React from "react";
import styles from "./styles.module.scss";
import { AiFillStar } from "react-icons/ai";
import { RiShoppingBasket2Line } from "react-icons/ri";

interface CardProps {
  id?: number;
  srcImg: string[];
  title: string;
  rate: number;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  deliveryData: string;
  category?: string;
}

export const Card: React.FC<CardProps> = ({
  srcImg,
  title,
  rate,
  reviews,
  prevPrice,
  newPrice,
  deliveryData,
}) => {
  return (
    <div className={styles.card}>
      <img src={srcImg[2]} alt="image" />
      <div className={styles.card__content}>
        <div className={styles.card__prices}>
          <p className={styles["card__prices-new"]}>{newPrice}</p>
          <p className={styles["card__prices-prev"]}>{prevPrice}</p>
        </div>
        <p className={styles.card__title}>{title}</p>
        <div className={styles["card__rat-rew"]}>
          <p className={styles.card__rating}>
            <AiFillStar size={20} fill="gold" />
            <span>{rate}</span>
          </p>
          <p className={styles.card__rewiews}>{reviews}</p>
        </div>

        <button className={styles.card__btn}>
          <RiShoppingBasket2Line size={20} />
          <span>{deliveryData}</span>
        </button>
      </div>
    </div>
  );
};
