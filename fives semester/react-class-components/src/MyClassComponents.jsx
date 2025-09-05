import { Component } from "react";

class MyClassComponents extends Component {
  static defaultProps = {
    step: 1,
  };
  constructor(props) {
    super();
    this.state = {
      count: 0,
      name: "John",
    };
  }
  handleIncrement = () => {
    this.setState((prev) => ({
      count: prev.count + this.props.step,
    }));
  };
  handledecrement = () => {
    this.setState((prev) => ({
      count: prev.count - this.props.step,
    }));
  };
  handleChange = (e) => {
    this.setState(() => ({ name: e.target.value }));
  };
  render() {
    return (
      <>
        <h1>Class Components</h1>
        <button onClick={(e) => console.log(e)}>BTN!</button>
        <br />
        <h2>Counter: {this.state.count}</h2>
        <div>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handledecrement}>-</button>
          <h2>Name: {this.state.name}</h2>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
      </>
    );
  }
}

export default MyClassComponents;
