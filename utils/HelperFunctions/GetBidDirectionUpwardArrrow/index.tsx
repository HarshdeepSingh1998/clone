export const getBidDirectionUpwardArrow = (price: number, bid: number) => {
  if (price && bid && ((price - bid) / price) * 100 < 0) {
    return true
  } else {
    return false
  }
}
