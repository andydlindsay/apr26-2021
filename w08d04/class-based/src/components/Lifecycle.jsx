import {Component} from 'react';

const Lifecycle = class extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      interval: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  
  // anything we need to establish when the component gets added to the DOM
  // establish a socket connection, fetch data from an API, set up a timer/interval
  componentDidMount() {
    console.log('component has mounted');

    const interval = setInterval(() => {
      console.log('interval has fired');
    }, 3000); 

    this.setState({ interval });
  }

  // listen for changes
  componentDidUpdate(prevProps, prevState) {
    console.log('component has updated');
  }

  // cleaning up after ourselves
  // sever a socket connection, clear an interval/timer
  componentWillUnmount() {
    console.log('component will be removed from the DOM');

    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h2>Lifecycle methods!</h2>
        <input 
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Lifecycle;
