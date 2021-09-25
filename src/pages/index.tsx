import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bitmon Marketplace</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>Bitmon Marketplace!</h1>

        <p >
          Throw a bunch of code and display the bitmons already !
        </p>
      </main>

      <footer>Powered by Bixdy</footer>
    </div>
  );
};

export default Home;
