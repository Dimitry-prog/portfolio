import React from "react";
import styles from './PageProjects.module.scss';
import Projects from "../../components/Projects/Projects";

const PageProjects = () => {
  return (
    <main>
      <Projects displayAllProjects/>
    </main>
  );
};

export default PageProjects;