import React from "react";
import './styles.css';


function Main(props) {
    return (
        <main>
        <div className="container">
            {
                props.imageArray.map( image => {
                    let imageURL = "url('./images/" + image.image + "')";
                    return <div key={image.id} id={image.id} className="image-div" onClick={props.handleImageClick} style={{backgroundImage: imageURL}}></div>
                } )
            }
        </div>
      </main>
    )
}


export default Main;