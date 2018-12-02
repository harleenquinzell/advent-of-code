const fs = require('fs')
const path = require('path')

// input data stuff
const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()
const inputMatrix = input
  .split('\n')
  .map(row => row.trim())
  .filter(Boolean)
  .map(s => s.split(/\s+/).map(n => parseInt(n)))

// solution stuff
const differences1 = data => {
  const minMaxMx = data.map(row => {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for (let i = 0; i < row.length; i++) {
      min = Math.min(min, row[i])
      max = Math.max(max, row[i])
    }

    return [min, max];
  });

  return minMaxMx.reduce((acc, [min, max]) => {
    return acc + (max - min);
  }, 0);
}

const differences2 = data => {
  const divisibles = data.map(row => {
    for (let i = 0; i < row.length - 1; i++) {
      for (let k = 0; k < row.length; k++) {
        const x = row[i]
        const y = row[k]

        if (x > y && x % y === 0) {
          return x/y
        } else if (y > x && y % x === 0) {
          return y/x
        }
      }
    }
  })

  return divisibles.reduce((acc, num) => acc + num, 0);
}

module.exports = {
  input,
  inputMatrix,
  differences1,
  differences2
}
