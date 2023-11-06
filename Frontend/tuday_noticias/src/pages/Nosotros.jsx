import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import '../index.css';

function Nosotros() {

    return (
        <>
            <Navbar />
            <div style={{textAlign:"center", marginLeft:"230px" }}>
                <h3>Somos Today Noticias:</h3>
                <div class="container">
                    <p>Today es una plataforma digital líder en el mundo de las noticias, comprometida con brindar a sus usuarios información precisa, oportuna y confiable sobre los eventos más relevantes a nivel local, nacional e internacional. Nuestra pasión por el periodismo de calidad nos impulsa a proporcionar una experiencia informativa en línea que se adapte a las necesidades y preferencias de una audiencia diversa y ávida de conocimiento.</p>
                </div>
                <div class="container">
                    <h2>Misión</h2>
                    <p>Nuestra misión es empoderar a las personas con información veraz y objetiva que les permita tomar decisiones informadas en su vida cotidiana y comprender mejor el mundo que les rodea. Buscamos ser un referente en el campo de las noticias en línea, destacando por nuestra integridad, imparcialidad y ética periodística.</p>
                </div>
                <div class="container">
                    <h2>Visión</h2>
                    <p>Aspiramos a ser la principal fuente de noticias en la web, reconocidos por nuestra innovación tecnológica, calidad editorial y capacidad para adaptarnos a las cambiantes necesidades de la audiencia digital. Queremos ser un catalizador del debate público y la reflexión crítica, promoviendo una sociedad informada y participativa.</p>
                </div>
            </div>

            <Footer />
        </>

    )
}
export default Nosotros;


