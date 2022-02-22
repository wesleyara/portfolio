import "../styles/index.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

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
