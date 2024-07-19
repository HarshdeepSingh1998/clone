export const getLastElement = (arr: any, type: string) => {
  let lastEvenObject = null
  let lastOddObject = null

  for (let i = arr.length - 1; i >= 0; i--) {
    if ((i + 1) % 2 === 0) {
      lastEvenObject = arr[i]
      if (type === 'even') {
        return lastEvenObject
      }
    } else {
      lastOddObject = arr[i]
      if (type === 'odd') {
        return lastOddObject
      }
    }
  }
}
