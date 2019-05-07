type TryArrayNoError<Returned> = [Returned, undefined, false] & { value: Returned, error: undefined, threw: false }
type TryArrayError = [undefined, any, true] & { value: undefined, error: any, threw: true }

type TryArray<Returned> = TryArrayNoError<Returned> | TryArrayError

interface TryCatcherSync {
  <Args, Returned>(func: (...args: Args[]) => Returned, ...args: Args[]): TryArray<Returned>
}

interface TryCatcherAsync {
  <Args, Returned>(func: (...args: Args[]) => Promise<Returned>, ...args: Args[]): Promise<TryArray<Returned>>
}

export declare const trySync: TryCatcherSync
export declare const tryAsync: TryCatcherAsync

declare const tryCatch: TryCatcherSync & { sync: TryCatcherSync, async: TryCatcherAsync }

export default tryCatch
