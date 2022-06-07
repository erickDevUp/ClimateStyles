import React, { useState, useEffect } from "react";
import { API } from "../../utility/API";
import apiHock from "../../hoocks/apiHock";

import humidity from '../../assest/icons/humidity.svg'
import precip_mm from '../../assest/icons/mm.svg'
import feelslike_c from '../../assest/icons/temp.svg'
import wind_kph  from '../../assest/icons/wind.svg'

const BarData = () => {
  const [loading, setloading] = useState(true);
  const {dataApi} = apiHock();

  useEffect(()=>{
    setloading(false)
  },[dataApi])


  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <nav className="BarData">
      {dataApi&&<ul className="containerBarData">
        <li>
          <img src={humidity} alt="" />
          <h6>{dataApi.current.humidity}<span className='barDataNote'>%</span></h6>
        </li>
        <li>
          <img src={precip_mm} alt="" style={{marginRight:'3px'}}/>
          <h6>{dataApi.current.precip_mm}<span className='barDataNote'>mm</span></h6>
        </li>
        <li>
          <img src={feelslike_c} alt=""  />
          <h6>{dataApi.current.feelslike_c}<span>°</span></h6>
        </li>
        <li>
          <img src={wind_kph} alt="" style={{marginRight:'3px'}}/>
          <h6>{dataApi.current.wind_kph}<span className='barDataNote'>km</span></h6>
        </li>

      </ul>}
    </nav>
  );
};
export default BarData;
