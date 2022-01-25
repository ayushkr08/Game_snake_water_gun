import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.userChoice = null;
    this.computerChoice = null;
    this.numberToChoiceMapping = {
      "1": "rock",
      "2": "paper",
      "3": "scissor"
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.generateComputerChoice = this.generateComputerChoice.bind(this);
    this.finaliseWinner = this.finaliseWinner.bind(this);
  }
  buttonClickHandler(buttonName) {
    this.userChoice = buttonName;
    this.generateComputerChoice();
  }
  generateComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    let computerChoice = this.numberToChoiceMapping[randomNumber];
    this.computerChoice = computerChoice;
    alert(`Computer chose: ${computerChoice}`);
    this.finaliseWinner(this.computerChoice, this.userChoice);
  }
  finaliseWinner(computerChoice, userChoice) {
    let options = ["rock", "paper", "scissor"];
    let computerIndex = options.indexOf(computerChoice);
    let userIndex = options.indexOf(userChoice);
    let diff = Math.abs(computerIndex - userIndex);
    if (diff == 1) {
      if (computerIndex > userIndex) alert(`computer won`);
      else alert(`user won`);
    } else if (diff == 2) {
      if (computerIndex < userIndex) alert(`computer won`);
      else alert(`user won`);
    } else {
      alert(`DRAW!!!`);
    }
  }
  render() {
    return (
      <div className="App">
        <button className='button' onClick={() => this.buttonClickHandler("rock")}>Rock</button>
        <button className='button paper' onClick={() => this.buttonClickHandler('paper')}>Paper</button>
        <button className='button scissor' onClick={() => this.buttonClickHandler('scissor')}>Scissor</button>
        {/* <button style={{ "color": "chocolate", "fontSize": "80px" }} onClick={() => this.buttonClickHandler("rock")}>Rock</button>
        <button style={{ "color": "white", "fontSize": "80px" }} onClick={() => this.buttonClickHandler('paper')}>Paper</button>
        <button style={{ "color": "red", "fontSize": "80px" }} onClick={() => this.buttonClickHandler('scissor')}>Scissor</button> */}
      </div>
    );
  }
}

export default App;
