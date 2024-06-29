import styled from 'styled-components'

export const NoProductFoundContainer = styled.div`
  min-height: 58%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  color: #64718c;

  &.admin-marketplace {
    min-height: 75%;
  }
  &.admin-auction {
    margin-top: 42px;
  }
  &.admin-inventory {
    min-height: unset;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  &.payment-class {
    padding: 13px;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* svg {
    height: 24px;
    width: 24px;
 `

export const HeadingContainer = styled.div`
  color: #707c96;
  font-weight: 600;
  font-size: 35px;
  line-height: 40px;
  font-family: Inter;
  padding-left: 14.5px;
  text-align: center;
  &.conform-popup {
    font-size: 32px;
  }
  @media (max-width: 375px) {
    line-height: 32px;
    font-size: 30px;
    font-weight: unset;
  }
`

export const SubheadingContainer = styled.div`
  width: 100%;
  max-width: 344px;
  font-weight: 500;
  font-family: 'Inter';
  font-size: 12px;
`
