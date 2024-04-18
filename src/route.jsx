import {Routes, Route} from "react-router-dom";
import Login from "./login/Login.jsx";
import Cadastro from "./cadastro/Cadastro.jsx";
import Home from "./home/Home.jsx"
import Tirarfoto from "./tirarfoto/TirarFoto.jsx"

function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/home" element={<Home/>}/> 
            <Route path="/tirarfoto" element={<Tirarfoto/>}/>
        </Routes>
    )
}

export default MainRoutes
