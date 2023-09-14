import React, { useContext } from 'react'
import { MainContext } from '../contexts/MainContext'
import { ForecastsInterface, WeatherInterface } from '../types';
import { WeatherCard } from './WeatherCard';
import { ForecastsCard } from './ForecastsCard';

export const Forecasts = () => {

    const {weather, setWeather, value} = useContext(MainContext)!;

    console.log(weather?.forecasts)

  return (
    <div className='forecasts-section'>
        {weather && weather.forecasts.slice(0, 7).map((forecast) => (
            <ForecastsCard forecastItem={forecast}/>
        ))}
        <div>
        </div>
    </div>
  )
}
