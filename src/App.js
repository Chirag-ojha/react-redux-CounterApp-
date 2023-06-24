import "./App.css";
import React, { useState } from "react";
// import Register from "./pages/Register";
import { useDispatch, useSelector } from "react-redux";
import {incNumber,decNumber} from "./action/action"
import {incDec} from "./reducer/incDec";
function App() {
  const countState = useSelector((state) => {
    console.log("state: " + state)
    return state
    // state.incDec;  
  });
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <p>Count:{countState}</p>
        <div style={{ display: "flex" }}>
          <button onClick={()=>dispatch({type:"Increament"})}>+</button>
          <button onClick={()=>dispatch({type:"Decreament"})}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
