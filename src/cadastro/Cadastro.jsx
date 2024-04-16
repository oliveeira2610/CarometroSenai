import React from 'react';
import './cadastro.css';

function Cadastro() {
  return (
    <form id="msform">
        <ul id="progressbar">
            <li className="active">Cadastro</li>
            <li>Endereço</li>
            <li>Suas informações</li>
        </ul>

        <fieldset>
            <h2 className="fs-title">Cadastro</h2>
            <h3 className="fs-subtitle">Insira seus dados para cadastro</h3>
            <input type="text" name="name" placeholder="Nome" />
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="pass" placeholder="Senha" />
            <input type="password" name="cpass" placeholder="Confirmar senha" />
            <input type="button" name="voltar" id="voltar-login" className="previous action-button" value="Voltar" />
            <input type="button" name="next" className="next action-button" value="Próximo" />
        </fieldset>
        <fieldset>
            <h2 className="fs-title">Endereço</h2>
            <h3 className="fs-subtitle">Insira seu Endereço</h3>
            <input type="text" name="cep" id="cep" placeholder="Cep" />
            <input type="text" name="logradouro" id="rua" placeholder="Rua" />
            <input type="text" name="bairro" id="bairro" placeholder="Bairro" /> 
            <input type="text" name="cidade" id="cidade" placeholder="Cidade" />
            <input type="text" name="estado" id="estado" placeholder="Estado" />
            <input type="text" name="numero" id="numero" placeholder="Numero" />
            <input type="button" name="previous" className="previous action-button" value="Voltar" />
            <input type="button" name="next" className="next action-button" value="Próximo" />
        </fieldset>
        <fieldset>
          <h2 className="fs-title">Resumo</h2>
          <h3 className="fs-subtitle">Aqui estão as informações que você inseriu:</h3>
          <p id="resumo" className="resumo-texto"></p>
          <input type="button" name="previous" className="previous action-button" value="Voltar" />
          <input type="submit" name="submit" className="submit action-button" value="Enviar" />
        </fieldset>
    </form>
  );
}

export default Cadastro;
