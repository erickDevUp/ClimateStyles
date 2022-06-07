import React from "react";

const APICity =async({stateSelect,API_AUTH})=>{

    const Citys = await fetch(
        "https://www.universal-tutorial.com/api/states/" + stateSelect,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer "+API_AUTH,
            Accept: "application/json",
          },
        }
      );
      const dataCitys = await Citys.json();

      return {dataCitys}
}

export default APICity