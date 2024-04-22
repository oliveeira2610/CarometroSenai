import "./idev.css";
import { Link } from "react-router-dom";

function Idev() {
  return (
    <>
      <header>
        
        <img
          className="senailogo"
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

      <div className="titulo">
            <h1 className="idev-h1">Técnico em Desenvolvimento de Sistemas</h1>
        </div>

      <div class="cards-list">
        <div class="card 1">
          <div class="card_image">
            <img src="src/assets/idev1.jpg" />
          </div>
          <div class="card_title title-white">
            <p>IDEV1 - 2022</p> 
          </div>
        </div>

      <div class="card 2">
        <div class="card_image">
          <img src="src/assets/idev2.jpg" />
        </div>
        <div class="card_title title-white">
          <p>IDEV2 - 2023</p>
        </div>
      </div>
      
      <div class="card 3">
        <div class="card_image">
          <img src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" />
        </div>
        <div class="card_title title-white">
          <p>IDEV3 - 2024</p>
        </div>
      </div>


        
      </div>
    </>
  );
}

export default Idev;
