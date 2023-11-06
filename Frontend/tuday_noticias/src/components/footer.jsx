// Footer.js
import React from 'react';
import '../index.css';
import { BoxIconElement } from 'boxicons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>Enlaces útiles</h2>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/nosotros">Nosotros</a></li>
                        <li><a href="/contactanos">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Contacto</h2>
                    <p>Email: todaynoticias@gmail.com</p>
                    <p >Teléfono: +52 (998) 477-78-63</p>
                    <a href="https://wa.me/9984777863" target="_blank" rel="noopener noreferrer">
                        <box-icon type='logo' color="white" name='whatsapp'></box-icon>
                    </a>
                    <a href="https://www.facebook.com/juan.salmeronrivera.7?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <box-icon type='logo' color="white" name='facebook-circle'></box-icon>
                    </a>
                    <a href="https://www.instagram.com/ferrecun_oficial/" target="_blank" rel="noopener noreferrer">
                    <box-icon type='logo' color="white" name='instagram'></box-icon>
                    </a>
                    <box-icon type='logo' color="white" name='messenger'></box-icon>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Today Noticias. Todos los derechos reservados.
            </div>
        </footer>
    );
}
export default Footer;
