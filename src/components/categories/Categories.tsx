import styles from "./styles.module.scss";
import {
  TbChristmasBall,
  TbChristmasTree,
  TbChristmasTreeFilled,
} from "react-icons/tb";
import { GiGlassBall } from "react-icons/gi";
import { PiDiscoBall } from "react-icons/pi";
import { RiLightbulbFlashLine } from "react-icons/ri";

interface CategoriesProps {
  changeCategory: Function;
}

const Categories: React.FC<CategoriesProps> = ({ changeCategory }) => {
  const clickBtn = (e: any) => {
    changeCategory(e.target.value);
  };

  return (
    <section className={styles.categories}>
      <div className={styles.categories__container}>
        <div className={styles.categories__items}>
          <button
            className={styles.categories__item}
            onClick={clickBtn}
            value={"все"}
          >
            <TbChristmasTree size={30} />
            Все категории
          </button>
          <button
            className={styles.categories__item}
            onClick={clickBtn}
            value={"искуственные елки"}
          >
            <TbChristmasTree size={30} />
            искуственные елки
          </button>
          <button
            className={styles.categories__item}
            onClick={clickBtn}
            value={"естественные елки"}
          >
            <TbChristmasTreeFilled size={30} />
            естественные елки
          </button>
          <button
            className={styles.categories__item}
            onClick={clickBtn}
            value={"пластиковые шары"}
          >
            <PiDiscoBall size={30} />
            пластиковые шары
          </button>
          <button
            className={styles.categories__item}
            onClick={clickBtn}
            value={"стеклянные шары"}
          >
            <GiGlassBall size={30} />
            стеклянные шары
          </button>
          <button
            className={styles.categories__item}
            onClick={clickBtn}
            value={"елочные украшения"}
          >
            <TbChristmasBall size={30} />
            елочные украшения
          </button>
          <button
            className={styles.categories__item}
            onClick={clickBtn}
            value={"эдектрогерлянды"}
          >
            <RiLightbulbFlashLine size={30} />
            эдектрогерлянды
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
