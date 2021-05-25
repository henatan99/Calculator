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

  render() {
    return (
      <>
        <Display result="3" />
        <ButtonPanel />
      </>
    );
  }  
}

export default App;