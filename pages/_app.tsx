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
        <meta name="title" content="Loel's Blog" />
        <meta name="description" content="음식과 여행을 좋아하는 개발자의 블로그 입니다." />
        <meta name="keywords" content="개발,음식,여행,react,graphql,레스토랑,미슐랭" />
        <meta property="og:title" content="Loel's Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.loelblog.com" />
        <meta property="og:description" content="음식과 여행을 좋아하는 개발자의 블로그 입니다." />
        <meta property="og:image" content="/background.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="naver-site-verification" content="350dd4433903daa6e87a92cebc3a476d5f976cb5" />
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
