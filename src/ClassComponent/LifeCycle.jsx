import { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    super();

    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("After Mounting");
  }

  componentDidUpdate() {
    console.log("Updated");
    this.state.count;
  }
  handleClick() {
    console.log(this.state.count + 1);
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        LifeCycle
        <button onClick={this.handleClick.bind(this)}>Click</button>
        {this.state.count}
      </div>
    );
  }
}

export default LifeCycle;
