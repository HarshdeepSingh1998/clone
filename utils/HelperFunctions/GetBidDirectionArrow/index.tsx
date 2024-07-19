export const getBidDirectionArrow = (price: number, bid: number) => {
  if (price && bid && ((price - bid) / price) * 100 < bid) {
    return true
  } else {
    return false
  }
}
