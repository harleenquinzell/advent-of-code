const {
  input,
  inputData,
  reviewWords,
  inputDataSorted
} = require('./index.js')

test('stuff works', () => {
  expect(input).toBeDefined()
  expect(inputData).toBeDefined()
  expect(inputDataSorted).toBeDefined()
  expect(reviewWords).toBeDefined()
})

test('part 1', () => {
  const data1 = [['aa', 'bb', 'cc', 'dd', 'ee'], ['aa', 'bb', 'cc', 'dd', 'aaa']]
  const data2 = [['aa', 'bb', 'cc', 'dd', 'ee'], ['aa', 'bb', 'cc', 'dd', 'aa']]

  expect(reviewWords(data1)).toBe(2)
  expect(reviewWords(data2)).toBe(1)

  console.log(reviewWords(inputData));
})

test('sort data', () => {
  const unsortedData = [['oiii', 'ioii', 'iioi', 'iiio']]
  const expectedSortedData = [["iiio", "iiio", "iiio", "iiio"]]
  expect(inputDataSorted(unsortedData)).toEqual(expectedSortedData)
})


test('part 2', () => {
  const dataReceived = [['abcde', 'fghij'], ['iiii', 'oiii', 'ooii', 'oooi', 'oooo'], ['oiii', 'ioii', 'iioi', 'iiio']]
  const sortedData = inputDataSorted(dataReceived)

  expect(reviewWords(sortedData)).toBe(2)

  console.log(reviewWords(inputDataSorted(inputData)))
})
