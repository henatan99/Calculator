import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const num1 = parseFloat(Big(numberOne), 10);
  const num2 = parseFloat(Big(numberTwo), 10);
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'X':
      return num1 * num2;
    case '÷':
      return num1 / num2;
    case '^':
      return num1 ** num2;
    default:
      return 'Invalid operator';
  }
}

export default operate;
