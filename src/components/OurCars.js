import React from "react"
import { Link } from "gatsby"
import elgolf from "../images/produkt-golf.jpg"
import elvarebil from "../images/produkt-varebil.jpg"
import Nissan from "../images/produkt-nissan.jpg"
import Sparkesykkel from "../images/produkt-sparkesykkel.jpg"
import Sykkel from "../images/produkt-elsykkel.jpg"

export default function OurCars() {
  return (
    <section className="section is-medium" id="ourCars">
      <div className="container">
        <section className="section" id="ourCars">
          <div className="columns is-vcentered">
            <div className="column">
              <img src={elgolf} alt="smart city el-golf" />
            </div>
            <div className="column">
              <p className="carInfo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="#utPaaTur" className="button">
                Book i dag
              </Link>
            </div>
          </div>
        </section>
        <hr className="line" />
        <section className="section is-medium">
          <div className="columns is-vcentered ">
            <div className="column">
              <p className="carInfo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="#utPaaTur" className="button">
                Book i dag
              </Link>
            </div>
            <div className="column">
              <img src={Nissan} alt="smart city el-varebil" />
            </div>
          </div>
        </section>
        <hr className="line" />
        <section className="section" id="ourCars">
          <div className="columns is-vcentered">
            <div className="column">
              <img src={elvarebil} alt="smart city el-golf" />
            </div>
            <div className="column">
              <p className="carInfo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="#utPaaTur" className="button">
                Book i dag
              </Link>
            </div>
          </div>
        </section>
        <hr className="line" />
        <section className="section is-medium">
          <div className="columns is-vcentered ">
            <div className="column">
              <p className="carInfo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="#utPaaTur" className="button">
                Book i dag
              </Link>
            </div>
            <div className="column">
              <img src={Sykkel} alt="smart city el-varebil" />
            </div>
          </div>
        </section>
        <hr className="line" />
        <section className="section" id="ourCars">
          <div className="columns is-vcentered">
            <div className="column">
              <img src={Sparkesykkel} alt="smart city el-golf" />
            </div>
            <div className="column">
              <p className="carInfo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="#utPaaTur" className="button">
                Book i dag
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
