import React, { FC, useMemo } from 'react'
import { ForecastsInterface, LocationInterface, WeatherInterface } from '../types';
import { useFetchData } from '../hooks/useFetchData';

interface PropsInterface {
    weather: WeatherInterface | null;
}

export const WeatherCard: FC<PropsInterface> = ({weather}) => {

    const options = useMemo(() => ({method: "GET"}), []);

// console.log(weather, "!!!!")
  if(!weather) return null;

  return (
    <div className='weather-card'>
      <h2>{weather.location.city}</h2>
      <h4>Temperature: {weather.current_observation.condition.temperature}</h4>      
      <h4>Wind speed: {weather.current_observation.wind.speed} m/s</h4>      
      <h4>Wind direction: {weather.current_observation.wind.direction}</h4>      
      <h4>{weather.current_observation.condition.text}</h4>      

    </div>
  )
}
