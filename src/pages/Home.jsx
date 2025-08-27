import React from 'react'
import './Home.scss'

import Navigation from '../components/Navigation'
import CardIcons from '../components/CardIcons'
import Exhibition from '../components/Exhibition'
import Presentation from '../components/Presentation'
import ScrollToTop from '../components/ScrollToTop'
import Comments from '../components/Comments'

import ComponentLocation from '../components/component-location/ComponentLocation'
import ProductSection from '../components/ProductSection'
import Accordion from '../components/component-Accordion/Accordion'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navigation/>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Bem-vindo à Landing Page</h1>
          <p>Uma experiência única e moderna</p>
        </div>
      </div>
      <section id="sobre-nos">
        <Presentation/>
      </section>
      <CardIcons/>
      <Exhibition/>
      <Accordion/>
      <Comments/>
      <section id="contato">
        <ComponentLocation/>
      </section>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}
