import React from "react"

import Iphone from "../images/iphoneIllustrasjon.png"
import WhiteIphone from "../images/whiteAppStore.svg"
import BlackIphone from "../images/blackAppStore.svg"

export default function HowToUse() {
  return (
    <>
      <section className="section is-medium iphoneIllustration">
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
              <img
                src={WhiteIphone}
                alt="Smart City bilapp"
                style={{
                  margin: "10px",
                  width: "150px",
                  height: "55px",
                }}
              />
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
      <section className="section is-medium videoSection">
        <div className="container">
          <div className="columns">
            <div className="column is-centered">
              <iframe
                title="Smart City Halden bilutleie"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ITqEzrQbEGY"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="column has-text-centered">
              <p style={{ fontStyle: "italic", fontSize: "28px" }}>
                Trenger du bil for å dra på handletur til Sverige, flytte ut av
                studenthybelen eller dra på hyttetur? Vi har biler for alle
                behov!
              </p>
              <br />
              <p style={{ fontSize: "20px" }}>
                Last ned appen i dag og få tilgang en rekke EL-biler! Vi har
                5-seters, 7-seters og varebiler! Tilbudet passer ypperlig for
                deg som er student på utkikk etter leiebil, eller for deg som
                trenger å få kjørt barna på trening.
              </p>
              <img
                src={BlackIphone}
                alt="Smart City bilapp"
                style={{
                  margin: "10px",
                  width: "150px",
                  height: "55px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
