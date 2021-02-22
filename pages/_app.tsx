import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/core";
import { Reset } from "styles";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "../apollo";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimum-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://www.loelblog.com/" />
        <meta name="description" content="로엘님의 블로그입니다!" />
        <title>Hello</title>
      </Head>
      <Global styles={Reset} />
      <ApolloProvider client={client as any}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default App;
