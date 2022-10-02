import React from "react";
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import MySocialLinks from "../MySocialLinks/MySocialLinks";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.header__body}>
          <div className={styles.header__name}>
            <h1>I'm Dimitry</h1>
            <p>Front-end developer</p>
            <Link to='/contact' className={styles.header__link}>Hire me</Link>
            <MySocialLinks/>
          </div>
          <img src={require("../../images/person.png")} alt="header bg image" className={styles.header__img}/>
        </div>
    </header>
  );
};

export default Header;