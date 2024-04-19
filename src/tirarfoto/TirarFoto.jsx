import "./tirarfoto.css";
import Nav from 'react-bootstrap/Nav';

function TirarFoto() {

  return (
<>
    <header>

    
          <img
            className="senailogo"
            src="https://desenvolveitapevi.wordpress.com/wp-content/uploads/2016/02/logo-senai1.png"
            alt="Senai Logo"
          />
   
    <div className="navbartop">
      <Nav
      activeKey="/Home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link className="navbarbutton" href="/Home">Home</Nav.Link>
        ,



      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link">Usuários</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link">Aluno</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="Link">Matrícula</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
    
    </header>


    </>
  );
}

export default TirarFoto;