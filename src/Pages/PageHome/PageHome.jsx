import React from "react";
import styles from './PageHome.module.scss';
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";

const PageHome = () => {
  return (
    <>
      <Header/>
      <main>
        <Projects simple/>
      </main>
    </>
  );
};

export default PageHome;