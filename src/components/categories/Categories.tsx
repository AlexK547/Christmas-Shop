import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import {
  TbChristmasBall,
  TbChristmasTree,
  TbChristmasTreeFilled,
} from "react-icons/tb";
import { GiGlassBall } from "react-icons/gi";
import { PiDiscoBall } from "react-icons/pi";
import { RiLightbulbFlashLine } from "react-icons/ri";

export default function Categories() {
  return (
    <section className={styles.categories}>
      <div className={styles.categories__container}>
        <div className={styles.categories__items}>
          <Link key={1} className={styles.categories__item} to="#">
            <TbChristmasTree size={30} />
            искуственные елки
          </Link>
          <Link key={2} className={styles.categories__item} to="#">
            <TbChristmasTreeFilled size={30} />
            естественные елки
          </Link>
          <Link key={3} className={styles.categories__item} to="#">
            <PiDiscoBall size={30} />
            пластиковые шары
          </Link>
          <Link key={4} className={styles.categories__item} to="#">
            <GiGlassBall size={30} />
            стеклянные шары
          </Link>
          <Link key={5} className={styles.categories__item} to="#">
            <TbChristmasBall size={30} />
            елочные украшения
          </Link>
          <Link key={6} className={styles.categories__item} to="#">
            <RiLightbulbFlashLine size={30} />
            эдектрогерлянды
          </Link>
        </div>
      </div>
    </section>
  );
}
