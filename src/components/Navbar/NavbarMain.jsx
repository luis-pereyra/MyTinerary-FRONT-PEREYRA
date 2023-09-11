import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarMain() {

  return (
    <Navbar expand="lg" className="container bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MyTinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center text-lg-start">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Cities</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMain