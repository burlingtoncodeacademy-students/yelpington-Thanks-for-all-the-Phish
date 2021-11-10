import React, { useEffect, useState } from "react";
import "./App.css";
import Map from "./components/Map.js";


function App() {
  const [center, setCenter] = useState([44.4708472, -73.2167609])
  const [marker, setMarker] = useState()
  
 
  return (
    <>
      <Map center={center} />
    </>
    
  );
}

export default App;



// const [data, setData] = useState();

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res);
  //     });
  // });

  // data.map((item) => {
    //   {console.log(item.name)}
    // <h1>{item.name}</h1>
    // })