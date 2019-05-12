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

        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly OpenWeatherMapClient client;

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var forecasts = client.Forecast.GetByName("Izhevsk");
            forecasts.Wait();
            if (forecasts.IsCompletedSuccessfully)            
                return forecasts.Result.Forecast.Select(forecastTime => new WeatherForecast
                {
                    DateFormatted = forecastTime.Day.ToString("d"),
                    TemperatureC = forecastTime.Temperature.Value,
                    Summary = string.Empty
                });

            throw forecasts.Exception;
        }
    }
}
