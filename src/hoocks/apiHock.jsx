import Recat, { useState, useEffect, useContext } from 'react'
import { API } from '../utility/API';
import CitySelectCtx from '../context/citySelectCtx';

const apiHock =()=>{

    const [dataApi, setdataApi] = useState()

    const { selectCitys, setselectCitys } = useContext(CitySelectCtx)

    let data;
  useEffect(async()=>{
    if (selectCitys){
        localStorage.removeItem('data')
      
    }
    data = JSON.parse(localStorage.getItem('data')) || await API({selectCitys});
    console.log(data);
    
    if (!localStorage.getItem('data') && !data.error) {
      
      localStorage.setItem('data',JSON.stringify(data))
    }
    setdataApi(()=>data)

  },[selectCitys])

  return {dataApi}
}

export default apiHock;