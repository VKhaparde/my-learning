import React , {useState} from 'react';
import { useEffect } from 'react';

const CounterExample = () =>{
  const [counter,setCounter]= useState(0);
  useEffect(()=>{
        // Update the document title using the browser API
    console.log('hello I am here in useEffect to update the document title');
    document.title = `You have clicked ${counter} times`;
    console.log('document.title : ',document.title)
  });
  return (
    <div>
    <p>You have clicked {counter} times</p>
      <button onClick={(event) => setCounter(counter + 1)}>
        Click me </button>
    </div>
  );
}
export default CounterExample;
