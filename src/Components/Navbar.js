import React from 'react'
import {Stack} from '@mui/material'
import { Link } from 'react-router-dom'

import Logo from "../assets/images/Logo.png"
const Navbar = () => {

    const link={
        textDecoration:'none',
        color:'#3A1212'
    }
  return (

    <Stack direction="row" justifyContent="space-around" sx={{gap:{sm:'122px',xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none' }} px='20px'>
        <Link to="/">
            <img src={Logo}/>
        </Link>

        <Stack direction="row" gap="40px" font-size="24px" alignItems="flex-end">
            <Link to="/" style={link}>Home</Link>
            <Link to="/exercise" style={link}>exercise</Link>

        </Stack>
        <br/>

    </Stack>

    
    
  )
}

export default Navbar
