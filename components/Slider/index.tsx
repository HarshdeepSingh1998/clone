import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { SliderProps } from 'components/Slider/types'
import { SliderContainer } from '@/styles/Components/Slider'

const SliderComponent: React.FC<SliderProps> = ({
  slidesToShow,
  children,
  dataLength
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { screenType } = useScreenType()
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      currentSlide
      current
      setCurrentSlide(next)
    }
  }
  return (
    <SliderContainer dataLength={dataLength} isMobile={screenType === 'mobile'}>
      <Slider {...settings}>{children}</Slider>
    </SliderContainer>
  )
}

export default SliderComponent
