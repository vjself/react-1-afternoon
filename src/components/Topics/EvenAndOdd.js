import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          onChange={e => this.setState({ userInput: e.target.value })}
          className="inputLine"
        />
        <button
          onClick={num => {
            const { userInput, evenArray, oddArray } = this.state;
            num = userInput;
            return num % 2 === 0 ? evenArray.push(num) : oddArray.push(num);
          }}
          className="confirmationButton"
        >
          Calculate
        </button>
        <span className="resultsBox">
          Evens:
          {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds:
          {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
