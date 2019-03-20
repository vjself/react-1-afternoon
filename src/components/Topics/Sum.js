import React, { Component } from "react";

class Sum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  add(num1, num2) {
    let result = num1 + num2;
    this.setState({
      sum: result
    });
  }

  handleInput1(val) {
    this.setState({ number1: parseInt(val, 10) });
  }
  handleInput2(val) {
    this.setState({ number2: parseInt(val, 10) });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4 />
        <input
          className="inputLine"
          onChange={e => {
            this.handleInput1(e.target.value);
          }}
        />
        <input
          className="inputLine"
          onChange={e => {
            this.handleInput2(e.target.value);
          }}
        />

        <button
          className="confirmationButton"
          onClick={() => {
            this.add(this.state.number1, this.state.number2);
          }}
        >
          Add em up.
        </button>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
