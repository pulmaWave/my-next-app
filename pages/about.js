import Link from "next/dist/client/link";
import Layout from "../pages/components/Layout.js";

const About = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: center }}>About me</h1>
      <Link href="/" passHref/>
    </Layout>
  );
};

export default About;
