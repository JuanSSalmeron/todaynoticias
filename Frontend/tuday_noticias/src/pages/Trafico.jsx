import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import GoogleMaps from "simple-react-google-maps"

function Trafico() {

    return (
        <>
            <Navbar /> 
            <div style={{ marginTop:"65px",padding:"15px"}}>
                <GoogleMaps style={{ width: "1320px", height: "600px" }}
                    apiKey="AIzaSyBm10EUnScthNmCrpXB8BnXMI08YbWFrIc"
                    zoom={10}
                    center={{
                        lat: 21.112616,
                        lng: -86.8817151,
                    }}
                    markers={{
                        lat: 21.112616,
                        lng: -86.8817151
                    }}
                />
            </div>
            <Footer />
        </>
    )
}
export default Trafico;


