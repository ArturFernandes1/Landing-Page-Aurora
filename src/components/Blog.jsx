import React, { useState, useEffect } from 'react';
import './Blog.scss';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  // Debug: verificar se o componente está sendo renderizado
  useEffect(() => {
    console.log('Blog component mounted');
    console.log('Blog posts:', blogPosts);
  }, []);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'tendencias', name: 'Tendências' },
    { id: 'cuidados', name: 'Cuidados' },
    { id: 'estilo', name: 'Estilo' },
    { id: 'historia', name: 'História' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'As Tendências de Joias para 2024',
      excerpt: 'Descubra as peças mais desejadas da temporada e como incorporá-las ao seu estilo diário.',
      category: 'tendencias',
      image: '/assets/blog-trends.jpg',
      date: '15 Jan 2024',
      readTime: '5 min',
      author: 'Ana Silva'
    },
    {
      id: 2,
      title: 'Como Cuidar das Suas Joias Preciosas',
      excerpt: 'Dicas essenciais para manter suas joias brilhando e conservando seu valor ao longo dos anos.',
      category: 'cuidados',
      image: '/assets/blog-care.jpg',
      date: '12 Jan 2024',
      readTime: '7 min',
      author: 'Carlos Santos'
    },
    {
      id: 3,
      title: 'Joias que Contam Histórias',
      excerpt: 'Cada peça tem uma história única. Conheça o significado por trás dos símbolos mais populares.',
      category: 'historia',
      image: '/assets/blog-history.jpg',
      date: '10 Jan 2024',
      readTime: '6 min',
      author: 'Maria Costa'
    },
    {
      id: 4,
      title: 'Como Combinar Joias com Diferentes Looks',
      excerpt: 'Guia completo para criar combinações perfeitas que elevam qualquer produção.',
      category: 'estilo',
      image: '/assets/blog-style.jpg',
      date: '8 Jan 2024',
      readTime: '8 min',
      author: 'João Pereira'
    },
    {
      id: 5,
      title: 'O Poder das Joias na Autoestima',
      excerpt: 'Como as joias certas podem transformar não apenas seu visual, mas também sua confiança.',
      category: 'estilo',
      image: '/assets/blog-confidence.jpg',
      date: '5 Jan 2024',
      readTime: '4 min',
      author: 'Lucia Mendes'
    },
    {
      id: 6,
      title: 'Joias Sustentáveis: O Futuro da Moda',
      excerpt: 'Conheça as marcas que estão revolucionando o mercado com práticas sustentáveis.',
      category: 'tendencias',
      image: '/assets/blog-sustainable.jpg',
      date: '3 Jan 2024',
      readTime: '6 min',
      author: 'Pedro Lima'
    }
  ];

  const duplicatedPosts = [...blogPosts, ...blogPosts]; // Duplicar posts para criar o loop infinito

  const filteredPosts = activeCategory === 'todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Debug: verificar posts filtrados
  console.log('Filtered posts:', filteredPosts);

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2>Nosso Blog</h2>
          <p>Descubra dicas, tendências e histórias fascinantes sobre joias</p>
        </div>

        <div className="blog-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          <div className="blog-wrapper">
            {/* Primeira linha - 4 cards */}
            <div className="blog-row">
              {duplicatedPosts.slice(0, 4).map((post, index) => (
                <article key={`row1-${post.id}-${index}`} className="blog-card">
                  <div className="blog-card-image">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      onLoad={() => console.log(`Image loaded: ${post.image}`)}
                      onError={(e) => {
                        console.error(`Image failed to load: ${post.image}`, e);
                        // Fallback para uma imagem de teste
                        e.target.src = 'https://via.placeholder.com/400x250/667eea/ffffff?text=Imagem+Blog';
                      }}
                    />
                    <div className="blog-card-category">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </div>
                  </div>
                  
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-date">{post.date}</span>
                      <span className="blog-read-time">{post.readTime}</span>
                      <span className="blog-author">{post.author}</span>
                    </div>
                    
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    
                    <button className="blog-read-more">
                      Ler mais
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Segunda linha - 4 cards */}
            <div className="blog-row">
              {duplicatedPosts.slice(4, 8).map((post, index) => (
                <article key={`row2-${post.id}-${index}`} className="blog-card">
                  <div className="blog-card-image">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      onLoad={() => console.log(`Image loaded: ${post.image}`)}
                      onError={(e) => {
                        console.error(`Image failed to load: ${post.image}`, e);
                        // Fallback para uma imagem de teste
                        e.target.src = 'https://via.placeholder.com/400x250/667eea/ffffff?text=Imagem+Blog';
                      }}
                    />
                    <div className="blog-card-category">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </div>
                  </div>
                  
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-date">{post.date}</span>
                      <span className="blog-read-time">{post.readTime}</span>
                      <span className="blog-author">{post.author}</span>
                    </div>
                    
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    
                    <button className="blog-read-more">
                      Ler mais
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="blog-newsletter">
          <div className="newsletter-content">
            <h3>Fique por dentro das novidades</h3>
            <p>Receba em primeira mão as últimas tendências e ofertas exclusivas</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Inscrever-se</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Blog;
