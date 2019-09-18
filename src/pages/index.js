import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import Anmeldelser from "../components/Anmeldelser"
import HowToUse from "../components/HowToUse"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Anmeldelser />
    <HowToUse />
  </Layout>
)

export default IndexPage
