import React from "react";
import APIStates from "./APIStates";
import APILocation from "./APILocation";

const APICountries =async({API_AUTH})=>{

    const Countries = await fetch(
        "https://www.universal-tutorial.com/api/countries/",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer "+API_AUTH,
            Accept: "application/json",
          },
        }
      );
      const dataCountries = await Countries.json();
      
        
      return {dataCountries}
}

export default APICountries