import React from "react";
import "./LocationMap.scss";

export default function LocationMap() {
  return (
    <section className="location-map">
      <h2>Nosso Endereço</h2>
      <div className="map-container">
        <iframe
          title="Localização da Empresa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4534748744067!2d-46.66232588502257!3d-23.588068368468898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8f0d3c7d1%3A0x2cba57d0e8c4f21!2sPaulista%20Avenue!5e0!3m2!1sen!2sbr!4v1679876543210!5m2!1sen!2sbr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
