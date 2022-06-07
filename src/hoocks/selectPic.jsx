import Recat, { useState, useEffect } from "react";
import apiHock from "./apiHock";
import pic1 from "../assest/1.png";
import pic2 from "../assest/2.png";
import pic3 from "../assest/3.png";
import pic4 from "../assest/4.png";
import pic5 from "../assest/5.png";
import pic6 from "../assest/6.png";
const pics = [pic1, pic2, pic3, pic4, pic5, pic6];
const code = [
  [1000],
  [1003, 1006, 1009, 1030, 1135, 1147],
  [
    1063,
    1069,
    1072,
    1150,
    1153,
    1168,
    1171,
    1180,
    1183,
    1186,
    1189,
    1192,
    1195,
    1198,
    1201,
    1204,
    1207,
    1240,
    1243,
    1246,
    1249,
    1249,
  ],
  [
    1066,
    1114,
    1117,
    1210,
    1213,
    1216,
    1219,
    1222,
    1225,
    1237,
    1252,
    1255,
    1258,
    1261,
    1264,
  ],
  [1282],
  [1087, 1273, 1276, 1279],
];

const selectPic = () => {
  const [pic, setpic] = useState();
  const [futurePic, setFuturePic] = useState();
  const { dataApi } = apiHock();

  useEffect(() => {
    // menudo dolor de huevos
    //selecciona una img en dependencia de codigo
    if (dataApi) {
      setpic(
        code
          .map((codigo, i) => {
            return codigo.some((cod) => cod == dataApi.current.condition.code)
              ? pics[i]
              : "";
          })
          .filter((codi, i) => codi == pics[i])
      );
      //selecciona las img de clima futuro[] en dependencia de codigo
      setFuturePic(
        dataApi.forecast.forecastday
          .map((futureClimate) => {
            return code.map((codigo, i) => {
              return codigo.some(
                (cod) => cod == futureClimate.day.condition.code
              )
                ? pics[i]
                : "";
            });
          })
          .map((code) => code.filter((codex) => codex != ""))
      );
    }
  }, [dataApi]);

  return { pic, futurePic };
};

export default selectPic;
