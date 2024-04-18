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

      <div className="TelHomea-">
        <header className="header">
          <img
            className="senailogo"
            src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png"
            alt="Senai Logo"
          />
        </header>

        <div className="conteudo">

          <div className="sidenav">
            <a href="#about"></a>

            <button className="dropdown-btn" onClick={toggleDropdownHome}>
              Home
              <i
                className={`fa fa-caret-down ${
                  dropdownOpenHome ? "active" : ""
                }`}
              ></i>
            </button>
            <div
              className={`dropdown-container ${dropdownOpenHome ? "show" : ""}`}
            >
              <Link to="/tirarfoto" className="action-button">&nbsp;&nbsp;Tirar fotos</Link>
              <a href="#">&nbsp;&nbsp;Consultas</a>
            </div>

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
              <a href="#">&nbsp;&nbsp;Cursos</a>
              <a href="#">&nbsp;&nbsp;Turmas</a>
            </div>

            <button className="dropdown-btn" onClick={toggleDropdownAluno}>
              Aluno
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
              <a href="#">&nbsp;&nbsp;Ocorrências</a>
              <a href="#">&nbsp;&nbsp;Anexos</a>
            </div>

            <a href="matricula">Mátricula</a>
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