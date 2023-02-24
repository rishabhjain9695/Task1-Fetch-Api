import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function Cities() {
  const { countryN } = useParams();
  const [cities, setCities] = useState([]);
  const [searchValue, setSearchvalue] = useState("");
  const[searchcities,setSearchCities]=useState([]);
  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ country: countryN }),
  };
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/cities", init)
      .then((response) => response.json())
      .then((resp) => {
        setCities(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const HandleEvent = (e) => {
    setSearchvalue(e.target.value);
    const city=cities.filter((c) => c.toUpperCase().includes(e.target.value.toUpperCase()));
    setSearchCities(city);
    // console.log(city);
  };
  console.log(cities, "cities")
  function displaycities(){
    console.log(cities, "inside")
      return cities.length ? 
         cities.map((cityName) => {
          return <p className="text bg-info a rounded">{cityName}</p>;
        })
       : 
         <p  className="text bg-info a rounded">"no city found"</p>
    
  }

  return (
    <div className="aa">
   <Link className="btn btn-primary a btn w"  to='/'>Selectt country</Link>
      <h1> Country name is :{countryN} </h1>
      <input
        type="text"
        id="fname"
        name="fname"
        onChange={HandleEvent}
        size="50"
      ></input>
      { (!searchValue? displaycities():(
        searchcities.length!=0?searchcities.map((cityName) => {
          return <p  className="text bg-info a rounded">{cityName}</p>;
        }):( <p>"no search found"</p>)
      ))}
   
     


    </div>
  );
}
