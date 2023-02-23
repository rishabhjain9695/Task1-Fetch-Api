import React from 'react'
import {useState,useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


export default function Fetchh() {
  
    const[country,setCountry]=useState([]);
    const [searchParams,setSearchParams]=useSearchParams();
    const[selectedCountry,setSelectedCountry]=useState("");
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
  }
  return (<>
    <div className='App text-bg-primary m-334'>
      <h1> this is dropdown button</h1>
    </div>
    <div className="dropdown App">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>  
  <select className="form-select" onChange={Handleeve}aria-label="Default select example">
  <option>Open this select menu</option>
 { country.map((e)=>{
    return(
    <option value={e.name}>{e.name}</option>
    );
 })}
</select>
</div>
    {/* <ul className="nav nav-pills">
    <li className="nav-item">
      <NavLink class="nav-link active"  onClick={(e)=>{navigate(`/${selectedCountry}`)
      e.preventDefault();
      navigate('/city');
      setSearchParams({Countries:`${selectedCountry}`})
      }} >Click</NavLink>
    </li>
    {navigate(`/city/${selectedCountry}`
    </ul> */}
    <button id="btn1" onClick={()=>{
       navigate(`${selectedCountry}`);   
    
    }}>click here</button> 
    {/* <Button selectedCountry={selectedCountry}/> */}

    
</>
  )
}
{/* <script>
    fetch("https://countriesnow.space/api/v0.1/countries/capital").then((response)=>{
        return response.json();
    }).then((x)=>{
        // for(var x in data){
        //     console.log(x);
        // }
        for(var y in x.data){
        document.write(x.data[y].name);
        }
    }); */}
    // document.getElementById("btn1").addEventListener("click",makerequest);
// function makerequest(props){
//   const init={
//     method:'POST',
//     header:{
//       'Content-Type':'application/json'
//     },
//     body:'{"country":"`${selectedCountry}`"}'
//   }
//   fetch("https://countriesnow.space/api/v0.1/countries/cities",init).then((response)=>response.json()).then((data)=>{console.log(data)}).catch((error)=>console.log(error))
// }