import {Component} from 'react';

// class ClassBased extends Component {}
const ClassBased = class extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
      internalMessage: 'hello world',
      somethingNew: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // THIS IS BAD
    // this.state.counter += 1;

    // setState merges into the state
    this.setState({
      counter: this.state.counter + 1,
      somethingNew: 'more amazing stuff'
    });
  }

  render() {
    return (
      <div>
        <h2>This is a classbased component</h2>
        <h3>{this.props.heading}</h3>
        {this.props.children}
        <h2>Internal message: {this.state.internalMessage}</h2>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );    
  }
};

export default ClassBased;


