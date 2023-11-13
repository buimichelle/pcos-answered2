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
                            <li>Irregular periods (reproductive features (oligo-amenorrhoea and sub-fertility))</li>
                            <li>Too much androgen (hyperandrogenic features)</li>
                            <li>Polycystic ovaries (polycystic ovarian morphology)</li>
                        </ul>
                        <br></br>
                        <p>Doctors will perform a more extensive evaluation to accurately determine it. If you are worried
                            about your missing periods, having trouble getting pregnant, or have excess signs of too much androgens (acne or hair loss), please see a health specialist. They will guide you!
                        </p>
                        <br></br>
                        <p>Doctors perform a physical exam, most likely including a pelvic exam, blood test, and ultrasound. The exam checks the health of your reproductive organs both inside and outside!</p>


                    </div>
                    <div class="col-sm-4" >
                        <img src="/angelic-pcos.png" alt="PCOS Drawing Made By Angelic Vu" className="img-fluid mb-4" />
                    </div>
                </div>



                <section className="seperator"> </section>
                <h2>Signs</h2>
                <p>These are the signs of PCOS, but does not determine the actual diagnosis.
                    Some women report to not have signs and only find out that they have PCOS when they are
                    having trouble getting pregnant or gaining weight without any real reason.
                    Please meet with a specialist. Click on each to learn more</p>
                <table class="table">
                    <tbody>
                        <tr data-toggle="collapse" data-target="#collapseIrregularPeriods">
                            <th>Irregular Periods</th>
                        </tr>
                        <tr id="collapseIrregularPeriods" class="collapse">
                            <td>
                                An regular period is a periods that have an average gap of around 28 days (a month). An irregular period
                                has a gap that is between less than 21 days or more than 35 days. If your period show up montly around the same time, that means
                                it is regular. Else, it is consider irregular period.
                                <br></br>
                                <br></br>
                                Keep it mind that it is an average span, not a one time scenario. There are external factors that contribute to missing a period.
                                <br></br>
                                <br></br>
                                Examples of irregular periods are having period bimonthly, trimonthly, or missing a whole year.
                                <br></br>
                                <br></br>
                                Most women with PCOS who have their period reports having a very heavy flow as compared to women without PCOS.
                                However, its more likely for your periods to be irregular when they first
                                start during puberty, and when you're nearing menopause.
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseAcne">
                            <th>Acne</th>
                        </tr>
                        <tr id="collapseAcne" class="collapse">
                            <td>
                                Everyone goes through acne at some point in their life. However that does not mean everyone have PCOS. Women with PCOS have worse condition of acne
                                then the average population. This is due to the excess amount of androgens. When having high amount of androgens, it increases the sebum (oil) production of the skin, which can lead to worsening acne.
                                The excess amount can also lead to excessive facial hair (on female).
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseObesity">
                            <th>Weight gain</th>
                        </tr>
                        <tr id="collapseObesity" class="collapse">
                            <td>
                                According to some studies, 80% of all US women with PCOS are reported to have obesity or be overweight.
                                However, the real correlation between obesity and PCOS are not well researched, but many have infer that it has to deal with the high insulin levels and hormonal imbalances.
                                Maintaining weight is also very difficult.
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseSkin">
                            <th>Darkening of the Skin</th>
                        </tr>
                        <tr id="collapseSkin" class="collapse">
                            <td>
                                Because of the high insulin levels and hormonal imbalances presented in women with PCOS, they often get dark, thick, and velvety patches patches on their skin. It usually forms
                                on the back of the neck (or encircle the neck) and sometimes the underarm area. A word for the patches is called acanthosis nigricans. The patches are not exclusive
                                to only women with PCOS, but a majority of women do have this.
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseCyst">
                            <th>Cyst</th>
                        </tr>
                        <tr id="collapseCyst" class="collapse">
                            <td>
                                Many people with PCOS have ovaries that appear larger or with many follicles (egg sac cysts) on ultrasound. An example of how it looks like is shown above.
                                When performing an ultrasound or an exam, doctors look into your ovaries to see if there any cysts. If there are, there a high chance that you might have PCOS.
                                However, some women reported to not have any cyst.
                                The cyst often comes from the lack of enough hormones to ovulate (reason for irrregular periods) and causes the ovaries to have cyst. The cyst helps increase the extra androgens.
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseSkinTag">
                            <th>Skin Tags</th>
                        </tr>
                        <tr id="collapseSkinTag" class="collapse">
                            <td>
                                Skin tags are excessive skin that grows out of your skin. They are often found in armpits.
                                Once again, this is because of hormonal imbalances.
                            </td>
                        </tr>

                        <tr data-toggle="collapse" data-target="#collapseHair">
                            <th>Thinning Hair</th>
                        </tr>
                        <tr id="collapseHair" class="collapse">
                            <td>
                                A very well-known fact is that many women with PCOS show male-pattern baldness or thinning hair. This is because of the excessive androgen as well as high level of testosterone.
                                The baldness or thinning of hair is called androgenic alopecia. The baldness starts around their temples or frontal regions.

                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#collapseInfertility">
                            <th>Infertility</th>
                        </tr>
                        <tr id="collapseInfertility" class="collapse">
                            <td>
                                Everyone knows that having irregular period is linked to infertility. This is due to the lack of regularly ovaluating or lack of ovaluating in general.
                                Ovaluation releases the eggs (which helps get someone pregnant) and when the eggs are never release, the chances of getting pregnant are extremely low.
                                <br></br>
                                <br></br>
                                PCOS is the leading cause of infertility. However, that does not mean that women with PCOS can not get pregnant at all. It means that they will have a much more difficult
                                time getting pregnant than a women without PCOS. In today's world, there are many tools to aid fertility. Please reach to a specialist about this.
                            </td>
                        </tr>

                    </tbody>
                </table>
                <section className="seperator"> </section>

                <h2>Treatment</h2>
                <p>There are many treatments are there, these are any a few:</p>

                <ul>
                    <li><h5>Birth Control Pills</h5> The pills can help regulate periods and fix hormonal imbalances, lower testosterone levels, and reduce the amount of acne</li>
                    <li><h5>Medications to block androgens</h5> It helps with acne, facial hair, and balding.</li>
                    <li><h5>Topical (skin) creams and antibiotics</h5> It helps with acne, dark patches, and skin tags.</li>
                    <li><h5>Lifestyle Changes</h5>It is recommended women with PCOS should do minimal excerises or a new diet to maintain weight or have a weight loss.</li>
                </ul>
                <section className="seperator"></section>

                <h2>Risks</h2>
                <p>Having PCOS untreated could lead to many risks that could harm you. These are only a few risks to keep in mind:</p>
                <ul>
                    <li><h5>Diabetes</h5></li>
                    <li><h5>High Blood Pressure</h5></li>
                    <li><h5>Sleep Disorders (like Apnea)</h5></li>
                    <li><h5>Depression & Anxiety</h5></li>
                    <li><h5>Abnormal bleeding from the uterus</h5></li>
                    <li><h5>Infertility</h5></li>
                    <li><h5>High Cholesterol</h5></li>
                </ul>


                <section className="seperator"></section>


            </body >
            <Footer />
        </>
    )
}
