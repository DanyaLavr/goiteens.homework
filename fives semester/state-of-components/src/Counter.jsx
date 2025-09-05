import { Component } from "react";
class Counter extends Component {
  static defaultProps = {
    initialCount: 0,
    step: 1,
  };
  //   constructor() {
  //     super();
  state = {
    count: this.props.initialCount,
    step: this.props.step,
    isTextVisible: false,
    value: 0,
  };
  //   }

  increment = () => {
    this.setState((prev) => ({ count: prev.count + this.state.step }));
  };

  decrement = () => {
    this.setState((prev) => ({ count: prev.count - this.state.step }));
  };
  toggleVisibility = () => {
    this.setState((prev) => ({
      isTextVisible: !prev.isTextVisible,
    }));
  };
  checkAsync = () => {
    for (let i = 0; i < 3; i++) {
      console.log(this.state.value);

      this.setState((prev) => ({
        value: prev.value + 1,
      }));
    }
  };
  render() {
    return (
      <div className="">
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <br />
        <button onClick={this.toggleVisibility}>show / hide</button>
        {this.state.isTextVisible && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            reiciendis.
          </p>
        )}
        <br />
        <button onClick={this.checkAsync}>async test</button>
      </div>
    );
  }
}

export default Counter;
