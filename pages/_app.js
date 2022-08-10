import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kvetheus</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
