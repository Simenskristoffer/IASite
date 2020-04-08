import React from "react"
import { Link } from "gatsby"
import Logo from "../images/move-about-logo-blue.svg"

const Footer = () => (
  <div className="footer">
    <div className="columns has-text-left">
      <div className="column">
        <img src={Logo} alt="move-about logo" />
        <p>
          Utforsk verden ved hjelp av 100% elekriske transportmidler. Gi din
          bedrift en mulighet til å gå foran som et godt eksempel den grønne
          veien, eller deg som privatperson et utvalg blandt flere grønne
          transportmuligheter
        </p>
      </div>
      <div className="column">
        <h2>Meny</h2>
        <ul>
          <li>
            <Link to="/Booking">Book Nå</Link>
          </li>
          <li>
            <Link to="/hvordan-det-funker">Hvordan virker det?</Link>
          </li>
          <li>
            <Link to="/våre-produkter">Våre produkter</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link to="/medlemskap">Medlemskap</Link>
          </li>
        </ul>
      </div>
      <div className="column">
        <h2>Om oss</h2>
        <ul>
          <li>Bærekraft</li>
          <li>Nyheter</li>
          <li>Appen vår</li>
          <li>Kontakt oss</li>
        </ul>
      </div>
      <div className="column">
        <h2>Kontakt oss</h2>
        <ul>
          <li>Telefon: +47 97 55 44 33</li>
          <li>Mail: kontakt@moveabout.no</li>
          <li>Adresse: Lorum Ipsum</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Footer
