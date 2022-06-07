import React, { useContext, useMemo, useEffect, useState } from "react";
import { useRef } from "react";
import HiddenCtx from "../../context/hiddenCtx";
import dataCountrys from "../../utility/goodLocationAPI/dataCountrys.json";
import statesAPI from "../../utility/goodLocationAPI/statesAPI";
import citysAPI from "../../utility/goodLocationAPI/citysAPI";
import CitySelectCtx from "../../context/citySelectCtx";

// import APICountries from "../../utility/apiLocation/APICountries";
// import APIStates from "../../utility/apiLocation/APIStates";
// import APICity from "../../utility/apiLocation/APICity";
// import APILocation from "../../utility/apiLocation/APILocation";

const GetLocationForm = () => {
  const { hidden, setHidden } = useContext(HiddenCtx);
  //const [API_KEY, setAPI_KEY] = useState();

  // const [countries, setCountries] = useState();
  const [states, setStates] = useState();
  const [citys, setCitys] = useState();

  const [selectCountries, setselectCountries] = useState();
  const [selectStates, setselectStates] = useState("");
  const [selectCountriesName, setselectCountriesName] = useState();
  const [selectStatesName, setselectStatesName] = useState("");
  const [selCity, setSelCity] = useState("");
  const { selectCitys, setselectCitys } = useContext(CitySelectCtx);

  useEffect(async () => {
    if (selectCountries) {
      const { statesDB } = await statesAPI({ selectCountries });
      setStates(statesDB);
    }
  }, [selectCountries]);

  useEffect(async () => {
    if (selectStates) {
      const { citysDB } = await citysAPI({ selectStates });
      setCitys(citysDB);
    }
  }, [selectStates]);

  const handleSelect = (e, state) => {
    state(e.target.value);
  };
  const handleName = (e, state) => {
    state(e.target.textContent);
  };
  const cancelLocation = (e) => {
    e.preventDefault();
    setHidden(false);
  };
  const aceptLocation = (e) => {
    e.preventDefault();
    setselectCitys(selectCountriesName?
      selectCountriesName + " " + selectStatesName + " " + selCity:''
    );
    setHidden(false);
  };

  if (!hidden) {
    return <></>;
  }

  return (
    <div className="modalGetLocation">
      <div className="GetLocationForm">
        <h3>Select Location</h3>

        <select
          className="locationSelect"
          name="countries"
          id=""
          onChange={(e) => handleSelect(e, setselectCountries)}
        >
          <option hidden defaultValue>
            Country
          </option>
          {dataCountrys &&
            dataCountrys.map((country) => (
              <option
                value={country.id}
                onClick={(e) => handleName(e, setselectCountriesName)}
              >
                {country.name}
              </option>
            ))}
        </select>

        <select
          className="locationSelect"
          name="states"
          id=""
          onChange={(e) => handleSelect(e, setselectStates)}
        >
          <option hidden selected>
            State
          </option>
          {states &&
            states.map((state) => (
              <option
                value={state.id}
                onClick={(e) => handleName(e, setselectStatesName)}
              >
                {state.name}
              </option>
            ))}
        </select>

        <select
          className="locationSelect"
          name="citys"
          id=""
          onChange={(e) => handleSelect(e, setSelCity)}
        >
          <option hidden selected>
            City
          </option>
          {citys &&
            citys.map((city) => <option value={city.name}>{city.name}</option>)}
        </select>
        <div className="buttonContent">
          <button
            onClick={(e) => {
              aceptLocation(e);
            }}
          >
            Done
          </button>
          <button
            onClick={(e) => {
              cancelLocation(e);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default GetLocationForm;
