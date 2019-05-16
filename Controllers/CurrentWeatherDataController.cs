using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OpenWeatherMap;

namespace api.openweathermap.Controllers
{
    [Route("api/[controller]")]
    public class CurrentWeatherDataController : Controller
    {
        private readonly OpenWeatherMapClient client;

        public CurrentWeatherDataController(OpenWeatherMapClient client)
        {
            this.client = client;
        }

        [HttpGet("[action]")]
        public Task<CurrentWeatherResponse> CurrentWeather(string city)
        {
            return client.CurrentWeather.GetByName(cityName: city);
        }        
    }
}
