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
        public Weather CurrentWeather(string city)
        {
            try
            {
                var currentWeather = client.CurrentWeather.GetByName(cityName: city);
                currentWeather.Wait();
                if (currentWeather.IsCompletedSuccessfully)                    
                    return new Weather
                    {
                        City = currentWeather.Result.City.Name,
                        TemperatureC = currentWeather.Result.Temperature.Value,
                    };
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return new Weather();
        }        
    }
}
