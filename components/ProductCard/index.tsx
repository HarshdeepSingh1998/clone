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

const ProductCard: React.FC<ProductCardProps> = ({
  data,
  i,
  width,
  productDetailsPage,
  userData
}) => {
  const router = useRouter()

  const handleViewProduct = (productId: string) => {
    if (userData?.data?.role === 'admin') {
      router.push(`/admin/productDetails?productId=${productId}`)
    } else {
      router.push(`/user/productDetails?productId=${productId}`)
    }
  }

  return (
    <ProductCardContainer key={i} width={width}>
      <CardContent
        onClick={() => {
          userData?.data?.role === 'admin' && !productDetailsPage
            ? handleViewProduct(data._id as string)
            : router.push('/signin')
        }}
      >
        <Header data={data} userData={userData} />
        <Content
          data={data}
          userData={userData}
          handleViewProduct={handleViewProduct}
          productDetailsPage={productDetailsPage}
        />
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
