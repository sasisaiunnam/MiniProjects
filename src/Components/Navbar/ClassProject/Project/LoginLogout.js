import React, { useState } from "react";

function LoginLogout() {
  const [switchvalue, setSwitchvalue] = useState(false);
  const [switchv, setSwitchv] = useState(false);

  

  return (
    <>
      <div>
        <h2>Welcome User</h2>
        <button
          style={{
            width: "120px",
            height: "40px",
            fontSize: "20px",
            backgroundColor: "blue",
            fontWeight: "bold",
            color: "yellow",
            borderRadius: "50px",
          }}
          onClick={() => setSwitchvalue(!switchvalue)}
        >
          {switchvalue ? "Log In" : "Log Out"}
        </button>
      </div>
      <div>
        <h2>Welcome User</h2>

        <div
          
          onClick={() => setSwitchv(!switchv)}
        >
          {switchv ? (<><h3>Please Subcribe</h3><button style={{
            width: "150px",
            height: "50px",
            fontSize: "20px",
            backgroundColor: "blue",
            fontWeight: "bold",
            color: "yellow",
            borderRadius: "50px",
          }}>Subcribe</button></>) :(<><h3>Thanks for subcribing!</h3><button style={{
            width: "150px",
            height: "50px",
            fontSize: "20px",
            backgroundColor: "blue",
            fontWeight: "bold",
            color: "yellow",
            borderRadius: "50px",
          }}>Subcribed</button></>)}
        </div>
      </div>
    </>
  );
}

export default LoginLogout;
