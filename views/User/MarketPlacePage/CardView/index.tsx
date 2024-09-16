import { ProductList } from '@/utils/ApiTypes/ProductList'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { MarketPlaceDataInterface } from 'views/User/MarketPlacePage/types'
import Loader from '@/components/Loader'
import ProductCard from '@/components/ProductCard'
import { CardContainer } from '@/styles/Views/User/MarketPlacePage/Card'

const CardView = ({
  marketplaceData
}: {
  marketplaceData: MarketPlaceDataInterface
}) => {
  const { screenType } = useScreenType()

  return (
    <CardContainer isMobile={screenType === 'mobile'}>
      {!marketplaceData.data && (
        <Loader blurredBackgroundtrue={!marketplaceData.data} />
      )}
      {marketplaceData.productList?.map((carddata: ProductList, i: number) => (
        <>
          <ProductCard
            data={carddata}
            i={i}
            key={i}
            width="238px"
            productDetailsPage={false}
            setIndex={() => {}}
            setSelectedProduct={() => {}}
            marketplaceData={marketplaceData}
            userData={marketplaceData.userData}
          />
        </>
      ))}
    </CardContainer>
  )
}

export default CardView
