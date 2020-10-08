import React from 'react';
import ReactDOM from 'react-dom'
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter:1};
      }
    componentDidMount() {
        this.timerID = setInterval(
          () => {this.setState({counter: this.state.counter + 1});},
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.counter}</h2>
        </div>
      );
    }
  }
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );
  
export default Counter;  
