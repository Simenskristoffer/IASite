import React, { Component } from "react"

export default class Hero extends Component {
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
      <div>
        <section className="section is-centered hero">
          <div className="container innhold">
            <h2>Landingsside for Smart City Halden</h2>
            <p onClick={this.changeText}>{this.state.text}</p>
          </div>
        </section>
      </div>
    )
  }
}
