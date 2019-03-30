# try-n-catch
Functional try-catch wrapper. TypeScript typings included.  
Provides a different way to handle errors.

# Example
```js
import tryCatch from 'try-n-catch'

const string = prompt('Enter a JSON object')
const [value, error] = tryCatch(JSON.parse, string)

if (error) {
  // `value` is undefined, `error` is the error thrown by JSON.parse()
  alert('This is not a valid JSON object.')
  console.log(error)
} else {
  // `value` is the parsed object, `error` is undefined
  console.log(value)
}

// Note how both `value` and `error` are immutable and visible in the outer scope.
```

# More examples
## Using an arrow function
Use an arrow function if you prefer to.
```js
tryCatch(JSON.parse, string)
tryCatch(() => JSON.parse(string))
```

## Async function error handling
Use `tryCatch.async()` to handle errors in async functions.  `tryCatch.sync()` is the same as `tryCatch()`.
```js
const [response, error] = await tryCatch.async(fetch, 'https://google.com')
```
If you wish, you can import `trySync()` and `tryAsync()`, which act the same as `tryCatch()` and `tryCatch.async()` respectively.
```js
import { trySync, tryAsync } from 'try-n-catch'
```

## Check if a function threw
If a function may throw `undefined`, it won't be possible to handle the error using `if (err)` construct, use `if (threw)` to instead.
```js
const [value, error, threw] = tryCatch(() => {
  throw undefined
})

// both value and error are undefined, but threw is true

if (threw) {
  // handle the error
}
```

## Named properties
`value`, `error` and `threw` properties are available on the returned array. It could be useful in a scenario where you only need to check if a function throws.
```js
if (tryCatch(someFunction).threw) {
  // the function threw
}
```

# Precaution
Don't use this in large loops where performance is important.  
Don't use this in functions that could be called in large loops where performance is important.
