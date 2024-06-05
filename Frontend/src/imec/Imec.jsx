import "./imec.css"; // Importa o arquivo de estilos CSS para este componente.
import { Link } from "react-router-dom"; // Importa o componente Link de react-router-dom.

function Imec() {
  return (
    <>
      <header>
        
      <Link to="/home" className="link-senai-logo"> {/* Cria um link para a página inicial com a classe 'link-senai-logo'. */}
        <img className="senailogo"
            src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png"
            alt="Senai Logo"
          />
          </Link>

        <div className="navbartop"> {/* Define a barra de navegação superior. */}
          <Link to="/home" className="navbarbutton"> {/* Cria um link para a página inicial com a classe 'navbarbutton'. */}
            Home
          </Link>
          
          <Link to="/usuarios" className="navbarbutton"> {/* Cria um link para a página de usuários com a classe 'navbarbutton'. */}
                Usuários
          </Link>
  
          <Link to="/cursos" className="navbarbutton"> {/* Cria um link para a página de cursos com a classe 'navbarbutton'. */}
                Cursos
          </Link>
  
          </div>
        </header>

      <div className="titulo"> {/* Define o título da página. */}
            <h1 className="Cards-h1">Técnico em Mecânica</h1>
        </div>

      <div class="cards-list"> {/* Define uma lista de cartões. */}
        <div class="card 1"> {/* Define o primeiro cartão. */}
        <Link to="/carometroimec1" className="botão-card"> {/* Cria um link para a página do carômetro IMEC1 com a classe 'botão-card'. */}
          <div className="card_image_card"> {/* Define a imagem do cartão. */}
            <img className="card_image_card" src="src/assets/ielemec1.png" /> {/* Define a imagem do cartão IMEC1. */}
          </div>
          </Link>
          <div class="card_title title-white"> {/* Define o título do cartão com cor branca. */}
            <p>IMEC1 - 2022</p> {/* Define o texto do título do cartão IMEC1. */}
          </div>
        </div>

      <div class="card 2"> {/* Define o segundo cartão. */}
      <Link to="/carometroimec2" className="botão-card"> {/* Cria um link para a página do carômetro IMEC2 com a classe 'botão-card'. */}
        <div className="card_image_card"> {/* Define a imagem do cartão. */}
          <img className="card_image_card" src="src/assets/ielemec2.png" /> {/* Define a imagem do cartão IMEC2. */}
        </div>
        </Link>
        <div class="card_title title-white"> {/* Define o título do cartão com cor branca. */}
          <p>IMEC2 - 2023</p> {/* Define o texto do título do cartão IMEC2. */}
        </div>
      </div>
      
      <div class="card 3"> {/* Define o terceiro cartão. */}
      <Link to="/carometroimec3" className="botão-card"> {/* Cria um link para a página do carômetro IMEC3 com a classe 'botão-card'. */}
        <div className="card_image_card"> {/* Define a imagem do cartão. */}
          <img className="card_image_card" src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" /> {/* Define a imagem do cartão IMEC3. */}
        </div>
        </Link>
        <div class="card_title title-white"> {/* Define o título do cartão com cor branca. */}
          <p>IMEC3 - 2024</p> {/* Define o texto do título do cartão IMEC3. */}
        </div>
      </div>

        
      </div>
    </>
  );
}

export default Imec; // Exporta o componente Imec.
