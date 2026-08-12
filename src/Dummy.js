import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'; 

function Dummy() {

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };
    
    const [num , setNum] = useState(0)

    const handleIncrement = () => {
        setNum(num + 1)
    }

    const navigate = useNavigate();

    const GoTo = () => {
        navigate('/dashboardpage')
    }
      return (
    <div>
        <input type='text' ref={inputRef} placeholder='Type something here...'/>
        <button onClick={focusInput}>Focus Input</button>
        <h1>{num}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={GoTo}>Go</button>
    </div>
  )
}

export default Dummy