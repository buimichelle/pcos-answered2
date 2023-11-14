import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Resources() {
    return (
        <>
            <Head>
                <title>Resources</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-GLhlTQ8iK+U2mht6P98n+9AABbPVXkhj+ek5A/AqFkF8x6bGg8iSz0tI6UZI6ck" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-eJzjg0jC7lsL3B5Z+U5mQPy5z9sOx/q8kttL3Zo6qDMYj5T9Z2n1cewwq8Z6Tjk" crossorigin="anonymous"></script>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

            </Head>
            <Header />
            <section className="sectionTeal">
                <h1 className="title">Resources for Orange County, California</h1>
            </section>
            <body class="container">
                <section className="seperator"></section>
                <p>Your OBGYN provider should offer you the most excellent service regarding PCOS However, if you do not have one, here are some other providers in the region and other organization supporting PCOS!</p>
                <section class="seperator"></section>
                <h2>PCOS Awareness Association</h2>
                <Link href="https://www.pcosaa.org/" >
                    <a className="hellolink" target="_blank" rel="noopener noreferrer">Pledge Teal Here</a>
                </Link>
                <h2>Broad Medical Group with Dr. Broad</h2>
                <Link href="https://obgyn-newportbeach.com/polycystic-ovarian-syndrome-pcos-specialist-in-orange-county/" >
                    <a className="hellolink" target="_blank" rel="noopener noreferrer">Check them out here!</a>
                </Link>
                <p>HOAG-affilated OBGYN in Newport Beach Area.</p>
                <p>According to their website: "Our lead physician, Dr. Broad is board-certified, highly experienced, and above all empathetic.

                    She can help you make crucial lifestyle changes to your diet and exercise plan as a way to relieve PCOS symptoms. For instance, she can help walk you through the specific types of food items – e.g., peaches, chickpeas, maca root powder – you need to eat as a lifestyle intervention for managing polycystic ovarian syndrome.

                    If necessary, Dr. Broad can prescribe medication such as Letrozole and Clomid® for ovulation based on your conception preferences. In addition, she may recommend medication for insulin sensitization based on your unique symptoms and test results."</p>
                <p>Address: 1640 Newport Blvd.
                    Suite #300
                    Eastside Costa Mesa
                    CA 92627
                    <br></br>Phone Number:  949-720-9848
                </p>
                <h2>Integrative Medical Group of Irvine with Dr. Felice Gersh</h2>
                <Link href="https://integrativemgi.com/services/pcos-womens-clinic/" >
                    <a className="hellolink" target="_blank" rel="noopener noreferrer">Check them out here!</a>
                </Link>


                <section className="seperator"></section>

            </body >

            <Footer></Footer>
        </>


    );
}


