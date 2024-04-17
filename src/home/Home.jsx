
import React, { useState } from "react";
import "./home.css"; // Importe os estilos CSS da página inicial

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
       
        <div className={`sidenav ${dropdownOpen ? 'active' : ''}`}>
          <a href="#about">Home</a>
          
          <button className="dropdown-btn" onClick={toggleDropdown}>Dropdown 
            <i className={`fa fa-caret-down ${dropdownOpen ? 'active' : ''}`}></i>
          </button>
          <div className={`dropdown-container ${dropdownOpen ? 'show' : ''}`}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>

          <button className="dropdown-btn" onClick={toggleDropdown}>Dropdown 
            <i className={`fa fa-caret-down ${dropdownOpen ? 'active' : ''}`}></i>
          </button>
          <div className={`dropdown-container ${dropdownOpen ? 'show' : ''}`}>
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
