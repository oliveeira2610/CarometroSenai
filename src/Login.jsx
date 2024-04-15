import { useState } from 'react'
import './login.css'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <form id="msform">
      <fieldset>
        <h2 class="fs-title">Login</h2>
        <h3 class="fs-subtitle">Insira seus dados para Login</h3>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="pass" placeholder="Senha" />
        <h4>Não tem uma conta? </h4>
        <input type="button" name="botao-cadastro" id="botao-cadastro" class="next action-button" value="Cadastre-se" />
        <input type="button" name="next" class="next action-button" value="Login" />
      </fieldset>
      <script src="login.js"></script>
      </form>
      </div>
      
    </>
  )
}

export default Login
