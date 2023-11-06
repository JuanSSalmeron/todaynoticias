import React from "react";
import IndexDash from "../../Dashboard/IndexDash";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Registrate from "./components/registrate";
import AddUser from "../../Dashboard/AddUser";
import UpdUser from "../../Dashboard/UpdUser";
import { GoogleLogin } from '@react-oauth/google';
import Footer from "./components/footer";
import Clima from "./pages/clima";
import Finanzas from "./pages/Finanzas";
import Motivacional from "./pages/Motivacional";
import Nosotros from "./pages/Nosotros";
import Contactanos from "./pages/Contactanos";
import Trafico from "./pages/Trafico";
import Sidebar from "../../Dashboard/NavDash";
import Nofound from "./pages/nofound";



function App() {
const router = createBrowserRouter([

  {
    title: 'Inicio',
    path: '/',
    element: <Home/>
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    element: <IndexDash/>
  },
  {
    title: 'Login',
    path: '/login',
    element: <LoginForm/>
  },
  {
    title: 'Navbar',
    path: '/navbar',
    element: <Navbar/>
  },
  {
    title: 'Registarte',
    path: '/registrate',
    element: <Registrate/>
  },
  {
    title: 'Agregar',
    path: '/agregar',
    element: <AddUser/>
  },
  {
    title: 'Actualizar',
    path: '/actualizar',
    element: <UpdUser/>
  },
  {
    title: 'Actualizar',
    path: '/actualizar/:id',
    element: <UpdUser/>
  },
  {
    title: 'Footer',
    path: '/footer',
    element: <Footer/>
  },
  {
    title: 'Clima',
    path: '/clima',
    element: <Clima/>
  },
  {
    title: 'Finanzas',
    path: '/finanzas',
    element: <Finanzas/>
  },
  {
    title: 'Motivacional',
    path: '/motivacional',
    element: <Motivacional/>
  },
  {
    title: 'Tráfico',
    path: '/trafico',
    element: <Trafico/>
  },
  {
    title: 'Nosotros',
    path: '/nosotros',
    element: <Nosotros/>
  },
  {
    title: 'Contacto',
    path: '/contactanos',
    element: <Contactanos/>
  },
  {
    title: 'Dash',
    path: '/dash',
    element: <Sidebar/>
  },
  {
    title: 'Nofound',
    path: '/*',
    element: <Nofound/>
  }



]);
return(
  <>
 <RouterProvider router={router} />
  </>
)
};
export default App
