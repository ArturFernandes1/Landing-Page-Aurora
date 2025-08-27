import React from 'react';
import './Accordion.scss'

export default function Accordion() {
    return (
        <>
        <div className="container-accordion">
            <h2 className="title-accordion">Perguntas Frequentes</h2>
            
                <div className="accordion" id="accordionExample">
                    
                    {/* Pergunta 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                As joias são de prata ou folheadas?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Nossas joias são produzidas em <strong>prata 925 legítima</strong> e também
                                oferecemos opções folheadas a ouro 18k, todas com garantia de qualidade
                                e certificado de autenticidade.
                            </div>
                        </div>
                    </div>

                    {/* Pergunta 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Posso trocar ou devolver uma joia?
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Sim 😊! Você pode solicitar troca ou devolução em até 
                                <strong> 7 dias após o recebimento</strong>, desde que o produto esteja em
                                perfeitas condições, sem sinais de uso.
                            </div>
                        </div>
                    </div>

                    {/* Pergunta 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                As joias têm garantia?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Todas as nossas peças possuem <strong>garantia de 1 ano</strong> contra defeitos
                                de fabricação. Além disso, oferecemos serviços de polimento e ajuste
                                para manter sua joia sempre impecável ✨.
                            </div>
                        </div>
                    </div>

                    {/* Pergunta 4 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                Qual é o prazo de entrega?
                            </button>
                        </h2>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                O prazo varia conforme a região, mas geralmente as entregas são feitas
                                em até <strong>5 a 10 dias úteis</strong>. Para regiões metropolitanas,
                                o prazo pode ser ainda menor.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
