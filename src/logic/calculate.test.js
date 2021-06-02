import calculate from './calculate';

let data = {
    total: 10,
    next: 3,
    history: '',
    operation: '-'
}

let data1 = {
    total: 10,
    next: 3,
    history: '',
    operation: '+'
}

let data2 = {
    total: null,
    next: 3,
    history: '',
    operation: null
}

it( 'returns new data when correct data name is given', () => {
    expect(calculate(data, '+')).toEqual({"history": '+', "next": null, "operation": "+", "total": 7});    
})

it( 'returns new data when correct data name input is given', () => {
    expect(calculate(data1, '3')).toEqual({"history": '3', "next": '3', "operation": "+", "total": 10});    
})

it( 'adds total and next when + is given', () => {
    data.operation = '+';
    expect(calculate(data, '+')).toEqual({"history": '+', "next": null, "operation": "+", "total": 13});    
})

it( 'multiply total and next when X is given', () => {
    data.operation = 'X';
    expect(calculate(data, 'X')).toEqual({"history": 'X', "next": null, "operation": "X", "total": 30});    
})

it( 'divide total and next when ÷ is given', () => {
    data.operation = '÷';
    expect(calculate(data, '÷')).toEqual({"history": '÷', "next": null, "operation": "÷", "total": 10/3});    
})

it( 'returns default data state when AC is passed', () => {
    expect(calculate(data, 'AC')).toEqual({"history": '', "next": null, "operation": null, "total": null});    
})

it( 'returns new data with the next value multiplied by -1', () => {
    expect(calculate(data2, '+/-')).toEqual({"history": -3, "next": -3, "operation": "=", "total": null});    
})

it( 'returns new data with the next value in prerecntage', () => {
    expect(calculate(data2, '%')).toEqual({"history": 300, "next": 300, "operation": "=", "total": null});    
})