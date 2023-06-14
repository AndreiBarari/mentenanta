import React from "react";
import { Map } from "../atoms/Map";
import { ContactData } from "../atoms/ContactData";
import { ContactForm } from "../atoms/ContactForm";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-wrapper flex-col wrap">
        <div className="contact-header">
          <h1>Intrati in legatura</h1>
        </div>
        <div className="contact-info flex-row wrap">
          <div className="info-left">
            <Map />
          </div>
          <div className="info-right flex-col">
            <ContactData className="right-top flex-col" />
            <ContactForm className="right-bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};
