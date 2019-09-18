import React from "react"

export default function HowToUse() {
  return (
    <section className="section is-medium howtouse">
      <div className="container">
        <div className="columns is-centered">
          <div className="column">
            <h2>Slik kommer du i gang</h2>
            <ol type="1">
              <li>
                Last ned appen Move About eller Mobility Park og registrer deg
              </li>
              <li>Logg inn og fortell hvor og når du vil hente bilen</li>
              <li>Velg hvilken bil du vil leie og trykk "book"</li>
              <li>Hent bilen</li>
              <li>God tur!</li>
            </ol>
          </div>
          <div className="column">
            <iframe
              width="560"
              height="800"
              src="https://www.youtube.com/embed/VAXOlqQgO_c"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
