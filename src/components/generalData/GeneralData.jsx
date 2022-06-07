import React, { useEffect, useState, useContext } from "react";
import sun from "../../assest/1.png";
import { API } from "../../utility/API";
import apiHock from "../../hoocks/apiHock";
import selectPic from "../../hoocks/selectPic";
import CitySelectCtx from "../../context/citySelectCtx";

const GeneralData = () => {


  const [loading, setloading] = useState(true)
  const [dataApic, setdataApi] = useState()

  const {pic} = selectPic()

  
  const {dataApi} = apiHock();  
  const { selectCitys, setselectCitys } = useContext(CitySelectCtx)

  useEffect(()=>{
    setloading(false)
    
  },[dataApic,pic])


  if (loading) {
    return (<h1>loading</h1>)
  } 

  return (
    <nav className="generalData">
      {pic&&<img src={pic[0]} alt="s" />}
      {dataApi && <div className="containerData">
        <p>
        {dataApi.current.condition.text}
        </p>
        <h2>{Math.round(dataApi.current.temp_c)}°</h2>

        <h3>{dataApi.location.name}</h3>
      </div>}
    </nav>
  );
};
export default GeneralData;
