import styled from 'styled-components'

export const FanAnimationContainer = styled.div`
  svg {
    animation: rotateAnimation 2s linear infinite;

    @keyframes rotateAnimation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  .fan-container {
    display: block;
  }

  @media (max-width: 767px) {
    svg {
      width: unset;
    }

    .fan-container {
      display: none;
    }
    .mobile-fan-container {
      display: block;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    svg {
      width: unset;
    }
  }
`
