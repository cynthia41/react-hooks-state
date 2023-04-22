import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }
function Counter() {
  const [currentCount, setCount] = useState(0);

  function increment() {
    console.log(`before setState: ${currentCount}`);

    setCount((currentCount)=>currentCount + 1); 
    setCount((currentCount)=>currentCount + 1);
  

    console.log(`after setState: ${currentCount}`);
  }
  
  return <button onClick={increment}>i have been clicked{currentCount}times</button>;
}

export default Counter;
