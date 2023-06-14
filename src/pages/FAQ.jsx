import React from "react";
import { faq } from "../data/serviceData";
import { FAQCard } from "../atoms/FAQCard";

export const FAQ = () => {
  return (
    <div className="faq flex-row">
      <div className="faq-content flex-col">
        {faq.map(card => {
          return <FAQCard key={card.id} question={card.question} answer={card.answer} />;
        })}
      </div>
    </div>
  );
};
