const handle = (value, threw) => {
  return threw
    ? new TryArray(undefined, value, true)
    : new TryArray(value, undefined, false)
}

class TryArray extends Array {
  get value () {
    return this[0]
  }

  get error () {
    return this[1]
  }

  get threw () {
    return this[2]
  }
}

export function trySync (func, ...args) {
  try {
    return handle(func(...args), false)
  } catch (error) {
    return handle(error, true)
  }
}

export async function tryAsync (func, ...args) {
  try {
    return handle(await func(...args), false)
  } catch (error) {
    return handle(error, true)
  }
}

const tryCatch = trySync.bind(null)

tryCatch.sync = trySync
tryCatch.async = tryAsync

export default tryCatch
