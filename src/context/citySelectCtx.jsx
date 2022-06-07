import React, { useState, useEffect } from "react";
const CitySelectCtx = React.createContext({});

export const CitySelect = ({ children }) => {
  const [selectCitys, setselectCitys] = useState(localStorage.getItem("city") || "");
  
  useEffect(() => {
    if (selectCitys && selectCitys != '') {
        localStorage.setItem("city",selectCitys);
    }
  }, [selectCitys])

  return (
    <CitySelectCtx.Provider value={{ selectCitys, setselectCitys }}>
      {children}
    </CitySelectCtx.Provider>
  );
};

export default CitySelectCtx;
