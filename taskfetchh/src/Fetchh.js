import React from 'react'
import {useState,useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
export default function Fetchh() {
    const[country,setCountry]=useState([]);
    const[selectedCountry,setSelectedCountry]=useState("");
    const[select,setSelect]=useState(false);
   
    const navigate=useNavigate();
    useEffect(()=>{
        fetch("https://countriesnow.space/api/v0.1/countries/capital").then((response)=>{
        return response.json();
    }).then((x)=>{
            setCountry(x.data); 
    })},[]);
  const Handleeve=(e)=>{
    e.preventDefault();
    setSelectedCountry(e.target.value);
    setSelect(true);
  }
  return (<>
  <div className='a'>
  <div className="p-3 mb-2 bg-primary text-white" >
      <h1 className='App'> Select Country Name</h1>
    </div>
    <div className="">

  <select className="form-select  container w-50  mt-5" onChange={Handleeve}aria-label="Default select example">
  <option>Open this select menu</option>
 { country.map((e)=>{
    return(
    <option value={e.name}>{e.name}</option>
    );
 })}
</select>
</div>
<div className='btnfetch'><button id="btn1" className='btn btn-primary mt-3 centree' onClick={()=>{
       navigate(`${selectedCountry}`);   
       if(!select){
       alert("please select country")
       }

    }}>click here</button> </div>
  </div>
    
    
  

    
</>
  )
}