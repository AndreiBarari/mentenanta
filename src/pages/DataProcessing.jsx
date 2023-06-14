import React from "react";
import { TermsContent } from "../atoms/TermsContent";
import { dataProcessing } from "../data/serviceData";

export const DataProcessing = () => {
  return (
    <div className="terms flex-col">
      <h2>Politică de procesare a datelor</h2>
      <div className="terms-wrapper flex-col">
        <div className="terms-notice">
          Aceasta este politica noastră de procesare a datelor cu caracter personal pentru firma ACT
          Men Serv, mentenanță în industria panificației. Prin utilizarea site-ului nostru și
          furnizarea informațiilor dumneavoastră de contact, sunteți de acord cu colectarea și
          prelucrarea datelor dumneavoastră în conformitate cu această politică
        </div>
        {dataProcessing.map(data => {
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
          Vă mulțumim că ați ales serviciile noastre de mentenanță în industria panificației. Ne
          angajăm să respectăm confidențialitatea datelor dumneavoastră și să procesăm informațiile
          în conformitate cu legislația aplicabilă privind protecția datelor.
        </div>
      </div>
    </div>
  );
};
