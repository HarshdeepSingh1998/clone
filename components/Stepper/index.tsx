import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import { StepperProps } from 'components/Stepper/types'
import {
  CustomStep,
  CustomStepConnector,
  CustomStepLabel,
  StyledBox,
  StyledTypography
} from '@/styles/Components/Stepper'

const StepperComponent: React.FC<StepperProps> = ({ steps }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper
        activeStep={-1}
        orientation="vertical"
        connector={<CustomStepConnector />}
      >
        {steps.map(step => (
          <CustomStep key={step.id}>
            <CustomStepLabel>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <StyledBox>
                  <StyledTypography variant="body2">
                    {step.content}
                  </StyledTypography>
                </StyledBox>
              </Box>
            </CustomStepLabel>
          </CustomStep>
        ))}
      </Stepper>
    </Box>
  )
}

export default StepperComponent
