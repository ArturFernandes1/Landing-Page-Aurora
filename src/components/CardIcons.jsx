import React from 'react';
import './CardIcons.scss';
import ruby from '/assets/ruby.png';
import reliability from '/assets/reliability.png';
import deal from '/assets/deal.png';

const cards = [
  { title: 'Sofisticação', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Quisque non felis nec arcu aliquam cursus. Integer at justo non risus tincidunt varius.', image: ruby },
  { title: 'Confiança', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Quisque non felis nec arcu aliquam cursus. Integer at justo non risus tincidunt varius.', image: reliability },
  { title: 'Credibilidade', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Quisque non felis nec arcu aliquam cursus. Integer at justo non risus tincidunt varius.', image: deal },
  { title: 'Segurança', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Quisque non felis nec arcu aliquam cursus. Integer at justo non risus tincidunt varius.', image: ruby },
  { title: 'Excelência', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Quisque non felis nec arcu aliquam cursus. Integer at justo non risus tincidunt varius.', image: reliability },
  { title: 'Compromisso', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Quisque non felis nec arcu aliquam cursus. Integer at justo non risus tincidunt varius.', image: deal },
];

export default function CardIcons() {
  return (
    <section className="section-card">
      <div className="control-space-cards">
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="container-card">
              <img src={card.image} alt={card.title} className="card-icon" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
