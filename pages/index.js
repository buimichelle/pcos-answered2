import Link from 'next/link';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="PCOS-Mich-.png" type="image/x-icon" />
        <link rel="shortcut icon" href="PCOS-Mich-.png" type="image/x-icon" />
        <title>PCOS Answered</title>
        <meta name="description" content="spreading awareness about pcos!" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-GLhlTQ8iK+U2mht6P98n+9AABbPVXkhj+ek5A/AqFkF8x6bGg8iSz0tI6UZI6ck" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-GLhlTQ8iK+U2mht6P98n+9AABbPVXkhj+ek5A/AqFkF8x6bGg8iSz0tI6UZI6ck" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-eJzjg0jC7lsL3B5Z+U5mQPy5z9sOx/q8kttL3Zo6qDMYj5T9Z2n1cewwq8Z6Tjk" crossorigin="anonymous"></script>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


      </Head>


      <Header />
      <div className="container_home">
        <img src="seaside-women.jpg" alt="<a href='https://www.freepik.com/free-photo/lot-diverse-women-tops-pants-are-huddled-together-looking-posing-camera-against-beige-background_26258358.htm#query=women&position=18&from_view=search&track=sph'>Image by lookstudio</a> on Freepik"></img>
        <div className="centered">
          <h2 className="title">Worldwide, PCOS affects 6% to 10% of women, making it the most common endocrine disorder in women of childbearing age. Click the buttons to learn more!</h2>

          {/* <Link href="/about">
            <a className="styled-button">ABOUT</a>
          </Link> */}
          <Link className="button" href="/symptoms">
            <a className="styled-button">SYMPTOMS</a>
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
  );
}


