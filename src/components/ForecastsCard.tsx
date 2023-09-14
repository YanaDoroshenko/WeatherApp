import React, { FC } from 'react'
import { ForecastsInterface } from '../types';


interface PropsInterface {
    forecastItem: ForecastsInterface;
};

export const ForecastsCard: FC<PropsInterface> = ({forecastItem}) => {
    const {day, text, high, low} = forecastItem;

    // const newDate = new Date(date);

    // const day = newDate.getDate();

    // const month = newDate.getMonth()+1;

    // const year = newDate.getUTCFullYear();

  return (
        <div className='forecast-div'>
        <h5>{day}</h5>
        {/* <h5>{day}.{month}.{year}</h5> */}
        <span>max: {high}</span>
        <span>min: {low}</span>
        <p>{text}</p>
        </div>
  )
}
