import React from 'react';
import { BoxIconElement } from 'boxicons';

const Navbar = () => {
  return (
    <div>
      <nav style={{  textAlign: "center", height: "60px", width: "1366px", background: "#a00000",  top: "0", position: "absolute"}}>
        <div >
          <div style={{ padding: "15px" }}>
            <a href="http://localhost:5173/" style={{ padding: "35px" }}>Inicio</a>
            <a href="http://localhost:5173/clima" style={{ padding: "35px" }}>Clima</a>
            <a href="http://localhost:5173/finanzas " style={{ padding: "35px" }}>Finanzas</a>
            <a href="http://localhost:5173/motivacional" style={{ padding: "35px" }}>Motivacional</a>
            <a href="http://localhost:5173/trafico" style={{ padding: "35px" }}>Tráfico</a>
            <a href="http://localhost:5173/nosotros" style={{ padding: "35px" }}>Nosotros</a>
            <a href="http://localhost:5173/contactanos" style={{ padding: "35px" }}>Contáctanos</a>
            <a href="http://localhost:5173/login" style={{ padding: "35px"}}><box-icon color="white" name='universal-access' style={{color:"white"}}></box-icon></a>
            <a href="http://localhost:5173/dashboard" style={{ padding: "35px" }}><box-icon color="white" name='shield-alt-2'></box-icon></a>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
