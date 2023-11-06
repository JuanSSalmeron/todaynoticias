import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '';
import LoginForm from '';
import { Formikcd } from 'formik';

function AddUser() {
    return (
        <>
            <Navbar />
            <Formikcd
                initialValues={{
                    UserName: "",
                    Password: ""

                }}

                // VER LOS VALORES QUE AGREGA EL USUARIO
                onSubmit={async (values, actions) => {
                    console.log(values)

                    var res = await axios.post('http://localhost:3000/users', values)

                    actions.resetForm()
                    alert('Datos agregados correctamente')
                    window.location = '/IndexDash';

                }}
            >
                {({ handleChange, handleSubmit, values }) => (

                    <div className='container mx-15 w-50  p-20'>
                        <h2 className="font-black text-3lx text-center">Agregar nuevo usuario</h2>

                        <LoginForm onSubmit={handleSubmit}>
                            <LoginForm.Group className="mb-3">
                                <LoginForm.Label>Usuario</LoginForm.Label>
                                <LoginForm.Control type="text" name="UserName"
                                    onChange={handleChange}
                                    value={values.Usuario} />
                            </LoginForm.Group>
                            <LoginForm.Group className="mb-3" >
                                <LoginForm.Label>Password</LoginForm.Label>
                                <LoginForm.Control type="text" name="Password"
                                    onChange={handleChange}
                                    value={values.Password} />
                            </LoginForm.Group>
                            <button type='onSubmit' className='btn btn-success'>Guardar</button>
                        </LoginForm>

                    </div>

                )}
            </Formikcd>

        </>
    )
}

export default AddUser