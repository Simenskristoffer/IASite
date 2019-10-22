import React from "react"
import { Link } from "gatsby"
import elgolf from "../images/elgolfProfil.png"

export default function OurCars() {
  return (
    <section className="section is-medium" id="ourCars">
      <div className="container">
        <section className="section" id="ourCars">
          <h2 className="title">Vårt el-bil utvalg</h2>
          <div className="columns is-vcentered is-mobile">
            <div className="column">
              <img src={elgolf} alt="smart city el-golf" />
            </div>
            <div className="column">
              <p className="carInfo">
                Vi har både El-Golf og Nissan Leaf tilgjengelig for leie. Dette
                er flotte, moderne utleiebiler med mye utstyr og som har en
                rekkevidde på mellom 180 - 280 kilometer, avhengig av været.
                Disse bilene passer ypperlig for deg som vil kjøre og oppleve
                området rundt Halden.
              </p>
              <Link to="#utPaaTur" className="button">
                Book i dag
              </Link>
            </div>
          </div>
        </section>
        <hr className="line" />
        <section className="section is-medium">
          <div className="columns is-vcentered is-mobile">
            <div className="column">
              <p className="carInfo">
                I vårt utvalg av el-biler har vi også to forskjellige Nissan
                modeller som er 100% elektrisk. Med disse utleiebilene tilbyr vi
                7-seter modellen og varebil modellen. Disse har en rekkevidde
                fra mellom 200 - 301 kilometer, avhengig av været. Flott for deg
                som skal ha med mange på tur, eller deg som trenger å transporte
                møbler eller andre gjenstander.
              </p>
              <Link to="#utPaaTur" className="button">
                Book i dag
              </Link>
            </div>
            <div className="column">
              <img src={elgolf} alt="smart city el-varebil" />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
