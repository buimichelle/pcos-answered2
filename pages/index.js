import Link from 'next/link';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="ribbon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="ribbon.png" type="image/x-icon" />
        <title>pcos answered</title>
        <meta name="description" content="spreading awareness about pcos!" />
      </Head>


      <Header />
      <div class="container">
        <img src="beige-women.jpg" alt="<a href='https://www.freepik.com/free-photo/lot-diverse-women-tops-pants-are-huddled-together-looking-posing-camera-against-beige-background_26258358.htm#query=women&position=18&from_view=search&track=sph'>Image by lookstudio</a> on Freepik"></img>
        <div class="centered">
          <p>Worldwide, PCOS affects 6% to 10% of women, making it the most common endocrine disorder in women of childbearing age.</p>
          <Link className="button" href="/symptoms">
            <a className="styled-button">SYMPTOMS</a>
          </Link>
          <Link href="/research">
            <a className="styled-button">RESEARCH</a>
          </Link>
          <Link href="/resources">
            <a className="styled-button">RESOURCES</a>
          </Link>
          <Link href="https://www.pcosaa.org/donate" >
            <a className="styled-button" target="_blank" rel="noopener noreferrer">DONATE</a>
          </Link>
        </div>
      </div >
      <Footer />
    </>
    // <div className="container">
    //   <Head>
    //     <title>pcos answered</title>
    //     <meta name="description" content="spreading awareness about pcos!" />
    //   </Head>
    //   </div>

    //   <Header />
    //   <main>
    //     <Link href="/landing">
    //       <a className="styled-button">efefwe</a>
    //     </Link>
    //   </main>
    // </div>
  );
}


