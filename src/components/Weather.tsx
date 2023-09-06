import React, { useContext, useMemo } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { useFetchData } from "../hooks/useFetchData";
import { Search } from "../shared/Search";

const KEY = `60bccb4af4msh3790ecd251448bbp1d8c45jsna5ea09e71213`;

export const Weather = ({ }) => {
  const options = useMemo(() => ({
    method: "GET",
    headers: {
      "X-RapidAPI-Key": KEY,
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
    },
  }), []);

  const result = useFetchData(
    "https://rapidapi.com/apishub/api/yahoo-weather5/",
    options
  )

  // const {weatherData, weatherSearchResult} = useContext(SearchContext)

  return <div>
    <Search/>
  </div>;
};
