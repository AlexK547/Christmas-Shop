import React from "react";
import styles from "./styles.module.scss";

interface SidebarProps {
  handleChange: any;
}

const Sidebar: React.FC<SidebarProps> = ({ handleChange }) => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebar__logo}>Категория</h2>

      <div className={styles.sidebar__items}>
        <label className={styles.sidebar__item}>
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="categories"
          />
          Все категирии
        </label>
        <label className={styles.sidebar__item}>
          <input
            onChange={handleChange}
            type="radio"
            value="искуственные елки"
            name="categories"
          />
          Искуственные елки
        </label>
        <label className={styles.sidebar__item}>
          <input
            onChange={handleChange}
            type="radio"
            value="пластиковые шары"
            name="categories"
          />
          Пластиковые шары
        </label>
        <label className={styles.sidebar__item}>
          <input
            onChange={handleChange}
            type="radio"
            value="стеклянные шары"
            name="categories"
          />
          Стеклянные шары
        </label>
        <label className={styles.sidebar__item}>
          <input
            onChange={handleChange}
            type="radio"
            value="елочные украшения"
            name="categories"
          />
          Елочные украшения
        </label>
        <label className={styles.sidebar__item}>
          <input
            onChange={handleChange}
            type="radio"
            value="Электрогерлянды"
            name="categories"
          />
          Электрогерлянды
        </label>
      </div>
    </aside>
  );
};

export default Sidebar;
