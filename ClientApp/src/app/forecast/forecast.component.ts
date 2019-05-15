import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../search/search.service';
import { Search } from '../search/search.model';
import { ForecastService } from './forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html'
})
export class ForecastComponent {
  forecasts: WeatherForecast[];
  search: Search;
  
  constructor(private forecastService: ForecastService, private searchService: SearchService) {    
    this.searchService.display(true);
    this.searchService.search.subscribe(search => {
      this.search = search;
      this.forecastService.getData().subscribe(forecasts => this.forecasts = forecasts);
    })   
  }
}