import Layout from '@/components/Layout'
import HeaderView from '@/views/MarketPlacePage/HeaderView'
import MarketPlaceView from '@/views/MarketPlacePage/MarketPlaceView'

const MarketplacePage = () => {
  return (
    <Layout
      background="radial-gradient(
        79.14% 79.14% at 11% 98%,
        /* Set background position to center */ #512709 -58.18%,
        #000513 53.58%
      );"
    >
      <HeaderView />
      <MarketPlaceView />
    </Layout>
  )
}

export default MarketplacePage
