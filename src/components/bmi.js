import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const BMI=()=> {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState('');
  const [message,setMessage]=useState('');
  let imgsrc;
  const calculateBMI = (event) => {
    event.preventDefault();
    if (weight <= 0 || height <= 0){
      alert("Please enter a valid Weigth and heigth")
    }
    else{
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBMI(bmi.toFixed(2))

    if(bmi < 18.5 ){
      setMessage('You are underweight')
    }else if(bmi >= 18.5 && bmi <25){
      setMessage('You are a healty person')
    }else if(bmi>=25 && bmi < 30){
      setMessage('You are overweight')
    }else{
      setMessage("You are Obese")
    }
    } 
  };
  if (bmi<1){
    imgsrc=null;
  }
  else if(bmi<18.5){
    imgsrc=require('./images/under.jpg');
  }
  else if(bmi>=18.5 && bmi<25){
    imgsrc=require('./images/perfect.jpg');
  }
  else if(bmi>=25 && bmi <30){
    imgsrc=require('./images/over.jpg');
  }
  else{
    imgsrc=require('./images/obesity.jpg')
  }
 
    const handleReload = () => {
      window.location.reload();
    }
    const navigate=useNavigate()

  return (
    <div className="App-header">
      <form onSubmit={calculateBMI}>
        <div className='div'>
        <h2 className='center'>BMI Calculator</h2>
      <div>
        <label>Height (cm):</label>
        <input type="number" id="height" onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input type="number" id="weight" onChange={(e) => setWeight(e.target.value)} />
      </div><br></br>
      <button className="button">Submit</button>
      <button className="button" onClick={handleReload}>Reload</button>
    
      <div className='center'>
     <p>Your BMI is:{bmi}</p>
     </div>
      <p className='center'>{message}</p>
      <div className='img-div'>
        <img src={imgsrc} alt=""></img>
      </div>
      <button onClick={()=>navigate('calculate')}>help</button>
      </div>
      </form>
      </div>
    
  );
}

export default BMI;

