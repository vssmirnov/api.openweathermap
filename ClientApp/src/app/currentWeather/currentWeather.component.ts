import { Component } from '@angular/core';
import { SearchService } from '../search/search.service';
import { CurrentWeatherService } from './currentWeather.service';
import { Search } from '../search/search.model';

@Component({
    selector: 'app-current-weather',
    moduleId: module.id,
    templateUrl: 'currentWeather.component.html'
})
export class CurrentWeatherComponent {
    currentWeather: CurrentWeather;
    search: Search;

    constructor(private currentWeatherService: CurrentWeatherService, private searchService: SearchService) {
        this.searchService.display(true);
        this.currentWeatherService.getData().subscribe(weather => this.currentWeather = weather)
        this.searchService.search.subscribe(search => {  
            this.search = search;
           // this.currentWeatherService.getData().subscribe(weather => this.currentWeather = weather);
        })        
    }
}