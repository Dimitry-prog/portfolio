import React, {useRef, useState} from "react";
import styles from "./PageContact.module.scss";
import {BsChat} from "react-icons/bs";
import {RiSendPlaneLine} from "react-icons/ri";
import {FiArrowUpRight} from "react-icons/fi";
import {VscLoading} from 'react-icons/vsc';
import emailjs from '@emailjs/browser';

const PageContact = () => {
  const [sending, setSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm('service_qtgwul4', 'template_hvcs10a', form.current, '2q37Vsp_7F5xHIEsb')
      .then((result) => {
        e.target.reset();
        setSending(false);
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

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
            </div>
            <div className={styles.contact__write}>
              <div className={styles.contact__talkWrap}>
                <h3>
                  <RiSendPlaneLine/>
                  Write to me
                </h3>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className={styles.contact__form}
                >
                  <div>
                    <label>Names</label>
                    <input type="text" name='user_name' placeholder="Write your names"/>
                  </div>
                  <div>
                    <label>Email</label>
                    <input type="email" name='user_email' placeholder="Write your email"/>
                  </div>
                  <div>
                    <label>Message</label>
                    <textarea name='user_message' placeholder="Write your message"></textarea>
                  </div>
                  <button type='submit'>
                    Submit
                    {sending ? <VscLoading/> : <FiArrowUpRight/>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageContact;