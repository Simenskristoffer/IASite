import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Anmeldelser from "../components/Anmeldelser"
import HowToUse from "../components/HowToUse"
import OurCars from "../components/OurCars"

const IndexPage = () => (
  <Layout>
    <Hero />
    <HowToUse />
    <Anmeldelser />
    <OurCars />
  </Layout>
)

export default IndexPage
