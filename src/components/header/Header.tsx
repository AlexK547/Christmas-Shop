import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import snowflakeIMG from "/images/svg/snowflake.svg";
import { MdOutlineSearch } from "react-icons/md";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.logo}>
          <img src={snowflakeIMG} alt="snowflake" />
          <h1 className={styles.logo__title}>Магазин новогодних подарков</h1>
        </div>

        <div className={styles.search}>
          <input
            className={styles.search__input}
            type="text"
            // value=""
            placeholder="Поиск"
          />

          <MdOutlineSearch
            style={{
              position: "absolute",
              right: "30px",
              top: "10px",
            }}
            size={20}
          />
        </div>

        <nav className={styles.navigation}>
          <ul className={styles.navigation__items}>
            <li>
              <Link className={styles.navigation__item} to="#">
                Подарки
              </Link>
            </li>
            <li>
              <Link className={styles.navigation__item} to="#">
                О компании
              </Link>
            </li>
            <li>
              <Link className={styles.navigation__item} to="#">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
