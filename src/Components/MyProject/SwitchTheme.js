import React, {  useState } from 'react'

function SwitchTheme() {

  const [theme , setTheme] = useState("Light");

  const switchfun = ()=>{
    setTheme(theme==="Dark"?"Light":"Dark")
  }

  

  return (
    <div>
      <div className='theme-button'>
        <div style={{backgroundColor:theme==="Light" ?"white":"#1e1e1e"}}>
        <h3>Switch Theme</h3>
        <button onClick={()=>switchfun()}>{theme}</button>
        </div>
      </div>
      
    </div>
  )
}

export default SwitchTheme
