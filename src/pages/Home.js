import React from 'react'
import Exercises from '../Components/Exercises'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'
import {Box} from '@mui/material'
import { useState } from 'react'
const Home = () => {
const [exercises,setExercises]=useState([]);
const [bodyPart,setBodyPart]=useState('all');

// console.log(bodyPart);
  return (

    <Box>
      <HeroBanner/>
      <SearchExercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
    </Box>
  )
}

export default Home
