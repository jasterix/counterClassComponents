import React, { Component } from "react";
import Counter from "./Counter";

class Container extends Component {
  state = {
    count: 0
  };

  handleIncrement = (event) => {
    const currentState = this.state.count;
    return this.setState({ count: currentState + 1 });
  };

  handleDecrement = () => {
    const currentState = this.state.count;
    return this.setState({ count: currentState - 1 });
  };

  render() {
    return (
      <div>
        <Counter
          count={this.state.count}
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
        />
      </div>
    );
  }
}
export default Container;
