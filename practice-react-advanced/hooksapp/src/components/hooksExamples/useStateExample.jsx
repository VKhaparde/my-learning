import React , {useState} from 'react';

const CounterExample = () =>{
  const [counter,setCounter]= useState(0);
  return (
    <div>
    <p>You have clicked {counter} times</p>
      <button onClick={(event) => setCounter(counter + 1)}>
        Click me </button>
    </div>
  );
}
export default CounterExample;
