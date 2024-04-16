import './login.css';
import { Link } from 'react-router-dom';
function Login() {


  return (

    <div>
      <form id="msform">
        <fieldset>
          <h2 className="fs-title">Login</h2>
          <h3 className="fs-subtitle">Insira seus dados para Login</h3>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="pass" placeholder="Senha" />
          <h4>Não tem uma conta?</h4>
          <Link to="/cadastro" className="next action-button">Cadastre-se</Link>
          <Link to="/home" className="next action-button">Login</Link>
        </fieldset>
      </form>
    </div>

  )
}

export default Login;
