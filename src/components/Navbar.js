import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.png"

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
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logo}
                alt="Smart City Halden"
                style={{ maxHeight: "150px", width: "auto" }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu is-white"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item nav-links" to="/">
                Hjem
              </Link>
              <Link
                className="navbar-item nav-links"
                to="/automatisk-industrimaskin"
              >
                Hva vi tilbyr
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar