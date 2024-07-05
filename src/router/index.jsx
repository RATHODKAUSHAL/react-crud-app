import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Student from '../Pages/Student'
import StudentCreate from '../Pages/StudentCreate'
import StudentEdit from '../Pages/StudentEdit'
import Topics from '../Pages/Topics'
import Details from '../Pages/Details'

function MyRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/topics" element={<Topics/>}/>
        <Route path='/topic-details' element={<Details/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/students" element={<Student/>} />
        <Route path="/students/create" element={<StudentCreate/>} />
        <Route path="/students/:id/edit" element={<StudentEdit/>} />
    </Routes>
  )
}

export default MyRouter
