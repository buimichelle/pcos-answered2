import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Sources() {
    return (
        <>
            <Head>
                <title>Credits</title>
            </Head>
            <Header />
            <h2>Credits/Sources</h2>
            <p>Picture from home page: Image by <a className="hellolink" href="https://www.freepik.com/free-photo/medium-shot-happy-women-posing-seaside_23666995.htm#query=group%20of%20girls&position=13&from_view=search&track=ais">Freepik</a></p>
            <p>Symptoms Ovary Pictures made by special friend, <a className="hellolink" href="https://www.instagram.com/vuumie/">Angelic Ta Vu</a></p>
            <p>Links to back up anything mentioned on the website:</p>
            <a className="hellolink" href="https://www.nhs.uk/conditions/irregular-periods/">NHS.UK Irregular Period</a>
            <br></br>
            <a className="hellolink" href="https://www.ucihealth.org/health-library/content?contentTypeID=85&contentID=P08334">UC Irvine Health</a>
            <br></br>
            <a className="hellolink" href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/polycystic-ovary-syndrome-pcos#:~:text=Polycystic%20ovary%20syndrome%20(PCOS)%20is,that%20form%20in%20the%20ovaries.">John Hopkins Medicine</a>
            <br></br>
            <a className="hellolink" href="https://my.clevelandclinic.org/health/diseases/8316-polycystic-ovary-syndrome-pcos">Cleveland Clinic</a>
            <br></br>
            <a className="hellolink" href="https://www.womenshealth.gov/a-z-topics/polycystic-ovary-syndrome">WomensHealth.com</a>
            <br></br>
            <a className="hellolink" href="https://www.cdc.gov/diabetes/basics/pcos.html">CDC</a>
            <br></br>
            <a className="hellolink" href="https://www.mayoclinic.org/diseases-conditions/pcos/symptoms-causes/syc-20353439">Mayo Clinic</a>
            <br></br>
            <a className="hellolink" href="https://www.nationwidechildrens.org/conditions/polycystic-ovary-syndrome-pcos#:~:text=Dark%20patches%20of%20skin%20may,and%20sometimes%20the%20underarm%20area.">Nationwide Childrens</a>
            <br></br>
            <a className="hellolink" href="https://www.aspirehfi.com/blog/debunking-common-myths-about-pcos-separating-fact-from-fiction">Aspire HFI Blog PCOS Myths</a>
            <br></br>
            <a className="hellolink" href="https://www.endocrine.org/-/media/endocrine/files/patient-engagement/infographics/fact_or_fiction_pcos_myths_debunked-(1).pdf">Endocrine PCOS Myths</a>
            <br></br>
            <a className="hellolink" href="https://www.centrastate.com/blog/6-common-misconceptions-about-polycystic-ovary-syndrome/">CentraState Healthcare System PCOS Myths</a>


            <Footer />
        </>
    )
}
