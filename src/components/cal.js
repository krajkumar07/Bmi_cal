import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

const Calculator=()=> {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  function handleClick(e) {
    const value = e.target.getAttribute("data-value");

    switch (value) {
      case "clear":
        setDisplay("");
        setResult("");
        break;
      case "equal":
        setResult(eval(display));
        break;
      default:
        setDisplay(display + value);
        break;
    }
  }
  const navigate=useNavigate()

  return (
    <div className="hello">
      <button onClick={()=>navigate(-1)}>previes page</button>
      <h2 className="center">     Use Calculator for change units of Height and weigth. </h2>
      <div className="center">
      <p>1 feet = 30.48 cm</p>
      <p>1 pound = 0.454 kg</p>
      </div>
    <div className="calculator">
      <div className="display">
        {result ? <span>{result}</span> : <span>{display}</span>}
      </div>
      <div className="buttons">
        <button onClick={handleClick} data-value="7">
          7
        </button>
        <button onClick={handleClick} data-value="8">
          8
        </button>
        <button onClick={handleClick} data-value="9">
          9
        </button>
        <button onClick={handleClick} data-value="/">
          ÷
        </button>
    
        <button onClick={handleClick} data-value="4">
          4
        </button>
        <button onClick={handleClick} data-value="5">
          5
        </button>
        <button onClick={handleClick} data-value="6">
          6
        </button>
        <button onClick={handleClick} data-value="*">
          ×
        </button>
        
        <button onClick={handleClick} data-value="1">
          1
        </button>
        <button onClick={handleClick} data-value="2">
          2
        </button>
        <button onClick={handleClick} data-value="3">
          3
        </button>
        <button onClick={handleClick} data-value="-">
          -
        </button>

        <button onClick={handleClick} data-value="0">
          0
        </button>
        <button onClick={handleClick} data-value=".">
          .
        </button>
        <button onClick={handleClick} data-value="clear">
          C
        </button>
        <button onClick={handleClick} data-value="+">
          +
        </button>
        <button onClick={handleClick} data-value="equal" className="button">
          =
        </button>
      </div>
    </div>
    </div>
  );
}

export default Calculator;
