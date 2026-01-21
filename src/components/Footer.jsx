import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* À propos du club */}
        <div className="footer-about">
          <h3>Club Étudiant</h3>
          <p>
            Un groupe d’étudiants passionnés qui conçoivent des véhicules à haute efficacité énergétique et participent à des compétitions innovantes.
          </p>
        </div>

        {/* Liens rapides */}
        <div className="footer-links">
          <h4>Liens rapides</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/projet">Projet</a></li>
            <li><a href="/histoire">Histoire</a></li>
            <li><a href="/competitions">Compétitions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-social">
          <h4>Suivez-nous</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Alerion-Mileage. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
