import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import { useFetchData } from "../hooks/useFetchData";
import { WeatherInterface } from "../types";

interface SearchContextInterface {
  dataWeather: WeatherInterface[];

  value: string;
  setValue: Dispatch<string>;

  weatherSearchResult: WeatherInterface[];
}

export const SearchContext = createContext<SearchContextInterface | null>(null);

export const SearchContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState<string>("");

  const { data: weather } = useFetchData<WeatherInterface[]>(
    `https://yahoo-weather5.p.rapidapi.com/weather?location=${value}=json&u=f`
  );

  const weatherSearchResult = weather
    ? weather?.filter((weather) => weather.location.city.includes(value))
    : [];

  return (
    <SearchContext.Provider
      value={{
        value,
        setValue,
        dataWeather: weather || [],
        weatherSearchResult,
      }}
    >
        {children}
    </SearchContext.Provider>
  );
};
