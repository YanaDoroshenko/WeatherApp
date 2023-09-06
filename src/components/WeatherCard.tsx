import React, { FC, useMemo } from 'react'
import { WeatherInterface } from '../types';

interface PropsInterface {
    weather: WeatherInterface;
}

export const WeatherCard: FC<PropsInterface> = () => {

    const options = useMemo(() => ({method: "GET"}), []);

    const {location.city, condition.temperature, condition.text} = weather;


  return (
    <div>WeatherCard</div>
  )
}
