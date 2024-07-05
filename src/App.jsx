import { useState } from 'react'
import './App.css'

import MyRouter from './router'
import Navbar from './components/Navbar'
import Footer from './Pages/Footer'

function App() {


  return (
    <>
    <Navbar/>
    
    
    <MyRouter/>
    <Footer/>
      
    </>
  )
}

export default App
