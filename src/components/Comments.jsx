import React, { useEffect, useRef } from 'react';
import './Comments.scss';

export default function Comments() {
    const scrollRef = useRef(null);
    
    const comments = [
        {
            id: 1,
            name: "Maria Silva",
            rating: 5,
            date: "15 de Nov, 2024",
            comment: "Excelente qualidade! As joias são lindas e o atendimento foi perfeito. Recomendo muito!",
            avatar: "👩‍💼"
        },
        {
            id: 2,
            name: "João Santos",
            rating: 5,
            date: "12 de Nov, 2024",
            comment: "Presente para minha esposa e ela adorou! O design é único e a prata é de primeira qualidade.",
            avatar: "👨‍💼"
        },
        {
            id: 3,
            name: "Ana Costa",
            rating: 5,
            date: "10 de Nov, 2024",
            comment: "Comprei um colar e superou minhas expectativas. Entrega rápida e produto impecável!",
            avatar: "👩‍🎨"
        },
        {
            id: 4,
            name: "Carlos Lima",
            rating: 5,
            date: "08 de Nov, 2024",
            comment: "Atendimento excepcional e produtos de alta qualidade. Já é minha segunda compra!",
            avatar: "👨‍🔬"
        },
        {
            id: 5,
            name: "Fernanda Oliveira",
            rating: 5,
            date: "05 de Nov, 2024",
            comment: "Joias deslumbrantes! A qualidade da prata é impressionante e o design é atemporal.",
            avatar: "👩‍💻"
        },
        {
            id: 6,
            name: "Roberto Almeida",
            rating: 5,
            date: "03 de Nov, 2024",
            comment: "Presente para minha mãe e ela ficou emocionada! Produto de excelente qualidade.",
            avatar: "👨‍🏫"
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span 
                key={index} 
                className={`star ${index < rating ? 'filled' : ''}`}
            >
                ⭐
            </span>
        ));
    };

    // Scroll automático suave
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollInterval;
        
        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    // Volta ao início quando chega ao fim
                    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Avança um pouco
                    scrollContainer.scrollBy({ left: 350, behavior: 'smooth' });
                }
            }, 4000); // Move a cada 4 segundos
        };

        const stopAutoScroll = () => {
            clearInterval(scrollInterval);
        };

        // Pausa o scroll automático quando o mouse está sobre o container
        scrollContainer.addEventListener('mouseenter', stopAutoScroll);
        scrollContainer.addEventListener('mouseleave', startAutoScroll);

        startAutoScroll();

        return () => {
            stopAutoScroll();
            scrollContainer.removeEventListener('mouseenter', stopAutoScroll);
            scrollContainer.removeEventListener('mouseleave', startAutoScroll);
        };
    }, []);

    return (
        <section className="comments-section">
            <div className="comments-container">
                <div className="comments-header">
                    <h2 className="comments-title">O que nossos clientes dizem</h2>
                    <p className="comments-subtitle">
                        Descubra por que centenas de clientes escolhem nossas joias
                    </p>
                </div>
                
                <div className="comments-grid" ref={scrollRef}>
                    <div className="comments-wrapper">
                        {comments.map((comment) => (
                            <div key={comment.id} className="comment-card">
                                <div className="comment-header">
                                    <div className="comment-avatar">
                                        {comment.avatar}
                                    </div>
                                    <div className="comment-info">
                                        <h4 className="comment-name">{comment.name}</h4>
                                        <div className="comment-rating">
                                            {renderStars(comment.rating)}
                                        </div>
                                        <span className="comment-date">{comment.date}</span>
                                    </div>
                                </div>
                                
                                <div className="comment-content">
                                    <p className="comment-text">"{comment.comment}"</p>
                                </div>
                                
                                <div className="comment-footer">
                                    <div className="comment-verified">
                                        <span className="verified-icon">✓</span>
                                        Cliente Verificado
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="comments-stats">
                    <div className="stat-item">
                        <span className="stat-number">4.9</span>
                        <span className="stat-label">Avaliação Média</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Clientes Satisfeitos</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">98%</span>
                        <span className="stat-label">Recomendam</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
