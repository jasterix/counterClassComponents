import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement(event) {
    console.log(+1);
  }

  handleDecrement(event) {
    console.log(-1);
  }
  render() {
    return (
      <div>
        <h1>Counter:</h1>
        <button onClick={this.handleIncrement}>increment +1 </button>
        <button onClick={this.handleDecrement}>decrement -1</button>
      </div>
    );
  }
}

export default Counter;
