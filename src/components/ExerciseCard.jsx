import React from 'react'
import {  Button, Stack,Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Link } from 'react-router-dom';



const ExerciseCard = ({exercise}) => {
  return (
    <Link
    className='exercise-card'
    to={`/exercise/${exercise.id}`}
   >
   <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
   <Stack direction="row">
     <Button sx={{ ml: '21px', color: '#fff', background: '#FF2625', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
       {exercise.bodyPart}
     </Button>
     <Button sx={{ ml: '21px', color: '#fff', background: '#FF2625', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
       {exercise.target}
     </Button>
   </Stack>
   </Link>
  )
}

export default ExerciseCard