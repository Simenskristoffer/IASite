import React, { Component } from "react"

import SocialProof from "./SocialProof"

export default class Anmeldelser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "Digital Markedsføring",
    }
  }

  changeText = () => {
    this.setState({ text: "Even suger" })
  }
  render() {
    return (
      <>
        <section className="section is-medium tilbyr">
          <div className="container">
            <SocialProof />
          </div>
        </section>
      </>
    )
  }
}
