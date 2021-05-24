import operate from './operate';

function calculate(data, name) {
  const { total } = data;
  const next = data.next ? data.next : '';
  const op = data.operation ? data.operation : '';
  if (['+', '-', 'x', '÷', '%'].includes(name)) {
    return operate(total, next, op);
  }
  return null;
}

export default calculate;
