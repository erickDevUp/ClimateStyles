import locationIcon from '../../assest/icons/location.svg'
import React, { useState, useContext } from "react";
import GetLocationForm from '../getLocationForm/GetLocationForm';
import HiddenCtx from '../../context/hiddenCtx';

const NavBar = () => {

  const {hidden, setHidden} = useContext(HiddenCtx)
  
  return <nav className="navBar">
    <img src={locationIcon} alt="" onClick={()=>setHidden(!hidden)}/>
  </nav>
};
export default NavBar;
