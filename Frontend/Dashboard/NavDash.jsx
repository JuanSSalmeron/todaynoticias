import React from 'react';

function Sidebar() {
    return (
        <>
        <div style={{ background: "#a00000", height: "1500px", width: "300px" }}>
            <h3 style={{padding:"30px"}}>Mi Dashboard</h3>
            <ul>
                <li style={{padding:"20px"}}><a style={{ color: "black" }} href="http://localhost:5173/">Inicio</a></li>
                <li style={{padding:"20px"}}><a style={{ color: "black" }} href="#">Estadísticas</a></li>
                <li style={{padding:"20px"}}><a style={{ color: "black" }} href="#">Configuración</a></li>
                <li style={{padding:"20px"}}><a style={{ color: "black" }} href="http://localhost:5173/dashboard">Usuarios</a></li>
            </ul>
        </div>
        </>
    );
}

export default Sidebar;
