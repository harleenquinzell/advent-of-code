const path = require("path");
const fs = require("fs");
const assert = require("assert");

const part1Input = fs.readFileSync(path.resolve(__dirname, "part1-input.txt"), "UTF-8");

// Part 1: ------------------------------------------------------------------------------------

const getWireCoordinates = wire => wire.split(",");

const getPath = wire => {
    let x = 0;
    let y = 0;
    let coordinates = new Set();

    wire.map(coord => {
        let direction = coord[0];
        let distance = Number(coord.slice(1));

        switch (direction) {
        case "R":
            while (distance > 0) {
                x += 1;
                coordinates.add([x, y].toString());
                distance--;
            }
            break;
        case "L":
            while (distance > 0) {
                x -= 1;
                coordinates.add([x, y].toString());
                distance--;
            }
            break;
        case "U":
            while (distance > 0) {
                y += 1;
                coordinates.add([x, y].toString());
                distance--;
            }
            break;
        case "D":
            while (distance > 0) {
                y -= 1;
                coordinates.add([x, y].toString());
                distance--;
            }
            break;
        }
    });

    return coordinates;
};

const resultFirstPart = input => {
    const [wire1, wire2] = input.split("\n");

    const wire1Path = getPath(getWireCoordinates(wire1));
    const wire2Path = getPath(getWireCoordinates(wire2));

    const intersections = new Set([...wire1Path].filter(x => wire2Path.has(x)));

    const final = [...intersections].map(coord => {
        const a = coord.split(",");
        const x = Number(a[0]);
        const y = Number(a[1]);

        return Math.abs(x) + Math.abs(y);
    });

    return Math.min(...final);
};


console.log("\x1b[32m%s\x1b[0m", "Result of Day 3, part 1 is:", resultFirstPart(part1Input));

// Part 2: ------------------------------------------------------------------------------------

// Testing: -----------------------------------------------------------------------------------
assert.strictEqual(resultFirstPart("R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83"), 159);
