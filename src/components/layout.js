import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"
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
    </>
  )
}

export default Layout
