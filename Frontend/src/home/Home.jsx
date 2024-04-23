import React, { useState } from "react";
import "./home.css"; // Importe os estilos CSS da página inicial
import { Link } from "react-router-dom";

function Home() {


  
  const [dropdownOpenHome, setDropdownOpenHome] = useState(false);
  const [dropdownOpenUsuarios, setDropdownOpenUsuarios] = useState(false);
  const [dropdownOpenAluno, setDropdownOpenAluno] = useState(false);
  const [dropdownOpenMatricula, setDropdownOpenMatricula] = useState(false);

  const toggleDropdownHome = () => {
    setDropdownOpenHome(!dropdownOpenHome);
  };

  const toggleDropdownUsuarios = () => {
    setDropdownOpenUsuarios(!dropdownOpenUsuarios);
  };

  const toggleDropdownAluno = () => {
    setDropdownOpenAluno(!dropdownOpenAluno);
  };

  const toggleDropdownMatricula = () => {
    setDropdownOpenMatricula(!dropdownOpenMatricula);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <div className="Tela-home">
        <header className="header">
          <img className="senailogo"
            src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png"
            alt="Senai Logo"
          />

        <h1 className="header-h1">Senai Shunji Nishimura</h1>

        </header>

        <div className="conteudo">
          <div className="sidenav">
            <a href="#about"></a>
{/* ////////////////////////////////home///////////////////////////////////////////// */}

            <Link to="/home" className="botaohome">
                Home
              </Link>

{/* /////////////////////////////////usuários//////////////////////////////////////////// */}

            <button className="dropdown-btn" onClick={toggleDropdownUsuarios}>
              Usuários
              <i
                className={`fa fa-caret-down ${
                  dropdownOpenUsuarios ? "active" : ""
                }`}
              ></i>
            </button>
            <div
              className={`dropdown-container ${
                dropdownOpenUsuarios ? "show" : ""
              }`}
            >
              <Link to="/tirarfoto" className="action-button">
                &nbsp;&nbsp;Tirar fotos
              </Link>
              <Link to="/consultas" className="action-button">
                &nbsp;&nbsp;Consultas
              </Link>
            </div>

{/* /////////////////////////////////cursos//////////////////////////////////////////// */}

            <button className="dropdown-btn" onClick={toggleDropdownAluno}>
              Cursos
              <i
                className={`fa fa-caret-down ${
                  dropdownOpenAluno ? "active" : ""
                }`}
              ></i>
            </button>
            <div
              className={`dropdown-container ${
                dropdownOpenAluno ? "show" : ""
              }`}
            >
               <Link to="/idev" className="action-button">
                &nbsp;&nbsp;Desenvolvimento &nbsp;&nbsp;de Sistemas
              </Link>
              <Link to="/iele" className="action-button">
                &nbsp;&nbsp;Eletroeletrônica
              </Link>
              <Link to="/imec" className="action-button">
                &nbsp;&nbsp;Mecânica
              </Link>
            </div>

{/* //////////////////////////////imagem lateral//////////////////////////////////////////// */}

          </div>
          <img
            className="imagem-lateral"
            src="https://live.staticflickr.com/7601/16996079569_dbd29856a7_b.jpg"
            alt="Imagem Lateral"
          />
          
        </div>
      </div>
    </>
  );
}

export default Home;
