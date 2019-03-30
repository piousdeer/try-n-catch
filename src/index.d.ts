interface TryCatcherSync {
  <Args, ReturnVal>(func: (...args: Args[]) => ReturnVal, ...args: Args[]): [undefined, ReturnVal] | [Error, undefined]
}

interface TryCatcherAsync {
  <Args, ReturnVal>(func: (...args: Args[]) => Promise<ReturnVal>, ...args: Args[]): Promise<[Error, undefined] | [undefined, ReturnVal]>
}

declare const tryCatch: {
  sync: TryCatcherSync,
  async: TryCatcherAsync
} & TryCatcherSync

export declare const trySync: TryCatcherSync
export declare const tryAsync: TryCatcherAsync

export default tryCatch
