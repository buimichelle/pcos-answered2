import { useState } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';
import Script from 'next/script';

export default function Symptoms() {
    // Initialize state for the current quote
    const [currentQuote, setCurrentQuote] = useState('');

    // Define an array of myths
    const myths = [
        "People with PCOS can’t get pregnant",
        "PCOS always causes cysts on the ovaries",
        "Infertility is the only medical concern associated with PCOS",
        "Birth control pills can cure PCOS",
        "PCOS is caused by poor lifestyle choices",
        "An Irregular Menstrual Cycle Means You Have PCOS",
        "Women with PCOS Can’t Lose Weight",
        "All Women with PCOS Experiences Unwanted Hair Growth",
        "PCOS is only an issue if you’re trying to get pregnant",
        "Ovarian cysts require surgery",
        "You have to be obese to have PCOS."
    ];

    // Function to handle button click
    const handleButtonClick = () => {
        // Get a random quote from the myths array
        const randomQuote = myths[Math.floor(Math.random() * myths.length)];

        // Update the current quote in the state
        setCurrentQuote(randomQuote);
    };

    return (
        <>
            <Head>
                <link rel="icon" href="PCOS-Mich-.png" type="image/x-icon" />
                <link rel="shortcut icon" href="PCOS-Mich-.png" type="image/x-icon" />
                <title>Myths</title>
                <meta name="description" content="myths are bad!" />
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
                <h1 className="title">PCOS Myths</h1>
                <p className="disclaimer">
                    These are considered to be myths and have been consistently debunked.
                    Myths can cause so much harm to a woman mentally and physically.
                </p>
            </section>
            <section className="sectionEmpty"></section>

            <div className="center-container">
                <section className="body">
                    <h2>Click the button to get a myth and why is it WRONG!</h2>
                    {/* Apply CSS style to center the blockquote */}
                    <blockquote className="center-blockquote">{currentQuote}</blockquote>
                    {/* Attach the handleButtonClick function to the button's onClick event */}
                    <button className="myth-button" onClick={handleButtonClick}>
                        Give Me A Myth
                    </button>
                </section>
            </div>

            <section className="sectionEmpty"></section>
            <Footer />
        </>
    );
}

