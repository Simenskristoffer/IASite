import React from "react"
import Layout from "../components/layout"
import HowItWorks from "../components/HowToUse"
import Iframe from "../components/Iframe"
import AnchorLink from "react-anchor-link-smooth-scroll"

const HowItWorksPage = () => (
  <Layout>
    <section className="section is-medium our-products">
      <div className="container">
        <h2 className="title">Slik gjør du</h2>
        <p className="subtitle">
          Med noen enkle tastetrykk kan du enkelt få tilgang <br /> til det
          transportmiddelet som passer deg!
        </p>
        <button className="standard-button">
          <AnchorLink href="#HowToUse">Les mer</AnchorLink>
        </button>
      </div>
    </section>
    <HowItWorks />
    <section className="section havari ">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <Iframe />
          </div>
          <div className="column">
            <h2 className="title">Uhell eller havari?</h2>
            <p className="havari-paragraph">
              Ring Move About på 958 07000 dersom du trenger hjelp. Dersom du
              har behov for veihjelp utenfor vår åpningstid, kan disse
              telefonnumrene benyttes: Codan Veihjelp: 06300 Merk at eksterne
              numre ikke kan hjelpe med bestillinger. Vennligst informer oss
              dersom veihjelp kontaktes direkte.
            </p>
            <br />
            <p>
              Når du er ferdig så tøm bilen for personlige eiendeler, og sørg
              for at bilen er fri for søppel. Husk å sett bilen på lading, slik
              at den har tilstrekkelig med strøm for neste bruker! Til slutt:
              Sett bilnøkkelen inn i holderen i hanskerommet! Sjekk at dørene
              låser seg automatisk etter 30 sekunder.
            </p>
            <br />
            <p>
              Les mer i våre <a href="/">vilkår</a> eller <a href="/">FAQ</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default HowItWorksPage
