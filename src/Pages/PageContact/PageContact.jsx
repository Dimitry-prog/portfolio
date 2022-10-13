import React from "react";
import styles from "./PageContact.module.scss";
import { BsChat, BsTelegram } from "react-icons/bs";
import { RiSendPlaneLine, RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from 'react-icons/md';
import ContactForm from "../../components/ContactForm/ContactForm";

const PageContact = () => {

  return (
    <main>
      <section className={styles.contact}>
        <div className={styles.contact__wrapper}>
          <h2>Contact me</h2>
          <p>Get in touch</p>
          <div className={styles.contact__container}>
            <div className={styles.contact__talk}>
              <div className={styles.contact__talkWrap}>
                <h3>
                  <BsChat />
                  Talk to me
                </h3>
                <a href="mailto:kfifa3@gmail.com" target="_blank" rel="noreferrer noopener">
                  <span>
                    <MdEmail />
                    Email
                  </span>
                </a>
                <p>Write me a letter</p>
                <a href="https://api.whatsapp.com/send?phone=375298301150" target="_blank" rel="noreferrer noopener">
                  <span>
                    <RiWhatsappFill />
                    Whatsapp
                  </span>
                </a>
                <p>Call me</p>
                <a href="https://t.me/Dmitry_Myt" target="_blank" rel="noreferrer noopener">
                  <span>
                    <BsTelegram />
                    Telegram
                  </span>
                </a>
                <p>Send a message</p>
              </div>
            </div>
            <div className={styles.contact__write}>
              <div className={styles.contact__talkWrap}>
                <h3>
                  <RiSendPlaneLine />
                  Write to me
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageContact;