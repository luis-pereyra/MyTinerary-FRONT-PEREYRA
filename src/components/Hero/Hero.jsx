import React from 'react'
import "./Hero.css";

function Hero() {
  return (
    <section className="section-container">
      <img className="container background-image" src="Hero.jpg" alt="Imagen de fondo" />
      <div className="overlay-text">
        <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
        <a href="#" className="cta-button">Click here!</a>
      </div>
    </section>
  )
}

export default Hero