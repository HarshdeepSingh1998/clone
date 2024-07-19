export const getBidAmountPercent = (price: number, bid: number): string => {
  if (price && bid) {
    const difference = price - bid // Calculate the difference
    const positiveDifference = Math.abs(difference)
    // return `${((positiveDifference / price) * 100).toFixed(2)}%`
    return `${Math.round((positiveDifference / price) * 100)}%`
  } else {
    return 'N/A'
  }
}
