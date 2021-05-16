import React from "react";
import { AppProps } from "next/app";
import "../assets/styles/global.scss";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
