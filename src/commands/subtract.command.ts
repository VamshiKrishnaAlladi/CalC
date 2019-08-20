import { SubCommand } from "cli-max";

export const subtractCommand: SubCommand = {
    name: 'subtract',
    description: 'perfoms subtraction on the operands passed',
    usage: 'asmd subtract (<operand1>| --[minuend|x] <operand1>) (<operand2>| --[subtrahend|y] <operand2>)',
    aliases: ['diff', 'sub', 'difference'],
    action: ({parameters: [operand1, operand2], flags: { minuend, subtrahend, help }, getHelp}) => {
        if (help) { console.log(getHelp()); return; }

        const value1 = minuend || operand1;
        const value2 = subtrahend || operand2;

        console.log(`\nThe difference of ${value1} and ${value2} is ${minuend - subtrahend}`);
        return;
    },
    options: [
        {
            name: 'minuend',
            description: 'this is the value the subtraction is performed to',
            aliases: ['x'],
            defaultValue: 0,
            required: true
        },{
            name: 'subtrahend',
            description: 'this is the value that is subtracted',
            aliases: ['y'],
            defaultValue: 0,
            required: true
        }
    ]
};
