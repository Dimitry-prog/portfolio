import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {initMenuLinks} from "../../initData/initMenuLinks";
import {GiHamburgerMenu} from 'react-icons/gi';
import styles from "./Navbar.module.scss";
import {useGlobalContext} from "../../context/context";

const Navbar = () => {
    const {openSidebar} = useGlobalContext();
    const [stickyNavBar, setStickyNavBAr] = useState(false);

    useEffect(() => {
      const stickNavBar = () => {
        if (window.scrollY > 200) {
          setStickyNavBAr(true);
        } else {
          setStickyNavBAr(false);
        }
      }
      window.addEventListener('scroll', stickNavBar);

      return () => window.removeEventListener('scroll', stickNavBar);
    }, []);

  return (
    <nav className={stickyNavBar ? `${styles.nav__sticky} ${styles.nav}` : `${styles.nav}`}>
      <div className={styles.nav__container}>
        <div className={styles.nav__top}>
          <Link to='/' className={styles.logo}></Link>
          <button onClick={openSidebar} className={styles.burger}>
            <GiHamburgerMenu/>
          </button>
        </div>
        <ul className={styles.nav__list}>
          {initMenuLinks.map(elem => (
            <li
              key={elem.id}
              className={styles.nav__item}
            >
              <NavLink
                to={elem.link}
                className={styles.nav__link}
              >
                {elem.name}
              </NavLink>
            </li>))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;