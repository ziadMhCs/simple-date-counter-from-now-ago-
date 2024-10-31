import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + counter);

  const dateString = date.toDateString();
  return (

    <>

      <div>

        <button onClick={() => setCounter(counter - step)}>-</button>
        counter: <strong >{counter}</strong>
        <button onClick={() => setCounter(counter + step)} >+</button>

      </div>
      <div>
        <button onClick={() => setStep(step>1?step-1: step)}>-</button>  
        step: <strong >{step}</strong>
        <button onClick={() => setStep(step + 1)} >+</button>

      </div>

      <div>{
        counter===0 ?`Today is ${dateString}`: 
            counter>0 ?`${counter} Days form now is, ${dateString}`:
                              `${counter} Days ago was, ${dateString}`

      
      }</div>
    </>

  );
}

export default App;
