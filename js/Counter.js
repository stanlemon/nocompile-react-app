import { Component } from "https://unpkg.com/es-react/react.js";

export class Counter extends Component {
  updateCount(increment) {
    if (increment) {
      this.props.putDocument({ count: this.props.count + 1 });
    } else {
      this.props.putDocument({ count: this.props.count - 1 });
    }
  }

  increment() {
    this.updateCount(true);
  }

  decrement() {
    this.updateCount(false);
  }

  render() {
    return html`
      <div>
        <p>Current count is: ${this.props.count}</p>
        <button id="increment" onClick=${this.increment.bind(this)}>
          Increment +
        </button>
        <button id="decrement" onClick=${this.decrement.bind(this)}>
          Decrement -
        </button>
      </div>
    `;
  }
}

Counter.defaultProps = {
  count: 0
};
