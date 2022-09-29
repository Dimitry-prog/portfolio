import React from "react";
import styles from './PageContact.module.scss';

const PageContact = () => {
  return (
    <main>
      <section className={styles.contact}>
        <h2>Contact me</h2>
        <p>If you are looking to get ahold of me, you can send me an
          email at kfifa3@gmail.com</p>
      </section>
    </main>
  );
};

export default PageContact;