import React ,{useRef,useState,useEffect} from 'react';
import '../styles/App.css';

//complete the following using forward refs concept 

const clickHandler = ()=>{
  
}

const InputField= React.forwardRef((props ,ref)=>{
  {console.log("in input field  "+JSON.stringify(props.aaref))}
    return(
    <div>
      <input ref={ref} onClick={clickHandler} id="input" type="text"  />
    </div>
    )
    });
export default InputField;