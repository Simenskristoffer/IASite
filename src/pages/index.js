import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import ProdInfo from "../components/ProdIntro"
import HowToUse from "../components/HowToUse"

const IndexPage = () => (
  <Layout>
    <Hero />
    <ProdInfo />
    <HowToUse />
  </Layout>
)

export default IndexPage
