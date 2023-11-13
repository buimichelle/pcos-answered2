import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Symptoms() {
    return (
        <>
            <Head>
                <link rel="icon" href="PCOS-Mich-.png" type="image/x-icon" />
                <link rel="shortcut icon" href="PCOS-Mich-.png" type="image/x-icon" />
                <title>Symptoms</title>
                <meta name="description" content="learn about the symptoms of" />
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
                <h1 className="title">PCOS Symptoms</h1>
                <p className="disclaimer"> Disclaimer: DO NOT diagnose yourself with the following information.</p>
            </section>

            <section className="sectionEmpty"> </section>
            <body class="container">
                <div class="row">
                    <div class="col-sm-8" >
                        <h2>How does doctors diagnose?</h2>
                        <p>Doctors based PCOS diagnosis off three criteria. Patients would need 2/3 out of this list:</p>
                        <ul>
                            <li>Irregular periods</li>
                            <li>Too much androgen</li>
                            <li>Polycystic ovaries</li>
                        </ul>
                        <p>Quick Notes:
                            Often times, when people with PCOS experience very heavy flow when on period and have no sign of cysts on their ovaries.</p>
                        <br></br>
                        <p>Doctors will perform a more extensive evaluation to accurately determine it. If you are worried
                            about your missing periods, having trouble getting pregnant, or have excess signs of too much androgens (acne or hair loss), please see a health specialist. They will guide you!
                        </p>
                        <br></br>
                        <p>Doctors perform a physical exam, most likely including a pelvic exam. The exam checks the health of your reproductive organs both inside and outside!</p>


                    </div>
                    <div class="col-sm-4" >
                        <img src="/angelic-pcos.png" alt="PCOS Drawing Made By Angelic Vu" className="img-fluid mb-4" />
                    </div>
                </div>



                <section className="seperator"> </section>
                <h2>Signs</h2>
                <p>These are the signs of PCOS, but does not determine the actual diagnosis. Please meet with a specialist. Click on each to learn more</p>
                <table class="table">
                    <tbody>
                        <tr data-toggle="collapse" data-target="#collapseIrregularPeriods">
                            <th>Irregular Periods</th>
                        </tr>
                        <tr id="collapseIrregularPeriods" class="collapse">
                            <td>
                                Irregular periods may include...
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseAcne">
                            <th>Acne</th>
                        </tr>
                        <tr id="collapseAcne" class="collapse">
                            <td>
                                Irregular periods may include...
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseObesity">
                            <th>Weight gain</th>
                        </tr>
                        <tr id="collapseObesity" class="collapse">
                            <td>
                                Irregular periods may include...
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseSkin">
                            <th>Darkening of the Skin</th>
                        </tr>
                        <tr id="collapseSkin" class="collapse">
                            <td>
                                Irregular periods may include...
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseCyst">
                            <th>Cyst</th>
                        </tr>
                        <tr id="collapseCyst" class="collapse">
                            <td>
                                Irregular periods may include...
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseSkinTag">
                            <th>Skin Tags</th>
                        </tr>
                        <tr id="collapseSkinTag" class="collapse">
                            <td>
                                Irregular periods may include...
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseHair">
                            <th>Thinning Hair</th>
                        </tr>
                        <tr id="collapseHair" class="collapse">
                            <td>
                                Irregular periods may include...
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseInfertility">
                            <th>Infertility</th>
                        </tr>
                        <tr id="collapseInfertility" class="collapse">
                            <td>
                                Irregular periods may include...
                            </td>
                        </tr>

                    </tbody>
                </table>
                <section className="seperator"> </section>

                <h2>Treatment</h2>
                <p>If you do plan to become pregnant, your treatment may include:

                    A change in diet and activity. A healthy diet and more physical activity can help you lose weight and reduce your symptoms. They can also help your body use insulin more efficiently, lower blood glucose levels, and may help you ovulate.

                    Medications to cause ovulation. Medications can help the ovaries to release eggs normally. These medications also have certain risks. They can increase the chance for a multiple birth (twins or more). And they can cause ovarian hyperstimulation. This is when the ovaries release too many hormones. It can cause symptoms such as abdominal bloating and pelvic pain.

                </p>
                <p>
                    If you do not plan to become pregnant, your treatment may include:

                    Birth control pills. These help to control menstrual cycles, lower androgen levels, and reduce acne.

                    Diabetes medication. This is often used to lower insulin resistance in PCOS. It may also help reduce androgen levels, slow hair growth, and help you ovulate more regularly.

                    A change in diet and activity. A healthy diet and more physical activity can help you lose weight and reduce your symptoms. They can also help your body use insulin more efficiently, lower blood glucose levels, and may help you ovulate.

                    Medications to treat other symptoms. Some medications can help reduce hair growth or acne.

                </p>


            </body >
            <Footer />
        </>
    )
}
