import {Routes, Route} from "react-router-dom";
import Login from "./Login.jsx";
import Cadastro from "./Cadastro.jsx";

function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
    )
}

export default MainRoutes