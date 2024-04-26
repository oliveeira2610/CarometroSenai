import React, { useState } from "react";
import "./cadastro.css";
import { Link } from "react-router-dom";
function Cadastro() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");

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

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  };



  return (
    <div className="geral-cadast">
      <form id="msform" onSubmit={handleSubmit}>
        <ul id="progressbar">
          <li className={step >= 1 ? "active" : ""}>Cadastro</li>
          <li className={step >= 2 ? "active" : ""}>Endereço</li>
          <li className={step >= 3 ? "active" : ""}>Suas informações</li>
        </ul>

        {step === 1 && (
          <fieldset>
            <h2 className="fs-title">Cadastro</h2>
            <h3 className="fs-subtitle">Insira seus dados para cadastro</h3>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Nome"
            />
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="pass"
              value={pass}
              onChange={handleChange}
              placeholder="Senha"
            />
            <input
              type="password"
              name="cpass"
              value={cpass}
              onChange={handleChange}
              placeholder="Confirmar senha"
            />
            <div className="botoes">
              <Link to="/" className="action-button">
                Voltar
              </Link>
              <input
                type="button"
                onClick={nextStep}
                className="next action-button"
                value="Próximo"
              />
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <h2 className="fs-title">Endereço</h2>
            <h3 className="fs-subtitle">Insira seu Endereço</h3>
            <input
              type="text"
              name="cep"
              value={cep}
              onChange={handleChange}
              placeholder="Cep"
            />
            <input
              type="text"
              name="rua"
              value={rua}
              onChange={handleChange}
              placeholder="Rua"
            />
            <input
              type="text"
              name="bairro"
              value={bairro}
              onChange={handleChange}
              placeholder="Bairro"
            />
            <input
              type="text"
              name="cidade"
              value={cidade}
              onChange={handleChange}
              placeholder="Cidade"
            />
            <input
              type="text"
              name="estado"
              value={estado}
              onChange={handleChange}
              placeholder="Estado"
            />
            <input
              type="text"
              name="numero"
              value={numero}
              onChange={handleChange}
              placeholder="Numero"
            />
            <div className="botoes">
              <input
                type="button"
                onClick={prevStep}
                className="previous action-button"
                value="Voltar"
              />
              <input
                type="button"
                onClick={nextStep}
                className="next action-button"
                value="Próximo"
              />
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset>
            <h2 className="fs-title">Resumo</h2>
            <h3 className="fs-subtitle">
              Aqui estão as informações que você inseriu:
            </h3>
            <p id="resumo" className="resumo-texto">
              Nome: {name}
              <br />
              Email: {email}
              <br />
              CEP: {cep}
              <br />
              Rua: {rua}
              <br />
              Bairro: {bairro}
              <br />
              Cidade: {cidade}
              <br />
              Estado: {estado}
              <br />
              Número: {numero}
            </p>
            <div className="botoes">
              <input
                type="button"
                onClick={prevStep}
                className="previous action-button"
                value="Voltar"
              />
              <input
                type="submit"
                className="submit action-button"
                value="Enviar"
              />
            </div>
          </fieldset>
        )}
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

export default Cadastro;
