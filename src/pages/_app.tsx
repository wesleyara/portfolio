import AOS from "aos";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

import { ThemeProvider } from "styled-components";

import { Header } from "../layout/Header";
import { GlobalStyle } from "../styles/global";
import { themeDark, themeLight } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      <Head>
        <title>Wesley Araújo</title>
        <link rel="shortcut icon" href="./icon.png" />
      </Head>
      <GlobalStyle />
      <Header eventFunction={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
