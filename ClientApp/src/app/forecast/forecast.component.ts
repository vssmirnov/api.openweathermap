import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../search/search.service';
import { Search } from '../search/search.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html'
})
export class ForecastComponent {
  public forecasts: WeatherForecast[];
  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private searchService: SearchService) {
    this.searchService.display(true);
    http.get<WeatherForecast[]>(baseUrl + 'api/ForecastWeatherData/WeatherForecasts?city=Izhevsk').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}