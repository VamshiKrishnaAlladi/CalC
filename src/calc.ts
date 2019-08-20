#!/usr/bin/env node

import * as minimist from 'minimist';

import { add, subtract, multiply, divide } from './operations';

const parsedArgs = minimist(process.argv.splice(2));

const {
    _: [operation, operand1, operand2],
    augend, addend, minuend, subtrahend, multiplicand, multiplier, dividend, divisor, x, y
} = parsedArgs;

switch (operation) {
    case 'add':
        add(operand1 || augend || x, operand2 || addend || y);
        break;

    case 'subtract':
        subtract(operand1 || minuend || x, operand2 || subtrahend || y);
        break;

    case 'multiply':
        multiply(operand1 || multiplicand || x, operand2 || multiplier || y);
        break;

    case 'divide':
        divide(operand1 || dividend || x, operand2 || divisor || y);
        break;
}
