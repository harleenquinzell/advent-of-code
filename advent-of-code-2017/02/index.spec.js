const {
  input,
  inputMatrix,
  differences1,
  differences2
} = require('./index.js')

test('stuff works', () => {
  expect(input).toBeDefined()
  expect(inputMatrix).toBeDefined()
  expect(differences1).toBeDefined()
  expect(differences2).toBeDefined()
})

test('input is array', () => {
  expect(Array.isArray(inputMatrix)).toBe(true)
})

test('part 1', () => {
  expect(differences1([[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]])).toBe(18)
})

test('part 2', () => {
  expect(differences2([[5, 9, 2, 8], [9, 4, 7, 3], [3, 8, 6, 5]])).toBe(9)
})
