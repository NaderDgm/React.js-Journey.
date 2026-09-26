import React, { useEffect, useState } from "react";

export function Covid() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/countries")
    .then(res=>res.json())
    .then(result=>setData(result))
  }, []);
  
  return (
    <ul>
      {data.map((country)=>(
        <li key={country.id}>
          {country.country} - Cases: {country.cases} - Deaths: {country.deaths}
        </li>
      ))}
    </ul>
  );
}

export default Covid;