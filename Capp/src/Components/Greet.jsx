import React from 'react'
import Contactclass from './Contactclass'

export default function Greet(props) {
  return (
    <div>
      <h2>Welcome {props.fname}</h2>
      <Contactclass fin = {props.fname}/>
    </div>
  )
}
