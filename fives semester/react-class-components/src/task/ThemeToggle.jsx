import { Component } from "react";
class ThemeToggle extends Component {
  state = {
    isDark: false,
  };
  toggleTheme = () => {
    this.setState((prev) => ({ isDark: !prev.isDark }));
  };
  render() {
    const { isDark } = this.state;
    const style = {
      backgroundColor: isDark ? "black" : "white",
      color: isDark ? "white" : "black",
      padding: "20px 0 ",
      textAlign: "center",
      transition: "all 1s",
    };
    return (
      <div style={style} className="">
        <h2>{isDark ? "Dark Theme" : "Light Theme"}</h2>
        <button onClick={this.toggleTheme}>Toggle</button>
      </div>
    );
  }
}
export default ThemeToggle;
