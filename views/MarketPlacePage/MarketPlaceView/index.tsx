import useProductList from '@/utils/Customhooks/useProductList'
import useScreenType from '@/utils/Customhooks/useScreenType'
import SliderComponent from '@/components/Slider'
import NoProductFound from '@/components/NoProductFound'
import ProductCard from '@/components/ProductCard'
import Button from 'views/MarketPlacePage/MarketPlaceView/Button'
import {
  CardContainer,
  MarketPlaceContainer
} from '@/styles/Views/MarketPlacePage/MarketPlace'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import CircularLoader from '@/components/CircularLoader'

const MarketPlaceView = () => {
  const { screenType } = useScreenType()
  const { setHosting, productList, setProductList, data } = useProductList()
  const slidesToShow =
    screenType === 'mobile'
      ? 1
      : screenType === 'tab'
        ? Math.min(3, (productList || []).length)
        : Math.min(4, (productList || []).length)

  return (
    <MarketPlaceContainer>
      <Button setHosting={setHosting} setProductList={setProductList} />
      {!data ? (
        <CircularLoader minHeight="194px" />
      ) : (
        (productList || [])?.length === 0 && (
          <NoProductFound
            className="admin-marketplace"
            heading="No Products In Marketplace."
            text=""
          />
        )
      )}
      {(productList || [])?.length > 0 && (
        <CardContainer>
          <SliderComponent
            slidesToShow={slidesToShow}
            dataLength={(productList || [])?.length}
          >
            {(productList || [])?.map((data: ProductList, i: number) => (
              <ProductCard data={data} i={i} key={i} />
            ))}
          </SliderComponent>
        </CardContainer>
      )}
    </MarketPlaceContainer>
  )
}

export default MarketPlaceView
