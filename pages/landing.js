import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Landing() {
    return (
        <div className="container">
            <Header />
            <main>
                <h1 className="header1">Polycystic Ovary Syndrome</h1>
                <p className="body">PCOS affects approximately 15% of all women in the US, making it one of the common syndromes out there. However, a low percentage of women really understand what PCOS really is - it’s more than being infertile.</p>
                <Link href="/landing">
                    <a className="styled-button">SYMPTOMS</a>
                </Link>
                <Link href="/landing">
                    <a className="styled-button">RESEARCH</a>
                </Link>
                <Link href="/landing">
                    <a className="styled-button">STATISTICS</a>
                </Link>
                <Link href="/landing">
                    <a className="styled-button">RESOURCES</a>
                </Link>
            </main>
        </div>
    );
}



