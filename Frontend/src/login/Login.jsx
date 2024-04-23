import "./login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="geral-login">
      <div>
        <form id="msform">
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
      </div>
    </div>
  );
}

export default Login;
