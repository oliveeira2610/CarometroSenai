import {Routes, Route} from "react-router-dom";
import Login from "./login/Login.jsx";
import Cadastro from "./cadastro/Cadastro.jsx";
import Home from "./home/Home.jsx";
import Tirarfoto from "./tirarfoto/TirarFoto.jsx";
import Consultas from "./consultas/Consultas.jsx";
import Idev from "./idev/Idev.jsx";
import Iele from "./iele/Iele.jsx";
import Imec from "./imec/Imec.jsx";
import Cursos from "./cursos/Cursos.jsx";
import Carometroidev1 from "./carometroidev/Idev1.jsx";
import Carometroidev2 from "./carometroidev/Idev2.jsx";
import Carometroidev3 from "./carometroidev/Idev3.jsx";
import Carometroiele1 from "./carometroiele/Iele1.jsx";
import Carometroiele2 from "./carometroiele/Iele2.jsx";
import Carometroiele3 from "./carometroiele/Iele3.jsx";
import Carometroimec1 from "./carometroimec/Imec1.jsx";
import Carometroimec2 from "./carometroimec/Imec2.jsx";
import Carometroimec3 from "./carometroimec/Imec3.jsx";

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
            <Route path="/carometroidev1" element={<Carometroidev1/>}/>
            <Route path="/carometroidev2" element={<Carometroidev2/>}/>
            <Route path="/carometroidev3" element={<Carometroidev3/>}/>
            <Route path="/carometroiele1" element={<Carometroiele1/>}/>
            <Route path="/carometroiele2" element={<Carometroiele2/>}/>
            <Route path="/carometroiele3" element={<Carometroiele3/>}/>
            <Route path="/carometroimec1" element={<Carometroimec1/>}/>
            <Route path="/carometroimec2" element={<Carometroimec2/>}/>
            <Route path="/carometroimec3" element={<Carometroimec3/>}/>
        </Routes>
    )
}

export default MainRoutes
