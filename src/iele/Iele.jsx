import "./iele.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Iele() {

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

        <div className="geral-idev">
            <h1 className="idev-h1">Técnico em Eletroeletrônica</h1>
        </div>

        <div className="geral-turmas">
          
        <div className="cards-idev">
            <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://moodle.ifrs.edu.br/pluginfile.php/901302/course/overviewfiles/Icones%20moodle-77.png" width={300} />
        <Card.Body>
            <Card.Title>Iele 1</Card.Title>
            <Card.Text>
                Técnico de Eletroeletrônica Integrado ao Ensino Médio do ano de 2022
        </Card.Text>
        
      </Card.Body>  
    </Card>
        </div>
        

        <div className="cards-idev">
        <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="https://moodle.ifrs.edu.br/pluginfile.php/901302/course/overviewfiles/Icones%20moodle-77.png" width={300}/>
        <Card.Body>
            <Card.Title>Iele 2</Card.Title>
            <Card.Text>
                Técnico de Eletroeletrônica Integrado ao Ensino Médio do ano de 2023
        </Card.Text>
        
      </Card.Body>  
    </Card>
        </div>
        
        <div className="cards-idev">
        <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://moodle.ifrs.edu.br/pluginfile.php/901302/course/overviewfiles/Icones%20moodle-77.png" width={300} />
        <Card.Body>
            <Card.Title>Iele 3</Card.Title>
            <Card.Text>
                Técnico de Eletroeletrônica Integrado ao Ensino Médio do ano de 2024
        </Card.Text>
        
      </Card.Body>  
    </Card>
        </div>

        </div>
  
      </>
    );
  }
  
  export default Iele;
  