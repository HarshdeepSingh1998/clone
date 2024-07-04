import Loader from '@/components/Loader'
import ProductCard from '@/components/ProductCard'
import { selectUser } from '@/store/userSlice'
import { CardContainer } from '@/styles/Views/Admin/MarketPlacePage/Card'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { useSelector } from 'react-redux'

const CardView = ({ data, hosting, productList }) => {
  const { screenType } = useScreenType()
  const userData = useSelector(selectUser)
  return (
    <CardContainer isMobile={screenType === 'mobile'}>
      {!data && <Loader blurredBackgroundtrue={!data} />}
      {productList?.map((carddata: ProductList, i: number) => (
        <>
          <ProductCard
            data={carddata}
            i={i}
            key={i}
            width="238px"
            productDetailsPage={false}
            userData={userData}
          />
        </>
      ))}
    </CardContainer>
  )
}

export default CardView
