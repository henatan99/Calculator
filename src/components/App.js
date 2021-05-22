import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <React.Fragment>
      <Display result="10"/>
      <ButtonPanel />      
    </React.Fragment>
  );
}

export default App;