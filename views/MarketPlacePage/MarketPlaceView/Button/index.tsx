import { Dispatch, SetStateAction, useState } from 'react'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import {
  ButtonContainer,
  ButtonContent,
  Options
} from '@/styles/Views/MarketPlacePage/MarketPlace/Button'

interface ButtonProps {
  setHosting: Dispatch<SetStateAction<boolean>>
  setProductList: Dispatch<SetStateAction<ProductList[] | undefined>>
}

const Button = ({ setProductList, setHosting }: ButtonProps) => {
  const [toggleActive, setToggleActive] = useState<string>('1')

  const handleBuyAndHostClick = () => {
    if (toggleActive !== '1') {
      setToggleActive('1')
      setHosting(true)
      setProductList([])
    }
  }

  const handleShopClick = () => {
    if (toggleActive !== '2') {
      setToggleActive('2')
      setHosting(false)
      setProductList([])
    }
  }

  return (
    <Options className="tabs">
      <ButtonContainer className="button">
        <ButtonContent
          className={toggleActive === '1' ? 'active' : ''}
          onClick={handleBuyAndHostClick}
          disabled={toggleActive === '1'}
        >
          Buy & Host
        </ButtonContent>
        <ButtonContent
          className={toggleActive === '2' ? 'active' : ''}
          onClick={handleShopClick}
          disabled={toggleActive === '2'}
        >
          Shop
        </ButtonContent>
      </ButtonContainer>
    </Options>
  )
}

export default Button
