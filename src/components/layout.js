import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FurtherNav from "../components/FurtherNav"
import "./All.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {
            "Move About AS - Miljøvennlig transport alternativer for bedrifter og privatpersoner"
          }
        </title>
        <meta name="description" content={"Lorum ipsum!"} />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <div className="divider div-transparent"></div>
      <FurtherNav />
      <Footer />
    </>
  )
}

export default Layout
