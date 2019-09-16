import React, { Component } from "react"
import { Link } from "gatsby"

import Navbar from "../components/Navbar"

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
        <section className="section is-centered hero">
          <Navbar />
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1>Ikke la avstand være en hindring</h1>
                <h2>
                  Lei bil i dag fra kr. <span className="span">89,-</span> timen
                </h2>
                <Link to="/" className="button">
                  Start Her
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
