import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom'; //Obtiene el Id de la ruta

export default function UpdUser() {

    const params = useParams()
    // console.log('Este es un parametro '+ params.id)
    console.log(params)
    var id = params.id;
    console.log(id)

    const [User, SetUser] = useState({
        Nombre: "",
        Apellido: "",
        Usuario: "",
        Password: "",
        Phone: ""
    })

    useEffect(() => {

        const loadUser = async () => {
            const response = await axios.get(`http://localhost:3000/users/${id}`)
            console.log(response);
            SetUser({
                Nombre: response.data.Nombre,
                Apellido: response.data.Apellido,
                Usuario: response.data.Usuario,
                Password: response.data.Password,
                Phone: response.data.Phone
            })
        };
        loadUser(); //Ejecutar el método buscar usuario
    }, []);


    return (
        <>
            <Formik
                initialValues={User} //Una vez buscado los datos lo va mapear de forma automatica
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values)

                    var res = await axios.patch(`http://localhost:3000/users/${id}`, values)
                    actions.resetForm()
                    alert('Datos actualizados correctamente')
                    if (res.status == 200) {
                        //Redirecciomar 
                        window.location = '/';
                    }
                    else {
                        alert("Succedio un error")
                    }
                }}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <div style={{ padding: "500px", marginTop: "-400px" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '450px', background: 'gray', borderRadius: '30px', width: "400px" }}>
                            <form onSubmit={handleSubmit} style={{ display: 'grid' }}>
                                <label>Nombre:<br />
                                    <input type="text" name='Nombre' placeholder='Nombre' value={values.Nombre} onChange={handleChange} />
                                </label><br />
                                <label>Apellido:<br />
                                    <input type="text" name='Apellido' placeholder='Apellido' value={values.Apellido} onChange={handleChange} />
                                </label><br />
                                <label>Usuario:<br />
                                    <input type="text" name='Usuario' placeholder='Usuario' value={values.Usuario} onChange={handleChange} />
                                </label><br />
                                <label>Contraseña:<br />
                                    <input type="password" name='Password' placeholder='Contraseña con min 8 caracteres' value={values.Password} onChange={handleChange} />
                                </label><br />
                                <label>Télefono:<br />
                                    <input type="number" name='Phone' placeholder='Télefono' value={values.Phone} onChange={handleChange} />
                                </label><br />
                                <button type='onSubmit' style={{ color: 'white' }}>Actualizar Usuario</button>
                                <br />
                            </form>
                        </div>
                    </div>
                )}
            </Formik>

        </>
    )
}