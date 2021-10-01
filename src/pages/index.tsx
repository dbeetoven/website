import type { NextPage } from "next";
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from "../components/Header";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <ParallaxProvider>

      <div>
        <h1>Bitmon Marketplace!</h1>

        <p >
          Throw a bunch of code and display the bitmons already !
        </p>
        <Header/>
      </div>

      <footer>Powered by Bixdy</footer>
      </ParallaxProvider>
    </Layout>
  );
};

export default Home;
