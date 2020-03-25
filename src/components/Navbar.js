import React from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"

import Logo from "../images/move-about-logo-blue.svg"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },

      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img
              src={Logo}
              alt="Smart City Halden"
              style={{ maxHeight: "150px", width: "auto" }}
            />
          </Link>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="/"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item" title="Social Media">
              Hjem
            </Link>
            <Link to="/Booking" className="navbar-item" title="Social Media">
              Book nå
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/hvordan-det-funker" className="navbar-link">
                Hvordan det virker
              </Link>

              <div className="navbar-dropdown">
                <Link to="/hvordan-det-funker" className="navbar-item">
                  Informasjon om tjenesten
                </Link>
                <Link to="/hvordan-det-funker" className="navbar-item">
                  Priser
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/våre-produkter" className="navbar-link">
                Våre produkter
              </Link>

              <div className="navbar-dropdown">
                <Link to="/våre-produkter" className="navbar-item">
                  El-biler
                </Link>
                <Link to="/våre-produkter" className="navbar-item">
                  El-sykler
                </Link>
                <AnchorLink href="#sparkesykkel" className="navbar-item">
                  El-sparkesykkel
                </AnchorLink>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/våre-produkter" className="navbar-link">
                Kontakt
              </Link>

              <div className="navbar-dropdown">
                <Link to="/våre-produkter" className="navbar-item">
                  FAQ
                </Link>
                <Link to="/våre-produkter" className="navbar-item">
                  Om oss
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/våre-produkter" className="navbar-link">
                Medlemskap
              </Link>

              <div className="navbar-dropdown">
                <Link to="/våre-produkter" className="navbar-item">
                  Bli medlem
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
