import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Cities() {
  let city = [];
  let s = 0;
  const { countryN } = useParams();
  const [cities, setCities] = useState([]);
  const [searchcityname, searchcity] = useState([]);
  const [searchValue, setSearchvalue] = useState("");
  const[data,setState]=useState("");
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
    setSearchvalue(e.target.value);
    city = cities.filter((c) => c.toUpperCase().includes(e.target.value.toUpperCase()));
    // console.log(city);
    searchcity(city);
  };

  return (
    <div className="">
      <h1> Country name is :{countryN} </h1>
      <input
        type="text"
        id="fname"
        name="fname"
        onChange={HandleEvent}
        size="50"
      ></input>
      <input type="submit" className="btn btn-primary " value="Submit"></input>
      {searchValue ? (
        searchcityname?.length ? (
          searchcityname.map((cityName) => {
            return <p className="text">{cityName}</p>;
          })
        ) : (
          <p  className="text">No Results Founddd</p>
        )
      ) : (
        cities.map((cityName) => {
          return <p  className="text">{cityName}</p>;
        })
      )}
      {/* 
      {<p>{state}</p>} */}
    </div>
  );
}
