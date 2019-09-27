import React from "react"

import Iphone from "../images/iphoneIllustrasjon.png"

export default function HowToUse() {
  return (
    <>
      <section className="section is-medium howtouse">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2>Slik kommer du i gang</h2>
              <ol type="1">
                <li>
                  Last ned appen Move About eller Mobility Park og registrer deg
                </li>
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
      <section className="section is-medium howtouse">
        <div className="container">
          <div className="columns">
            <div className="column is-centered">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ITqEzrQbEGY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="column is-centered">
              <h2>Tja, hva skal det stå her da...</h2>
              <p>
                Lorem ipsum dolor amet vHS banh mi distillery mumblecore
                everyday carry humblebrag organic selfies hot chicken pork belly
                coloring book seitan. Gastropub cred copper mug 3 wolf moon
                enamel pin listicle you probably haven't heard of them franzen
                readymade iceland. Man bun live-edge hammock irony pop-up echo
                park, poutine roof party marfa. Air plant man braid truffaut
                tilde. Cloud bread meh shabby chic jean shorts pour-over ennui
                snackwave.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
