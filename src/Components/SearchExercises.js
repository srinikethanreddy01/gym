import React from 'react'
import { Stack, Button, Typography, Box, TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import { fetchData,options } from '../utils/fetchData'
import ExerciseDetails from '../pages/ExerciseDetails'
const SearchExercises = ({exercises,setExercises,bodyPart,setBodyPart}) => {
    const [search,setSearch]=useState();
    // const [Exercises,setExercise]=useState([]);

    const [bodyParts,setBodyParts]=useState([]);
    useEffect(()=>{
        const fetchExercisesData=async()=>{
            const res=await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",options);
            console.log(res)
            setBodyParts(["all",...res])

        }
        fetchExercisesData();
        

    },[])

    const handleSearch=async()=>{

        if(search){

            const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`, options);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
         
            setSearch("");
            setExercises(searchedExercises);
            console.log(exercises)
            // console.log()

        }

    }


    return (
        <Stack direction='column' mt='40px' alignItems='center'>
            <Typography fontWeight={600} sx={{ fontSize: { lg: '50px', xs: '20px' } }} textAlign='center' mb='50px'>Awesome Exercises You <br /> Should Know</Typography>
            <Box position="relative" mb='70px'>
                <TextField sx={{ input: { border: 'none', borderRadius: '4px', fontWeight: '700' }, width: { lg: '700px', xs: '300px' } }} value={search} onChange={(e) => {setSearch(e.target.value.toLowerCase())}} placeholder="Search for Execises" type="text" height='76px' />
                <Button className="search-btn" sx={{ backgroundColor: '#ff2625', color: '#fff', textTransform: 'none', width: { lg: '175px', xs: '80px' }, position: 'absolute', height: '52px' }} onClick={handleSearch}> Search</Button>
            </Box>

            <Box sx={{position:'relative',width:'100%', p:'20px'}}>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>

        </Stack>
    )
}

export default SearchExercises;
