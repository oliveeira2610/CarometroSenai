import "./iele.css"; // Importa o arquivo CSS específico para estilizar o componente Iele.
import { Link } from "react-router-dom"; // Importa o componente Link do React Router DOM para navegação entre páginas.

function Iele() {
  return (
    <>
      <header>
        {/* Cabeçalho da página */}
        <Link to="/home" className="link-senai-logo"> {/* Link para a página inicial */}
          <img
            className="senailogo" // Classe CSS para o logotipo do SENAI
            src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png" // URL da imagem do logotipo do SENAI
            alt="Senai Logo" // Texto alternativo para a imagem do logotipo do SENAI
          />
        </Link>

        <div className="navbartop"> {/* Barra de navegação superior */}
          <Link to="/home" className="navbarbutton"> {/* Link para a página inicial */}
            Home
          </Link>

          <Link to="/usuarios" className="navbarbutton"> {/* Link para a página de usuários */}
            Usuários
          </Link>

          <Link to="/cursos" className="navbarbutton"> {/* Link para a página de cursos */}
            Cursos
          </Link>
        </div>
      </header>

      <div className="titulo">
        <h1 className="Cards-h1">Técnico em Eletroeletrônica</h1> {/* Título da página */}
      </div>

      <div class="cards-list"> {/* Lista de cartões */}
        <div class="card 1"> {/* Cartão 1 */}
          <Link to="/carometroiele1" className="botão-card"> {/* Link para detalhes do cartão 1 */}
            <div className="card_image_card"> {/* Imagem do cartão 1 */}
              <img
                className="card_image_card" // Classe CSS para a imagem do cartão
                src="src/assets/ielemec1.png" // URL da imagem do cartão 1
                alt="IELE1" // Texto alternativo para a imagem do cartão 1
              />
            </div>
          </Link>
          <div class="card_title title-white"> {/* Título do cartão 1 */}
            <p>IELE1 - 2022</p> {/* Conteúdo do título do cartão 1 */}
          </div>
        </div>

        <div class="card 2"> {/* Cartão 2 */}
          <Link to="/carometroiele2" className="botão-card"> {/* Link para detalhes do cartão 2 */}
            <div className="card_image_card"> {/* Imagem do cartão 2 */}
              <img
                className="card_image_card" // Classe CSS para a imagem do cartão
                src="src/assets/ielemec2.png" // URL da imagem do cartão 2
                alt="IELE2" // Texto alternativo para a imagem do cartão 2
              />
            </div>
          </Link>
          <div class="card_title title-white"> {/* Título do cartão 2 */}
            <p>IELE2 - 2023</p> {/* Conteúdo do título do cartão 2 */}
          </div>
        </div>

        <div class="card 3"> {/* Cartão 3 */}
          <Link to="/carometroiele3" className="botão-card"> {/* Link para detalhes do cartão 3 */}
            <div className="card_image_card"> {/* Imagem do cartão 3 */}
              <img
                className="card_image_card" // Classe CSS para a imagem do cartão
                src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" // URL da imagem do cartão 3
                alt="IELE3" // Texto alternativo para a imagem do cartão 3
              />
            </div>
          </Link>
          <div class="card_title title-white"> {/* Título do cartão 3 */}
            <p>IELE3 - 2024</p> {/* Conteúdo do título do cartão 3 */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Iele;
