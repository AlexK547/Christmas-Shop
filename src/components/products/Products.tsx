import React from "react";
import Card from "../card/Card";
import { ICardProps } from "../../interfaces/ICardProps";
import styles from "./styles.module.scss";

interface ProductsProps {
  data: ICardProps[];
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  return (
    <section className={styles.products}>
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          srcImg={item.srcImg}
          title={item.title}
          rate={item.rate}
          reviews={item.reviews}
          prevPrice={item.prevPrice}
          newPrice={item.newPrice}
          deliveryData={item.deliveryData}
          category={item.category}
        />
      ))}
    </section>
  );
};

export default Products;