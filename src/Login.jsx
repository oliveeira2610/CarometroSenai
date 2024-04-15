import { useState } from 'react'
import './login.css'
import { Route } from 'react-router-dom'


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
        <button class="next action-button" path="/cadastro" onClick={<a href="/cadastro"/>}>Cadastre-se</button>
        <input type="button" name="next" class="next action-button" value="Login" />
      </fieldset>
      <script src="login.js"></script>
      </form>
      </div>
      
    </>
  )
}

export default Login
