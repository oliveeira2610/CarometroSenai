# SENAI Dashboard

## Descrição

O projeto **SENAI Dashboard** é uma aplicação web que oferece uma plataforma para visualização de informações relacionadas aos cursos técnicos do SENAI. Ele permite aos usuários acessarem dados sobre os cursos oferecidos, consultar informações sobre os alunos matriculados, entre outras funcionalidades.

## Instalação

1. **Clone o repositório:**
   ```
   git clone https://github.com/oliveeira2610/CarometroSenai.git
   ```

2. **Instale as dependências:**
   ```
   cd senai-dashboard
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```
   npm start
   ```

4. **Acesse a aplicação no navegador:**
   Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Biblioteca para roteamento na aplicação.
- **CSS**: Folhas de estilo para estilização dos componentes.
- **Google Fonts**: Fontes utilizadas na aplicação.

## Estrutura do Projeto

O projeto está estruturado da seguinte maneira:

```
senai-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── ielemec1.png
│   │   ├── ielemec2.png
│   │   └── ...
│   ├── components/
│   │   ├── Cadastro.jsx
│   │   ├── Consultas.jsx
│   │   ├── Cursos.jsx
│   │   ├── Dados.jsx
│   │   ├── Home.jsx
│   │   ├── Idev.jsx
│   │   ├── Iele.jsx
│   │   ├── Imec.jsx
│   │   ├── Login.jsx
│   │   ├── MainRoutes.jsx
│   │   ├── TirarFoto.jsx
│   │   ├── Usuarios.jsx
│   │   └── ...
│   ├── routes/
│   │   └── route.jsx
│   ├── styles/
│   │   ├── dados.css
│   │   ├── iele.css
│   │   ├── imec.css
│   │   ├── index.css
│   │   ├── login.css
│   │   └── ...
│   ├── App.js
│   └── index.js
├── .gitignore
├── package-lock.json
└── README.md
```

## Componentes Principais

- **Login**: Página de login para acesso à plataforma.
- **Cadastro**: Página de cadastro de novos usuários.
- **Home**: Página inicial com informações gerais e links para outras seções.
- **Dados**: Página para visualização e edição dos dados dos usuários.
- **Consultas**: Página para realização de consultas e visualização de relatórios.
- **Usuários**: Página para gerenciamento de usuários cadastrados.
- **Cursos**: Página para visualização dos cursos oferecidos pelo SENAI.
- **Idev**: Página para informações sobre o curso Técnico em Desenvolvimento de Sistemas.
- **Iele**: Página para informações sobre o curso Técnico em Eletroeletrônica.
- **Imec**: Página para informações sobre o curso Técnico em Mecânica.

## Autor

**Nome:** Gabriel de O. Rodrigues & Isabela C. Manzano  
**Email:** Bielolirodrigues@gmail.com & isabelacmanzano05@gmail.com

