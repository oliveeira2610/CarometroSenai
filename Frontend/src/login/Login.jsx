import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="geral-login">
      
        <form id="msform">
      
        <img className="senailogologin" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png" alt="Logo do SENAI"/>

          <fieldset>
            <h2 className="fs-title">Login</h2>
            <h3 className="fs-subtitle">Insira seus dados para Login</h3>
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="pass" placeholder="Senha" />
            <h4>Não tem uma conta?</h4>
            <div className="botoes">
              <Link to="/cadastro" className="action-button">
                Cadastre-se
              </Link>
              <Link to="/home" className="action-button">
                Login
              </Link>
            </div>
          </fieldset>
        </form>
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div className="wave waveTop" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')" }}></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')" }}></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}></div>
          </div>
        </div>
      </div>
    
  );
}

export default Login;
