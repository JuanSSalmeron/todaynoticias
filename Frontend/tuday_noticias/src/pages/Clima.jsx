import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


function Clima() {
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=6000";
    const estados = [
        {
            "id": 1,
            "name": "Aguascalientes"
        },
        {
            "id": 2,
            "name": "Baja California"
        },
        {
            "id": 3,
            "name": "Baja California Sur"
        },
        {
            "id": 4,
            "name": "Campeche"
        },
        {
            "id": 5,
            "name": "Chiapas"
        },
        {
            "id": 6,
            "name": "Chihuahua"
        },
        {
            "id": 7,
            "name": "Coahuila"
        },
        {
            "id": 8,
            "name": "Colima"
        },
        {
            "id": 9,
            "name": "Durango"
        },
        {
            "id": 10,
            "name": "Guanajuato"
        },
        {
            "id": 11,
            "name": "Guerrero"
        },
        {
            "id": 12,
            "name": "Hidalgo"
        },
        {
            "id": 13,
            "name": "Jalisco"
        },
        {
            "id": 14,
            "name": "Ciudad de Mexico"
        },
        {
            "id": 15,
            "name": "Michoacan"
        },
        {
            "id": 16,
            "name": "Morelos"
        },
        {
            "id": 17,
            "name": "Nayarit"
        },
        {
            "id": 18,
            "name": "Nuevo Leon"
        },
        {
            "id": 19,
            "name": "Oaxaca"
        },
        {
            "id": 20,
            "name": "Puebla"
        },
        {
            "id": 21,
            "name": "Queretaro"
        },
        {
            "id": 22,
            "name": "Quintana Roo"
        },
        {
            "id": 23,
            "name": "San Luis Potosi"
        },
        {
            "id": 24,
            "name": "Sinaloa"
        },
        {
            "id": 25,
            "name": "Sonora"
        },
        {
            "id": 26,
            "name": "Tabasco"
        },
        {
            "id": 27,
            "name": "Tamaulipas"
        },
        {
            "id": 28,
            "name": "Tlaxcala"
        },
        {
            "id": 29,
            "name": "Veracruz"
        },
        {
            "id": 30,
            "name": "Yucatan"
        },
        {
            "id": 31,
            "name": "Zacatecas"
        },
        {
            "id": 32,
            "name": "Estado de Mexico"
        }];
    const [datos, setDatos] = useState([]);
    const [estadoActual, setEstadoActual] = useState("Quintana Roo");

    const consultarDatos = () => {
        fetch(url)
            .then((res) => res.json())
            .then((condicionAtm) => {
                const filteredData = condicionAtm.results.filter(
                    (ciudad) => ciudad.state === estadoActual
                );
                setDatos(filteredData);
            })
            .catch((error) => console.error("Error fetching data:", error));
    };

    useEffect(() => {
        consultarDatos();
    }, [estadoActual]);


    return (
        <>
            <Navbar />
            <br /><br />
            <div style={{ padding: '30px' }}>
                {/* Corrección en el elemento select */}
                <select style={{
                    padding: '10px',
                    margin: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontFamily: 'Arial, sans-serif',
                    width: '200px', // Puedes ajustar el ancho según tu necesidad
                }} value={estadoActual} onChange={(e) => setEstadoActual(e.target.value)}>
                    <option value="">Selecciona un estado</option>
                    {estados.map((opcion) => (
                        <option key={opcion.id} value={opcion.name}>
                            {opcion.name}
                        </option>
                    ))}
                </select>
                <table>
                    <tr style={{ textAlign: "center" }}>
                        <th>Estado</th>
                        <th>Ciudad</th>
                        <th>Clima</th>
                        <th>Temperatura</th>
                        <th>Longitud</th>
                        <th>Latitud</th>
                        <th>Probabilidad de Lluvia</th>
                    </tr>
                    <tbody>
                        {datos.map((ciudad, index) => (
                            <tr key={index} >
                                <td>{estadoActual}</td>
                                <td>{ciudad.name}</td>
                                <td>{ciudad.skydescriptionlong}</td>
                                <td>{ciudad.tempc}°C</td>
                                <td>{ciudad.longitude}°</td>
                                <td>{ciudad.latitude}°</td>
                                <td>{ciudad.probabilityofprecip}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}
export default Clima;


