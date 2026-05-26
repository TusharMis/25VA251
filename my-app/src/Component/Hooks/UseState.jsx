import React, { useState } from "react";
import "./UseState.css";

function UseState() {
  const [color, setColor] = useState("blue");

  const changeColor = () => {
    // setColor('red');
    setColor(color == "blue" ? "red" : "blue");
  };

  //counter using use state
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };
  const decrease = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  //timer
  const [time, setTime] = useState(0);

  //   if (time < 10) { // limit to avoid infinite loop
  setTimeout(() => {
    setTime(time + 1);
  }, 1000);
  // instead of useState for timer use , useEffect
  /*  useState → for storing data 
useEffect → for side effects (API, timers, subscriptions) */

  return (
    <>
      <h2>Hooks</h2>
      <p>
        React Hooks are special JavaScript functions introduced in version 16.8
        that allow you to use state and other features (like lifecycle methods
        and context) inside functional components without writing a class.
      </p>
      <h3>UseState</h3>
      <p style={{ color: color }} onMouseOver={changeColor}>
        Adds local state to functional components. It returns a pair: the
        current state value and a function to update it. The first value, color,
        is our current state. The second value, setColor, is the function that
        is used to update our state.
      </p>
      <h2>Counter {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>

      <h2>Timer {time}</h2>
    </>
  );
}

export default UseState;