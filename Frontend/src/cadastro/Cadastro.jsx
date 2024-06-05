import React, { useState } from "react"; // Importa o React e a função useState do React
import "./cadastro.css"; // Importa o arquivo CSS de estilos específicos para esta página
import { Link } from "react-router-dom"; // Importa o componente Link do react-router-dom

function Cadastro() {
  // Define um componente de função chamado Cadastro

  // Define os estados iniciais usando o hook useState
  const [step, setStep] = useState(1); // Estado para controlar o passo do formulário
  const [name, setName] = useState(""); // Estado para armazenar o nome
  const [email, setEmail] = useState(""); // Estado para armazenar o email
  const [pass, setPass] = useState(""); // Estado para armazenar a senha
  const [cpass, setCpass] = useState(""); // Estado para armazenar a confirmação de senha
  const [cep, setCep] = useState(""); // Estado para armazenar o CEP
  const [rua, setRua] = useState(""); // Estado para armazenar a rua
  const [bairro, setBairro] = useState(""); // Estado para armazenar o bairro
  const [cidade, setCidade] = useState(""); // Estado para armazenar a cidade
  const [estado, setEstado] = useState(""); // Estado para armazenar o estado
  const [numero, setNumero] = useState(""); // Estado para armazenar o número

  // Função para lidar com as mudanças nos campos de formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "pass":
        setPass(value);
        break;
      case "cpass":
        setCpass(value);
        break;
      case "cep":
        setCep(value);
        break;
      case "rua":
        setRua(value);
        break;
      case "bairro":
        setBairro(value);
        break;
      case "cidade":
        setCidade(value);
        break;
      case "estado":
        setEstado(value);
        break;
      case "numero":
        setNumero(value);
        break;
      default:
        break;
    }
  };

  // Função para avançar para o próximo passo do formulário
  const nextStep = () => {
    setStep(step + 1);
  };

  // Função para voltar para o passo anterior do formulário
  const prevStep = () => {
    setStep(step - 1);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  };

  // Retorna o JSX que representa a estrutura do formulário de cadastro
  return (
    <div className="geral-cadastro">
      {/* Formulário */}
      <form id="msform" onSubmit={handleSubmit}>
        
        {/* Logo SENAI */}
        <img
          className="senailogocadastro"
          src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png"
          alt="Logo do SENAI"
        />

        {/* Barra de progresso */}
        <ul id="progressbar">
          <li className={step >= 1 ? "active" : ""}>Cadastro</li>
          <li className={step >= 2 ? "active" : ""}>Endereço</li>
          <li className={step >= 3 ? "active" : ""}>Suas informações</li>
        </ul>

        {/* Renderização condicional com base no passo atual */}
        {step === 1 && (
          // Primeiro passo do formulário
          <fieldset>
            <h2 className="fs-title">Cadastro</h2>
            <h3 className="fs-subtitle">Insira seus dados para cadastro</h3>
            {/* Inputs para nome, email, senha e confirmação de senha */}
          </fieldset>
        )}

        {step === 2 && (
          // Segundo passo do formulário
          <fieldset>
            <h2 className="fs-title">Endereço</h2>
            <h3 className="fs-subtitle">Insira seu Endereço</h3>
            {/* Inputs para CEP, rua, bairro, cidade, estado e número */}
          </fieldset>
        )}

        {step === 3 && (
          // Terceiro passo do formulário
          <fieldset>
            <h2 className="fs-title">Resumo</h2>
            <h3 className="fs-subtitle">
              Aqui estão as informações que você inseriu:
            </h3>
            {/* Exibição das informações inseridas */}
          </fieldset>
        )}

        {/* Botões de navegação entre os passos */}
      </form>
      
      {/* Animação de ondas no fundo */}
      <div className="waveWrapper waveAnimation">
        {/* Camadas de ondas */}
      </div>
    </div>
  );
}

export default Cadastro;
