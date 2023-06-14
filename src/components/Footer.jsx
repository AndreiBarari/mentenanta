import React from "react";
// import logo from "../assets/nav-logo.png";
import { AnimatedText } from "../atoms/AnimatedText";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  let registered = String.fromCodePoint(0x000ae);
  let tradeMark = String.fromCodePoint(0x02122);
  return (
    <div className="footer flex-col">
      <div className="footer-top flex-row">
        <div className="footer-left flex-col">
          <h3>
            <AnimatedText content="Contact" />
          </h3>
          {/* <div className="logo">
            <img src={logo} alt="" />
          </div> */}
          <div className="footer-contact flex-col">
            <span>
              <PhoneAndroidIcon />
              Telefon: <a href="tel:+40720000000">0720000000</a>
            </span>
            <span>
              <PhoneAndroidIcon />
              Telefon: <a href="tel:+40720000000">0720000000</a>
            </span>
            <span>
              <EmailIcon />
              E-mail: <a href="mailto:random2@yahoo.com">employeeOne@yahoo.com</a>
            </span>
            <span>
              <EmailIcon />
              E-mail: <a href="mailto:random2@yahoo.com">employeeTwo@yahoo.com</a>
            </span>
          </div>
        </div>
        <div className="footer-center flex-col">
          <h3>
            <AnimatedText content="Link-uri Utile" />
          </h3>
          <span className="footer-link">
            <a href="/termeni-si-conditii">Termeni și condiții</a>
          </span>
          <span className="footer-link">
            <a href="/prelucrare-date">Politica de prelucrare a datelor cu caracter personal</a>
          </span>
          <span className="footer-link">
            <a href="https://anpc.ro/" target="_blank" rel="noreferrer">
              ANPC
            </a>
          </span>
        </div>
        <div className="footer-right flex-col">
          <h3>
            <AnimatedText content="Intră în legătură" />
          </h3>
          <p>Pentru mai multe informații vă rugăm să ne contactați la numărul afișat mai jos.</p>

          <a className="contact-btn" href="tel:+40720000000">
            072 00 00 000
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        {`
        ${registered}
        ${tradeMark} 2023 ACT Men Serv servicii de mentenanță`}
      </div>
    </div>
  );
};
