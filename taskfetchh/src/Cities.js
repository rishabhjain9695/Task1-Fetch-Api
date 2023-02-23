import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Cities() {
  const { countryN } = useParams();
  // console.log(typeof country);
  const [cities, setCities] = useState([]);
  const[state,setState]=useState("Fetching please wait...............");
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ country: countryN })
  }
  // useEffect(() => {
  
  //   fetch("https://countriesnow.space/api/v0.1/countries/cities", init).then((response) => response.json()).then((resp) => { setCities(resp.data) }).catch((error)=>{
  //     if(error.response.value==500){
  //       setState("not present");
  //     }}, []))}
  useEffect(()=>{
    fetch("https://countriesnow.space/api/v0.1/countries/cities", init).then((response) => response.json()).then((resp) => { setCities(resp.data) }).catch((error)=>{

            setState("Cities notttttt  present");
      // }
    })
  })
  return (
    <div >

      <h1> Country name is :{countryN} </h1>
      {/* {(cities.length)?cities.map((cityName)=>{return <p>{cityName}</p>}):<p>{state}</p>} */}
      {cities.map((cityName)=>{return <p>{cityName}</p>})}
      {<p>{state}</p>}
    </div>
  )
  }
