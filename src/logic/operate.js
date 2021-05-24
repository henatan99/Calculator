import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'X':
      return num1 * num2;
    case '÷':
      return num1 / num2;
    case '%':
      return num1 % num2;
    default:
      return 'Invalid operator';
  }
}

export default operate;
