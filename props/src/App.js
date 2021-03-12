
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import React, {useState} from 'react'
import Show from './Show'
import Input from './Input1'

function App() {
  const [val,setValue] = useState()


  

  return (
    <div className="App">
  
         <Form   value={val} onChange={(e)=> setValue(e.target.value)}/>
         <Input />


        
     
<button  onClick={()=>{
  



  <Show value={()=>{
   
  }}/>


}}>submit</button>
   </div>
  );
}

export default App;
