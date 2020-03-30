import React from "react"
import Layout from "../components/layout"
import OurCars from "../components/OurCars"
import FixedMenu from "../components/FixedMenu"

const OurProducts = () => (
  <Layout>
    <section className="section is-medium our-products">
      <div className="container">
        <h2 className="title">Våre produkter</h2>
        <p className="subtitle">
          Finner du noe som interesserer deg? Ta kontakt i dag eller bestill via
          app!
        </p>
      </div>
    </section>
    <OurCars />
    <FixedMenu
      linkOne={"#ourCars"}
      titleOne={"El-biler"}
      linkTwo={"#elsykkel"}
      titleTwo={"El-sykler"}
      linkThree={"#sparkesykkel"}
      titleThree={"El-sparkesykkel"}
    />
  </Layout>
)

export default OurProducts
