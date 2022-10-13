import React from "react";
import styles from './MySocialLinks.module.scss';
import { initMySocialLinks } from "../../initData/initMySocialLinks";

const MySocialLinks = () => {
  return (
    <div className={styles.social}>
      <ul className={styles.social__list}>
        {initMySocialLinks.map((item, index) => (
          <li
            key={index}
            className={styles.social__item}
          >
            <a
              href={item.link}
              target='_blank'
              rel="noreferrer noopener"
              className={styles.social__link}
            >
              {item.img}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MySocialLinks;