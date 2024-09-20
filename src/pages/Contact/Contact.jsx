import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { toast } from "react-toastify";

import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting((curr) => setIsSubmitting(true));
    emailjs
      .sendForm(
        "service_p9rcokb",
        "template_ifyropc",
        form.current,
        "CrFURdqohWsXatbP2"
      )
      .then(
        (result) => {
          setIsSubmitting((curr) => setIsSubmitting(false));
          clear();
          toast.success("Thank you for your message!");
        },
        (error) => {
          setIsSubmitting((curr) => setIsSubmitting(false));
          clear();
          toast.error("Something went wrong. Please try again later");
        }
      );
  };

  const clear = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact_data">
          <h3 className="contact__title">Don't be shy!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            vision.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">omardanga@yahoo.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+63 970 100 7032</h4>
              </div>
            </div>

            <div className="info__item">
              <FaSkype className="info__icon" />

              <div>
                <span className="info__title">Message me</span>
                <h4 className="info__desc">xhacker14x1</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/xhacker14x"
              className="contact__social-link"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/OmarDanga1"
              className="contact__social-link"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/omardanga/"
              className="contact__social-link"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        {/* <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="from_name"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                className="form__control"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="from_email"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              className="form__control textarea"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
            ></textarea>
          </div>
          <button className="button" type="submit">
            {isSubmitting ? "Sending..." : "Send Message"}
            <span className="button__icon contact__button-icon">
              <BsSendFill />
            </span>
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
