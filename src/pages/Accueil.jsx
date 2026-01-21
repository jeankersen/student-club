import React from "react";
import "./Accueil.css";
import PhotoSlider from "../components/PhotoSlider.jsx";





const Accueil = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Pour changer le futur</h1>
          <p>Toujours plus vite !</p>
        </div>
      </div>

      {/* Section Université Laval */}
      <section className="about-section">
        <h2>Université Laval</h2>
        <p>Un véhicule à très haute efficacité énergétique conçu par des étudiants passionnés.</p>
        <a href="/histoire" className="btn">Découvrir notre histoire</a>
      </section>

      {/* Galerie de photos */}
      <section className="gallery-section">
        <PhotoSlider />
      </section>

      {/* Rejoignez l'aventure */}
      <section className="join-section">
        <h2>Rejoignez l'aventure</h2>
        <p>Faites partie de notre équipe et contribuez à construire un véhicule innovant et durable.</p>
        <a href="/contact" className="btn">Nous contacter</a>
      </section>
    </div>
  );
};

export default Accueil;
