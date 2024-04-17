import React, { useState } from "react";
import "./cadastro.css";
import { Link } from "react-router-dom";
function Cadastro() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    cpass: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    numero: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "cep") {
      fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            setFormData((prevState) => ({
              ...prevState,
              rua: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf,
            }));
          }
        })
        .catch((error) => console.error("Erro ao buscar CEP:", error));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para onde quiser
    console.log(formData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const { name, email, pass, cpass, cep, rua, bairro, cidade, estado, numero } =
    formData;

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
    </div>
  );
}

export default Cadastro;
