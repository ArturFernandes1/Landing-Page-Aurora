import React, { useState } from "react";
import "./ContactForm.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    telefone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", telefone: "", message: "" });
  };

  return (
    <section className="contact-form-section">
      <h2>Fale Conosco</h2>
      <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
         {/*  <label htmlFor="name">Nome</label> */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="email">E-mail</label> */}
          <input
            type="telefone"
            id="telefone"
            name="telefone"
            placeholder="Digite seu telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="message">Mensagem</label> */}
          <textarea
            id="message"
            name="message"
            placeholder="Digite sua mensagem"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Enviar Mensagem</button>
      </form>
    </section>
  );
}
