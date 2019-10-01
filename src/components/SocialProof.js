import React from "react"

import Carl from "../images/carl.jpg"
import Even from "../images/even.jpg"
import Solveig from "../images/solveig.jpg"

export default function SocialProof() {
  return (
    <>
      <h2 className="title">Anmeldelser</h2>
      <div className="columns is-centered">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={Carl} alt="Smart City Halden anmelder" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Carl Sandaker</p>
                </div>
              </div>
              <div className="content">
                "Takket være Smart City Halden sin bilutleie kan jeg nå enkelt
                reise til Sverige for å handle!"
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={Even} alt="Smart City Halden anmelder" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Even Svoren</p>
                </div>
              </div>
              <div className="content">
                "Leide en 7-seter hos Smart City Halden og dro på hyttetur med
                alle vennene mine. Billig og enkelt!"
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={Solveig} alt="Smart City Halden anmelder" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Solveig Kulseth</p>
                </div>
              </div>
              <div className="content">
                "Endelig en enkel og lett tilgjengelig transportløsning som ikke
                koster miljøet noe!"
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
