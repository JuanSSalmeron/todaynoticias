import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Contactanos() {

    return (
        <>
            <Navbar />
            <div>
                <div className="App">
                    
                    <h2>Línea WhatsApp</h2>
                    <p>9981253698 - Angel Adame</p>
                    <p>9984777863 - Juan Salmerón</p>
                    <h2>Línea de Correo electrónico</h2>
                    <p>todaynoticias@gmail.com</p>
                    <h2>Comunícate con alguna de nuestras líneas</h2>
                    <p>
                        Para obtener una pronta respuesta, es necesario comunicarse a alguna de nuestras líneas.
                        Un asesor se comunicará con usted y estará listo para responder cualquier consulta.
                    </p>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default Contactanos;


