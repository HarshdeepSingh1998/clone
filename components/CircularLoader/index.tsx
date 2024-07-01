import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { CircularLoaderType } from 'components/CircularLoader/types'

const CircularLoader = ({ minHeight }: CircularLoaderType) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: { minHeight },
        alignItems: 'center'
      }}
    >
      <CircularProgress color="warning" />
    </Box>
  )
}

export default CircularLoader
