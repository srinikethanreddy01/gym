import React from 'react'
import { Link } from 'react-router-dom'
import { Stack,Typography,Button } from '@mui/material'
const ExerciseCard = ({index,exercise}) => {
  return (
   <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
    <Stack direction='row'>
        <Button sx={{ml:'21px',color:'#fff',background:'#ffa9a9',fontSize:'14px' ,borderRadius:'20px',textTransform:'capitalize'}}>{exercise.bodyPart}</Button>
        <Button sx={{ml:'21px',color:'#fff',background:'#fcca57',fontSize:'14px' ,borderRadius:'20px'}}>{exercise.target}</Button>
    </Stack>
    <Typography fontWeight='bold' color='#000' fontSize='24px'>{exercise.name}</Typography>
   </Link>
  )
}

export default ExerciseCard
