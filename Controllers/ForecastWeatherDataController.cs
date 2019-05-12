using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using OpenWeatherMap;

namespace api.openweathermap.Controllers
{
    [Route("api/[controller]")]
    public class ForecastWeatherDataController : Controller
    {
        public ForecastWeatherDataController(OpenWeatherMapClient client)
        {
            this.client = client;
        }

        private readonly OpenWeatherMapClient client;

        [HttpGet("[action]")]
        public IEnumerable<Weather> WeatherForecasts(string city)
        {
            try{
                var forecasts = client.Forecast.GetByName(cityName: city, count: 10);
                forecasts.Wait();
                if (forecasts.IsCompletedSuccessfully)
                    return forecasts.Result.Forecast.Select(forecastTime => new Weather
                    {
                        DateFormatted = forecastTime.To.ToString(),
                        TemperatureC = forecastTime.Temperature.Value,
                        Summary = forecastTime.Symbol.Name
                    });
            } catch(Exception ex){
                Console.WriteLine(ex.Message);
            }
            return new List<Weather>();            
        }
    }
}
