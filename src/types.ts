export interface WeatherInterface {
  location: LocationInterface,
  current_observation: Current_observationInterface,
  forecasts: ForecastsInterface[],
}

export interface LocationInterface {
  city: string;
  woeid: number;
  country: string;
  timezone_id: string;
}

export interface Current_observationInterface {
  pubDate: number;
  wind: WindInterface;
  condition: ConditionInterface;
}
export interface WindInterface {
  chill: number;
  direction: string;
  speed: number;
}

export interface ConditionInterface {
  temperature: number;
  text: string;
  code: number;
}

export interface ForecastsInterface{
  day: string,
  date: number,
  high: number,
  low: number,
  text: string
}