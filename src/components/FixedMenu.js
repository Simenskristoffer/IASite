import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const FixedMenu = props => (
  <div className="fixed-menu">
    <ul>
      <li>
        <AnchorLink href={props.linkOne}>{props.titleOne}</AnchorLink>
      </li>
      <hr align="center" className="fixed-menu-hr" />
      <li>
        <AnchorLink href={props.linkTwo}>{props.titleTwo}</AnchorLink>
      </li>
      <hr className="fixed-menu-hr" />
      <li>
        <AnchorLink href={props.linkThree}>{props.titleThree}</AnchorLink>
      </li>
    </ul>
  </div>
)

export default FixedMenu
