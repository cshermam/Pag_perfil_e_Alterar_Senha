import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Perfil from './App/InfoPerfil.jsx';
import AlterarSenha from './Pages/AlterarSenhaComponents.jsx';

const Router = createBrowserRouter([
  {

    
    path: "/",
    element: <Perfil/>,
  },
  {
    path: "/alterarsenha",
    element: <AlterarSenha/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {Router}/>
  </React.StrictMode>,
)