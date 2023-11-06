import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Motivacional() {

    return (
        <>
            <Navbar />
            <div>
                <h3>Hola @user, la frase del día es :</h3>
                <div style={{ width: "320px", padding: "150px", background: "gray", marginLeft: "40px", marginTop: "45px", borderRadius: '40px', alignItems: "center" ,marginBlock:'60px'}}>
                    <h2>Frase</h2>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default Motivacional;


