export default trySync
export { trySync, tryAsync }

function trySync<Args, Returns> (func: (...args: Args[]) => Returns, ...args: Args[]) {
  let value: Returns | undefined
  let error: Error | undefined

  try {
    value = func(...args)
  } catch (err) {
    error = err
  }

  return [error, value] as [undefined, Returns] | [Error, undefined]
}

async function tryAsync<Args, Returns> (func: (...args: Args[]) => Promise<Returns>, ...args: Args[]) {
  let value: Returns | undefined
  let error: Error | undefined

  try {
    value = await func(...args)
  } catch (err) {
    error = err
  }

  return [error, value] as [undefined, Returns] | [Error, undefined]
}
