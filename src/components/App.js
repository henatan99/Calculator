/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display result="3" />
      <ButtonPanel />
    </>
  );
}

export default App;
