// import React from 'react'

// function Clockfun() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Clockfun

// import React, { useEffect, useState } from 'react'
// //import './index.css'

// function Clock(props) {
//     const {showClock} = props
//     const [date,setDate] = useState(new Date());

//     useEffect(() => {
//         if(!showClock) return;

//         let timeId = setInterval(() => {
//             setDate(new Date())
//         },1000);
//         return () =>{clearInterval(timeId)}

//     },[showClock])
//     console.log("date:",date)

//   return (
//     <div className='clock-container'>
//         <h1 className='clock-heading'>clock</h1>
//         <p>{date.toLocaleTimeString()}</p> 

//     </div>
//   )
// }

// export default Clock