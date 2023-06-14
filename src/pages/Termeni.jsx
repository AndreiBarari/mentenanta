import React from "react";
import { TermsContent } from "../atoms/TermsContent";
import { termsData } from "../data/serviceData";

export const Termeni = () => {
  return (
    <div className="terms flex-col">
      <h2>Termeni și Condiții de Utilizare</h2>
      <div className="terms-wrapper flex-col">
        <div className="terms-notice">
          Bine ați venit la ACT Men Serv, servicii de mentenanță în industria panificației. Vă rugăm
          să citiți cu atenție termenii și condițiile de utilizare de mai jos. Accesul și utilizarea
          acestui site implică acceptarea și respectarea acestor termeni și condiții. Dacă nu
          sunteți de acord cu acești termeni, vă rugăm să nu utilizați acest site.
        </div>
        {termsData.map(data => {
          return (
            <TermsContent
              key={data.id}
              number={data.number}
              name={data.name}
              content={data.content}
            />
          );
        })}
        <div className="terms-notice">
          Acești termeni și condiții intră în vigoare începând cu data accesării site-ului și se
          aplică pe durata utilizării acestuia. Vă mulțumim pentru vizită și pentru înțelegerea
          dumneavoastră.
        </div>
      </div>
    </div>
  );
};
