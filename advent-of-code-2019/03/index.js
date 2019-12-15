const path = require("path");
const fs = require("fs");
const assert = require("assert");

const part1Input = fs.readFileSync(path.resolve(__dirname, "part1-input.txt"), "UTF-8");

const getWireCoordinates = wire => wire.split(",");

const getPath = wire => {
    let x = 0;
    let y = 0;
    let coordinates = [];

    wire.map(coord => {
        let direction = coord[0];
        let distance = Number(coord.slice(1));

        switch (direction) {
        case "R":
            while (distance > 0) {
                x += 1;
                coordinates.push([x, y].toString());
                distance--;
            }
            break;
        case "L":
            while (distance > 0) {
                x -= 1;
                coordinates.push([x, y].toString());
                distance--;
            }
            break;
        case "U":
            while (distance > 0) {
                y += 1;
                coordinates.push([x, y].toString());
                distance--;
            }
            break;
        case "D":
            while (distance > 0) {
                y -= 1;
                coordinates.push([x, y].toString());
                distance--;
            }
            break;
        }
    });

    return coordinates;
};

const getIntersections = (path1, path2) => {
    path2 = new Set(path2);

    return path1.filter(x => path2.has(x));
};

const getWirePaths = wires => {
    const [wire1, wire2] = wires.split("\n");

    const wire1Path = getPath(getWireCoordinates(wire1));
    const wire2Path = getPath(getWireCoordinates(wire2));

    return [wire1Path, wire2Path];
};

const getManhattanDistance = intersections => {
    const final = intersections.map(coord => {
        const a = coord.split(",");
        const x = Number(a[0]);
        const y = Number(a[1]);

        return Math.abs(x) + Math.abs(y);
    });

    return Math.min(...final);
};

const getStepCount = (intersections, wirePaths) => {
    const [wire1Path, wire2Path] = [...wirePaths];
    let stepsPerCoord = {};

    for (let i = 0; i < intersections.length; i++) {
        let intersection = intersections[i];
        stepsPerCoord[intersection] = Math.abs(wire1Path.indexOf(intersection)) + Math.abs(wire2Path.indexOf(intersection));
    }

    const final = Object.values(stepsPerCoord);

    return Math.min(...final);
};

// Part 1: ------------------------------------------------------------------------------------

const resultFirstPart = input => {
    const wirePaths = getWirePaths(input);
    const intersections = getIntersections(...wirePaths);

    return getManhattanDistance(intersections);
};

//console.log("\x1b[32m%s\x1b[0m", "Result of Day 3, part 1 is:", resultFirstPart(part1Input));

// Part 2: ------------------------------------------------------------------------------------

const numberOfSteps = input => {
    const wirePaths = getWirePaths(input);
    const intersections = getIntersections(...wirePaths);

    return getStepCount(intersections, wirePaths);
 };

console.log("\x1b[32m%s\x1b[0m", "Result of Day 3, part 2 is:", numberOfSteps(part1Input));


// Testing: -----------------------------------------------------------------------------------

assert.strictEqual(resultFirstPart("R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83"), 159);

assert.strictEqual(resultSecondPart("R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83"), 610)
