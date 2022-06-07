import React, { useState } from "react";
import Countrys from "./dataCountrys.json";

const statesAPI = async ({ selectCountries }) => {
    console.log(selectCountries);
    
  const res = await fetch(
    `https://api.geosearch.dev/get/states/by_country_id/${selectCountries}`
  );
  const statesDB = await res.json();
  return { statesDB };
};

export default statesAPI;
