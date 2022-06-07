import React from "react";
import NavBar from "../../components/navBar/NavBar";
import GeneralData from "../../components/generalData/GeneralData";
import BarData from "../../components/barData/BarData";
import Temperature from "../../components/temperature/Temperature";
import { HeddCtx } from "../../context/hiddenCtx";
import GetLocationForm from "../../components/getLocationForm/GetLocationForm";
import { CitySelect } from "../../context/citySelectCtx";

const ClimateCore = () => {
  return (
    <div style={{ height: "100vh" }} className="climateCore">
      <div  style={{ maxWidth: "500px" }}>
        <HeddCtx>
          <CitySelect>
            <NavBar />
            <GeneralData />
            <BarData />
            <Temperature />
            <GetLocationForm />
          </CitySelect>
        </HeddCtx>
      </div>
    </div>
  );
};

export default ClimateCore;
