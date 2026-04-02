import React, { useEffect, useState } from 'react'
import "./Clock.css"

function Clock() {

    const [status,setstatus] = useState(false);
    const [data,setdata] = useState(new Date());
    

    useEffect(()=>{
        if(!status) return;
        const timer = setInterval(() => {
            const date = new Date()
           setdata(date.toLocaleTimeString());
          console.log("date",date.getTime()) 
         }, 1000);

         return ()=>clearInterval(timer);
        
    },[status]


    )
    
  return (
    <div className='app-container'>
      <button onClick={()=>setstatus(pre=>!pre)}>{status?"Hide Clock ":"Show Clock"}</button>
      {
        status && 
        <div>
            <h2>Clock</h2>
            <p>{data}</p>
        </div>
      }
    </div>
  )
}

export default Clock


