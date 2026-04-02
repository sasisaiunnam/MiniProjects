import React, { useState} from 'react'
import "./index.css";

function CassWithdraw() {

  const [balance , setBalance] = useState(1000);
  const [withdraw , setwithdraw] = useState("");
  const [deposit , setdeposit] = useState("");


  const handle =()=>{
    (balance!==0)?setBalance(prev=>prev-withdraw):alert("not balance")
    setwithdraw("")
  }

  const handledeposit =()=>{
    setBalance(prev=>prev+deposit)
    setdeposit("")
  }

 
console.log("withdraw amount",withdraw)
console.log("deposit amount",deposit)
  return (
   <>
      <div className="page-wrapper">
  <div className="cash">
    <h2>Cash Withdraw</h2>
    <p className="balance">Your balance ₹{balance}</p>

    <div className="section">
      <p className="section-title">Cash Withdraw</p>
      <input
        type="text"
        placeholder="Choose sum (In Rupees)"
        value={withdraw}
        readOnly
      />
      <button
        className="submit-btn withdraw-btn"
        onClick={handle}
      >
        Submit
      </button>

      <div className="buttons">
        <button onClick={() => setwithdraw(50)}>50</button>
        <button onClick={() => setwithdraw(100)}>100</button>
        <button onClick={() => setwithdraw(200)}>200</button>
        <button onClick={() => setwithdraw(500)}>500</button>
      </div>
    </div>

    {/* Deposit Section */}
    <div className="section">
      <p className="section-title">Cash Deposit</p>
      <input
        type="text"
        placeholder="Choose sum (In Rupees)"
        value={deposit}
        readOnly
      />
      <button
        className="submit-btn deposit-btn"
        onClick={handledeposit}
      >
        Submit
      </button>

      <div className="buttons">
        <button onClick={() => setdeposit(50)}>50</button>
        <button onClick={() => setdeposit(100)}>100</button>
        <button onClick={() => setdeposit(200)}>200</button>
        <button onClick={() => setdeposit(500)}>500</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CassWithdraw
