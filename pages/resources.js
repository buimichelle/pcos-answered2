import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Resources() {
    return (
        <>
            <Head>
                <link rel="icon" href="PCOS-Mich-.png" type="image/x-icon" />
                <link rel="shortcut icon" href="PCOS-Mich-.png" type="image/x-icon" />
                <title>Resources</title>
                <meta name="description" content="OC Resources" />
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
                <h1 className="title">Resources</h1>
            </section>
            <body class="container">
                <section className="seperator"></section>
                <h2>Orange County Resources</h2>
                <p>Your OBGYN provider should offer you the most excellent service regarding PCOS However, if you do not have one, here are some other providers in the region and other organization supporting PCOS!</p>
                <p><i>** If you are not within OC, you can check with your local or insurance websites to find the best and local specialist near you!</i></p>
                <br></br>
                <h3>PCOS Awareness Association</h3>
                <Link href="https://www.pcosaa.org/" >
                    <a className="hellolink" target="_blank" rel="noopener noreferrer">Pledge Teal Here</a>
                </Link>
                <h3>Your local Planned Parenthood</h3>
                <Link href="https://www.plannedparenthood.org/learn/health-and-wellness/polycystic-ovary-syndrome-pcos#:~:text=While%20there%20is%20no%20cure,35)%20can%20help%20your%20symptoms." >
                    <a className="hellolink" target="_blank" rel="noopener noreferrer">Check them out here!</a>
                </Link>
                <p>Fun fact! Your local staffs at Planned Parenthood can help aid you figure out if you have PCOS and solve any concerns! They can also help guide you to an OBGYN. Planned Parenthood of Orange & San Bernardino County Health Centers are open seven days a week so you can get care when it's convenient for you. </p>
                <p>Addresses for Orange County and San Bernardino: <a href="https://www.plannedparenthood.org/planned-parenthood-orange-san-bernardino/patients/health-center-locations" className="hellolink" target="_blank" rel="noopener noreferrer">Check them out here!</a></p>
                <h3>Broad Medical Group with Dr. Broad</h3>
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
                <h3>Integrative Medical Group of Irvine with Dr. Felice Gersh</h3>
                <Link href="https://integrativemgi.com/services/pcos-womens-clinic/" >
                    <a className="hellolink" target="_blank" rel="noopener noreferrer">Check them out here!</a>
                </Link>
                <p>Here is what Dr. Felice Gersh says about her approach: "As Medical Director
                    of the Integrative Medical Group of Irvine, I focus on understanding women’s
                    innate physical and emotional make-up. Through my research and
                    practical experience, I have come to understand that women have internal,
                    natural rhythms that are absolutely essential to female health.
                    These rhythms are controlled by hormones, particularly estrogen,
                    and may be kept in balance through both conventional and holistic treatments."</p>
                <p>Address:  4968 Booth Cir Suite 101, Irvine, CA 92604
                    <br></br>Phone Number:  949-753-7475
                </p>
                <section className="seperator"></section>
                <h2>Want to learn more?</h2>
                <p>PCOS-Answered is still in the works! Please check out these other resources and/or check out the <a className="hellolink" href="/sources">sources</a> page (found in the footer) to read more!</p>
                <h3>Margo S. Hudson, MD, Co-director, Polycystic Ovary Syndrome Program in the Fish Center for Women’s Health at Brigham and Women’s Hospital describes causes, symptoms and treatment for polycystic ovary syndrome.</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Az9lWdqebaU?si=8qc1KkrrlIS1J5w0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h3>What Causes PCOS? How to REVERSE PCOS! (Yes, It Is Possible!)</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/26_mLZbC23w?si=5QaOos9QKozB4wOb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h3>menstruation and Polycystic Ovary Syndrome or PCOS | Causes |Treatments|Dandelion Medical Animation</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Mc5iK0AtGNc?si=H4odnfNV_vXepsIc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <section className="sectionEmpty"></section>


            </body >

            <Footer></Footer>
        </>


    );
}


