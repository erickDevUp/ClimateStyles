import React from "react";
import APICity from "./APICity";

const APIStates =async({countriSelect,API_AUTH})=>{
  const States = await fetch(
    "https://www.universal-tutorial.com/api/states/" + countriSelect,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer "+API_AUTH,
        Accept: "application/json",
      },
    }
  );
  const dataStates = await States.json();

  return {dataStates}
}

export default APIStates