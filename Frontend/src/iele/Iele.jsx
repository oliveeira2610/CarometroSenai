import "./iele.css";
import { Link } from "react-router-dom";

function Iele() {
  return (
    <>
      <header>
        
      <Link to="/home" className="link-senai-logo">
        <img className="senailogo"
            src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png"
            alt="Senai Logo"
          />
          </Link>

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

      <div className="titulo">
            <h1 className="Cards-h1">Técnico em Eletroeletrônica</h1>
        </div>

      <div class="cards-list">
        <div class="card 1">
        <Link to="/carometroiele1" className="botão-card">
          <div className="card_image_card">
            <img className="card_image_card" src="src/assets/ielemec1.png" />
          </div>
          </Link>
          <div class="card_title title-white">
            <p>IELE1 - 2022</p> 
          </div>
        </div>

      <div class="card 2">
      <Link to="/carometroiele2" className="botão-card">
        <div className="card_image_card">
          <img className="card_image_card" src="src/assets/ielemec2.png" />
        </div>
        </Link>
        <div class="card_title title-white">
          <p>IELE2 - 2023</p>
        </div>
      </div>
      
      <div class="card 3">
      <Link to="/carometroiele3" className="botão-card">
        <div className="card_image_card">
          <img className="card_image_card" src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" />
        </div>
      </Link>
        <div class="card_title title-white">
          <p>IELE3 - 2024</p>
        </div>
      </div>


        
      </div>
    </>
  );
}

export default Iele;
