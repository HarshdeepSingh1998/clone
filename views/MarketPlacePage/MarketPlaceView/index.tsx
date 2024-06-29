import { MarketPlaceContainer } from '@/styles/Views/MarketPlacePage/MarketPlace'
import useProductList from '@/utils/Customhooks/useProductList'
import useScreenType from '@/utils/Customhooks/useScreenType'
import Button from 'views/MarketPlacePage/MarketPlaceView/Button'

const MarketPlaceView = () => {
  const { screenType } = useScreenType()
  const { hosting, setHosting, productList, setProductList } = useProductList()
  return (
    <MarketPlaceContainer>
      <Button setHosting={setHosting} setProductList={setProductList} />
    </MarketPlaceContainer>
  )
}

export default MarketPlaceView
