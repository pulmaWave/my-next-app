import Head from "next/head";
import Container from "react-bootstrap/Container";
import NavbarMenu from "./NavbarMenu";
import Footer from "../footer"

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>How About Me</title>
    </Head>

    <header>
      <NavbarMenu />
    </header>
    <Container>
      <main>{children}</main>
    </Container>
    <footer>
      <Footer/>
    </footer>
  </>
);

export default Layout;
