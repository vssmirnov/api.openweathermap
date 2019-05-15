import { Component, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../search/search.service';
import { Search } from '../search/search.model';
import { ForecastService } from './forecast.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html'
})
export class ForecastComponent implements OnDestroy {  
  forecasts: WeatherForecast[];
  subscribtion: Subscription;
  search: Search;
  
  constructor(private forecastService: ForecastService, private searchService: SearchService) {    
    this.searchService.display(true);
    this.search = searchService.getCurrentSearch();
    this.subscribtion = this.forecastService.getData(this.search.city).subscribe(forecasts => this.forecasts = forecasts)
    this.searchService.search.subscribe(search => {
      this.search = search;
      this.subscribtion.unsubscribe();
      this.subscribtion = this.forecastService.getData(this.search.city).subscribe(forecasts => this.forecasts = forecasts);
    })   
  }
  
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}