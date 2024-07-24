import styled from 'styled-components'

export const CardContainer = styled.div<{ isMobile: boolean }>`
  height: auto;
  width: 100%;
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
`
