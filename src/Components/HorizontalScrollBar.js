import React from 'react'
import {Box} from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu ,VisibilityContext} from 'react-horizontal-scrolling-menu'
import './scroll.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const HorizontalScrollBar = ({data,bodyPart,setBodyPart}) => {
  const settings={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:3,
    // prevArrow: <CustomPrevArrow />, 
    // nextArrow: <CustomNextArrow />
    
  }
    
      
      
    
  return (
    <Slider {...settings}>
        {data.map((item)=>( 
            <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
                    <BodyPart item={item} bodyPart={bodyPart}setBodyPart={setBodyPart}/>
             </Box>

        ))}
      
    </Slider>
  )
}


export default HorizontalScrollBar
