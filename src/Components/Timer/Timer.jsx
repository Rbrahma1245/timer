import { useState } from "react";
import "./Timer.css"

function Timer() {
  let [count, setCount] = useState(0);

  function handleClick() {
    setInterval(() => {
      setCount(count++);
    }, 1000);
  }

  return (
    <div className="container" >
      <button className="btn" onClick={handleClick}>Click</button>
      <p>{count}</p>
    </div>
  );
}

export default Timer;
