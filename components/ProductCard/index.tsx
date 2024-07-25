import { useRouter } from 'next/router'
import { ProductCardProps } from 'components/ProductCard/types'
import Header from 'components/ProductCard/Header'
import Content from 'components/ProductCard/Content'
import Footer from 'components/ProductCard/Footer'
import Button from 'components/ProductCard/Button'
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
  userData,
  setIndex,
  setSelectedProduct,
  selectedCard,
  marketplaceData
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
    <ProductCardContainer key={i} width={width} selectedCard={selectedCard}>
      <CardContent
        onClick={() => {
          userData?.data?.role === 'admin' && !productDetailsPage
            ? handleViewProduct(data._id as string)
            : userData?.data?.role === 'admin'
              ? ''
              : router.push('/signin')
          setIndex(i)
          setSelectedProduct(data)
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
        {userData?.data?.role === 'user' &&
          !productDetailsPage &&
          data?.user?._id !== userData?.data?.id && (
            <Button
              data={data}
              placeBidClick={marketplaceData?.placeBidClick}
              buyNowClick={marketplaceData?.buyNowClick}
              clickGetQuote={marketplaceData?.clickGetQuote}
            />
          )}
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
