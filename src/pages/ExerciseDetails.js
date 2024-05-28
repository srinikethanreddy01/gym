import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercise from '../Components/SimilarExercise'
import {options,fetchData, youtubeOptions} from '../utils/fetchData'
import Details from '../Components/Details'
const ExerciseDetails = () => {

  const [exerciseDetails,setExerciseDetails]=useState({});
  const [exerciseVideos,setExerciseVideos]=useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id}=useParams();
  useEffect(()=>{

    const getDetails=async()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, options);
      setExerciseDetails(exerciseDetailData);

      const ytresults=await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
     
      setExerciseVideos(ytresults.contents);
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, options);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, options);
      setEquipmentExercises(equimentExercisesData);


    }
    getDetails();

  },[id])
  
  return (
    <Box>
      <Details exerciseDetails={exerciseDetails}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name}/>
      <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetails
