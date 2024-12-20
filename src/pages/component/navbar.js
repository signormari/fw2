import {Container, Nav, Navbar} from 'react-bootstrap';
import style from "@/styles/Navbar.module.css"

export default function Menu() {
  return (
    <Container>
      <Navbar expand="sm" className={`border border-info-subtle ${style.navGradiente} bd-sucess rounded rounded-3`}  bg="primary" data-bs-theme="dark">
        <Navbar.Brand href="/">6B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/noticias">Noticias</Nav.Link>
            <Nav.Link href="/promessa">Promessa</Nav.Link>
            <Nav.Link href="/pages">Pages</Nav.Link>
            <Nav.Link href="/mesportes">P.Esportes</Nav.Link>

          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container>
  );
}
