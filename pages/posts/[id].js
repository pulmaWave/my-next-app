import { getPostById, getPostIds } from "../../lib/post.js";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Container from "react-bootstrap/Container";
const post1 = ({ post }) => {
  return (
    <div>
      <Container>
        <Card key={post.id} className="my-3 shadow">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Link href="/posts" passHref>
              Back
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostIds();
  //   console.log(paths);

  return {
    paths,
    fallback: false, // bat ky path nao not return boi getStaticPaths se toi page404
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
  };
};

export default post1;
