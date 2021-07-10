import Link from "next/link";
import Layout from "../pages/components/Layout.js";

const About = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>About me</h1>
      <Link href="/" passHref>
        Back
      </Link>
    </Layout>
  );
};

export default About;
