import Loader from '@/components/Loader'
import { ProductDetailsInterface } from '@/views/Admin/ProductDetailsPage/HeaderView/types'
import { HeaderContainer } from '@/styles/Views/Admin/ProductDetailsPage/Header'

const HeaderView = (productDetailsData: ProductDetailsInterface) => {
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
