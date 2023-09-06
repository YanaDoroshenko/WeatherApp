export interface WeatherInterface {
  location: LocationInterface,
  current_observation: Current_observationInterface,
  condition: ConditionInterface
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
// {
//     "location": {
//       "city": "London",
//       "woeid": 44418,
//       "country": "United Kingdom",
//       "lat": 51.506401,
//       "long": -0.12721,
//       "timezone_id": "Europe/London"
//     },
//     "current_observation": {
//       "pubDate": 1693935615,
//       "wind": {
//         "chill": 78,
//         "direction": "ESE",
//         "speed": 11
//       },
//       "atmosphere": {
//         "humidity": 48,
//         "visibility": 34.98,
//         "pressure": 1016.3
//       },
//       "astronomy": {
//         "sunrise": "6:19 AM",
//         "sunset": "7:39 PM"
//       },
//       "condition": {
//         "temperature": 81,
//         "text": "Sunny",
//         "code": 32
//       }
//     },
//     "forecasts": [
//       {
//         "day": "Tue",
//         "date": 1693929600,
//         "high": 84,
//         "low": 63,
//         "text": "Sunny",
//         "code": 32
//       },
//       {
//         "day": "Wed",
//         "date": 1694016000,
//         "high": 89,
//         "low": 66,
//         "text": "Partly Cloudy",
//         "code": 30
//       },
//       {
//         "day": "Thu",
//         "date": 1694102400,
//         "high": 89,
//         "low": 63,
//         "text": "Mostly Sunny",
//         "code": 34
//       },
//       {
//         "day": "Fri",
//         "date": 1694188800,
//         "high": 86,
//         "low": 64,
//         "text": "Partly Cloudy",
//         "code": 30
//       },
//       {
//         "day": "Sat",
//         "date": 1694275200,
//         "high": 85,
//         "low": 64,
//         "text": "Partly Cloudy",
//         "code": 30
//       },
//       {
//         "day": "Sun",
//         "date": 1694361600,
//         "high": 84,
//         "low": 64,
//         "text": "Partly Cloudy",
//         "code": 30
//       },
//       {
//         "day": "Mon",
//         "date": 1694448000,
//         "high": 81,
//         "low": 62,
//         "text": "Partly Cloudy",
//         "code": 30
//       },
//       {
//         "day": "Tue",
//         "date": 1694534400,
//         "high": 71,
//         "low": 52,
//         "text": "Showers",
//         "code": 11
//       },
//       {
//         "day": "Wed",
//         "date": 1694620800,
//         "high": 69,
//         "low": 50,
//         "text": "Showers",
//         "code": 11
//       },
//       {
//         "day": "Thu",
//         "date": 1694707200,
//         "high": 68,
//         "low": 51,
//         "text": "Showers",
//         "code": 11
//       },
//       {
//         "day": "Fri",
//         "date": 1694793600,
//         "high": 64,
//         "low": 50,
//         "text": "Partly Cloudy",
//         "code": 30
//       }
//     ]
//   }
