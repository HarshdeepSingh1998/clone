import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: grid;
  gap: 12px;
  &.shop {
    padding-bottom: 5px;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  height: 160px;
  position: relative;

  img {
    max-width: 214px;
    max-height: 160px;
    width: 65% !important;
    height: auto !important;
    cursor: pointer;
  }
  @media (max-width: 767px) {
    max-width: unset;
    padding-top: 5px;
  }
`
export const DetailContainer = styled.div`
  display: grid;
  gap: 5px;

  @media (max-width: 767px) {
    gap: unset;
  }
`
export const DescriptionContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 10px;
`
export const MachineContainer = styled.div`
  width: max-content;
  height: 20px;
  padding: 0 12px;
  border-radius: 4px;
  border: 1px;
  gap: 6px;
  background-color: rgba(237, 131, 47, 0.15);
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(250, 137, 73, 1);
`
export const StatusContainer = styled.div`
  padding: 4px 11px;
  border-radius: 4px;
  gap: 8.33px;
  background: #043d17;
  color: #0dc11f;
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.01em;
  text-align: center;

  &.used {
    color: #e39808;
    background: #e3980838;
  }
`
export const TitleContainer = styled.h3`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px;
  border-bottom: 1px solid #191f3f;
  color: #fff;
`
export const ModalName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-family: Inter;
  font-size: clamp(8px, 1.06vw, 15px);
  font-weight: 700;
  line-height: 19px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fff;
  /* width: 60%; */
  word-wrap: break-word;
  overflow-wrap: break-word;

  &.mobile-machine-modal-text {
    gap: 6px;
  }

  &.mobile-machine-modal {
    font-size: 16px;
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 16px;
  }

  div {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Inter;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.01em;
    text-align: left;
    color: rgb(255, 255, 255);
    font-size: 10px;

    &.mobile-sn {
      font-size: 12px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      font-size: 12px;
    }
  }

  span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #424962;
    font-size: clamp(8px, 1.06vw, 13px);

    &.mobile-hashrate {
      font-size: 14px;
    }

    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      font-size: 14px;
    }
  }
`

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #64718c;
  align-items: center;
  /* &.host-rate {
    margin-right: 14px;
  } */
`
