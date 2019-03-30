export function trySync (func, ...args) {
  let error, value

  try {
    value = func(...args)
  } catch (err) {
    error = err
  }

  return [error, value]
}

export async function tryAsync (func, ...args) {
  let error, value

  try {
    value = await func(...args)
  } catch (err) {
    error = err
  }

  return [error, value]
}

const tryCatch = trySync.bind(null)
export default tryCatch
