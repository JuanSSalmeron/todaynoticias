import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import Registrate from '../tuday_noticias/src/components/registrate';

export default function AddUser() {
  const navigate = useNavigate()
  return (
    <>

      <Formik
        initialValues={{
          Nombre: "",
          Apellido: "",
          Usuario: "",
          Password: "",
          Phone: ""
        }}

        // VER LOS VALORES QUE AGREGA EL USUARIO
        onSubmit={async (values, actions) => {
          console.log(values)

          var res = await axios.post('http://localhost:3000/users', values);

          actions.resetForm()
          alert('Datos agregados correctamente')

          navigate('/')
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
                <button type='onSubmit' style={{ color: 'white' }}>Crear Usuario</button>
                <br />
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  )
}
