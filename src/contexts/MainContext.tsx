import { Dispatch, FC, PropsWithChildren, useState, createContext } from "react";
import { ForecastsInterface, WeatherInterface } from "../types";

interface MainContextInterface {
  weather: WeatherInterface | null;
  setWeather: Dispatch<WeatherInterface | null>;

  value: string;
  setValue: Dispatch<string>;
}

export const MainContext = createContext<MainContextInterface | null>(null);

export const MainContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [weather, setWeather] = useState<WeatherInterface | null>(null);
  const [value, setValue] = useState<string>("");
  return (
    <MainContext.Provider value={{ weather, setWeather, value, setValue }}>
      {children}
    </MainContext.Provider>
  );
};
