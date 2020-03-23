import React from "react"
import { Link } from "gatsby"

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
          <div class="navbar-end">
            <Link to="/" className="navbar-item" title="Social Media">
              Hjem
            </Link>
            <Link to="/Booking" className="navbar-item" title="Social Media">
              Book nå
            </Link>
            <Link to="/hvordan-det-funker" className="navbar-item">
              Hvordan virker det?
            </Link>
            <Link to="/våre-produkter" className="navbar-item">
              Våre produkter
            </Link>
            <Link to="/kontakt" className="navbar-item" title="Social Media">
              Kontakt
            </Link>
            <Link to="/medlemskap" className="navbar-item" title="Social Media">
              Medlemskap
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
