import "../styles/index.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wesley Araújo | Portfólio</title>
        <link rel="shortcut icon" href="../..//icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
