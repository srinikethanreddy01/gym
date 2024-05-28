import React from "react";
import {Route,Routes} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import ExerciseDetails from "./pages/ExerciseDetails";
import Home from "./pages/Home"
import Footer from "./Components/Footer";
import {Box} from '@mui/material'

import './App.css'

const App = () => {

    return (
        <Box>

            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
            </Routes>

            <Footer/>

        
        </Box>

    )



}

export default App;