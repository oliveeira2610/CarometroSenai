import "./consultas.css";
import { Link } from "react-router-dom";

function Consultas() {
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
        
        <Link to="/tirarfoto" className="navbarbutton">
              Usuários
        </Link>

        <Link to="/tirarfoto" className="navbarbutton">
              Alunos
        </Link>

        <Link to="/tirarfoto" className="navbarbutton">
              Mátricula
        </Link>


        </div>
      </header>
    </>

    );
}

export default Consultas;