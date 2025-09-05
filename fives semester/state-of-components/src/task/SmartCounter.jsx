import { Component } from "react";

const MAX_COUNT = 10;
class SmartCounter extends Component {
  static description = ` компонент SmartCounter, який:

    Має статичну властивість description, яка описує компонент.
    
    Має стан count, який можна змінювати кнопками “+” і “-”.
    
    Має звичайну властивість step (встановлюється вручну в constructor).
    
    Використовує константу MAX_COUNT, щоб обмежити максимальне значення.
    `;
  state = {
    count: 0,
  };
  constructor() {
    super();
    this.step = 1;
  }
  increment = () => {
    if (this.state.count + this.step > MAX_COUNT) return;
    this.setState((prev) => ({ count: prev.count + this.step }));
  };

  decrement = () => {
    this.setState((prev) => ({ count: prev.count - this.step }));
  };
  render() {
    return (
      <div className="">
        <h2>{SmartCounter.description}</h2>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
export default SmartCounter;
