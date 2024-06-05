import "./dados.css"; // Importa o arquivo CSS que estiliza o componente.
import { Link } from "react-router-dom"; // Importa o componente Link do react-router-dom para navegação entre páginas.

function Dados() { // Define um componente funcional chamado Dados.
  return (
    <> {/* Fragmento vazio usado para agrupar múltiplos elementos sem adicionar nós extras ao DOM. */}
      <header> {/* Define o cabeçalho da página. */}
        
      <Link to="/home" className="link-senai-logo"> {/* Link para a página "home" com uma classe para estilização. */}
        <img className="senailogo" // Imagem com a classe "senailogo".
            src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png" // URL da imagem do logo do Senai.
            alt="Senai Logo" // Texto alternativo para a imagem.
          />
          </Link>

        <div className="navbartop"> {/* Div para o menu de navegação no topo. */}
          <Link to="/home" className="navbarbutton"> {/* Link para a página "home" com uma classe para estilização. */}
            Home
          </Link>

          <Link to="/usuarios" className="navbarbutton"> {/* Link para a página "usuarios" com uma classe para estilização. */}
            Usuários
          </Link>

          <Link to="/cursos" className="navbarbutton"> {/* Link para a página "cursos" com uma classe para estilização. */}
            Cursos
          </Link>
        </div>
      </header>

      <div className="titulo"> {/* Div para o título da seção. */}
            <h1 className="dados-h1">Informações</h1> {/* Cabeçalho h1 com a classe "dados-h1". */}
        </div>

      <div className="geral-dados"> {/* Div que agrupa todas as informações gerais. */}

      <div className="card-dados"> {/* Div que representa um card de informações. */}
        
        <div className="dentro-card-dados"> {/* Div dentro do card para conter a imagem. */}
                   <img className="dados-img" src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" alt="User Icon"/> {/* Imagem do ícone de usuário. */}
         </div>

         <div className="informacoes-dados"> {/* Div para conter as informações dos dados. */}
          <h1 className="informacoes-dados-h1">Nome:</h1> {/* Cabeçalho h1 para o nome. */}
          <h1 className="informacoes-dados-h1">CPF:</h1> {/* Cabeçalho h1 para o CPF. */}
          <h1 className="informacoes-dados-h1">Email:</h1> {/* Cabeçalho h1 para o email. */}
          <h1 className="informacoes-dados-h1">Telefone:</h1> {/* Cabeçalho h1 para o telefone. */}
          <h1 className="informacoes-dados-h1">Endereço:</h1> {/* Cabeçalho h1 para o endereço. */}
          <h1 className="informacoes-dados-h1">Matricula:</h1> {/* Cabeçalho h1 para a matrícula. */}
          <h1 className="informacoes-dados-h1">Turma:</h1> {/* Cabeçalho h1 para a turma. */}
          <h1 className="informacoes-dados-h1">Curso:</h1> {/* Cabeçalho h1 para o curso. */}
          
        </div>
      </div>
        

      </div>
    </>
  );
}

export default Dados; // Exporta o componente Dados para que possa ser usado em outras partes da aplicação.
