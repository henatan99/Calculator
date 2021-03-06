import React, { useState } from 'react';
import './Calculator.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
    history: '',
  });

  const handleClick = (name) => {
    const newData = calculate(data, name);
    setData(() => ({ ...newData }));
  };

  return (
    <>
      <div className="container">
        <Display
          result={(data.next && data.next.toString()) || (data.total && data.total.toString()) || '0'}
          process={data.history}
        />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </>
  );
};

export default Calculator;
