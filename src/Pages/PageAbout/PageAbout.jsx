import React from "react";
import styles from './PageAbout.module.scss';
import MySkills from "../../components/MySkills/MySkills";

const PageAbout = () => {
  return (
    <main>
      <section className={styles.about}>
        <div className={styles.about__wrapper}>
        <h2>About me</h2>
        <p>Hello, I am Dimitry and I am a Frontend Developer.
          I live and work in Belarus. I spend most of my day,
          experimenting with HTML, CSS and React. I enjoy coding and try
          learning something new everyday.</p>
            <MySkills/>
        </div>
      </section>
    </main>
  );
};

export default PageAbout;