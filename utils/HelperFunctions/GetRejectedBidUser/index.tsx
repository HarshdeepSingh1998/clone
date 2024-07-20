export const getRejectedBidUser = (auction: any) => {
  const lastCounter = auction.counters[auction.counters.length - 1]
  if (lastCounter.bidUser === auction.bidder?._id) {
    return auction.publisher
  } else if (lastCounter.bidUser === auction.publisher._id) {
    return auction.bidder
  } else {
    return null
  }
}
