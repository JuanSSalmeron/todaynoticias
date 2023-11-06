import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'; // Importa Redirect desde React Router (si lo estás utilizando).

function App() {
    const [profile, setProfile] = useState(null);
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);

    const login = () => {
        // Realiza la lógica de inicio de sesión con Google y guarda el perfil en el estado.
        // Esto depende de cómo estés manejando la autenticación con Google.
        // Por ejemplo, puedes usar una biblioteca como "react-google-login".

        // Simulando el inicio de sesión:
        const userProfile = {
            name: '',
            email: '',
            picture: '',
        };
        setProfile(userProfile);
        setRedirectToDashboard(true);
    };

    const logOut = () => {
        // Realiza la lógica de cierre de sesión y restablece el estado.
        setProfile(null);
    };

    return (
        <div>
            {redirectToDashboard && <Redirect to="/C:\Users\juans\Desktop\Proyecto_SM44\Frontend\Dashboard\IndexDash.jsx" />}

            <h2>React Google Login</h2>
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={login}>Sign in with Google 🚀</button>
            )}
        </div>
    );
}

export default App;