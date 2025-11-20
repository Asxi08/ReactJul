import React from 'react'
import Homeclass from './Components/Homeclass'
import Contactclass from './Components/Contactclass'
import Aboutclass from './Components/Aboutclass'
import Greet from './Components/Greet'

export default function App() {
  name = "Ashik"
  return (
    <div>
      <h1>Destiny</h1>
      <Greet fname={name}/>
      <Homeclass />
      <Contactclass />
      <Aboutclass />
      <h2>Thank you</h2>
    </div>
  )
}
