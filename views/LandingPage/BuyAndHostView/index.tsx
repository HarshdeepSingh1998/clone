import { useState, useEffect } from 'react'
import Image from 'next/image'
import useGet from '@/hooks/useGet'
import { BuyAndHostDataType } from '@/utils/LandingPageContent/BuyAndHost/types'
import BuyAndHostCardComponent from '@/components/BuyAndHostCard'
import ArrowLeft from 'assets/images/images/arrow-left.png'
import ArrowRight from 'assets/images/images/arrow-right.png'
import {
  BuyAndHostCardContainer,
  BuyAndHostContainer,
  BuyAndHostHeadingContainer,
  BuyAndHostCard,
  BuyAndHostHeading,
  BuyAndHostCardLeftArrow,
  BuyAndHostMainContainer,
  BuyAndHostCardRightArrow
} from 'styles/Views/LandingPage/BuyAndHost'

interface BuyAndHostData {
  buyAndHostData: BuyAndHostDataType[]
}

const BuyAndHostView: React.FC<BuyAndHostData> = ({ buyAndHostData }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const [productList, setProductList] = useState<BuyAndHostDataType[]>([])

  const { data, refetch: fetchData } = useGet(
    `productListStatus`,
    `/api/getPublishedProducts?isHosting=${true}&status=Published&limit=${4}`,
    true
  )

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    const list = data?.data?.products
    setProductList(
      list?.map(
        (list: {
          modelName: string
          images: string[]
          contract: { location: string; hostRate: number }
          askPrice: number
          serialNumber: string
          lotId: string | null
          quantity: number
          transaction: { paymentReceived: boolean }
        }) => ({
          title: list?.modelName,
          image: list?.images[0],
          location: list?.contract?.location,
          price: list?.askPrice,
          rate: list?.contract?.hostRate,
          serialNumber: list?.serialNumber,
          lotId: list?.lotId,
          quantity: list?.quantity,
          transaction: list?.transaction?.paymentReceived
        })
      )
    )
  }, [data])

  const handleNext = () => {
    setActiveIndex(
      (prevIndex: number) =>
        (prevIndex + 1) % (productList || buyAndHostData)?.length
    )
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex: number) =>
      prevIndex === 0
        ? (productList || buyAndHostData)?.length - 1
        : prevIndex - 1
    )
  }

  return (
    <BuyAndHostContainer>
      <BuyAndHostHeadingContainer>
        <BuyAndHostHeading>
          FEATURED
          <span>Buy & Host</span>
        </BuyAndHostHeading>
      </BuyAndHostHeadingContainer>
      <BuyAndHostCardContainer>
        <BuyAndHostCard>
          <BuyAndHostCardLeftArrow onClick={handlePrev}>
            {' '}
            <Image src={ArrowLeft} alt="arrow left" />
          </BuyAndHostCardLeftArrow>
          <BuyAndHostMainContainer>
            {(productList || buyAndHostData)?.length > 0 &&
              (productList || buyAndHostData)?.map((data, i) => (
                <BuyAndHostCardComponent
                  key={i}
                  i={i}
                  activeIndex={activeIndex}
                  data={data}
                  length={(productList || buyAndHostData)?.length}
                />
              ))}
          </BuyAndHostMainContainer>
          <BuyAndHostCardRightArrow onClick={handleNext}>
            {' '}
            <Image src={ArrowRight} alt="arrow right" />
          </BuyAndHostCardRightArrow>
        </BuyAndHostCard>
      </BuyAndHostCardContainer>
    </BuyAndHostContainer>
  )
}

export default BuyAndHostView
