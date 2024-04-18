import "/.tirarfoto.css";
import Nav from 'react-bootstrap/Nav';

function TirarFoto() {
  return (
    <Nav
      activeKey="/Home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/Home">Home</Nav.Link>
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
  );
}

export default TirarFoto;