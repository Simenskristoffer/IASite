import React from "react"
import { Link } from "gatsby"
import { FaCarAlt, FaPhone, FaQuestion } from "react-icons/fa"
import { IoMdPerson } from "react-icons/io"

const FurtherNav = () => (
  <div className="section further-nav is-medium" id="further-nav">
    <div className="container">
      <h2 className="further-nav-title">Utforsk flere av våre tjenester</h2>
      <div className="columns has-text-centered">
        <div className="column">
          <Link to="/medlemskap" style={{ color: "#4A4A4A" }}>
            <IoMdPerson className="further-nav-icon" />
            <h2 className="further-nav-column-title">Medlemskap</h2>
            <p style={{ marginTop: "10%" }}>
              Lorum ispum sumates Lorum ispum sumates Lorum ispum sumates Lorum
              ispum sumates Lorum ispum sumates Lorum ispum sumates Lorum ispum
              sumates Lorum ispum sumates Lorum ispum sumates{" "}
            </p>
            <button className="button">Besøk</button>
          </Link>
        </div>

        <div className="column">
          <Link to="/våre-produkter" style={{ color: "#4A4A4A" }}>
            <FaCarAlt className="further-nav-icon" />
            <h2 className="further-nav-column-title">Produkter</h2>
            <p style={{ marginTop: "10%" }}>
              Lorum ispum sumates Lorum ispum sumates Lorum ispum sumates Lorum
              ispum sumates Lorum ispum sumates Lorum ispum sumates Lorum ispum
              sumates Lorum ispum sumates Lorum ispum sumates{" "}
            </p>
            <button className="button">Besøk</button>
          </Link>
        </div>
        <div className="column">
          <Link to="/hvordan-det-funker" style={{ color: "#4A4A4A" }}>
            <FaQuestion className="further-nav-icon" />
            <h2 className="further-nav-column-title">Hvordan det funker</h2>
            <p style={{ marginTop: "10%" }}>
              Lorum ispum sumates Lorum ispum sumates Lorum ispum sumates Lorum
              ispum sumates Lorum ispum sumates Lorum ispum sumates Lorum ispum
              sumates Lorum ispum sumates Lorum ispum sumates{" "}
            </p>
            <button className="button">Besøk</button>
          </Link>
        </div>

        <div className="column">
          <Link to="/kontakt" style={{ color: "#4A4A4A" }}>
            <FaPhone className="further-nav-icon" />
            <h2 className="further-nav-column-title">Kontakt oss</h2>
            <p style={{ marginTop: "10%" }}>
              Lorum ispum sumates Lorum ispum sumates Lorum ispum sumates Lorum
              ispum sumates Lorum ispum sumates Lorum ispum sumates Lorum ispum
              sumates Lorum ispum sumates Lorum ispum sumates{" "}
            </p>
            <button className="button">Besøk</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default FurtherNav
