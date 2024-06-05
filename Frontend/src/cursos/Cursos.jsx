import "./cursos.css"; // Importa os estilos CSS específicos para esta página
import { Link } from "react-router-dom"; // Importa o componente Link do react-router-dom
import Button from "react-bootstrap/Button"; // Importa o componente Button do react-bootstrap
import Card from "react-bootstrap/Card"; // Importa o componente Card do react-bootstrap

function Cursos() {
  return (
    <> {/* Fragmento vazio para envolver múltiplos elementos JSX */}
      <header>
        {/* Link para a página inicial */}
        <Link to="/home" className="link-senai-logo">
          {/* Imagem do logo do Senai com classe senailogo */}
          <img
            className="senailogo"
            src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png"
            alt="Senai Logo"
          />
        </Link>

        {/* Barra de navegação superior */}
        <div className="navbartop">
          {/* Links para diferentes páginas */}
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

      {/* Título da página */}
      <div className="titulo">
        <h1 className="Cards-h1">Cursos Técnicos</h1>
      </div>

      {/* Lista de cartões de cursos */}
      <div class="cards-list">
        {/* Cartão 1: IDEV */}
        <div className="card 1">
          {/* Link para a página do curso IDEV */}
          <Link to="/idev" className="botão-card-idev">
            {/* Imagem do curso IDEV */}
            <div className="card_image_Idev">
              <img
                className="card_image_Idev"
                src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png"
              />
            </div>
          </Link>
          {/* Título do curso IDEV */}
          <div className="card_title title-white">
            <p>IDEV</p>
          </div>
        </div>

        {/* Cartão 2: Eletroeletrônica */}
        <div class="card 2">
          {/* Link para a página do curso Eletroeletrônica */}
          <Link to="/iele" className="botão-card">
            {/* Imagem do curso Eletroeletrônica */}
            <div class="card_image_Idev">
              <img
                className="card_image_Idev"
                src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png"
              />
            </div>
          </Link>
          {/* Título do curso Eletroeletrônica */}
          <div class="card_title title-white">
            <p>Eletroeletrônica</p>
          </div>
        </div>

        {/* Cartão 3: Mecânica */}
        <div class="card 3">
          {/* Link para a página do curso Mecânica */}
          <Link to="/imec" className="botão-card">
            {/* Imagem do curso Mecânica */}
            <div className="card_image_Idev">
              <img
                className="card_image_Idev"
                src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png"
              />
            </div>
          </Link>
          {/* Título do curso Mecânica */}
          <div class="card_title title-white">
            <p>Mecânica</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cursos;
