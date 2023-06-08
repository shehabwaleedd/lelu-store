import React, { useState, useEffect } from 'react'
import "./Contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next'
import Socials from '../../components/supplements/socials/Socials';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {

    emailjs.sendForm('service_5y7rll1', 'template_jdpz7a3', e.target, '4nyzjigYhVGMwCX0W')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };
  const { t } = useTranslation()

  const [name, setName] = useState("");
  const [budget, setBudget] = useState("budget");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleOptionChange = (e) => {
    setBudget(e.target.value);
  };

  const handleSubmit = (e) => {

    // Validate form fields
    const errors = {};
    if (name.trim() === "") {
      errors.name = "Name is required";
    }
    if (budget === "budget") {
      errors.budget = "Please select a budget";
    }
    if (email.trim() === "") {
      errors.email = "Email is required";
    }
    if (message.trim() === "") {
      errors.message = "Message is required";
    }
    if (!agreed) {
      errors.agreed = "You must agree to the storage and processing of your personal data";
    }

    // Check if there are any errors
    if (
      !formErrors.name &&
      !formErrors.budget &&
      !formErrors.email &&
      !formErrors.message &&
      !formErrors.agreed
    ) {
      // All fields are valid, submit the form or perform your desired action
      sendEmail(e); // Call your sendEmail function here or any other submission logic else {
      // Set the formErrors state to display error messages
      setFormErrors(errors);
    }
  };

  let screen = useRef(null);
  let body = useRef(null);


  const runAnimation = () => {
    var tl = new TimelineMax();
    tl.fromTo(
      screen,
      { width: "0%", left: "100%" },
      {
        duration: 0.5,
        width: "100%",
        left: "0%",
        ease: Power3.easeInOut,
      }
    );
    tl.fromTo(
      screen,
      { left: "0%" },
      {
        duration: 0.5,
        left: "-100%",
        ease: Power3.easeInOut,
        delay: 0.1,
      }
    );
    tl.set(screen, { left: "100%" });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      },
    }).delay(1);
  };

  useEffect(() => {
    runAnimation();
  }, []);


  return (
    <React.Fragment className='contact_entire'>
      <div className="contact__load-container">
        <div className="contact__load-screen" ref={(el) => (screen = el)}></div>
      </div>
      <div className="let__contact">
        <h1>LET'S CONNECT</h1>
      </div>
      <section className='contact section' id='contact' ref={(el) => (body = el)}>
        <div className="contact__container">
          <div className="contact__content_info">
            <div className="contact__details">
              <h1>{t("contact__title1")}<br />{t("contact__title2")}<br />{t("contact__title3")}</h1>
            </div>
            <Socials />
            <div className="contact__info">
              <div className="contact__email">
                <h3>{t("contact__getInTouch")}</h3>
                <p><a href="mailto:shehabwaleedd@gmail.com">lelustoree@gmail.com</a></p>
              </div>
              <div className="contact__location">
                <h3>Phone</h3>
                <p>+2001030013746</p>
              </div>
            </div>
            <div className="contact__dash"></div>
          </div>
          <div className="contact__content">
            <form className="contact__form" onSubmit={handleSubmit} ref={form}>
              <div className="contact__merged">
                <div className="contact__form_label">
                  <label htmlFor="">NAME</label>
                </div>
                <div className="contact__form_input">
                  <input
                    type="text"
                    name="name"
                    className={`contact__form-input ${formErrors.name ? "error" : ""}`}
                    placeholder={t("contact__form__insert_name")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="contact__name_dash_vertical"></div>
                <div className="contact__name_dash_horizontal"></div>
                {formErrors.name && <p className="error-message">{formErrors.name}</p>}
              </div>
              <div className="contact__form_email">
                <div className="contact__form_label">
                  <label htmlFor="">EMAIL</label>
                </div>
                <div className="contact__form_input">
                  <input
                    type="email"
                    name="email"
                    className={`contact__form-input ${formErrors.email ? "error" : ""}`}
                    placeholder={t("contact__form__insert_email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="contact__email_dash_horizontal"></div>
                {formErrors.email && <p className="error-message">{formErrors.email}</p>}
              </div>
              <div className="contact__form-message">
                <div className="contact__form_label">
                  <label htmlFor="">MESSAGE</label>
                </div>
                <div className="contact__form_input">
                  <textarea
                    name="message"
                    cols="30"
                    rows="5"
                    className={`contact__form-input ${formErrors.message ? "error" : ""}`}
                    placeholder={t("contact__form__write_me_your_project")}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="contact__email_dash_horizontal"></div>
                {formErrors.message && <p className="error-message">{formErrors.message}</p>}
                <div className="contact__form-line"></div>
              </div>
              <div className="contact__lower">
                <div className="contact__checkbox">
                  <label>
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      required
                    />
                    <p>I agree with the storage and processing of my personal data</p>
                  </label>
                </div>
                {formErrors.agreed && <p className="error-message">{formErrors.agreed}</p>}
                <div className="contact__submit_button">
                  <button type="submit" className="contact__button">
                    {t("contact__button_submit")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact