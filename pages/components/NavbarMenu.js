import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const NavbarMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>My Next App</Navbar.Brand>
        </Link>
        <Nav>
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/posts" passHref>
            <Nav.Link>Posts</Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
