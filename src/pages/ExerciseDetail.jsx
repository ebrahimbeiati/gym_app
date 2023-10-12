import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import Details from '../components/Details';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';


const ExerciseDetail = () => {
  return (
    <Box>
    <Details/>
    <ExerciseVideos/>
    <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetail