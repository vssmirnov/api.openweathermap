using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.openweathermap.Controllers
{
    [Route("api/[controller]")]
    public class CurrentWeatherDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public WeatherForecast Weather()
        {
            var rng = new Random();
            return new WeatherForecast
            {
                DateFormatted = DateTime.Now.ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            };
        }        
    }
}
