public class WeatherForecast
{
    public string DateFormatted { get; set; }
    public double TemperatureC { get; set; }
    public string Summary { get; set; }

    public int TemperatureF
    {
        get
        {
            return 32 + (int)(TemperatureC / 0.5556);
        }
    }
}