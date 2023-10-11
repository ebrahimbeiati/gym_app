import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer from './components/Footer'



const App = () => {
  return (
    <Box width='400px'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Exercise/:id' element={<ExerciseDetail/>} />
      </Routes>
    </Box>
  )
}

export default App