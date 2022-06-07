import { useState, useEffect } from "react";
import "./styles/style.css";
import ClimateCore from "./pages/climateCore/ClimateCore";

function App() {
  const [res,setRes]=useState();


  return (
    <div style={{backgroundColor: '#efefef'}}>
      <ClimateCore />
    </div>
  );
}

export default App;
