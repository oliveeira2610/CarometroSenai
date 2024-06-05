import { Routes, Route } from "react-router-dom"; // Importa os componentes Routes e Route do react-router-dom para definir as rotas.
import Login from "./login/Login.jsx"; // Importa o componente Login.
import Cadastro from "./cadastro/Cadastro.jsx"; // Importa o componente Cadastro.
import Home from "./home/Home.jsx"; // Importa o componente Home.
import Tirarfoto from "./tirarfoto/TirarFoto.jsx"; // Importa o componente Tirarfoto.
import Consultas from "./consultas/Consultas.jsx"; // Importa o componente Consultas.
import Usuarios from "./usuarios/Usuarios.jsx"; // Importa o componente Usuarios.
import Idev from "./idev/Idev.jsx"; // Importa o componente Idev.
import Iele from "./iele/Iele.jsx"; // Importa o componente Iele.
import Imec from "./imec/Imec.jsx"; // Importa o componente Imec.
import Cursos from "./cursos/Cursos.jsx"; // Importa o componente Cursos.
import Carometroidev1 from "./carometroidev/Idev1.jsx"; // Importa o componente Carometroidev1.
import Carometroidev2 from "./carometroidev/Idev2.jsx"; // Importa o componente Carometroidev2.
import Carometroidev3 from "./carometroidev/Idev3.jsx"; // Importa o componente Carometroidev3.
import Carometroiele1 from "./carometroiele/Iele1.jsx"; // Importa o componente Carometroiele1.
import Carometroiele2 from "./carometroiele/Iele2.jsx"; // Importa o componente Carometroiele2.
import Carometroiele3 from "./carometroiele/Iele3.jsx"; // Importa o componente Carometroiele3.
import Carometroimec1 from "./carometroimec/Imec1.jsx"; // Importa o componente Carometroimec1.
import Carometroimec2 from "./carometroimec/Imec2.jsx"; // Importa o componente Carometroimec2.
import Carometroimec3 from "./carometroimec/Imec3.jsx"; // Importa o componente Carometroimec3.
import Dados from "./dados/dados.jsx"; // Importa o componente Dados.

function MainRoutes() { // Define um componente funcional chamado MainRoutes.
    return (
        <Routes> {/* Define o container de rotas. */}
            <Route path="/" element={<Login />} /> {/* Define a rota para o componente Login. */}
            <Route path="/cadastro" element={<Cadastro />} /> {/* Define a rota para o componente Cadastro. */}
            <Route path="/home" element={<Home />} /> {/* Define a rota para o componente Home. */}
            <Route path="/tirarfoto" element={<Tirarfoto />} /> {/* Define a rota para o componente Tirarfoto. */}
            <Route path="/consultas" element={<Consultas />} /> {/* Define a rota para o componente Consultas. */}
            <Route path="/usuarios" element={<Usuarios />} /> {/* Define a rota para o componente Usuarios. */}
            <Route path="/cursos" element={<Cursos />} /> {/* Define a rota para o componente Cursos. */}
            <Route path="/idev" element={<Idev />} /> {/* Define a rota para o componente Idev. */}
            <Route path="/iele" element={<Iele />} /> {/* Define a rota para o componente Iele. */}
            <Route path="/imec" element={<Imec />} /> {/* Define uma rota para o componente Imec. */}
            <Route path="/carometroidev1" element={<Carometroidev1 />} /> {/* Define uma rota para o componente Carometroidev1. */}
            <Route path="/carometroidev2" element={<Carometroidev2 />} /> {/* Define uma rota para o componente Carometroidev2. */}
            <Route path="/carometroidev3" element={<Carometroidev3 />} /> {/* Define uma rota para o componente Carometroidev3. */}
            <Route path="/carometroiele1" element={<Carometroiele1 />} /> {/* Define uma rota para o componente Carometroiele1. */}
            <Route path="/carometroiele2" element={<Carometroiele2 />} /> {/* Define uma rota para o componente Carometroiele2. */}
            <Route path="/carometroiele3" element={<Carometroiele3 />} /> {/* Define uma rota para o componente Carometroiele3. */}
            <Route path="/carometroimec1" element={<Carometroimec1 />} /> {/* Define uma rota para o componente Carometroimec1. */}
            <Route path="/carometroimec2" element={<Carometroimec2 />} /> {/* Define uma rota para o componente Carometroimec2. */}
            <Route path="/carometroimec3" element={<Carometroimec3 />} /> {/* Define uma rota para o componente Carometroimec3. */}
            <Route path="/dados" element={<Dados />} /> {/* Define uma rota para o componente Dados. */}
        </Routes>
    )
}

export default MainRoutes; // Exporta o componente MainRoutes para uso em outras partes da aplicação.
