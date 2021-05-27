import operate from './operate';

function calculate(data, name) {
  const newData = { ...data };
  let { total, next, operation, history } = newData;
  const ops = ['+', '-', 'X', '÷', '^'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  
  if (nums.includes(name)) {
    next = (next && next != history) ? next += name : name;
    history = (history == null) ? name : history + name;
  }
  else if(ops.includes(name)) {
    total = (total && operation && next) ? operate(total, next, operation) : next;
    next = null;
    operation = name;
    history += operation;
  }
  else if(name === '+/-') {
    total = total ? -1 * total : -1 * next;
    next = total; 
    history = total;
  }
  else if(name === '%') {
    total = total ? total * 100 : next * 100;
    next = null;
    history = total;
  }
  else if(name === '=') {
    total = (total && operation && next) ? operate(total, next, operation) : next;
    next = total;
    history = total;
    operation = null;
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
