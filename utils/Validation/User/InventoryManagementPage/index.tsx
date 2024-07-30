import { ProductList } from '@/utils/ApiTypes/ProductList'
import * as yup from 'yup'
interface ValidationContext {
  productDetails?: ProductList
  auctionType?: string
}

export const USER_PUBLISH_VALIDATION_SCHEMA = yup.object().shape({
  askPrice: yup
    .string()
    .required('Deposit amount is required.')
    .test('max-length', 'Price cannot be greater than 7', value => {
      return value.length <= 7
    }),

  shippingPrice: yup
    .string()
    .test(
      'shipping-price-required',
      'Shipping amount is required.',
      function (value) {
        // Access context here
        const { productDetails } = this.options.context as ValidationContext
        return productDetails?.hosting || !!value
      }
    ),

  auctionStartDate: yup
    .string()
    .test(
      'valid-date',
      'Auction Start Date is required.',
      function (value: any) {
        const { auctionType } = this.options.context as ValidationContext
        return auctionType !== 'Bid' || (value && value !== 'Invalid Date')
      }
    ),

  auctionEndDate: yup
    .string()
    .test('valid-date', 'Auction End Date is required.', function (value: any) {
      const { auctionType } = this.options.context as ValidationContext
      return auctionType !== 'Bid' || (value && value !== 'Invalid Date')
    })
})
