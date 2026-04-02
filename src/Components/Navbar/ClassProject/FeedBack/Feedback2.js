import React from 'react'
import Feedback from './Feedback'

function Feedback2(props) {
    const {value} = props
    console.log(props.value)
    const feedreturn =()=>{
      <>
      <Feedback/>
      </>
      console.log("feedreturn")
    }

  return (
    <div>
        <button onClick={feedreturn}>{value}</button>
       <p>Thank you</p>
    </div>
  )
}

export default Feedback2
