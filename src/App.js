import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + counter);

  
  const dateString = date.toDateString();
  
  function reset(){
setCounter(0);
setStep(1);    
  }
  
  return (

    <>

      <div>

        <input type='range' onChange={(e)=>setStep(Number(e.target.value))} value={step} Min={0}/> {step} <br/>
        <button onClick={() => setCounter(counter - step)}>-</button>
        <input type='number' onChange={(e)=>setCounter(Number(e.target.value))} value={counter}/>
        
        {/* counter: <strong >{counter}</strong> */}
        <button onClick={() => setCounter(counter + step)} >+</button>

      </div>
      <div>
        {/* <button onClick={() => setStep(step>1?step-1: step)}>-</button>   */}
        {/* step: <strong >{step}</strong> */}
        {/* <button onClick={() => setStep(step + 1)} >+</button> */}

      </div>

      <div>{
        counter===0 ?`Today is ${dateString}`: 
            counter>0 ?`${counter} Days form now is, ${dateString}`:
                              `${counter} Days ago was, ${dateString}`

      
      }</div>



      {(counter!==0 || step!==1)&&     <button type='reset' onClick={reset}> reset</button>
 }
    </>

  );
}

export default App;
