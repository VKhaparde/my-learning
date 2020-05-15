import React, { useState } from 'react';

const Count = () => {
  const [num, setNum] = useState(0);
  if(num >= 5){
    throw new Error("I crashed");
  }
  return (
    <div>
      <p>You have clicked {num} times</p>
      <button onClick={() => {
        setNum(num + 1)
      }}>click me</button>
    </div>
  )
}
export default Count;
