import React, {useRef, useState} from "react";
import styles from "./ContactForm.module.scss";
import {VscLoading} from "react-icons/vsc";
import {FiArrowUpRight} from "react-icons/fi";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
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
    <form
      ref={form}
      onSubmit={sendEmail}
      noValidate
      className={styles.contactForm}
    >
      <div>
        <label>Names</label>
        <input type="text" name="user_name" placeholder="Write your names"/>
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Write your email"/>
      </div>
      <div>
        <label>Message</label>
        <textarea name="user_message" placeholder="Write your message"></textarea>
      </div>
      <div>
        <input type="submit" value="Send"/>
        {sending ? <VscLoading className={styles.contactForm__submit_loading}/> : <FiArrowUpRight/>}
      </div>
    </form>
  );
};

export default ContactForm;