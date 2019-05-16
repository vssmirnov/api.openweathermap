import { Component, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../search/search.service';
import { Search } from '../models/search.model';
import { ForecastService } from './forecast.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html'
})
export class ForecastComponent implements OnDestroy {  
  forecastData: ForecastData = { forecast: new Array()};
  subscribtion: Subscription;
  search: Search;
  errorCity: string; 
  
  private observer = {
    next: (data) => { 
      this.search.loading = false; 
      this.forecastData = data; 
      this.search.loaded = true;
    },
    error: err => { 
      this.errorCity = this.search.city; 
      this.search.loading = false; 
      this.search.isErrorLoading = true;
    },
  };
  
  constructor(private forecastService: ForecastService, private searchService: SearchService) {    
    this.searchService.display(true);
    this.search = searchService.getCurrentSearch();
    this.subscribtion = this.forecastService.getData(this.search.city).subscribe(this.observer);
    this.searchService.search.subscribe(search => {
      this.search = search;
      this.subscribtion.unsubscribe();
      this.subscribtion = this.forecastService.getData(this.search.city).subscribe(this.observer);
    });   
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}