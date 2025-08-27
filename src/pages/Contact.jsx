import React from 'react'

export default function Contact() {
  return (
    <section className="page contact">
      <h1>Contact</h1>
      <p>Get in touch with us through the form below.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Your message" rows="4" required />
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
