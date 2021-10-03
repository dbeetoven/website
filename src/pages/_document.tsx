import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  return = (): JSX.Element => (
    <Html>
      <Head>
        <title>Bitmon Space</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="author" content="BitmonSpace"/>
        <meta name="keywords" content="Bitmon Space,BTMN,NFT,Play to Earn,Bitmon Space universe,Bitmon Marketplace"/>
        <meta name="description" content="Bitmon Space is a digital metaverse where people can find digital friends that will accompany you day to day playing different kinds of minigames, collecting and battling."/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default CustomDocument;
