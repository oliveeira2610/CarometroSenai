import { useState } from 'react'
import './cadastro.css'

function Cadastro() {
  const [count, setCount] = useState(0)

  return (
    <>

    <form id="msform">
        
        <ul id="progressbar">
            <li class="active">Cadastro</li>
            <li>Endereço</li>
            <li>Suas informações</li>
        </ul>

        <fieldset>
            <h2 class="fs-title">Cadastro</h2>
            <h3 class="fs-subtitle">Insira seus dados para cadastro</h3>
            <input type="text" name="name" placeholder="Nome" />
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="pass" placeholder="Senha" />
            <input type="password" name="cpass" placeholder="Confirmar senha" />
            <input type="button" name="voltar" id="voltar-login" class="previous action-button" value="Voltar" />
            <input type="button" name="next" class="next action-button" value="Próximo" />
            
        </fieldset>
        <fieldset>
            <h2 class="fs-title">Endereço</h2>
            <h3 class="fs-subtitle">Insira seu Endereço</h3>
            <input type="text" name="cep" id="cep" placeholder="Cep" />
            <input type="text" name="logradouro" id="rua" placeholder="Rua" />
            <input type="text" name="bairro" id="bairro" placeholder="Bairro" /> 
            <input type="text" name="cidade" id="cidade" placeholder="Cidade" />
            <input type="text" name="estado" id="estado" placeholder="Estado" />
            <input type="text" name="numero" id="numero" placeholder="Numero" />
            <input type="button" name="previous" class="previous action-button" value="Voltar" />
            <input type="button" name="next" class="next action-button" value="Próximo" />
        </fieldset>
        <fieldset>
          <h2 class="fs-title">Resumo</h2>
          <h3 class="fs-subtitle">Aqui estão as informações que você inseriu:</h3>
          <p id="resumo" class="resumo-texto"></p>
          <input type="button" name="previous" class="previous action-button" value="Voltar" />
          <input type="submit" name="submit" class="submit action-button" value="Enviar" />
        </fieldset>
        <script src="main.js"></script>
    </form>


    </>
)
}