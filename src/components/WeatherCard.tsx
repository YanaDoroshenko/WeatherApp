import React, { FC, useMemo } from 'react'
import { ForecastsInterface, LocationInterface, WeatherInterface } from '../types';
import { useFetchData } from '../hooks/useFetchData';

interface PropsInterface {
    weather: WeatherInterface | null;
    forecasts: ForecastsInterface[];
}

export const WeatherCard: FC<PropsInterface> = ({weather, forecasts}) => {

    const options = useMemo(() => ({method: "GET"}), []);

    // const {location, condition} = weather;
// console.log(weather, "!!!!")
  if(!weather) return null;

  return (
    <div className='weather-card'>
      <h2>{weather.location.city}</h2>
      <h4>{weather.current_observation.condition.temperature}</h4>      
      <h4>{weather.current_observation.condition.text}</h4>      

    </div>
  )
}
