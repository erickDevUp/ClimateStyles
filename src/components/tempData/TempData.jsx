import React, { useState, useEffect } from "react";

const TempData = ({temp, imgClimate,date}) => {
  const [dateApi, setdateApi] = useState()
  
  useEffect(() => {
    const dateArr = date.split('-')
    setdateApi(()=>
      dateArr[1]+'/'+dateArr[2]
    )
  }, [date])

  return (
    <div className="tempData">
      {dateApi && <h4>{dateApi}</h4>}
      <img src={imgClimate} alt="sun" />
      <h3>{temp}°</h3>
    </div>
  );
};

export default TempData;