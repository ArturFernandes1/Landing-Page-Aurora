import React from 'react';
import './Presentation.scss';
import persona from '/assets/persona.png'; // Substitua pelo caminho da sua imagem

export default function TextImageSection() {
  return (
    <section className="text-image-section">
        <div className="control-space-presentation">
            <div className="text-container">
                <h2>Nosso Serviço</h2>
                <p>
                Aqui você pode colocar uma descrição detalhada sobre seu produto, serviço ou empresa. 
                O texto fica à esquerda em telas grandes e acima da imagem em telas menores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                </p>
                <button>Saiba Mais</button>
            </div>
            <div className="image-container">
                <img src={persona} alt="Descrição da imagem" />
            </div>
        </div>
    </section>
  );
}
