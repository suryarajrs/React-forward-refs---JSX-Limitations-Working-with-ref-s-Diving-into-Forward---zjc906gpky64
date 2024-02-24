import React ,{useRef,useState,useEffect} from 'react'
import '../styles/App.css';
import InputField from './InputField.js';
const App = () => {

const [values , setvalues]=useState()
const inputRef = useRef(null);


//code here 
  const settingValue = ()=>{

    const currentValue = inputRef.current.value
    setvalues(currentValue)

  }

  const focusInput = ()=>{
    inputRef.current.focus();
   
  }



 
  return (
    <div>
    <InputField ref={inputRef}  type="text"/><br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea" value={values}></textarea>

    </div>
  );
}


export default App;
