import { useEffect } from "react";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const city ='BARCELONA '
const airTop = 'no'
const alerts = 'no'
const apiMode = 'forecast'
const urlApi ='https://api.weatherapi.com/v1'
let lat;
let lon;
export const API = async ({selectCitys}) => {

  const query = selectCitys==''?'auto:ip':selectCitys;
/*
  navigator.geolocation.getCurrentPosition((position) => {
   lat = position.coords.latitude
   lon = position.coords.longitude;
   console.log(lat);
   console.log(lon);  
   
  })*/
  
  return  fetch(
      `${urlApi}/${apiMode}.json?key=${API_KEY}&q=${query}&days=7&aqi=${airTop}&alerts=${alerts}`
    )
      .then((res) => res.json())
      .then((data) => data)

    /* const data = await(fetch(``)
    .then(res=>res.json())
    .then(data=>data)
    )*/
};
