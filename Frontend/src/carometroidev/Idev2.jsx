import "./carometroidev.css";
import { Link } from "react-router-dom";

function Idev2() {
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
  
      </>
    );
  }
  
  export default Idev2;
  