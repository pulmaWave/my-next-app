import Layout from "../pages/components/Layout.js";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is my Next app!</p>
        <p>
          <Link href="/posts" passHref>
            <Button variant="primary">Go to Posts</Button>
          </Link>
        </p>
      </Jumbotron>
    </Layout>
  );
}
