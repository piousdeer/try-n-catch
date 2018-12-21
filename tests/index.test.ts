import { trySync, tryAsync } from '../src'

test('error is undefined, value is true on a non-throwing function', () => {
  const pass = () => {
    return true
  }

  const [error, value] = trySync(pass)
  expect(value).toBe(true)
  expect(error).toBeUndefined()
})

test('error is undefined, value is true on a non-throwing async function', async done => {
  const pass = async () => {
    return true
  }

  const [error, value] = await tryAsync(pass)
  expect(value).toBe(true)
  expect(error).toBeUndefined()
  done()
})

test('error is an Error instance, value is undefined on a throwing function', () => {
  const fail = () => {
    throw new Error()
  }

  const [error, value] = trySync(fail)
  expect(value).toBeUndefined()
  expect(error).toBeInstanceOf(Error)
})

test('error is an Error instance, value is undefined on a throwing async function', async done => {
  const fail = async () => {
    throw new Error()
  }

  const [error, value] = await tryAsync(fail)
  expect(value).toBeUndefined()
  expect(error).toBeInstanceOf(Error)
  done()
})
