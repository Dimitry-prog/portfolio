import React from "react";
import styles from './PageAbout.module.scss';

const PageAbout = () => {
  return (
    <main>
      <section className={styles.about}>
        <h2>About me</h2>
        <p>Hello, I am Dimitry and I am a front-end developer.
          I live and work in Belarus. I spend most of my day,
          experimenting with HTML, CSS and React. I enjoy coding and try
          learning something new everyday.</p>
      </section>
    </main>
  );
};

export default PageAbout;