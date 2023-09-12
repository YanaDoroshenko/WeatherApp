import React, { FC } from 'react'
import { ForecastsInterface } from '../types';


interface PropsInterface {
    forecastItem: ForecastsInterface;
};

export const ForecastsCard: FC<PropsInterface> = ({forecastItem}) => {
    const {date, text} = forecastItem;

    const newDate = new Date(date);

    const day = newDate.getDate();

    const month = newDate.getMonth()+1;

    const year = newDate.getUTCFullYear();

  return (
    <div>
        <h5>{day}.{month}.{year}</h5>
        <p>{text}</p>
    </div>
  )
}
