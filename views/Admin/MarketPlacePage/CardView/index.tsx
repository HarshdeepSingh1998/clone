import useAdminMarketPlace from '@/utils/Customhooks/useAdminMarketPlace'
import Loader from '@/components/Loader'
import { CardContainer } from '@/styles/Views/Admin/MarketPlacePage/Card'

const CardView = () => {
  const { data, hosting } = useAdminMarketPlace()

  return <CardContainer>{<Loader />}</CardContainer>
}

export default CardView
