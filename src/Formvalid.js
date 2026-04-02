import React, { useState } from 'react'

function Formvalid() {

    const[data,setData] = useState();
    const[arrdata, setArrdata] = useState([]);

    function check(){
        setArrdata([...arrdata,data])
    }

  return (
    <div>
      <input type="text" name="name" onChange={e=>setData(e)} />
      <input type="button" value="submit" onClick={check} />

    {arrdata.map((index)=>{
        <p key={index}>{index}</p>
    })}
      <p></p>
    </div>
  )
}

export default Formvalid
