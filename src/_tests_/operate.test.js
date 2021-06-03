import operate from '../logic/operate';

it('adds', () => {
  expect(operate(2, 3, '+')).toEqual(5);
});

it('subtracts', () => {
  expect(operate(9, 3, '-')).toEqual(6);
});

it('multiplies', () => {
  expect(operate(4, 5, 'X')).toEqual(20);
});

it('divides', () => {
  expect(operate(15, 3, '÷')).toEqual(5);
});
