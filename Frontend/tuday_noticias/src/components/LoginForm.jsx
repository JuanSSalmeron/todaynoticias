import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const LoginForm = ({ onLogin }) => {
  const [Usuario, setUsuario] = useState('');
  const [Password, setPassword] = useState('');

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };


  const handleLogin = async (e) => {
    e.preventDefault();


    {
      if (Usuario === '' && Password === '') {
        onLogin(Usuario);
      } else {
        alert('Invalid credentials');
      }
    }
  };

  return (
    <>
      <div style={{ padding: "450px", marginTop: "-400px" }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '550px', background: 'gray', borderRadius: '30px', width: "500px" }}>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>INICIO DE SESIÓN</h2>
            <label>
              Usuario:<br />
              <input type="text" value={Usuario} onChange={(e) => setUsuario(e.target.value)} style={{ borderRadius: '10px' }} />
            </label>
            <br />
            <label>
              Contraseña:<br />
              <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: '10px' }} />
            </label>
            <div>
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
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
              )}
            </div>
            <h4>¿Olvidaste tu contraseña?</h4>
            <button type="submit" style={{ marginTop: '10px', background: "#a00000" }} >Iniciar Sesión</button><br />
            <h4 style={{ marginTop: '10px' }}>¿Deseas registrarte? Hazlo aquí</h4>
          </form>
        </div>
      </div>

    </>
  );
};

export default LoginForm;
