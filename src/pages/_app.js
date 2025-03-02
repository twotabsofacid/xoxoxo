import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brianna and Sean</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
