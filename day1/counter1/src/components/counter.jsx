import React from "react";
import '../App.js';

const Counter = ()=>{
    const [counter, setCounter] = React.useState(5);
    const handleIncreament = (value) =>{
      setCounter(counter+value);
     // console.log(counter)
    }
    return(
        <>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={() => handleIncreament(1)} > + </button>&nbsp;
            <button onClick={() => handleIncreament(-1)}> - </button>
        </>
    )
};
export {Counter};