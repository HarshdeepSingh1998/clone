export const dataURLtoBlob = (dataURL: string) => {
  const arr = dataURL.split(',')
  const matchResult = arr[0].match(/:(.*);/)

  if (!matchResult) {
    throw new Error('Invalid data URL format')
  }

  const mime = matchResult[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new Blob([u8arr], { type: mime })
}
