import { Component } from "react";
import "./App.css";
import Counter from "./counter/Counter";
import Input from "./upperState/Input";
import Preview from "./upperState/Preview";
import MyComponent from "./MyComponent";
import SmartCounter from "./task/SmartCounter";

class App extends Component {
  state = {
    value: "",
  };
  handleChange = (value) => {
    this.setState({ value });
  };
  render() {
    return (
      <div className="App">
        <SmartCounter />
        <MyComponent />
        <Preview value={this.state.value} />
        <Input value={this.state.value} onChange={this.handleChange} />
        <Counter initialCount={10} step={2} />
      </div>
    );
  }
}

export default App;
