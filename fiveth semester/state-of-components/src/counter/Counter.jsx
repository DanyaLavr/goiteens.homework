import { Component } from "react";
import { Button } from "./Button";
import { CounterValue } from "./CounterValue";
class Counter extends Component {
  static defaultProps = {
    initialCount: 0,
    step: 1,
  };

  state = {
    count: this.props.initialCount,
  };

  increment = () => {
    this.setState((prev) => ({ count: prev.count + this.props.step }));
  };

  decrement = () => {
    this.setState((prev) => ({ count: prev.count - this.props.step }));
  };

  render() {
    return (
      <div className="">
        <CounterValue value={this.state.count} />
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>

        <br />
      </div>
    );
  }
}

export default Counter;
