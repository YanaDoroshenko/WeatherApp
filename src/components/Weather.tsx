import React, { useContext, useMemo } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { Search } from "../shared/Search";
import { WeatherCard } from "./WeatherCard";
import { MainContext } from "../contexts/MainContext";
import { Forecasts } from "./Forecasts";



export const Weather = () => {
  const { weather} = useContext(MainContext)!;

  // console.log(weatherSearchResult);

  return <div className="wrapper">
    <Search/>
    <div className="weather-info">
    <WeatherCard weather={weather}/>
    <Forecasts/>
    </div>
  </div>;
};
