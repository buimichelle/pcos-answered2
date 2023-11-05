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
            <div className="top-section">
                <h1 className="header1">Symptoms</h1>
                <p className="body">By having 2/3 of these symptoms
                    allows doctors to diagnose you with PCOS.</p>
                <p className="disclaimer">
                    Disclaimer: DO NOT diagnose yourself with the following list. The following
                    list does not include all symptoms.</p>
            </div>
            <div className="bottom-section">
                <div className="left-subsection">
                    {/* Content for the left subsection in the bottom section goes here */}
                    <h2>Irregular Periods</h2>
                </div>
                <div className="right-subsection">
                    {/* Content for the right subsection in the bottom section goes here */}
                    <img src="periodgirl.png" width="500" height="auto" />
                </div>
            </div>

            <div className="bottom-section">
                <div className="left-subsection">
                    {/* Content for the left subsection in the bottom section goes here */}
                    <img src="periodgirl.png" width="500" height="auto" />
                </div>
                <div className="right-subsection">
                    {/* Content for the right subsection in the bottom section goes here */}
                    <h2>Ovary with Cyst</h2>
                </div>
            </div>

            <div className="bottom-section">
                <div className="left-subsection">
                    {/* Content for the left subsection in the bottom section goes here */}
                    <h2>Excessive Body Hair</h2>
                </div>
                <div className="right-subsection">
                    {/* Content for the right subsection in the bottom section goes here */}
                    <img src="periodgirl.png" width="500" height="auto" />
                </div>
            </div>
        </>
    );
}
