function YahhoWeatherApi(city) {
    const KEY = "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326";
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": KEY,
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    };
  
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => console.log(data, "YahhoWeatherApi"))
      .catch((err) => console.error(err, "Error with YahhoWeatherApi"));
  }
  
  YahhoWeatherApi("Kyiv");