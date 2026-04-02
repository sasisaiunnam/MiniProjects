import React, {  useState } from 'react'
import "../ClassStyle.css"

function LettersCalculator() {

    const [value ,setvalue] = useState("")
   
   
    
    const changeinput =(e)=>{
        const val = e.target.value;
        setvalue(val)
    
    }

  return (
    <div className='letter'>
        <h2>Calculate the Letters you enter</h2>
        <input type="text" placeholder='enter the please' value={value} onChange={changeinput}/>
        <button>No of Letters :{value.length}</button>
      
    </div>
  )
}

export default LettersCalculator
