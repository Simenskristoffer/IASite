import React from "react"
import { Link } from "gatsby"
import Elsykkel from "../images/elsykkel.jpg"
import ElSparkesykkel from "../images/elsparkesykkel.jpg"
import Elgolf from "../images/elgolfutvalg.jpg"

const ProdIntro = () => (
  <div className="section prodinfo is-medium">
    <div className="container">
      <div className="textwrapper">
        <h2>Våre produkter</h2>
        {/*<p>Reis rundt med god samvittighet</p> */}
      </div>

      <div className="columns has-text-centered is-vcentered">
        <div className="column circle">
          <img
            src={Elsykkel}
            alt="Elektrisk sykkel"
            className="product-image-main-page"
          />
          <p className="product-title-main-page">Elektrisk sykkel</p>
          <Link to="#utPaaTur" className="button">
            Utforsk
          </Link>
        </div>
        <div className="column circle">
          <img
            src={ElSparkesykkel}
            alt="Elektirsk sparkesykkel"
            className="product-image-main-page"
          />
          <p className="product-title-main-page">Elektrisk sparkesykkel</p>
          <Link to="#utPaaTur" className="button">
            Utforsk
          </Link>
        </div>
        <div className="column circle">
          <img
            src={Elgolf}
            alt="Elektirsk bil"
            className="product-image-main-page"
          />
          <p className="product-title-main-page">Elektirsk bil</p>
          <Link to="#utPaaTur" className="button">
            Utforsk
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default ProdIntro
