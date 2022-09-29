import React from "react";
import styles from './SingleProject.module.scss';
import { FiExternalLink, FiGithub } from "react-icons/fi";

const SingleProject = ({id, img, name, link, codeLink, description, stack}) => {
  return (
    <article className={styles.project}>
      <div className={styles.project__wrapper}>
        <div className={styles.project__overlay}>
          <img src={img} alt={name} className={styles.project__img}/>
        </div>
      </div>
      <div className={styles.project__info}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.project__stack}>
          {stack.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className={styles.project__links}>
          <a href={link} target='_blank' rel="noreferrer">
            <FiExternalLink/>
          </a>
          <a href={codeLink} target='_blank' rel="noreferrer">
            <FiGithub/>
          </a>
        </div>
      </div>
    </article>
  );
};

export default SingleProject;