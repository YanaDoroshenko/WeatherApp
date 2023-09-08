import React, { useContext } from 'react'
import { MainContext } from '../contexts/MainContext'
import { ForecastsInterface, WeatherInterface } from '../types';
import { WeatherCard } from './WeatherCard';

export const Forecasts = () => {

    const {weather, setWeather, value} = useContext(MainContext)!;

    console.log(weather?.forecasts)

  return (
    <div className='forecasts-section'>
        {[weather!.forecasts].map((forecasts) => (
            <WeatherCard forecasts={forecasts} weather={null}/>
        ))}
        <div>
        </div>
    </div>
  )
}
