import Image from 'next/image'
import { useRouter } from 'next/router'
import useInitialClass from '@/utils/Customhooks/useInitialClass'
import { BuyAndHostCardProps } from 'components/BuyAndHostCard/types'
import Button from '@/components/Button'
import NavImg from 'assets/images/images/Bitman.png'
import {
  BuyAndHostContent,
  BuyAndHostImage,
  BuyAndHostTextContainer,
  BuyAndHostTitle,
  BuyAndHostDetailContainer,
  BuyAndHostPriceContainer,
  BuyAndHostButtonContainer
} from 'styles/Components/BuyAndHostCard'

const BuyAndHostCardComponent: React.FC<BuyAndHostCardProps> = ({
  i,
  activeIndex,
  data,
  length
}) => {
  const router = useRouter()

  const initialClass = useInitialClass(i, length, activeIndex)

  return (
    <BuyAndHostContent key={i} className={initialClass}>
      <BuyAndHostImage>
        <Image
          src={!data?.image ? NavImg : data?.image}
          alt="Nav Img"
          width={190}
          height={227}
          style={{ borderRadius: '10px' }}
        />
      </BuyAndHostImage>

      <BuyAndHostTextContainer>
        <BuyAndHostTitle>{data?.title}</BuyAndHostTitle>

        <BuyAndHostDetailContainer>
          <div>
            Hosting Rate: {!data?.rate ? 'NA' : `$${data?.rate}/kWH`}
            <p>
              {data?.lotId ? `${data?.lotId}` : `SN: ${data?.serialNumber}`}{' '}
            </p>
          </div>
          <span>Location: {!data?.location ? 'NA' : data?.location}</span>
        </BuyAndHostDetailContainer>
        <BuyAndHostPriceContainer
          isQuantityPresent={data?.quantity ? true : false}
        >
          {' '}
          {!data?.price ? 'NA' : `$${data?.price}`}
          <span style={{ color: '#fff', fontSize: '14px' }}>
            {data?.quantity ? `QTY: ${data?.quantity}` : ``}
          </span>
        </BuyAndHostPriceContainer>
      </BuyAndHostTextContainer>

      <BuyAndHostButtonContainer>
        <Button
          type="submit"
          variant="contained"
          label={'Buy Now'}
          onClick={() => {
            router.push('/signin')
          }}
          disable={data.transaction === false}
          padding="15px 36px !important"
        />
      </BuyAndHostButtonContainer>
    </BuyAndHostContent>
  )
}

export default BuyAndHostCardComponent
