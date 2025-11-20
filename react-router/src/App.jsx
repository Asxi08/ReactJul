import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import { Route,Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>Welcome to react routing</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/contact" element = {<Contact/>}></Route>
      </Routes>
      
    </div>
  )
}
