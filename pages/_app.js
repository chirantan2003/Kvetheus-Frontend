import Head from "next/head";
import Layout from "../components/layout";
import Footer from "../components/footer";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kvetheus.</title>
      </Head>
      <Layout></Layout>
      <div className="body">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
