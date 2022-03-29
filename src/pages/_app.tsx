import Head from "next/head";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { GlobalStyle } from "../styles/global";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Wesley Araújo | Portfólio</title>
        <link rel="shortcut icon" href="./icon.png" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
