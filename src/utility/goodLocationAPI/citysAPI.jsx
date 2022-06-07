import React, { useState } from "react";

const citysAPI = async ({ selectStates }) => {
  const res = await fetch(
    `https://api.geosearch.dev/get/cities/by_state_id/${selectStates}`
  );
  const citysDB = await res.json();
  return { citysDB };
};

export default citysAPI;
