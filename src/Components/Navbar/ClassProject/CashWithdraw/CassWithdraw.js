import React, { useState} from 'react'
import "./CashWithdraw.css";

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
  // ... existing imports and state logic ...

return (
  <div className="page-wrapper">
    <div className="cash">
      <h2>ATM Dashboard</h2>
      <p className="balance">Your balance: ₹{balance}</p>

      {/* New Wrapper for side-by-side layout */}
      <div className="sections-container">
        
        {/* Withdraw Section */}
        <div className="section">
          <p className="section-title">Withdraw</p>
          <input type="text" value={withdraw} placeholder="Amount" readOnly />
          <button className="submit-btn withdraw-btn" onClick={handle}>Submit</button>
          <div className="buttons">
            {[50, 100, 200, 500].map(amt => (
              <button key={amt} onClick={() => setwithdraw(amt)}>{amt}</button>
            ))}
          </div>
        </div>

        {/* Deposit Section */}
        <div className="section">
          <p className="section-title">Deposit</p>
          <input type="text" value={deposit} placeholder="Amount" readOnly />
          <button className="submit-btn deposit-btn" onClick={handledeposit}>Submit</button>
          <div className="buttons">
            {[50, 100, 200, 500].map(amt => (
              <button key={amt} onClick={() => setdeposit(amt)}>{amt}</button>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
);
}

export default CassWithdraw
