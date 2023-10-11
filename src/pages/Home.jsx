import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import MainBanner from '../components/MainBanner'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
  return (
    <Box>
      <MainBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home