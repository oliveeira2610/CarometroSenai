import React from "react";
import Image from "react-bootstrap/Image";
import "./home.css";

function Home() {
  return (

    <div className="Tela-Home">
      <header className="header">
        <img
          className="senailogo"
          src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png"
        />
      </header>


      <div className="imagem-div">
        <img
          className="imagem-lateral"
          src="https://live.staticflickr.com/7601/16996079569_dbd29856a7_b.jpg"
          fluid
        />
      </div>

    </div>
  );
}
export default Home;
