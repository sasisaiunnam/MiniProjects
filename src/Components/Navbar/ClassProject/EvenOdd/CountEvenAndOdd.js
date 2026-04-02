

import React, { useState } from 'react';
import "./Style.css";

function CountEvenAndOdd() {
  const [evenNum, setEvenNum] = useState(0);
  const [oddNum, setOddNum] = useState(1);

  // Logic Cleaned up for readability
  const handleEven = (delta) => {
    const next = evenNum + delta;
    if (next > 100 || next < 0) {
      alert(next > 100 ? "Cannot exceed 100" : "Cannot go below 0");
      setEvenNum(0);
    } else {
      setEvenNum(next);
    }
  };

  const handleOdd = (delta) => {
    const next = oddNum + delta;
    if (next > 100 || next < 0) {
      alert(next > 100 ? "Cannot exceed 100" : "Cannot go below 0");
      setOddNum(1);
    } else {
      setOddNum(next);
    }
  };

  return (
    <div className="counter-container">
      {/* Even Section */}
      <div className="counter-card even-card">
        <div className="card-header">
          <h2>Even Counter</h2>
          <span className="badge">Step: 2</span>
        </div>
        <div className="number-display">{evenNum}</div>
        <p className="status-text">Currently an Even Number</p>
        <div className="button-group">
          <button className="btn btn-inc" onClick={() => handleEven(2)}>Increment</button>
          <button className="btn btn-dec" onClick={() => handleEven(-2)}>Decrement</button>
        </div>
      </div>

      {/* Odd Section */}
      <div className="counter-card odd-card">
        <div className="card-header">
          <h2>Odd Counter</h2>
          <span className="badge">Step: 2</span>
        </div>
        <div className="number-display">{oddNum}</div>
        <p className="status-text">Currently an Odd Number</p>
        <div className="button-group">
          <button className="btn btn-inc" onClick={() => handleOdd(2)}>Increment</button>
          <button className="btn btn-dec" onClick={() => handleOdd(-2)}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default CountEvenAndOdd;