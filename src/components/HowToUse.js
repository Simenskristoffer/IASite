import React from "react"

import Iphone from "../images/iphoneIllustrasjon.png"

export default function HowToUse() {
  return (
    <>
      <section className="section is-medium iphoneIllustration">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2>Slik kommer du i gang</h2>
              <ol type="1">
                <li>Last ned appen Move About og registrer deg</li>
                <li>Logg inn og fortell hvor og når du vil hente bilen</li>
                <li>Velg hvilken bil du vil leie og trykk "book"</li>
                <li>Hent bilen</li>
                <li>God tur!</li>
              </ol>
            </div>
            <div className="column">
              <img
                src={Iphone}
                alt="smart City Bilutleie"
                style={{ maxWidth: "35rem" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
