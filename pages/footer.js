import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const Footer = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="px-3 position-fixed bottom-0 w-100"
    >
      <Container className="px-3 flex-column justify-content-center">
        <Navbar.Brand>About me</Navbar.Brand>
        <Nav>
          <Nav.Link
            href="https://facebook.com/bunmamkeyy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Nav.Link>
          <Nav.Link
            href="https://instagram.com/000.00nct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Nav.Link>
          <Nav.Link
            href="https://github.com/pulmawave"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
