import React from 'react';
import {useState} from 'react';

function App1(apple) {
  let handleClick = () =>{
    console.log("click");
    //setcount1(count1+1);
    setcount(count+1);
  };
  const [count,setcount]=useState(0);
  //const [count1,setcount]=useState(0);
  let handleClick1 = () =>{
    console.log("click");
    setcount1(count1+1);
  };
  const [count1,setcount1]=useState(0);
  return (
    <div>
      <h2>{apple.message}</h2>
      <button onClick={handleClick}>clicked {count}</button>
      <button onClick={handleClick1}>clicked {count1}</button>
    </div>
  );
}

export default App1;
