import React, { Component } from "react";
import Amount from "./Amount";

class Counter extends Component {
  handleIncrement = (event) => {
    this.props.increment();
  };

  handleDecrement = (event) => {
    this.props.decrement();
  };

  render() {
    let count = this.props.count;
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={this.handleIncrement}>increment +1 </button>
        <button onClick={this.handleDecrement}>decrement -1</button>
        <h2> Increase by: </h2>
        <Amount />
      </div>
    );
  }
}

export default Counter;
