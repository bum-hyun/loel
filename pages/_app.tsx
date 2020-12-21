import React, { useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/core";
import { Reset } from "styles";
import service from "../utils/service";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    service.post("http://localhost:8002/v1/token", { email: "ru_bryunak@naver.com" }).then((r) => {
      service.get("http://localhost:8002/v1/test", { headers: { authorization: r.data.token } }).then((r) => console.log(r));
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimum-scale=1, viewport-fit=cover" />
        <title>Hello</title>
      </Head>
      <Global styles={Reset} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
