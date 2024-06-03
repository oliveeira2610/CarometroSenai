import "./usuarios.css";
import { Link } from "react-router-dom";

function Usuarios() {
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

        <Link to="/cursos" className="navbarbutton">
             Cursos
        </Link>


        </div>
      </header>

      <div class="cards-list">
      <div className="card 1">
      <Link to="/tirarfoto" className="botão-card-usuario1">
        <div className="card_image_usuario1" >
          <img className="card_image_usuario1" src="https://cdn-icons-png.flaticon.com/512/44/44413.png" />
        </div>
      </Link>
        <div className="card_title title-white">
          <p>Tirar Foto</p>
        </div>
    </div>

      <div class="card 2">
      <Link to="/consultas" className="botão-card-usuario2">
        <div className="card_image_usuario2">
          <img className="card_image_usuario2" src="https://awmselos.com.br/wp-content/uploads/2016/04/icone-quem-somos.png" />
        </div>
      </Link>
      <div className="card_title title-white">
          <p>Consultas</p>
      </div>
      </div>
        </div>

    </>

    );
}

export default Usuarios;