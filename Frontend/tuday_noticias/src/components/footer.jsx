// Footer.js
import React from 'react';
import '../index.css';


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
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Today Noticias. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;
