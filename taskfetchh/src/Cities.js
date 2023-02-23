import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Cities() {
  let city = [];
  let s = 0;
  const { countryN } = useParams();
  // console.log(typeof country);
  const [cities, setCities] = useState([]);
  const [searchcityname, ssearchCity] = useState([]);
  const [searchValue, setSearchvalue] = useState("");
  const [state, setState] = useState("Fetching please wait...............");
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
        setState("Cities notttttt  present");
      });
  }, []);
  const HandleEvent = (e) => {
    let name = e.target.value;
    setSearchvalue(e.target.value);
    city = cities.filter((c) => c.toUpperCase().includes(name.toUpperCase()));
    console.log(city);
    ssearchCity(city);
  };

  return (
    <div>
      <h1> Country name is :{countryN} </h1>
      <input
        type="text"
        id="fname"
        name="fname"
        value={searchValue}
        onChange={HandleEvent}
        size="50"
      ></input>
      <input type="submit" value="Submit"></input>
      {/* {(cities.length)?cities.map((cityName)=>{return <p>{cityName}</p>}):<p>{state}</p>} */}
      {/* {(!searchcityname.length) ?
        cities.map((cityName) => { return <p>{cityName}</p> })
        : (searchcityname.length) ? searchcityname.map((cityName) => { return <p>{cityName}</p> }) : <p>No Results Found</p>} */}
      {searchValue ? (
        searchcityname?.length ? (
          searchcityname.map((cityName) => {
            return <p>{cityName}</p>;
          })
        ) : (
          <p>No Results Found</p>
        )
      ) : (
        cities.map((cityName) => {
          return <p>{cityName}</p>;
        })
      )}
      {/* 
      {<p>{state}</p>} */}
    </div>
  );
}
