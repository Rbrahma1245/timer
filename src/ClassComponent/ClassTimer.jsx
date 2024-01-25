import { Component } from "react";

class ClassTimer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleClick() {

    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default ClassTimer;
