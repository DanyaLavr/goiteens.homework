import { Component } from "react";

const API_URL = "https//:";
class MyComponent extends Component {
  static displayName = "MyComponent";
  static getDefaultProps() {
    return { step: 4 };
  }
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  constructor() {
    super();
    this.data = "Hello";
  }
  render() {
    return (
      <div className="">
        <h1>{MyComponent.displayName}</h1>
        <p>Step: {MyComponent.getDefaultProps().step}</p>

        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Click</button>

        <p>this.data: {this.data}</p>
        <div className="">API: {API_URL}</div>
      </div>
    );
  }
}
export default MyComponent;
