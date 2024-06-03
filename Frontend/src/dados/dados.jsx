import "./dados.css";
import { Link } from "react-router-dom";

function Dados() {
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

          <Link to="/usuarios" className="navbarbutton">
            Usuários
          </Link>

          <Link to="/cursos" className="navbarbutton">
            Cursos
          </Link>
        </div>
      </header>

      <div className="titulo">
            <h1 className="dados-h1">Informações</h1>
        </div>

      <div className="geral-dados">

      <div className="card-dados">
        
        <div className="dentro-card-dados">
                   <img className="dados-img" src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" alt="User Icon"/>
         </div>

         <div className="informacoes-dados">
          <h1 className="informacoes-dados-h1">Nome:</h1>
          <h1 className="informacoes-dados-h1">CPF:</h1>
          <h1 className="informacoes-dados-h1">Email:</h1>
          <h1 className="informacoes-dados-h1">Telefone:</h1>
          <h1 className="informacoes-dados-h1">Endereço:</h1>
          <h1 className="informacoes-dados-h1">Matricula:</h1>
          <h1 className="informacoes-dados-h1">Turma:</h1>
          <h1 className="informacoes-dados-h1">Curso:</h1>
          
        </div>
      </div>
        

      </div>
    </>
  );
}

export default Dados;
