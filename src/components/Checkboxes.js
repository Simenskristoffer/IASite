import React from "react"

import { FaCheck } from "react-icons/fa"

export default function Checkboxes() {
  return (
    <>
      <div className="columns is-centered checkboxes">
        <div className="column">
          <FaCheck className="check" />
          Bil når du trenger det
        </div>
        <div className="column">
          <FaCheck className="check" />
          Miljøvennlig
        </div>
        <div className="column">
          <FaCheck className="check" />
          Forsikring inkludert
        </div>
      </div>
    </>
  )
}
