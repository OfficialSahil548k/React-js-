import './App.css'
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(5)

  // let counter between 0 and 20;
  function add_counter(){
    if(counter<20){
      setCounter(counter+1)
    }
    console.log(counter);
  }

  function remove_counter(){
    if(counter>0){
      setCounter(counter-1)
    }
    console.log(counter);
  }

  return (
    <>
     <h1>Sahil's React World</h1>
     <h2>Counter value : {counter}</h2>
     <hr />
     <button onClick={add_counter}> Add value</button>
     <hr />
     <button onClick={remove_counter}>Remove Value</button>
     <hr />
    </>
  )
}

export default App
