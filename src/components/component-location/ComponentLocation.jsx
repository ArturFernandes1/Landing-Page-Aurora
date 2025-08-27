// ComponentLocation.jsx
import React from "react";
import ContactForm from "./ContactForm";
import LocationMap from "./LocationMap";
import "./ComponentLocation.scss";

export default function ComponentLocation() {
  return (
    <section className="component-location">
      <div className="container-location">
        <div className="form-side">
          <ContactForm />
        </div>
        <div className="map-side">
          <LocationMap />
        </div>
      </div>
    </section>
  );
}
