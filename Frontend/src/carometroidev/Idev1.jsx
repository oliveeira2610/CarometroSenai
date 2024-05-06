import "./carometroidev.css";
import { Link } from "react-router-dom";

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
        <div class="cards-list">
      <div className="card 1">

      <Link to="/carometroidev1" className="botão-card-idev">
        <div className="card_image_card" >
          <img className="card_image_card" src="src/assets/idev1.jpg" alt="IDEV1" />
        </div>
      </Link>
        <div className="card_title title-white">
          <p>IDEV1 - 2022</p>
        </div>
    </div>

      <div class="card 2">
      <Link to="/carometroidev2" className="botão-card">
        <div className="card_image_card">
          <img className="card_image_card"   src="src/assets/idev2.jpg" />
        </div>
      </Link>
      <div class="card_title title-white">
          <p>IDEV2 - 2023</p>
      </div>
      </div>
      
          <div class="card 3">
      <Link to="/carometroidev3" className="botão-card" >
        <div className="card_image_card">
          <img className="card_image_card" src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" />
          <div class="overlay">
            <div class="text">Nome: João<br/>Telefone: (11) 99999-9999<br/>CPF: 123.456.789-00</div>
          </div>
        </div>
      </Link>
      <div class="card_title title-white">
        <p>IDEV3 - 2024</p>
      </div>
    </div>



        
      </div>
      </>
    );
  }
  
  export default Idev1;
  