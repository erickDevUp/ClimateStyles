import React from "react";

const API_KEY =
  "QIissxOonvvmpcufN-VHvfF8xNWkg5c_I0BvGYFQ0csq96iRal199CGrYjBibONfFG0";
let API_AUTH;

const APILocation = async () => {
  const res = await fetch(
    "https://www.universal-tutorial.com/api/getaccesstoken",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-token": API_KEY,
        "user-email": "erickgarciap779@gmail.com",
      },
    }
  );
  const data = await res.json();
  API_AUTH = data.auth_token;

  return {API_AUTH}


};
export default APILocation;
