import React, { useState } from "react";
import "./home.css"; // Importe os estilos CSS da página inicial

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
      <div className="Tela-Home">
        <header className="header">
          <img
            className="senailogo"
            src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png"
            alt="Senai Logo"
          />
        </header>

        <div className="sidenav">
          <a href="#about"></a>
          
          <button className="dropdown-btn" onClick={toggleDropdownHome}>Home
            <i className={`fa fa-caret-down ${dropdownOpenHome ? 'active' : ''}`}></i>
          </button>
          <div className={`dropdown-container ${dropdownOpenHome ? 'show' : ''}`}>
            <a href="#">Tirar Foto</a>
            <a href="#">Consultas</a>
          </div>

          <button className="dropdown-btn" onClick={toggleDropdownUsuarios}>Usuários
            <i className={`fa fa-caret-down ${dropdownOpenUsuarios ? 'active' : ''}`}></i>
          </button>
          <div className={`dropdown-container ${dropdownOpenUsuarios ? 'show' : ''}`}>
            <a href="#">Cursos</a>
            <a href="#">Temas</a>
          </div>

          <button className="dropdown-btn" onClick={toggleDropdownAluno}>Aluno 
            <i className={`fa fa-caret-down ${dropdownOpenAluno ? 'active' : ''}`}></i>
          </button>
          <div className={`dropdown-container ${dropdownOpenAluno ? 'show' : ''}`}>
            <a href="#">Ocorrências</a>
            <a href="#">Anexos</a>
          </div>

          <button className="dropdown-btn" onClick={toggleDropdownMatricula}>Matrícula
            <i className={`fa fa-caret-down ${dropdownOpenMatricula ? 'active' : ''}`}></i>
          </button>
          <div className={`dropdown-container ${dropdownOpenMatricula ? 'show' : ''}`}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className="imagem-div">
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
