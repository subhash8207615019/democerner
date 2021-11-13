import React, {useState} from "react";
import "./Calculator.css"
const Calculator =()=>{
      const [result,setResult]=useState("");
      
      const buttonpress=(event)=>{
          setResult(result.concat(event.target.value))
      }
    
       const cleardisplay =()=>{
           setResult("");
       }
       const calculate =()=>{
           setResult(eval(result).toString())
       }
       return (
           <div className="calc">
                <input  type="text" placeholder="0" id="answer" value={result}/>
                  
                  <input type="button" value="9" className="button" onClick={buttonpress}/>
                  <input type="button" value="8" className="button" onClick={buttonpress}/>
                  <input type="button" value="7" className="button" onClick={buttonpress}/>
                  <input type="button" value="6" className="button" onClick={buttonpress}/>
                  <input type="button" value="5" className="button" onClick={buttonpress}/>
                  <input type="button" value="4" className="button" onClick={buttonpress}/>
                  <input type="button" value="3" className="button" onClick={buttonpress}/>
                  <input type="button" value="2" className="button" onClick={buttonpress}/>
                  <input type="button" value="1" className="button" onClick={buttonpress}/>
                  <input type="button" value="0" className="button" onClick={buttonpress}/>
                  <input type="button" value="." className="button" onClick={buttonpress}/>
                  <input type="button" value="+" className="button" onClick={buttonpress}/>
                  <input type="button" value="-" className="button" onClick={buttonpress}/>
                  <input type="button" value="*" className="button" onClick={buttonpress}/>
                  <input type="button" value="/" className="button" onClick={buttonpress}/>
                  <input type="button" value="%" className="button" onClick={buttonpress}/>
                  <input type="button" value="clear" className="button1 button" onClick={cleardisplay}/>
                  <input type="button" value="=" className="button1 button" onClick={calculate}/>
           
           </div>
       )
}

export default Calculator;