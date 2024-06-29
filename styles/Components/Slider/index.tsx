import styled from 'styled-components'

export const SliderContainer = styled.div<{
  dataLength: number
  isMobile: boolean
}>`
  .slick-list {
    ${props =>
      !props.isMobile &&
      props.dataLength === 1 &&
      `
        width: 47% !important;
        max-width: 300px !important;
        align-items: center !important;
        text-align: center !important;
        display: inline-block !important;
    `}

    ${props =>
      !props.isMobile &&
      props.dataLength === 2 &&
      `
        width: 80% !important;
        max-width: 600px !important;
        align-items: center !important;
        text-align: center !important;
        display: inline-block !important;
    `}

    ${props =>
      !props.isMobile &&
      props.dataLength === 3 &&
      `
        width: 100% !important;
        max-width: 900px !important;
        align-items: center !important;
        text-align: center !important;
        display: inline-block !important;
    `}

    ${props =>
      !props.isMobile &&
      props.dataLength === 4 &&
      `
        width: 100% !important;
        max-width: 900px !important;
        align-items: center !important;
        text-align: center !important;
        display: inline-block !important;
    `}
  }

  @media (max-width: 767px) {
    .slick-list {
      width: 75% !important;
      max-width: 300px !important;
      align-items: center !important;
      text-align: center !important;
      display: inline-block !important;
    }

    .slick-prev {
      left: 10vw !important;
    }

    .slick-next {
      right: 10vw !important;
    }
  }

  @media (min-width: 1224px) {
    .slick-list {
      ${props =>
        props.dataLength === 1 &&
        `
          width: 30% !important;
          align-items: center !important;
          text-align: center !important;
          display: inline-block !important;
      `}

      ${props =>
        props.dataLength === 2 &&
        `
          width: 60% !important;
          align-items: center !important;
          text-align: center !important;
          display: inline-block !important;
      `}

      ${props =>
        props.dataLength === 3 &&
        `
          width: 90% !important;
          align-items: center !important;
          text-align: center !important;
          display: inline-block !important;
      `}
    }
  }
`
