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
        public Task<ForecastResponse> WeatherForecasts(string city)
        {
            return client.Forecast.GetByName(cityName: city, count: 10);
        }
    }
}
