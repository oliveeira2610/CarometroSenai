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
          
          <Link to="/tirarfoto" className="navbarbutton">
                Usuários
          </Link>
  
          <Link to="/tirarfoto" className="navbarbutton">
                Cursos
          </Link>
  
  
          </div>
        </header>

        <div className="geral-idev">
            <h1 className="idev-h1">Técnico em Desenvolvimento de Sistemas</h1>
        </div>
  
      </>
    );
  }
  
  export default Idev;
  