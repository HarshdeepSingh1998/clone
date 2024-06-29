import { useRouter } from 'next/router'
import { ProductCardProps } from 'components/ProductCard/types'
import Header from 'components/ProductCard/Header'
import Content from 'components/ProductCard/Content'
import Footer from 'components/ProductCard/Footer'
import DealClosed from '@/assets/images/svg/DealClosed'
import {
  CardContent,
  ProductCardContainer
} from '@/styles/Components/ProductCard'

const ProductCard: React.FC<ProductCardProps> = ({ data, i }) => {
  const router = useRouter()

  return (
    <ProductCardContainer key={i} width={'100%'}>
      <CardContent
        onClick={() => {
          router.push('/signin')
        }}
      >
        <Header data={data} />
        <Content data={data} />
        <Footer data={data} />
      </CardContent>
      {data.transaction?.paymentReceived === false && (
        <div className="overlay">
          <DealClosed />
        </div>
      )}
    </ProductCardContainer>
  )
}

export default ProductCard
