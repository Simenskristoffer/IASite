import React, { Component } from "react"

const textArray = ["eat", "sleep", "drink", "snore", "foo", "buzz", "whatever"]

class TextShuffle extends Component {
  constructor() {
    super()
    this.state = { textIdx: 0 }
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx
      this.setState({ textIdx: currentIdx + 1 })
    }, 2500)
  }

  componentDidUnmount() {
    clearInterval(this.timeout)
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length]

    return (
      <section className="section is-large content">
        <h2>Hello, my name is Simen Stubsjøen</h2>
        <p>
          I like to <span style={{ color: "black" }}>{textThatChanges}</span>
        </p>
      </section>
    )
  }
}

export default TextShuffle
