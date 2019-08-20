import { SubCommand } from "cli-max";

export const multiplyCommand: SubCommand = {
    name: 'multiply',
    description: 'perfoms multiplication on the operands passed',
    usage: 'asmd multiply (<operand1>| --[multiplicand|x] <operand1>) (<operand2>| --[multiplier|y] <operand2>)',
    aliases: ['mul', 'prod', 'product'],
    action: ({parameters: [operand1, operand2], flags: { multiplicand, multiplier, help }, getHelp}) => {
        if (help) { console.log(getHelp()); return; }

        const value1 = multiplicand || operand1;
        const value2 = multiplier || operand2;

        console.log(`\nThe product of ${value1} and ${value2} is ${multiplicand * multiplier}`);
        return;
    },
    options: [
        {
            name: 'multiplicand',
            description: 'this is the value the multiplication is performed to',
            aliases: ['x'],
            defaultValue: 1,
            required: true
        },{
            name: 'multiplier',
            description: 'this is the value that is multiplied',
            aliases: ['y'],
            defaultValue: 1,
            required: true
        }
    ]
};
