import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Practice() {
    const[num1 , setNum1] = useState('')
    const[num2 , setNum2] = useState('')
    const[result , setResult] = useState('')

    const handleAdd = () => {
        setResult(parseInt(num1) + parseInt(num2))
    }
    const handleSub = () => {
        setResult(parseInt(num1) - parseInt(num2))
    }
    const handleMul = () => {
        setResult(parseInt(num1) * parseInt(num2))
    }
    const handleDiv = () => {
        setResult(parseInt(num1) / parseInt(num2))
    }
    
  return (
    <div>
        <h1>Simple Calculator</h1>

        <input type='number' placeholder='Enter a number' value={num1} onChange={(e)=>setNum1(e.target.value)}/><br/>
        <input type='number' placeholder='Enter a number' value={num2} onChange={(e)=>setNum2(e.target.value)}/><br/>
        <button onClick={handleAdd}>Add</button><br/>
        <button onClick={handleSub}>Sub</button><br/>
        <button onClick={handleMul}>Mul</button><br/>
        <button onClick={handleDiv}>Div</button>

        <h1>{result}</h1>
    </div>
  )
}

export default Practice