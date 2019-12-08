const path = require("path");
const fs = require("fs");
const assert = require("assert");

const part1Input = fs.readFileSync(path.resolve(__dirname, "part1-input.txt"), "UTF-8");

// Part 1: ------------------------------------------------------------------------------------

const transformInput = input => input.split(",").map(i => Number(i));

const resultFirstPart = input => {
    const intcode = transformInput(input);
    const outputList = intcode;

    for (var i = 0;; i += 4) {
        let [opcode, a, b, c] = intcode.slice(i, i+4);

        if (![1, 2, 99].includes(opcode)) {
            return `opcode unknown: ${opcode}`;
        }

        if (opcode == 99) {
            break;
        }

        if (opcode === 1) {
            outputList[c] = intcode[a] + intcode[b];
        } else if (opcode === 2) {
            outputList[c] = intcode[a] * intcode[b];
        }
    }

    return outputList.join(",");
};


const replaceInputs = (list, noun, verb) => {
    replacedList = list.split(",");
    replacedList[1] = noun;
    replacedList[2] = verb;

    return replacedList.join(",");
};

const getFirstElement = input => input.split(",")[0];

const newIntcode = replaceInputs(part1Input, 12, 2);
console.log("\x1b[32m%s\x1b[0m",
            "Result of Day 2, part 1 is:",
            getFirstElement(resultFirstPart(newIntcode)));


// Part 2: ------------------------------------------------------------------------------------

const expected = 19690720;

const resultSecondPart = input => {
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            let output = getFirstElement(resultFirstPart(replaceInputs(input, noun, verb)));
            if (output == expected) {
                return 100 * noun + verb;
            };
        }
    }

    return "Nothing found";
};

console.log("\x1b[32m%s\x1b[0m",
            "Result of Day 2, part 2 is:",
            resultSecondPart(part1Input));


// Testing -----------------------------------------------------------------------------------
assert.strictEqual(resultFirstPart("1,0,0,0,99"), "2,0,0,0,99");
assert.strictEqual(resultFirstPart("2,3,0,3,99"), "2,3,0,6,99");
assert.strictEqual(resultFirstPart("2,4,4,5,99,0"), "2,4,4,5,99,9801");


