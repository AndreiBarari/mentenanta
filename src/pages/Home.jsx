import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home flex-col">
      <div className="home-description flex-col">
        <h1>Bine ați venit la ACT Men Serv mentenanță!</h1>
        <h2>Experți în menținerea eficienței echipamentelor tale.</h2>
        <h2>Oferim soluții de mentenanță pentru utilaje din industria alimentară.</h2>
        <div className="home-offer flex-col">
          <h3>Descoperă serviciile noastre</h3>
          <NavLink className="home-btn" to="/servicii">
            Servicii
          </NavLink>
        </div>
      </div>
    </div>
  );
};
