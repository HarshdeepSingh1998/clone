import styled from 'styled-components'

export const ProductCardContainer = styled.div<{ width: string }>`
  width: ${props => props.width || '238px'};
  maxwidth: 300px;
  border-radius: 12px;
  background-color: #131529;
  border: 1px solid #1b202b;
  padding: 12px;
  cursor: pointer;
  position: relative;

  @media (min-width: 768px) {
    min-height: 402px;
  }

  .overlay {
    position: absolute;
    bottom: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(28, 31, 48, 0.5);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: bottom 0.3s;
    border-radius: 12px;
    cursor: not-allowed;

    @media only screen and (min-width: 767px) and (max-width: 1066px) {
      svg {
        position: absolute;
        top: 11px;
        left: 10px;
      }
    }
    @media (min-width: 1066px) {
      svg {
        position: absolute;
        top: 11px;
        left: 86px;
      }
    }

    @media (max-width: 767px) {
      svg {
        position: absolute;
        top: 11px;
        left: 0px;
      }
    }

    // svg {
    //   position: absolute;
    //   top: 11px;
    //   left: 86px;
    // }
  }

  .card:hover .overlay {
    bottom: 0;
  }
`
export const CardContent = styled.div`
  display: grid;
  alignitems: center;
  justifycontent: center;
  cursor: pointer;
`
