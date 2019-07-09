import React, { Component } from "react";

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };

    this.increaseCount.bind(this);
  }
  increaseCount = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    console.log("counter");
    return (
      <button
        id="counter"
        color={this.props.color}
        onClick={() => this.setState(state => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
