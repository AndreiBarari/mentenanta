import React from "react";
import { AnimatedText } from "./AnimatedText";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

export const ContactData = () => {
  return (
    <div className="right-top flex-col">
      <h2>
        <AnimatedText content="Ne puteti contacta la:" />
      </h2>
      <div className="contact-data flex-col">
        <span className="flex-row">
          <PhoneAndroidIcon />
          Telefon: <a href="tel:+40720000000">0720000000</a>
        </span>
        <span className="flex-row">
          <PhoneAndroidIcon />
          Telefon: <a href="tel:+40720000000">0720000000</a>
        </span>
        <span className="flex-row">
          <EmailIcon />
          E-mail: <a href="mailto:random2@yahoo.com">employeeOne@yahoo.com</a>
        </span>
        <span className="flex-row">
          <EmailIcon />
          E-mail: <a href="mailto:random2@yahoo.com">employeeTwo@yahoo.com</a>
        </span>
      </div>
    </div>
  );
};
