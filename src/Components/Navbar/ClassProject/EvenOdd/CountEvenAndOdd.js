import React, { useState } from 'react'
import "./Style.css"

function CountEvenAndOdd() {

    const [EvenNum,setEvenNum] = useState(0)
    const [OddNum,setOddNum] = useState(1)

    const changeIncre =()=>{
      
        setEvenNum(pre=>pre= (EvenNum<100?EvenNum+2:(setEvenNum(0),alert("not over the 100"))));
        
    }
    const changeIncreodd =()=>{
      
        setOddNum(pre=>pre= (OddNum<100?OddNum+2:(setOddNum(1),alert("not over the 100"))));
    }

    const changedecre =()=>{
      
        setEvenNum(pre=>pre= (EvenNum>0?EvenNum-2:(setEvenNum(0),alert("not over the 0"))));
        
    }
    const changedecreodd =()=>{
     
        setOddNum(pre=>pre= (OddNum>0?OddNum-2:(setOddNum(1),alert("not over the 0"))));
    }

  return (
    <>
    <div className='evenodd'>
    <div className='evenhandle'>
        <h2>Number Count in Even</h2>
        <h3>Count  {EvenNum}</h3>
        <p>Count is Even</p>
        <button onClick={changeIncre}>Increment</button>
        <button onClick={changedecre}>Decrement</button>
        <p>Increment By Random Number Between 0 to 100</p>

    </div>
    <div className='oddhandle'>
        <h2>Number Count in Odd</h2>
        <h3>Count  {OddNum}</h3>
        <p>Count is Odd</p>
        <button onClick={changeIncreodd}>Increment</button>
        <button onClick={changedecreodd}>Decrement</button>
        <p>Increment By Random Number Between 0 to 100</p>

    </div>
    </div>
    </>
  )
}

export default CountEvenAndOdd
