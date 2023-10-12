import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      justifyContent="center" alignItems="center" mt="20px"
      >
        <InfinitySpin color="#FF2625" />
      </Stack>
  )
}

export default Loader