import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Inersia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link linkTo="/">Home</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link to="/services">Services</Nav.Link>
            <Nav.Link to="/works">Works</Nav.Link>
            {/* <Nav.Link href="/teams">Teams</Nav.Link>
            {/* // <Nav.Link href="/testimonials">Testimonials</Nav.Link> */}
            {/* // <Nav.Link href="/pricing">Pricing</Nav.Link> */}
            {/* // <Nav.Link href="/blog">Blog</Nav.Link> */}
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
