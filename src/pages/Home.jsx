import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import MainBanner from '../components/MainBanner'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <MainBanner/>
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  )
}

export default Home