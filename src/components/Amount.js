import react, { Component } from "react";

class Amount extends Component {
  render() {
    return (
      <div>
        <label>
          <strong>Amount</strong>
          <input type="number" value="Amount" />
        </label>
      </div>
    );
  }
}

export default Amount;
