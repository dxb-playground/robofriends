import React, { PureComponent } from 'react';

class CounterButton extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.count !== nextState.count;
  // }

  render() {
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }

  updateCount = () => {
    this.setState(state => ({ count: state.count + 1 }));
  }
}

export default CounterButton;
