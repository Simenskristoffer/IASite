import React from "react"

const Iframe = () => (
  <section
    className="section is-medium iframe-section has-text-centered"
    id="iframe"
  >
    <iframe
      style={{ height: "500px", width: "70%" }}
      className="iframe"
      src="https://www.youtube.com/embed/t0F77-PcFQI"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </section>
)

export default Iframe
