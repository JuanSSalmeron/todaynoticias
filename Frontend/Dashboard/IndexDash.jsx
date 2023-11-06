import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdUser from './UpdUser';
import AddUser from './AddUser';
import { useNavigate } from 'react-router-dom';

function IndexDash() {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:3000/users')
        setUsers(response.data);
        console.log('Datos de la API')
        console.log(response)
    }

    const HandeDelte = async (id) => {

        const response = await axios.delete(`http://localhost:3000/users/${id}`);
        if (response.status = 200) {
            alert("Se borró correctamente")
        } else {
            alert("Sucedió un error")
        }
        fetchUsers()
    }
    const navigate = useNavigate()
    return (
        <div>
            <div style={{ background: "#a00000", height: "600px", width: "200px" }}>
                <ul style={{marginTop:"0px"}}>
                    <li style={{ padding: "10px" }}><a style={{ color: "black" }} href="http://localhost:5173/">Inicio</a></li>
                    <li style={{ padding: "10px" }}><a style={{ color: "black" }} href="#">Estadísticas</a></li>
                    <li style={{ padding: "10px" }}><a style={{ color: "black" }} href="#">Configuración</a></li>
                    <li style={{ padding: "10px" }}><a style={{ color: "black" }} href="http://localhost:5173/dashboard">Usuarios</a></li>
                </ul>
                <table className="table" style={{ marginLeft: "200px", width:"750px"}}>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Contraseña</th>
                            <th scope="col">Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Users.map((users) => (
                            <tr>
                                <td>{users.id}</td>
                                <td>{users.Nombre}</td>
                                <td>{users.Apellido}</td>
                                <td>{users.Usuario}</td>
                                <td>{users.Password}</td>
                                <td>{users.Phone}</td>
                                <td>
                                    <a classname="btn btn-danger mr-auto" style={{ color: 'red' }} onClick={() => HandeDelte(users.id)}>Eliminar</a>
                                    <a className=" btn btn-warning mr-auto" style={{ color: 'orange' }} onClick={() => navigate(`/actualizar/${users.id}`)}> Editar</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default IndexDash;