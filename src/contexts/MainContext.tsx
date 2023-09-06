import { Dispatch, FC, PropsWithChildren, useState, createContext } from "react";
import { WeatherInterface } from "../types";

interface MainContextInterface {
  weather: WeatherInterface | null;
  setWeather: Dispatch<WeatherInterface | null>;
}

export const MainContext = createContext<MainContextInterface | null>(null);

export const MainContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [weather, setWeather] = useState<WeatherInterface | null>(null);
  return (
    <MainContext.Provider value={{ weather, setWeather }}>
      {children}
    </MainContext.Provider>
  );
};
