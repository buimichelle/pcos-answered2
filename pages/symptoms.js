import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Symptoms() {
    return (
        <>
            <Head>
                <title>Symptoms</title>
            </Head>
            <Header />
            <div>
                <h1>PCOS Symptoms</h1>

                <ul>
                    <li>Irregular Periods</li>
                    <li>Abnormal Hair Growth</li>
                    <li>Acne</li>
                    <li>Obesity</li>
                    <li>Darkening of the Skin</li>
                    <li>Cysts</li>
                    <li>Skin Tags</li>
                    <li>Thinning Hair</li>
                    <li>Infertility</li>
                </ul>
            </div >
            <Footer />
        </>
    )
}
