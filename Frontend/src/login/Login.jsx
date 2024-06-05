import "./login.css"; // Importa o arquivo de estilos CSS específico para o componente de login.
import { Link } from "react-router-dom"; // Importa o componente Link do react-router-dom para navegação entre páginas.

function Login() { // Define o componente funcional Login.
  return (
    <div className="geral-login"> {/* Define a div principal com a classe geral-login. */}
      <img
        className="senailogologin" // Define a classe da imagem do logo do SENAI.
        src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png" // Define a URL da imagem do logo do SENAI.
        alt="Logo do SENAI" // Define o texto alternativo da imagem do logo do SENAI.
      />
      <form id="msform"> {/* Define o formulário com o id msform. */}
        <fieldset>
          <h2 className="fs-title">Login</h2> {/* Título do formulário de login. */}
          <h3 className="fs-subtitle">Insira seus dados para Login</h3> {/* Subtítulo do formulário de login. */}
          <input type="text" name="email" placeholder="Email" /> {/* Campo de entrada para o email. */}
          <input type="password" name="pass" placeholder="Senha" /> {/* Campo de entrada para a senha. */}
          <h4>Não tem uma conta?</h4> {/* Mensagem de texto indicando que o usuário pode se cadastrar. */}
          <div className="botoes"> {/* Define uma div para os botões. */}
            <Link to="/cadastro" className="action-button"> {/* Link para a página de cadastro. */}
              Cadastre-se
            </Link>
            <Link to="/home" className="action-button"> {/* Link para a página inicial. */}
              Login
            </Link>
          </div>
        </fieldset>
      </form>
      <div className="waveWrapper waveAnimation"> {/* Define a div para a animação de ondas de fundo. */}
        <div className="waveWrapperInner bgTop">
          <div
            className="wave waveTop"
            style={{
              backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')", // Define a imagem de fundo para a onda superior.
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{
              backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')", // Define a imagem de fundo para a onda do meio.
            }}
          ></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{
              backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')", // Define a imagem de fundo para a onda inferior.
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Login; // Exporta o componente Login para uso em outras partes da aplicação.
