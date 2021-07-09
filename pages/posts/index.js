import Layout from "../components/Layout.js";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { getPosts } from "../../lib/post.js";

const Posts = ({ posts }) => {
  return (
    <div>
      <Layout>
        {posts.map((post) => (
          <Card key={post.id} className="my-3 shadow">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Link href={`/posts/${post.id}`} passHref>
                  <Card.Link>Detail</Card.Link>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Layout>

      {/* <style type="text/css">
        {`
    .card {
      margin-top: 10px;
    }
    `}
      </style> */}
    </div>
  );
};

//Get static data (lay du lieu tinh)

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
