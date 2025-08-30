import React from 'react';
import './Blog.scss';

import modelo1 from '../../public/assets/modelo1.png';
import modelo2 from '../../public/assets/modelo2.png';
import modelo3 from '../../public/assets/modelo3.png';
import modelo4 from '../../public/assets/modelo4.png';
import modelo5 from '../../public/assets/modelo5.png';
import modelo6 from '../../public/assets/modelo6.png';
import modelo7 from '../../public/assets/modelo7.png';
import modelo8 from '../../public/assets/modelo8.png';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Tendências de Joias para 2024: O Que Está em Alta',
      category: 'Tendências',
      image: modelo7,
      date: '19 de janeiro de 2024'
    },
    {
      id: 2,
      title: 'Como Cuidar das Suas Joias Preciosas',
      category: 'Cuidados',
      image: modelo7,
      date: '19 de janeiro de 2024'
    },
    {
      id: 3,
      title: 'História das Joias: Do Passado ao Presente',
      category: 'História',
      image: modelo3,
      date: '19 de janeiro de 2024'
    },
    {
      id: 4,
      title: 'Como Combinar Joias com Diferentes Looks',
      category: 'Estilo',
      image: modelo8,
      date: '19 de janeiro de 2024'
    },
    {
      id: 5,
      title: 'Joias Sustentáveis: O Futuro da Moda',
      category: 'Sustentabilidade',
      image: modelo7,
      date: '19 de janeiro de 2024'
    },
    {
      id: 6,
      title: 'O Poder das Joias na Autoestima',
      category: 'Dicas',
      image: modelo8,
      date: '19 de janeiro de 2024'
    }
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2>Nosso Blog</h2>
          <p>Não deixe de conferir os últimos posts do nosso blog</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img 
                  src={post.image} 
                  alt={post.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/667eea/ffffff?text=Imagem+Blog';
                  }}
                />
                {/* Data no topo */}
                <div className="blog-card-date">
                  {post.date}
                </div>
                {/* Categoria e título na parte de baixo */}
                <div className="blog-card-overlay">
                  <div className="blog-card-meta">
                    <span className="blog-category">{post.category}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-view-all">
          <a href="#blog" className="view-all-btn">
            VER TODOS
            <span className="view-all-icon">+</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
