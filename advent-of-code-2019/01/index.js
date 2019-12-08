const path = require("path");
const fs = require("fs");
const assert = require("assert");

const part1Input = fs.readFileSync(path.resolve(__dirname, "part1-input.txt"), "UTF-8");

// Part 1: ---------------------------------------------------------------------------------------

const resultFirstPart = (input) => input
      .trim()
      .split("\n")
      .reduce((fuel, mass) => fuel + (Math.floor(mass/3) - 2), 0);

console.log("\x1b[32m%s\x1b[0m", "Result of Day 1, part 1 is:", resultFirstPart(part1Input ));


// Part 2: ---------------------------------------------------------------------------------------

const part2Input = fs.readFileSync(path.resolve(__dirname, "part2-input.txt"), "UTF-8");

const requiredFuel = mass => {
    const fuel = Math.floor(mass / 3) - 2;
    if (fuel <= 0) return 0;
    return fuel + requiredFuel(fuel);
};

const resultSecondPart = input => input
      .trim()
      .split("\n")
      .reduce((totalFuel, mass) => totalFuel + requiredFuel(mass) , 0);

console.log("\x1b[32m%s\x1b[0m",
            "Result of Day 1, part 2 is: ",
            resultSecondPart(part2Input));


// Testing: -------------------------------------------------------------------------------------
assert.strictEqual(resultFirstPart("12"), 2);
assert.strictEqual(resultFirstPart("1969"), 654);

assert.strictEqual(resultSecondPart("14"), 2);
assert.strictEqual(resultSecondPart("1969"), 966);
