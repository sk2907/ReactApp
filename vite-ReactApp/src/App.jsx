import React from 'react'
import { useState } from 'react'
export default function App() {
 
let [counter,setCounter]=useState(0)

const  addValue=()=>{
  let stopNumber = 20
  if(counter<stopNumber){
    setCounter(counter+1)
  }
  else {
    console.log("cant add more value")
  }
}

const removeValue = ()=>{
  if (counter >0){
    setCounter(counter-1)
  }
  else{
    console.log("can't remove more value")
  }
}
const refreshValue = () =>{
  setCounter(0)
}

  return (
    <>
    <h1>counterValue: {counter} </h1>
    <button onClick={addValue} >Add</button>
    <button onClick={removeValue} >Remove</button>  
    <button onClick={refreshValue}>Refresh</button>
    </>
  )
}


