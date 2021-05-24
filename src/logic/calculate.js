import operate from './operate'

function calculate(data, name) {
    const total = data.total; 
    const next = data.next ? data.next : '';
    const op = data.operation ? data.operation : '';
    if(['+', '-', 'x', '÷', '%'].includes(name)) {
        return operate(total, next, op);
    }
}

export default calculate

