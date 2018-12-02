const fs = require('fs')
const path = require('path')

// input data stuff
const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString()
const inputData = input
  .trim()
  .split('\n')
  .map(row => row.split(' '))

const inputDataSorted = data => {
  return data.map(row => {
    return row.map(word => word.split('').sort().join(''))
  })
}

const reviewWords = data => {
  const total = data.reduce((acc, row) => {
    let wordsInPassphrase = new Set()

    row.forEach(word => {
      if (wordsInPassphrase.has(word)) {
        return false
      } else {
        wordsInPassphrase.add(word)
      }
    })

    if (wordsInPassphrase.size === row.length) {
      acc = acc + 1
    }
    return acc
  }, 0)
  return total
}

module.exports = {
  input,
  inputData,
  reviewWords,
  inputDataSorted
}
