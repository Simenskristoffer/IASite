import React, { Component } from "react"

export default class Content extends Component {
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
        <section className="section is-large tilbyr">
          <div className="container">
            <div className="columns">
              <div className="column is">
                <h2>Hva vi tilbyr</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="section is-large is-centered hvor">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h2>Hvor finner du oss</h2>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
