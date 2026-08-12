import React, { useState , useMemo } from 'react'
import { useNavigate } from 'react-router-dom';

function Sample() {
    const [count , setCount] = useState(0);

    const doubleCount = useMemo(() => {
        return count * 2;
    }, [count]);

    const navigate = useNavigate()

    const GoTo = () => {
        navigate('/dashboardpage')
    }
  return (
    <div>
        <h2>Count: {count}</h2>
        <h2>Double: {doubleCount}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={GoTo}>Go</button>
    </div>
  )
}

export default Sample