import * as yup from 'yup'

export const LOT_PUBLISH_VALIDATION_SCHEMA = yup.object().shape({
  hosting: yup.string().required('Hosting is required.'),
  contract: yup
    .string()
    .test('contractRequired', 'Contract is required.', function (value) {
      const { hosting } = this.parent
      return hosting !== 'with_hosting' || !!value
    }),
  askPrice: yup
    .string()
    .test(
      'askPriceLength',
      'Price cannot be greater than 7 characters',
      value => !value || value.length <= 7
    )
    .test(
      'askPricePositive',
      'Selling price must be a positive number.',
      value => {
        const askPriceValue = parseFloat(value as any)
        return isNaN(askPriceValue) || askPriceValue > 0
      }
    )
    .test(
      'askPriceRequiredWithHosting',
      'Selling price is required.',
      function (value) {
        const { hosting, contract } = this.parent
        return hosting !== 'with_hosting' || (!!contract && !!value)
      }
    )
    .test(
      'askPriceRequiredWithoutHostingBid',
      'Selling price is required.',
      function (value) {
        const { hosting, auctionType } = this.parent
        return hosting !== 'without_hosting' || auctionType !== 'Bid' || !!value
      }
    ),
  auctionStartDate: yup
    .string()
    .test(
      'auctionStartDateRequiredWithHostingBid',
      'Auction Start Date is required.',
      function (value) {
        const { hosting, auctionType, askPrice } = this.parent
        if (hosting === 'with_hosting' && auctionType === 'Bid') {
          return !!askPrice && !!value
        }

        return true
      }
    )
    .test(
      'auctionStartDateRequiredWithoutHostingBid',
      'Auction Start Date is required.',
      function (value) {
        const { hosting, auctionType, askPrice } = this.parent
        if (hosting === 'without_hosting' && auctionType === 'Bid') {
          return !!askPrice && !!value
        }

        return true
      }
    ),
  auctionEndDate: yup
    .string()
    .test(
      'auctionEndDateRequiredWithHostingBid',
      'Auction End Date is required.',
      function (value) {
        const { hosting, auctionType, askPrice, auctionStartDate } = this.parent
        if (hosting === 'with_hosting' && auctionType === 'Bid') {
          return !!askPrice && !!auctionStartDate && !!value
        }

        return true
      }
    )
    .test(
      'auctionEndDateRequiredWithoutHostingBid',
      'Auction End Date is required.',
      function (value) {
        const { hosting, auctionType, askPrice, auctionStartDate } = this.parent
        if (hosting === 'without_hosting' && auctionType === 'Bid') {
          return !!askPrice && !!auctionStartDate && !!value
        }

        return true
      }
    ),
  shippingPrice: yup
    .string()
    .test(
      'shippingPriceLength',
      'Price cannot be greater than 5 characters',
      value => !value || value.length <= 5
    )
    .test(
      'shippingPriceRequiredWithHosting',
      'Shipping cost is required.',
      function (value) {
        const { hosting, auctionType, askPrice } = this.parent
        if (hosting === 'without_hosting' && auctionType === 'Bid') {
          return !!value && parseFloat(value) > 0
        }

        if (hosting === 'without_hosting' && auctionType === 'Buy') {
          return !askPrice || (!!value && parseFloat(value) > 0)
        }

        return true
      }
    ),
  auctionType: yup.string().required(),
  unit: yup.string().required(),
  location: yup.string(),
  hostRate: yup.string(),
  depositPrice: yup.string(),
  setupPrice: yup.string(),
  expirationDate: yup.string()
})
