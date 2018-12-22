# try-n-catch
Functional `try...catch` wrapper written in TypeScript.

## Why
```js
let val

try {
  val = someFunction()
} catch (err) {
  console.error(`Sorry, there was an error: ${err}`)
}

val = "Oops! This isn't immutable!"
```
```js
const [err, val] = tryCatch(someFunction)

if (err) {
  console.error(`Sorry, there was an error: ${err}`)
}

val = "Let's try that again..." // TypeError: Assignment to constant variable
```

## Install
```
npm i try-n-catch
```

## Usage
Two functions are exported: `trySync` and `tryAsync`. `trySync` is exported as default. They both accept a function as the first argument and its arguments as the subsequest ones.
```ts
import tryCatch from 'try-n-catch'

// Or import them explicitly:
// import { trySync, tryAsync } from 'try-n-catch'

const [err, val] = tryCatch(feedWith, 'apples')

// You may also write that like so:
// const [err, val] = tryCatch(() => feedWith('apples'))

if (err) {
  // handle the error. val is undefined
} else {
  // no error was thrown. val is the returned value
}

function feedWith (food: string) {
  if (food !== 'pancakes') {
    throw new Error('no, I want pancakes')
  }

  return 'Very nice!'
}
```
Use `tryAsync` on asynchronous functions.
```ts
import { trySync, tryAsync } from 'try-n-catch'
const [err, res] = await tryAsync(() => fetch('https://github.com'))
```
Don't care about the error?
```ts
const [, val] = tryCatch(someFunction)
```

## Test
```
npm test
```
## Lint
```
npm run lint
```
## Build
```
npm run build
```
