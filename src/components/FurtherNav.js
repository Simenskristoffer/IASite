import React from "react"
import { FaCarAlt, FaPhone, FaQuestion } from "react-icons/fa"
import { IoMdPerson } from "react-icons/io"

const FurtherNav = () => (
  <div className="section further-nav is-medium">
    <div className="container">
      <h2 className="further-nav-title">Utforsk flere av våre tjenester</h2>
      <div className="columns has-text-centered">
        <div className="column">
          <IoMdPerson className="further-nav-icon" />
          <h2>Medlemskap</h2>
        </div>
        <div className="column">
          <FaCarAlt className="further-nav-icon" />
          <h2>Produkter</h2>
        </div>
        <div className="column">
          <FaQuestion className="further-nav-icon" />
          <h2>Hvordan det funker</h2>
        </div>
        <div className="column">
          <FaPhone className="further-nav-icon" />
          <h2>Kontakt oss</h2>
        </div>
      </div>
    </div>
  </div>
)

export default FurtherNav
