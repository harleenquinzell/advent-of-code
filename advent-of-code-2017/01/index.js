const fs = require('fs');
const path = require('path');

// input data stuff
const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()
const inputData = input
  .trim()
  .split('')
  .map(number => parseInt(number))

// solution stuff
const captcha1 = (data) => {
  const sum = data.reduce(
    (acc, number, index) => {
      const next = data[(index + 1) % data.length]

      return acc + (number === next ? number : 0)
    },
    0
  )
  return sum;
}

const captcha2 = (data) => {
  const sum = data.reduce(
    (acc, number, index) => {
      const offset = data.length/2
      const next = data[(index + offset) % data.length]

      return acc + (number === next ? number : 0)
    },
    0
  )
  return sum;
}

module.exports = { captcha1, captcha2, inputData, input }
