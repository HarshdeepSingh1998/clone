import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import {
  HeaderContainer,
  TitleContainer
} from '@/styles/Views/Admin/AddProductPage/Header'

const HeaderView = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <>
      <HeaderContainer>
        <TitleContainer>Add Product</TitleContainer>
      </HeaderContainer>
      <Loader blurredBackgroundtrue={loading} />
    </>
  )
}

export default HeaderView
