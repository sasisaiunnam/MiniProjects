// import React from 'react'

// function Footer({children}) {
//   return (
//     <div>
        
//       <h2>this is footer page</h2>
//       {children}
//       {/*this children use name is  component composetion */}
//     </div>
//   )
// }

// export default Footer

//import React from 'react'
import { useState } from "react"
import HeaderEx from "../Header/HeaderEx"



function UserProfiles() {
  const [inpserach, setinpsearch] = useState("");

const changeinput =(e)=>{
  setinpsearch(e.target.value)
} 

  const user =[{
    unitNo:1,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJatSyGqo7LpKZ3Tp3WYgFORdhu3vqSD1lJ-MESw2oRVT-giSBEtzVqTs&s",
    name:"akshay",
    role:"Senior Developer"
  },
  {
    unitNo:2,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJatSyGqo7LpKZ3Tp3WYgFORdhu3vqSD1lJ-MESw2oRVT-giSBEtzVqTs&s",
    name:"sachin",
    role:"junior Developer"
  },
  {
    unitNo:3,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJatSyGqo7LpKZ3Tp3WYgFORdhu3vqSD1lJ-MESw2oRVT-giSBEtzVqTs&s",
    name:"tiger",
    role:"Testing"
  },
  {
    unitNo:4,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJatSyGqo7LpKZ3Tp3WYgFORdhu3vqSD1lJ-MESw2oRVT-giSBEtzVqTs&s",
    name:"ritik",
    role:"Manager"
  }
]

  const [inputvalue] =useState(user)

  const searchresult =inputvalue.filter(prev=>prev.name.toLowerCase().includes(inpserach.toLowerCase()))

  return (
    <div>
      <input type="text" value={inpserach} onChange={changeinput} />
      {/* {user.map((ele)=>(
        <HeaderEx users={ele}
        key ={ele.unitNo}
        id={ele.unitNo}
        
      />
      
      ))} */}

      {searchresult.map((eachitem)=>(
        <HeaderEx users ={eachitem}
        key={eachitem.unitNo}/>
      ))}
     
      
    </div>
  )
}

export default UserProfiles

