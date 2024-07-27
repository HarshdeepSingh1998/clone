import { ProductDetailsInterface } from '@/views/User/ProductDetailsPage/types'
import Loader from '@/components/Loader'
import { HeaderContainer } from '@/styles/Views/User/ProductDetailsPage/Header'

const HeaderView = ({
  productDetailsData
}: {
  productDetailsData: ProductDetailsInterface
}) => {
  return (
    <>
      <HeaderContainer>
        {productDetailsData?.page ? 'Inventory Management' : 'MarketPlace'} /
        <span>&nbsp;Machine</span>
      </HeaderContainer>
      {!productDetailsData?.data && (
        <Loader blurredBackgroundtrue={!productDetailsData?.data} />
      )}
    </>
  )
}

export default HeaderView
