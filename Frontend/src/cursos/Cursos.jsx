import "./cursos.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cursos() {
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

          <Link to="/tirarfoto" className="navbarbutton">
            Usuários
          </Link>

          <Link to="/tirarfoto" className="navbarbutton">
            Cursos
          </Link>
        </div>
      </header>

      <div className="titulo">
            <h1 className="idev-h1">Técnico em Desenvolvimento de Sistemas</h1>
        </div>

        <div class="cards-list">
      <div className="card 1">
      <Link to="/cursos" className="botão-card-idev">
        <div className="card_image_Idev" >
          <img className="card_image_Idev" src="src/assets/idev1.jpg" alt="IDEV1" />
        </div>
      </Link>
        <div className="card_title title-white">
          <p>IDEV</p>
        </div>
    </div>

      <div class="card 2">
      <Link to="/cursos" className="botão-card">
        <div class="card_image_Idev">
          <img className="card_image_Idev"   src="src/assets/idev2.jpg" />
        </div>
      </Link>
      <div class="card_title title-white">
          <p>Eletro Eletronica</p>
      </div>
      </div>
      
      <div class="card 3">
      <Link to="/cursos" className="botão-card" >
        <div className="card_image_Idev">
          <img className="card_image_Idev" src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" />
        </div>
      </Link>
        <div class="card_title title-white">
          <p>Mecanica</p>
        </div>
      </div>


        
      </div>
    </>
  );
}

export default Cursos;
