import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { AnimatedText } from "./AnimatedText";

import EmailIcon from "@mui/icons-material/Email";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

export const ContactForm = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("service_w5nj1wq", "template_2tnwyvi", form.current, "YiGOHRuuU1FcA-kNl").then(
      result => {
        console.log(result.text);
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 2000);
      },
      error => {
        console.log(error.text);
      }
    );

    form.current.reset();
  };

  return (
    <div className="right-bottom">
      <h2>
        <AnimatedText content="Sau ne puteti scrie:" />
      </h2>
      <div className="contact-data">
        <form action="" onSubmit={sendEmail} ref={form}>
          <div className="form-content-input-flex">
            <div>
              <input
                required
                type="email"
                name="user-email"
                id="user-email"
                placeholder="example@yahoo.com"
                className="form-content-input"
              />
              <label htmlFor="user-email" className="form-content-label">
                Email:
              </label>
            </div>
            <div>
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+40 000 000 000"
                className="form-content-input"
              />
              <label htmlFor="phone" className="form-content-label">
                Telefon:
              </label>
            </div>
          </div>

          <div className="form-content-textarea">
            <textarea
              required
              rows="6"
              name="message"
              id="message"
              placeholder="Mesajul dumneavoastra..."
              className="form-content-input"
            ></textarea>
            <label htmlFor="message" className="form-content-label">
              Mesaj:
            </label>
          </div>

          <button type="submit" className="form-content-btn flex-row">
            {isSent ? (
              <>
                Mesaj trimis cu succes!
                <MarkEmailReadIcon />
              </>
            ) : (
              <>
                Trimite
                <EmailIcon />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
