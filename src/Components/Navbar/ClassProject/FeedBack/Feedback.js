import React, { useState } from "react";
import "./Feedback.css"

function Feedback() {
  const [feed, setfeed] = useState();

  const emoji = ["😃", "😑","😡"];

 
  const result = emoji.map((value, index) => (
    <button key={index} onClick={() => setfeed(value)}>
      {value}
    </button>
  ));

  return (
    <>
    <div className="emoji-wrapper">
    <div className="emoji">
      {feed ? (
        <>
          <button>{feed}</button>
          <p>Thank you</p>
        </>
      ) : (
        <>
          <h2>How Satisfied are you with our Customer Support Performance?</h2>
          <div>{result ? result : null}</div>
        </>
      )}
    </div>
    </div>
    </>
  );
}

export default Feedback;
