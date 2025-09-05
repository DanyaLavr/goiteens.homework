import { Component } from "react";

class Input extends Component {
  handleInput = (e) => {
    this.props.onChange(e.target.value);
  };
  render() {
    return <input onChange={this.handleInput} value={this.props.value}></input>;
  }
}
export default Input;
