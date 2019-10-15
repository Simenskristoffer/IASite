import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import Anmeldelser from "../components/Anmeldelser"
import HowToUse from "../components/HowToUse"
import OurCars from "../components/OurCars"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{"Smart City Halden - Haldens billigste bilutleie"}</title>
      <meta
        name="description"
        content={
          "Prøv ut Haldens billigste leietilbud for bil! Få tilgang til over 20 biler. Alt samlet på en app!"
        }
      />
    </Helmet>
    <Hero />
    <HowToUse />
    <Anmeldelser />
    <OurCars />
  </Layout>
)

export default IndexPage
