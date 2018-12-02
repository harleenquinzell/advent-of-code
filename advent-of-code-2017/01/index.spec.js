const { captcha1, captcha2, inputData, input } = require('./index.js')

test('stuff works', () => {
  expect(captcha2).toBeDefined()
  expect(inputData).toBeDefined()
  expect(input).toBeDefined()
})

test('part 1', () => {
  expect(captcha1([1, 1, 2, 2])).toBe(3)
  expect(captcha1([1, 1, 1, 1])).toBe(4)
  expect(captcha1([1, 2, 3, 4])).toBe(0)
  expect(captcha1([9, 1, 2, 1, 2, 1, 2, 9])).toBe(9)
})

test('part 2', () => {
  expect(captcha2([1, 2, 1, 2])).toBe(6)
  expect(captcha2([1, 2, 2, 1])).toBe(0)
  expect(captcha2([1, 2, 3, 4, 2, 5])).toBe(4)
  expect(captcha2([1, 2, 3, 1, 2, 3])).toBe(12)
  expect(captcha2([1, 2, 1, 3, 1, 4, 1, 5])).toBe(4)
})
