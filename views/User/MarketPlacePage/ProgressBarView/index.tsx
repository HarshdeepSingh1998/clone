import { ProgressBar } from 'react-bootstrap'
import { MarketPlaceDataInterface } from 'views/User/MarketPlacePage/types'
import Button from '@/components/Button'
import {
  ProgressBarContainer,
  ProgressBarContent,
  ButtonContainer
} from '@/styles/Views/User/MarketPlacePage/ProgressBar'

const ProgressBarView = ({
  marketplaceData
}: {
  marketplaceData: MarketPlaceDataInterface
}) => {
  return (
    <>
      {marketplaceData.userData?.data?.role === 'user' && (
        <>
          {marketplaceData.userData?.data?.profileCompletion !== 100 && (
            <ProgressBarContainer
              width={marketplaceData.userData?.data?.profileCompletion}
            >
              <ProgressBarContent>
                <span>
                  Complete your profile! <p>Why is this important?</p>
                </span>
                <ButtonContainer>
                  <Button
                    type="button"
                    variant="contained"
                    label="Complete Profile"
                    onClick={() =>
                      marketplaceData.setShowEditProfileModal(true)
                    }
                  ></Button>
                </ButtonContainer>
              </ProgressBarContent>
              <span className="progress">
                <ProgressBar
                  now={marketplaceData.userData?.data?.profileCompletion}
                  label={`${marketplaceData.userData?.data?.profileCompletion}%`}
                />
              </span>
            </ProgressBarContainer>
          )}
        </>
      )}
    </>
  )
}

export default ProgressBarView
