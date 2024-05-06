import React from 'react';
import { Link } from "react-router-dom";
import "./carometroidev.css";

function Idev1() {
  return (
    <>
      <header>
        <img className="senailogo"
          src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png"
          alt="Senai Logo"
        />
        <div className="navbartop">
          <Link to="/home" className="navbarbutton">
            Home
          </Link>
          <Link to="/" className="navbarbutton">
            Usuários
          </Link>
          <Link to="/cursos" className="navbarbutton">
            Cursos
          </Link>
        </div>
      </header>
      
      <div className="cards-list">
        <div className="card card-1">
          <Link to="/" className="botao-card">
            <div className="card_image_card">
              <img className="card_image" src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" alt="User Icon"/>
              <div className="overlay">
                <div className="text">Nome: João<br/>Telefone: (11) 99999-9999<br/>CPF: 123.456.789-00</div>
              </div>
            </div>
          </Link>
          <div className="card_title title-white">
            <p>Alexandre</p>
          </div>
        </div>

        <div className="card card-2">
          <Link to="/" className="botao-card">
            <div className="card_image_card">
              <img className="card_image" src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" alt="User Icon"/>
              <div className="overlay">
                <div className="text">Nome: João<br/>Telefone: (11) 99999-9999<br/>CPF: 123.456.789-00</div>
              </div>
            </div>
          </Link>
          <div className="card_title title-white">
            <p>Alexandre</p>
          </div>
        </div>

        <div className="card card-3">
          <Link to="/" className="botao-card">
            <div className="card_image_card">
              <img className="card_image" src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" alt="User Icon"/>
              <div className="overlay">
                <div className="text">Nome: João<br/>Telefone: (11) 99999-9999<br/>CPF: 123.456.789-00</div>
              </div>
            </div>
          </Link>
          <div className="card_title title-white">
            <p>Alexandre</p>
          </div>
        </div>

        <div className="card card-4">
          <Link to="/" className="botao-card">
            <div className="card_image_card">
              <img className="card_image" src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" alt="User Icon"/>
              <div className="overlay">
                <div className="text">Nome: João<br/>Telefone: (11) 99999-9999<br/>CPF: 123.456.789-00</div>
              </div>
            </div>
          </Link>
          <div className="card_title title-white">
            <p>Alexandre</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Idev1;
