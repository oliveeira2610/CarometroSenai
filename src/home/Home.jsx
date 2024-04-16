import React from "react";
import Image from "react-bootstrap/Image";
import "./home.css";

function Home() {
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  return (
    <div className="Tela-Home">
      <header className="header">
        <img
          className="senailogo"
          src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png"
        />
      </header>

      <div className="sidebar">
        <div class="sidenav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <button class="dropdown-btn">
            Dropdown
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-container">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          <a href="#contact">Search</a>
        </div>
      </div>

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
