import React, { useEffect, useState } from "react"
import "./index.css" 

function UserTable(){

    const [users,setuser] = useState([]);
    //const [Datas,setDatas] = useState([])

    const getUsers =async()=>{
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url)
        const data = await response.json();

        setuser(data)
        
    }

    useEffect (()=>{
       

        getUsers(users);

    },[])

return(
    <>
    <div className="app-container">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                </tr>
            </thead>
            <tbody>
                {users.map(e=>(
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
    </>
)
}
export default UserTable