import React from "react";
import styles from './Footer.module.scss';
import MySocialLinks from "../MySocialLinks/MySocialLinks";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MySocialLinks/>
      <p>Copyright &copy; 2022 Dimitry. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;