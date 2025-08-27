import React, { useState, useEffect } from 'react';
import './ScrollToTop.scss';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Função para verificar se deve mostrar o botão
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Função para voltar ao topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Adicionar event listener para scroll
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        
        // Cleanup do event listener
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    className="scroll-to-top"
                    onClick={scrollToTop}
                    aria-label="Voltar ao topo"
                    title="Voltar ao topo"
                >
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <polyline points="18,15 12,9 6,15"></polyline>
                    </svg>
                </button>
            )}
        </>
    );
}
