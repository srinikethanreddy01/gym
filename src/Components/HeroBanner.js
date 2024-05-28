import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'
import banner from '../assets/images/musclesboy.png'
const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'220px',xs:'70px'},ml:{sm:'50px'}}} position="relative"x p='20px'>
        <Typography color='#ff2625' fontWeight={700} fontsize='40px'>
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}} mb='24px'>
            Sweat , Smile <br/> and Repeat
        </Typography>
        <Typography fontSize='22px' LineHeight="35px">
           CheckOut the most effective 
           Exercises
        </Typography>
       
        <Button variant="contained" color="error" sx={{mt:{lg:'25px',xs:'10px'}}} href="#exrcises">Explore Exercises</Button>

        <Typography fontWeight={600} fontSize="200px" sx={{opacity:'0.1'}}>Exercise</Typography>
        <img src={banner} className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
