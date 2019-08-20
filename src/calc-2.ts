import {add, subtract, multiply, divide } from './operations'

const [ operation, operand1, operand2 ] = process.argv.splice( 2 );

const x = parseInt( operand1 );
const y = parseInt( operand2 );

switch ( operation ) {
    case 'add':
        add( x, y );
        break;

    case 'subtract':
        subtract( x, y );
        break;

    case 'multiply':
        multiply( x, y );
        break;

    case 'divide':
        divide( x, y );
        break;
}

