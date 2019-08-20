import minimist from 'minimist';

import { add, subtract, multiply, divide } from './operations';

const parsedArgs = minimist(process.argv.splice(2));

const {
    _: [operation, operand1, operand2],
    augend, addend, minuend, subtrahend, multiplicand, multiplier, dividend, divisor, a, b
} = parsedArgs;

switch (operation) {
    case 'add':
        add(operand1 || augend || a, operand2 || addend || b);
        break;

    case 'subtract':
        subtract(operand1 || minuend || a, operand2 || subtrahend || b);
        break;

    case 'multiply':
        multiply(operand1 || multiplicand || a, operand2 || multiplier || b);
        break;

    case 'divide':
        divide(operand1 || dividend || a, operand2 || divisor || b);
        break;
}
