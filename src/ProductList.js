import React from 'react'

import { useDispatch , useSelector } from "react-redux";
import {addNumber , subtractNumber , multiplyNumber , divideNumber , modNumber , powerNumber , evenOddNumber} from './Redux/action' 

function ProductList() {
    const dispatch = useDispatch();
    const addResult = useSelector((state) => state.add.result);
    const subtractResult = useSelector((state) => state.subtract.result);
    const multiplyResult = useSelector((state) => state.multiply.result);
    const divideResult = useSelector((state) => state.divide.result);
    const modResult = useSelector((state) => state.mod.result);
    const powerResult = useSelector((state) => state.power.result);
    const evenOddResult = useSelector((state) => state.evenodd.result);

    const handleSubmit = () => {
      if(action.payload % 2 == 0){
        alert("The number is even")
      }else{
        alert("The number is odd")
      }
    }
  return (
    <div>
        <label>Redux Counter</label>

    <h3>Add Result: {addResult}</h3>
    <button onClick={() => dispatch(addNumber(5))}> Add 5</button>

    <h3>Subtract Result: {subtractResult}</h3>
    <button onClick={() => dispatch(subtractNumber(3))}> Subtract 3</button>

    <h3>Multiply Result: {multiplyResult}</h3>
    <button onClick={() => dispatch(multiplyNumber(2))}> Multiply 2</button>

    <h3>Divide Result: {divideResult}</h3>
    <button onClick={() => dispatch(divideNumber(4))}> Divide 4</button>

    <h3>Modulo Result: {modResult}</h3>
    <button onClick={() => dispatch(modNumber(2))}> Mod 2</button>

    <h3>Power Result: {powerResult}</h3>
    <button onClick={() => dispatch(powerNumber(3))}> Power 3</button>

    <h3>EvenOdd Result:</h3>
    <input type='number' placeholder='Enter ur number'/><br/>
    <button onClick={() => dispatch(evenOddNumber)}> Check</button>
    </div>
  )
}

export default ProductList 