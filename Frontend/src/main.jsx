import React from 'react'; // Importa a biblioteca React.
import MainRoutes from "./route.jsx"; // Importa o componente MainRoutes que define as rotas.
import { BrowserRouter } from 'react-router-dom'; // Importa o componente BrowserRouter do react-router-dom para habilitar a navegação.
import ReactDOM from "react-dom/client"; // Importa o módulo ReactDOM para renderizar o aplicativo.
import './index.css'; // Importa o arquivo de estilos CSS.

ReactDOM.createRoot(document.getElementById('root')).render(
  // Seleciona o elemento com id 'root' e cria uma raiz para renderização do React.
  <BrowserRouter>
    {/* Envolve MainRoutes com BrowserRouter para habilitar a navegação de rotas */}
    <MainRoutes />
  </BrowserRouter>
);
