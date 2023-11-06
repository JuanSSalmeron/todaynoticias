import React from "react";
import AddUser from "../../../Dashboard/AddUser";


export default function Registrate() {

    return (
        <>




            <div style={{ padding: "500px", marginTop: "-400px" }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '450px', background: 'gray', borderRadius: '30px', width: "400px" }}>
                    <form>
                        <h2>REGÍSTRATE</h2>
                        <label>
                            Nombre(s):<br />
                            <input type="text" placeholder="" />
                        </label><br />
                        <label>
                            Apellido(s):<br />
                            <input type="text" placeholder="" />
                        </label><br />
                        <label>
                            Usuario:<br />
                            <input type="text" placeholder="" />
                        </label><br />
                        <label>
                            Contraseña:<br />
                            <input type="password" placeholder="" />
                        </label><br />
                        <label>
                            Télefono:<br />
                            <input type="number" placeholder="" />
                        </label><br />
                        <br /><button type="submit">Iniciar Sesión</button><br />
                        <p>¿Ya tienes una cuenta? <a href="#">Ingresa aquí</a></p>
                    </form>
                </div>
            </div>
        </>
    );
};
