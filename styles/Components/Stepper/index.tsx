import styled from 'styled-components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import StepLabel from '@mui/material/StepLabel'
import Step from '@mui/material/Step'
import StepConnector from '@mui/material/StepConnector'

export const CustomStepConnector = styled(StepConnector)(() => ({
  '&.MuiStepConnector-root': {
    marginLeft: '23px',
    '&:nth-child(4)': {
      span: {
        borderLeftStyle: 'dashed',
        borderLeftWidth: '3px'
      }
    },
    '&:nth-child(2)': {
      span: {
        borderLeftStyle: 'solid',
        borderLeftWidth: '3px',
        borderColor: 'rgb(251, 103, 75) !important'
      }
    },
    '&.Mui-disabled': {
      opacity: '1 !important', // Override the default opacity
      padding: '0',
      marginRight: '20px'
    }
  }
}))

export const CustomStep = styled(Step)({
  '.Mui-disabled': {
    opacity: '1 !important', // Override the default opacity
    padding: '0',
    marginRight: '20px'
  },
  '.MuiSvgIcon-root': {
    color: 'rgb(251, 103, 75) !important',
    width: '48px',
    height: '48px'
  },
  '.MuiStepConnector-root': {
    marginLeft: '23px'
  }
})

export const CustomStepLabel = styled(StepLabel)({
  '.Mui-disabled': {
    opacity: '1 !important'
  }
})

export const StyledBox = styled(Box)(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '16px',
  color: 'var(--Primary-0, #fff)',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '150%',
  letterSpacing: '-0.32px',
  width: '100%'
}))

export const StyledTypography = styled(Typography)(() => ({
  color: 'var(--Primary-0, #fff)',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '150%',
  letterSpacing: '-0.32px'
}))
