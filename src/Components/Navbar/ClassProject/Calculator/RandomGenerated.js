import React, { useState } from 'react'
import "../ClassStyle.css";

function RandomGenerated() {

    const [numberval ,setnumberval] = useState(0)
    
    const randomfunc = ()=>{
        const ran = Math.floor((Math.random()*100)+1)
        console.log("random ",ran)
        setnumberval(ran)
        
    }

  return (
    <div className='random'>
      <h1>RandomNumber Generate</h1><br />
      <button onClick={randomfunc}>Generate</button>
      {numberval}
    </div>
  )
}

export default RandomGenerated
