import React from "react";
import styles from './Projects.module.scss';
import {initProjects} from "../../initData/initProjects";
import SingleProject from "../SingleProject/SingleProject";
import {Link} from "react-router-dom";

const Projects = ({simple, displayAllProjects}) => {
  const firstThreeProjects = simple ? initProjects.slice(0,3) : initProjects;

  return (
    <section className={styles.projetcs}>
      <div className={styles.projetcs__wrapper}>
        <h2> {displayAllProjects ? 'All Projects' : 'Featured Projects'}</h2>
        <div className={styles.projetcs__container}>
          {firstThreeProjects.map((elem, index) => (
            <SingleProject
              key={index}
              {...elem}
            />
          ))}
        </div>
        {!displayAllProjects && <Link to="/projects" className={styles.projetcs__link}>Projects</Link>}
      </div>
    </section>
  );
};

export default Projects;