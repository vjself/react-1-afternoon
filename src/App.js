import React, { Component } from "react";
import TopicBrowser from "./components/TopicBrowser/TopicBrowser";
import FilterObject from "./components/Topics/FilterObject";
import FilterString from "./components/Topics/FilterString";
import EvenAndOdd from "./components/Topics/EvenAndOdd";
import Palindrome from "./components/Topics/Palindrome";
import Sum from "./components/Topics/Sum";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <TopicBrowser />
        <FilterObject />
        <FilterString />
        <EvenAndOdd />
        <Palindrome />
        <Sum />
      </div>
    );
  }
}

export default App;
