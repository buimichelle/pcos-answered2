import Link from 'next/link';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
      </Head>
      <Header />
      <main>
        <h1 className="title">we really need to <br />talk about PCOS</h1>
        <Link href="/landing">
          <a className="styled-button">OKAY</a>
        </Link>
      </main>
    </div>
  );
}


