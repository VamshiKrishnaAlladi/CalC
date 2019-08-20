import { SubCommand } from "cli-max";

export const divideCommand: SubCommand = {
    name: 'divide',
    description: 'perfoms division on the operands passed',
    usage: 'asmd divide (<operand1>| --[dividend|x] <operand1>) (<operand2>| --[divisor|y] <operand2>)',
    aliases: ['div'],
    action: ({parameters: [operand1, operand2], flags: { dividend, divisor, help }, getHelp}) => {
        if (help) { console.log(getHelp()); return; }

        const value1 = dividend || operand1;
        const value2 = divisor || operand2;

        console.log(`\nThe quotient of ${value1} and ${value2} is ${dividend / divisor}`);
        return;
    },
    options: [
        {
            name: 'dividend',
            description: 'this is the value the division is performed on',
            aliases: ['x'],
            defaultValue: 1,
            required: true
        },{
            name: 'divisor',
            description: 'this is the value that is divided with',
            aliases: ['y'],
            defaultValue: 1,
            required: true
        }
    ]
};
