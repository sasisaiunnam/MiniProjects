import React, { useState } from 'react'

function GoogleSearch() {
    const [search , setSearch] = useState("")
    const [res , setres] = useState(false)
    
    const changefunc =(e)=>{
      e.preventDefault();
      setSearch(e.target.value)
      
    }

    const Data = [{name:"Gopal"},{name:"Sasi"},{name:"Avinash"},{name:"Chandrashekar"},{name:"Basha"},{name:"Anil"},{name:"Naveen"}];
    const [store] = useState(Data);

    const getStore = store.filter(data=>
        data.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div>
      <div>
        <h2>Google Search</h2>
        <input style={{width:"100%",borderRadius:"10px"}} type="text" onChange={changefunc} onClick={()=>setres(true)} onMouseEnter={()=>setres(false)}/>
       

        {res?getStore.map((value,index)=>(
            <p key={index}>{value.name}</p>
        )):null}
      </div>
    </div>
  )
}

export default GoogleSearch
