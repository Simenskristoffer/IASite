import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

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
        <section className="hero-component">
          <div className="wrapper ">
            <h1 className="mainTitle">Move About</h1>
            <h2 className="info">
              Miljøvennlige transportalternativer for bedrifter og
              privatpersoner
            </h2>
            <AnchorLink href="#utPaaTur" className="button">
              Les mer
            </AnchorLink>
          </div>
        </section>
      </>
    )
  }
}
