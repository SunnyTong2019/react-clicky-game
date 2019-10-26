import React from "react";
import './styles.css';


function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Clicky Game</a></li>
        <li>{props.navMsg}</li>
        <li>Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
    </nav>
  )
}

export default Nav;