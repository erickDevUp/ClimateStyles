import React, { useState, useEffect } from "react";
import TempData from "../tempData/TempData";
import { API } from "../../utility/API";
import apiHock from "../../hoocks/apiHock";
import selectPic from "../../hoocks/selectPic";

const Temperature = () => {
  const [loading, setloading] = useState(true);

  const { dataApi } = apiHock();

  const { futurePic } = selectPic();

  useEffect(() => {
    if (dataApi && futurePic) {
      setloading(false);
    }
  }, [dataApi, futurePic]);

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <nav className="temperature">
        <TempData
          temp={Math.round(dataApi.forecast.forecastday[0].day.avgtemp_c)}
          imgClimate={futurePic[0]}
          date={dataApi.forecast.forecastday[0].date}          
        />
        <TempData
          temp={Math.round(dataApi.forecast.forecastday[1].day.avgtemp_c)}
          imgClimate={futurePic[1]}
          date={dataApi.forecast.forecastday[1].date}
        />
        <TempData
          temp={Math.round(dataApi.forecast.forecastday[2].day.avgtemp_c)}
          imgClimate={futurePic[2]}
          date={dataApi.forecast.forecastday[2].date}
        />
      </nav>
    </>
  );
};
export default Temperature;
