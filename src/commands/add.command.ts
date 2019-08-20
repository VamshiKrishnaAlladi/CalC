import { SubCommand } from "cli-max";

export const addCommand: SubCommand = {
    name: 'add',
    description: 'perfoms addition on the operands passed',
    usage: 'asmd add (<operand1>| --[augend|x] <operand1>) (<operand2>| --[addend|y] <operand2>)',
    aliases: ['sum', 'addition'],
    action: ({parameters: [operand1, operand2], flags: { augend, addend, help }, getHelp}) => {
        if (help) { console.log(getHelp()); return; }

        const value1 = augend || operand1;
        const value2 = addend || operand2;

        console.log(`\nThe sum of ${value1} and ${value2} is ${augend + addend}`);
        return;
    },
    options: [
        {
            name: 'augend',
            description: 'this is the value the addition is performed to',
            aliases: ['x'],
            defaultValue: 0,
            required: true
        },{
            name: 'addend',
            description: 'this is the value that is added',
            aliases: ['y'],
            defaultValue: 0,
            required: true
        }
    ]
};
