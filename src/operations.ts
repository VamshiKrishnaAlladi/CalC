export const add = ( augend = 0, addend = 0 ) => {
    console.log( `\nThe sum of ${augend} and ${addend} is ${augend + addend}` );
};

export const subtract = ( minuend = 0, subtrahend = 0 ) => {
    console.log( `\nThe difference of ${minuend} and ${subtrahend} is ${minuend - subtrahend}` );
};

export const multiply = ( multiplicand = 1, multiplier = 1 ) => {
    console.log( `\nThe product of ${multiplicand} and ${multiplier} is ${multiplicand * multiplier}` );
}

export const divide = ( dividend = 1, divisor = 1 ) => {
    console.log( `\nThe quotient of ${dividend} and ${divisor} is ${dividend / divisor}` );
}
