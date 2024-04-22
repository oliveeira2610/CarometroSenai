import "./idev.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Idev() {
  return (
    <>
      <header>
        <img
          className="senailogo"
          src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png"
          alt="Senai Logo"
        />

        <div className="navbartop">
          <Link to="/home" className="navbarbutton">
            Home
          </Link>

          <Link to="/tirarfoto" className="navbarbutton">
            Usuários
          </Link>

          <Link to="/tirarfoto" className="navbarbutton">
            Cursos
          </Link>
        </div>
      </header>

      {/* <div className="geral-idev">
            <h1 className="idev-h1">Técnico em Desenvolvimento de Sistemas</h1>
        </div>

        <div className="geral-turmas">
          
        <div className="cards-idev">
            <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="src/assets/idev1.jpg" width={300} />
        <Card.Body>
            <Card.Title>Idev 1</Card.Title>
            <Card.Text>
                Técnico de Desenvolvimento de Sistemas Integrado ao Ensino Médio do ano de 2022
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>  
    </Card>
        </div>
        

        <div className="cards-idev">
        <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="src/assets/idev2.jpg" width={300}/>
        <Card.Body>
            <Card.Title>Idev 2</Card.Title>
            <Card.Text>
                Técnico de Desenvolvimento de Sistemas Integrado ao Ensino Médio do ano de 2023
        </Card.Text>
        
      </Card.Body>  
    </Card>
        </div>
        
        <div className="cards-idev">
        <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="src/assets/aleatorio.jpg" width={300} />
        <Card.Body>
            <Card.Title>Idev 3</Card.Title>
            <Card.Text>
                Técnico de Desenvolvimento de Sistemas Integrado ao Ensino Médio do ano de 2024
        </Card.Text>
        
      </Card.Body>  
    </Card>
        </div> 
        </div>*/}

      <div class="cards-list">
        <div class="card 1">
          <div class="card_image">
            <img src="src/assets/idev1.jpg" />
          </div>
          <div class="card_title title-white">
            <p>IDEV1</p>
            <p>Técnico de Desenvolvimento de Sistemas Integrado ao Ensino Médio do ano de 2023</p>
          </div>
        </div>

      <div class="card 2">
        <div class="card_image">
          <img src="src/assets/idev2.jpg" />
        </div>
        <div class="card_title title-white">
          <p>Card Title</p>
        </div>
      </div>
      
      <div class="card 3">
        <div class="card_image">
          <img src="src/assets/aleatorio.jpg" />
        </div>
        <div class="card_title title-white">
          <p>Card Title</p>
        </div>
      </div>


        
      </div>
    </>
  );
}

export default Idev;
