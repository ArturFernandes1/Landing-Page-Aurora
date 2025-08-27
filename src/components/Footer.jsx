import React from "react";
import "./Footer.scss";
import { FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logoEmpresa from "../assets/logo-copia.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo e redes sociais */}
        <div className="footer-logo">
          <img src={logoEmpresa} alt="Logo da empresa" />
          <p>Se é importante pra você, é importante pra nós!</p>
          <div className="footer-social">
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Institucional */}
        <div className="footer-col">
          <h3>Institucional</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Minhas Especialidades</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        {/* Áreas de atuação */}
        <div className="footer-col">
          <h3>Áreas de Atuação</h3>
          <ul>
            <li>Ansiedade</li>
            <li>Depressão</li>
            <li>Traumas</li>
            <li>Estresse</li>
            <li>Dificuldades de Relacionamento</li>
            <li>Desenvolvimento Pessoal</li>
          </ul>
        </div>

        {/* Contatos */}
        <div className="footer-col">
          <h3>Contato</h3>
          <ul>
            <li><FaPhoneAlt /> (34) 9 9999-3333</li>
            <li><FaWhatsapp /> (34) 9 9999-3333</li>
            <li><MdEmail /> contato@exemplo.com</li>
            <li><FaMapMarkerAlt /> Rua Florianópolis XXX, Centro - Uberlândia MG</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
