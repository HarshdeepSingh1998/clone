import { useSelector } from 'react-redux'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { CardViewInterface } from 'views/Admin/MarketPlacePage/CardView/types'
import Loader from '@/components/Loader'
import ProductCard from '@/components/ProductCard'
import { selectUser } from '@/store/userSlice'
import { CardContainer } from '@/styles/Views/Admin/MarketPlacePage/Card'

const CardView = ({ data, productList }: CardViewInterface) => {
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
            setIndex={() => {}}
            setSelectedProduct={() => {}}
          />
        </>
      ))}
    </CardContainer>
  )
}

export default CardView
