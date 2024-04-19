import "./idev.css";
import { Link } from "react-router-dom";

function TirarFoto() {
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
  
  
        <div className="geral-tirarfoto">
  
  
        <img
              className="imagem-camera"
              src="https://cdn-icons-png.flaticon.com/512/685/685655.png"
              alt="Imagem camera
              "
            />
          
          <img
              className="imagem-foto"
              src="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png"
              alt="Imagem foto"
            />
  
        </div>
      </>
    );
  }
  
  export default TirarFoto;
  