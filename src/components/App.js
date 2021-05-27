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
      history: '',
    }
  }

  handleClick(name) {
    const newState = calculate(this.state, name);
    this.setState(() => ({ ...newState }));
  }

  render() {
    return (
      <>
        <Display result={(this.state.next && this.state.next.toString()) ||(this.state.total && this.state.total.toString()) || '0'} 
        process={this.state.history}/>
        <ButtonPanel handleClick={this.handleClick}/>
      </>
    );
  }  
}

export default App;