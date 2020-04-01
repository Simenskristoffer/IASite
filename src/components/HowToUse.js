import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import Iphone from "../images/iphoneIllustrasjon.png"

export default function HowToUse(props) {
  return (
    <>
      <section className="section is-medium iphoneIllustration" id="HowToUse">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              {props.title ? <h2>{props.title}</h2> : null}
              <ol type="1">
                <li>Last ned appen Move About og registrer deg</li>
                <li>Logg inn og fortell hvor og når du vil hente bilen</li>
                <li>Velg hvilken bil du vil leie og trykk "book"</li>
                <li>Hent bilen</li>
                <li>God tur!</li>
              </ol>
              <button className="standard-button">
                <AnchorLink href="#havari">Finn ut mer</AnchorLink>
              </button>
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
