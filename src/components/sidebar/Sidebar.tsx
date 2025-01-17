import React from "react";
import styles from "./styles.module.scss";

interface SidebarProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
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
          Все категории
        </label>
        <label className={styles.sidebar__item}>
          <input
            onChange={handleChange}
            type="radio"
            value="искуственные елки"
            name="categories"
          />
          Искуственные ёлки
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
          Ёлочные украшения
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
