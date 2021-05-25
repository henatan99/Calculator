/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    }
  }

  handleClick(name) {
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const data = [this.state.total, this.state.next, this.state.operation];
    this.setState({
      total: calculate(data, name),
      next: nums.includes(name) ? name : null,
      operation: nums.includes(name) ? null : operation,
    });
  }

  render() {
    return (
      <>
        <Display result={this.state.total} />
        <ButtonPanel />
      </>
    );
  }  
}

export default App;