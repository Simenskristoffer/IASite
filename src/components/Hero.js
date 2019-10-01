import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import Navbar from "../components/Navbar"
import Checkboxes from "../components/Checkboxes"
import AppleIcon from "../images/whiteAppStore.svg"

export default class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: false,
    }
  }

  render() {
    return (
      <>
        <section className="section hero">
          <Navbar />
          <div className="container">
            <div className="wrapper">
              <h1 className="mainTitle">Ikke la avstand være en hindring</h1>
              <h2 className="info">
                Lei bil i dag fra kr. <span className="span">89,-</span> timen
              </h2>
              <AnchorLink href="#socialProof" className="button">
                Les mer
              </AnchorLink>
              <img
                className="appleIcon"
                src={AppleIcon}
                alt="Smart City App nedlastning"
              />
            </div>
          </div>
          <Checkboxes />
        </section>
      </>
    )
  }
}
