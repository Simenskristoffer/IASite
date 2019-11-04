import React from "react"
import { Helmet } from "react-helmet"
import "./All.scss"

const Layout = ({ children }) => {
  return (
    <>
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
      <main>{children}</main>
    </>
  )
}

export default Layout
