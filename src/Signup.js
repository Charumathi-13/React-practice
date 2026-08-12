import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Signup.scss"
import Header from './Common/Header'
import panda from "./Images/panda.jpeg"

function Signup() {

  const[name , setName] = useState("Charu")

  const[age , setAge] = useState(20)

  const handleIncrement = () => {
    setAge(age + 1)
  }

  const handleDecrement = () => {
    setAge(age - 1)
  }
  const handleReset = () => {
    setAge(age * 0)
  }
  return (
    <div>
      <Header/>
        <h1 className='page'>This is Signup Page</h1>
        <img src={panda}/><br/>
        <Link to="/loginpage">
        <button>Next</button>
        </Link>
        <h1>{name}</h1>

        <button onClick={handleIncrement}>+</button>
        <h2>{age}</h2>
        <button onClick={handleDecrement}>-</button><br/>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Signup