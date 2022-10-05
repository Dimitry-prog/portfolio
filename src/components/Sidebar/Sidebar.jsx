import React from "react";
import styles from './Sidebar.module.scss';
import {Link} from "react-router-dom";
import {AiFillCloseSquare} from 'react-icons/ai';
import {initMenuLinks} from "../../initData/initMenuLinks";
import {useGlobalContext} from "../../context/context";
import MySocialLinks from "../MySocialLinks/MySocialLinks";

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? `${styles.sidebar} ${styles.sidebar__show}` : `${styles.sidebar}`}>
      <div className={styles.sidebar__top}>
        <Link to='/' className={styles.logo}></Link>
        <button onClick={closeSidebar} className={styles.sidebar__close}>
          <AiFillCloseSquare/>
        </button>
      </div>
      <ul className={styles.sidebar__list}>
        {initMenuLinks.map(({id, name, link}) => (
          <li
            key={id}
            className={styles.sidebar__item}
          >
            <Link
              to={link}
              onClick={closeSidebar}
              className={styles.sidebar__link}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <MySocialLinks/>
    </aside>
  );
};

export default Sidebar;