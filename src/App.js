import React, { useState } from "react";
import Timer from "./compenent/Timer";

function App() {
  console.log("App started ");

  const [showTimer, setShowTimer] = useState(false);
  const [btnText, setBtnText] = useState("타이머 시작");

  return (
    <div>
      {showTimer && <Timer />}
      <button
        onClick={() => {
          showTimer ? setBtnText("타이머 시작") : setBtnText("타이머 종료");
          setShowTimer(!showTimer);
        }}
      >
        {btnText}
      </button>
    </div>
  );
}

export default App;
