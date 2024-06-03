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


    </>

    );
}

export default Usuarios;