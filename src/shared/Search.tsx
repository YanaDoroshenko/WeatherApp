import { FC, useCallback, useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { useFetchData } from "../hooks/useFetchData";
import {options} from "../api.config";
import { ForecastsInterface } from "../types";

export type HTMLInputEvent = { target: { value: string; name: string } };

interface PropsInterface {
}

export const Search: FC<PropsInterface> = () => {
  const { value, setValue, weather, setWeather } = useContext(MainContext)!;
  const getData = useFetchData(
    `https://yahoo-weather5.p.rapidapi.com/weather?location=${value}&format=json&u=c`,
    options,
    false
  ) as () => Promise<any>;

  const onBtnClick = () => {
    getData().then((data) => setWeather(data));
  };

  return (
    
    <div className="search-section">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Enter city"
        className="search-input"
      />
      <button onClick={() => onBtnClick()} className="search-btn">Search</button>
    </div>
  );
};
