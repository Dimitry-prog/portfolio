import React from "react";
import styles from "./PageContact.module.scss";
import {BsChat} from 'react-icons/bs';
import {RiSendPlaneLine} from 'react-icons/ri';

const PageContact = () => {
  return (
    <main>
      <section className={styles.contact}>
        <h2>Contact me</h2>
        <p>If you are looking to get ahold of me, you can send me an
          email at kfifa3@gmail.com</p>
        <div className={styles.contact__container}>
          <div className={styles.contact__talk}>
            <h3>
              <BsChat/>
              Talk to me
            </h3>
            <span>Email</span>
            <p>kfifa3@gmail.com</p>
            <span>Whatsapp</span>
            <p>+375298301150</p>
            <span>Telegram</span>
            <p>@Dmitry</p>
          </div>
          <div className={styles.contact__write}>
            <h3>
              <RiSendPlaneLine/>
              Write to me
            </h3>
            <form className={styles.contact__form}>
              <div>
                <label>Names</label>
                <input type="text" placeholder="Write your names"/>
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="Write your email"/>
              </div>
              <div>
                <label>Message</label>
                <textarea placeholder="Write your message"></textarea>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageContact;