import React from "react";
import './styles.css';


function Header() {
    return (
        <div className="main-section">
            <h1 className="black-text text-darken-4">Clicky Game!</h1>
            <h4 className="black-text text-darken-4">Click on an image to earn points, but don't click on any more than once!</h4>
        </div>
    )
}

export default Header;