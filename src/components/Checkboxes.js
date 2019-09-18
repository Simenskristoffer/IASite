import React from "react"

import { FaCheck } from "react-icons/fa"

export default function Checkboxes() {
  return (
    <>
      <div className="columns is-centered checkboxes">
        <div class="column">
          <FaCheck className="check" />
          Bil når du trenger det
        </div>
        <div class="column">
          <FaCheck className="check" />
          Ingen bensinutgifter
        </div>
        <div class="column">
          <FaCheck className="check" />
          Forsikring inkludert
        </div>
      </div>
    </>
  )
}
