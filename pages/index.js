import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (

    <div className="container">
      <Header />
      <main>
        <h1 className="title">we really need to<br />talk about pcos</h1>
        <button class="styled-button">OKAY</button>
      </main>
    </div>
  );
}

