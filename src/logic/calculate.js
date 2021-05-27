import operate from './operate';

function calculate(data, name) {
  const newData = { ...data };
  let { total, next, operation, history } = newData;
  const ops = ['+', '-', 'X', '÷', '^'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  
  if (nums.includes(name)) {
    next = (next && (history != '' && operation != '=')) ? next += name : name;
    history = (history == null || history == next) || operation == '=' ? name : history + name;
    operation = operation == '=' ? null : operation;
  }
  else if(ops.includes(name)) {
    total = (total && operation && next && operation != '=') ? operate(total, next, operation) : next;
    next = null;
    operation = name;
    history += operation;
  }
  
  else if(name === '+/-') {
    next = total ? -1 * total : -1 * next;
    total = null; 
    history = next;
    operation = '=';
  }
  else if(name === '%') {
    next = total ? total * 100 : next * 100;
    total = null;
    history = next;
    operation ='=';
  }
  else if(name === '=') {
    total = (total && operation && next && operation != '=') ? operate(total, next, operation) : next;
    next = total;
    history = total;
    operation = '=';
  }
  else if(name === 'AC') {
    total = null;
    next = null;
    operation = null;
    history = '';
  }
  else {
    return "Something is wrong!";
  }
  
  return { total, next, operation, history }
}

export default calculate;
