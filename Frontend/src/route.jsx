import {Routes, Route} from "react-router-dom";
import Login from "./login/Login.jsx";
import Cadastro from "./cadastro/Cadastro.jsx";
import Home from "./home/Home.jsx"
import Tirarfoto from "./tirarfoto/TirarFoto.jsx"
import Consultas from "./consultas/Consultas.jsx"
import Idev from "./idev/Idev.jsx"
import Iele from "./iele/Iele.jsx"
import Imec from "./imec/Imec.jsx"
import Cursos from "./cursos/Cursos.jsx"


function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/home" element={<Home/>}/> 
            <Route path="/tirarfoto" element={<Tirarfoto/>}/>
            <Route path="/consultas" element={<Consultas/>}/>
            <Route path="/cursos" element={<Cursos/>}/>
            <Route path="/idev" element={<Idev/>}/>
            <Route path="/iele" element={<Iele/>}/>
            <Route path="/imec" element={<Imec/>}/>
        </Routes>
    )
}

export default MainRoutes
