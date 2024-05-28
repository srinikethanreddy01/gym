import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
import {BrowserRouter} from 'react-router-dom'
import { keyframes } from '@mui/styled-engine';

const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<BrowserRouter><App/></BrowserRouter>)
// ReactDom.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));  