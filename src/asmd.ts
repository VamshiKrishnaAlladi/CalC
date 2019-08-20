#!/usr/bin/env node

import { createCLI } from 'cli-max';
import { addCommand, subtractCommand, multiplyCommand, divideCommand } from './commands';

const execute = createCLI({
    name: 'asmd',
    description: 'can perform addition, subtraction, multiplication and division',
    usage: 'asmd <operation> [<operand1> | --x <operand2>] [<operand2> | --y <operand2>]',
    action: ({ parameters, flags: {help}, getHelp}) => {
        if (help || parameters.length === 0) {
            console.log(getHelp());
        }

        return;
    },
    subCommands: [addCommand, subtractCommand, multiplyCommand, divideCommand]
});

execute(process.argv.slice(2));
