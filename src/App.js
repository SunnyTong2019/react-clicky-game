import React, { Component } from "react";
import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

class App extends Component {
  state = {
    imageArr: [
      { id: 1, image: "annie.png" },
      { id: 2, image: "bebe.png" },
      { id: 3, image: "bradley.png" },
      { id: 4, image: "clyde.png" },
      { id: 5, image: "craig.png" },
      { id: 6, image: "david.png" },
      { id: 7, image: "eric.png" },
      { id: 8, image: "heidi.png" },
      { id: 9, image: "jimmy.png" },
      { id: 10, image: "kenny.png" },
      { id: 11, image: "kyle.jpg" },
      { id: 12, image: "nelly.png" },
      { id: 13, image: "nichole.png" },
      { id: 14, image: "red.png" },
      { id: 15, image: "stan.png" },
      { id: 16, image: "timmy.png" },
      { id: 17, image: "token.png" },
      { id: 18, image: "tweek.png" },
      { id: 19, image: "utters.png" },
      { id: 20, image: "wendy.png" }
    ],
    navMsg: "Click an image to begin!",
    score: 0,
    topScore: 0,
    clickedImages: [] // array to store id of images clicked
  };


  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  handleImageClick = event => {
    if (!this.state.clickedImages.includes(event.target.id)) // if clickedImages array doesn't have the id of the image clicked, then it means user guessed Correctly
    {
      // if score equals topScore, then topScore also needs to add 1; othersize, just score needs to add 1.
      if (this.state.score === this.state.topScore) {
        this.setState({
          topScore: this.state.topScore + 1,
        });
      }

      this.setState({
        clickedImages: [...this.state.clickedImages, event.target.id], // add the image just guessed to clickedImages array
        navMsg: "You guessed correctly!",
        score: this.state.score + 1,
      });

    } else {  // if user guessed Incorrectly, notify user with correspoding message, and reset score and clickedImages array

      this.setState({
        navMsg: "You guessed incorrectly!",
        score: 0,
        clickedImages: []
      });

    }

    // no matter use guessed correctly or not, if an image is clicked, shuffle all the images 
    this.setState({
      imageArr: this.shuffleArray(this.state.imageArr)
    });

  };


  render() {
    return (
      <div>
        <Nav navMsg={this.state.navMsg} score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <Main imageArray={this.state.imageArr} handleImageClick={this.handleImageClick} />
        <Footer />
      </div>
    );
  }
}


export default App;
